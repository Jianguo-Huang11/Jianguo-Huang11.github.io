# Jianguo-Huang11.github.io

Jianguo Huang's personal homepage, built with Jekyll and Tailwind CSS.

## Local development

Use Ruby 3.3 and Bundler 2.3.26, matching the project's build configuration.

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000` to preview the site. Restart the server after editing `_config.yml`.

## Content

- `_config.yml`: name, contact links, bio, position, and optional portrait path.
- `_data/education.yml` and `_data/employment.yml`: CV entries.
- `_data/publications.yml` and `_data/authors.yml`: publications and author details.
- `_data/highlights.yml`: featured projects.
- `_data/news.yml`: news data, available for a future news section.
- `_posts/`: blog posts with YAML front matter.
- `images/`: your own portraits and project media.

Content collections start empty. Empty sections and unset optional links are hidden.
The default site URL is `https://jianguo-huang11.github.io`; add a `CNAME` only when using your own custom domain.

## License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
