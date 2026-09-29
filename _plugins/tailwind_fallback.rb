# Keep a compiled stylesheet for GitHub Pages builds that skip custom plugins.
require "open3"

Jekyll::Hooks.register :site, :post_read do |site|
  next unless defined?(Jekyll::Converters::Tailwindcss)

  # The converter produces this path during normal local and Actions builds.
  site.static_files.reject! do |file|
    file.relative_path == "/assets/css/styles.css"
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  next unless defined?(Jekyll::Converters::Tailwindcss)

  # Always minify the committed fallback, including during local development.
  # Write only when it changes so a watched build settles without a loop.
  css, error, status = Open3.capture3(
    ::Tailwindcss::Ruby.executable,
    "--input", File.join(site.source, "_tailwind.css"),
    "--minify",
    :chdir => site.source
  )
  unless status.success? && !css.strip.empty?
    raise Jekyll::Errors::FatalException, "Failed to compile the fallback stylesheet: #{error}"
  end

  fallback = File.join(site.source, "assets/css/styles.css")
  File.binwrite(fallback, css) unless File.file?(fallback) && File.binread(fallback) == css
end
