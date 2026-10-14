# ekremturanfirat.com

Plain HTML + CSS. No frameworks, no build step. Push to `main` and GitHub Pages publishes it.

## Structure

```
style.css                 ← the only stylesheet, shared by every page
index.html                ← home
cv/index.html
projects/index.html
repositories/index.html
blog/index.html           ← list of posts
blog/<PostName>/index.html
```

Every page has the same three parts: `<header class="site-header">` (top menu),
`<main class="container">` (the content) and `<footer class="site-footer">`.
To make a new page, copy an existing one and only change what is inside `<main>`.

In the top menu, mark the current page with `aria-current="page"`:

```html
<a href="/blog/" aria-current="page">Blog</a>
```

## Add a blog post

1. Create a folder, e.g. `blog/MyNewPost/`, and put an `index.html` in it with the
   template below. Change `<title>`, `<h1>`, the date, and write your text where it says so.
   Images go in the same folder.
2. In `blog/index.html`, delete the "No posts yet." line (first post only) and add the
   post to the top of the list:

```html
<article class="post-item">
    <span class="date">01.01.2027</span>
    <h2><a href="/blog/MyNewPost/">My New Post</a></h2>
    <p>One sentence about the post.</p>
</article>
```

Post template (`blog/MyNewPost/index.html`):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ekrem Turan Fırat - My New Post</title>
    <meta name="description" content="Ekrem Turan Fırat - Undergraduate Researcher">
    <meta name="author" content="Ekrem Turan Fırat">
    <meta property="og:image" content="https://ekremturanfirat.com/ekremturanfirat.com.png">
    <link rel="stylesheet" href="/style.css">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-S6B5DK2PH0"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-S6B5DK2PH0');
    </script>
</head>
<body>
    <header class="site-header">
        <div class="container">
            <a class="brand" href="/">Ekrem Turan Fırat</a>
            <nav>
                <a href="/cv/">CV</a>
                <a href="/projects/">Projects</a>
                <a href="/repositories/">Repositories</a>
                <a href="/blog/" aria-current="page">Blog</a>
            </nav>
        </div>
    </header>

    <main class="container">
        <article class="post">
            <header class="post-header">
                <a class="back" href="/blog/">← Blog</a>
                <h1>My New Post</h1>
                <p class="post-meta">01.01.2027</p>
            </header>

            <p>Write your post here.</p>

            <!-- Comments (giscus, stored in this repo's GitHub Discussions) -->
            <section class="comments">
                <script src="https://giscus.app/client.js"
                    data-repo="ekremturanfirat/ekremturanfirat.github.io"
                    data-repo-id="R_kgDOOVC6Fg"
                    data-category="General"
                    data-category-id="DIC_kwDOOVC6Fs4CrVzi"
                    data-mapping="pathname"
                    data-strict="1"
                    data-reactions-enabled="1"
                    data-emit-metadata="0"
                    data-input-position="top"
                    data-theme="preferred_color_scheme"
                    data-lang="tr"
                    crossorigin="anonymous"
                    async>
                </script>
            </section>
        </article>
    </main>

    <footer class="site-footer">
        <div class="container">
            <p>© Ekrem Turan Fırat</p>
            <p>
                <a href="mailto:me@ekremturanfirat.com">E-Mail</a> ·
                <a href="https://www.linkedin.com/in/ekremturanfirat/" target="_blank" rel="noopener noreferrer">LinkedIn</a> ·
                <a href="https://github.com/ekremturanfirat" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
        </div>
    </footer>
</body>
</html>
```

Useful things inside a post:

```html
<img src="photo.jpg" alt="what the photo shows">
<p class="caption">Photo source: ...</p>

<div class="media">                <!-- text next to an image -->
    <div><p>Text...</p></div>
    <img src="photo.jpg" alt="...">
</div>

<div class="table-wrap">           <!-- tables scroll sideways on phones -->
    <table>
        <thead><tr><th>Column</th><th>Column</th></tr></thead>
        <tbody><tr><td>Value</td><td>Value</td></tr></tbody>
    </table>
</div>
```

## Add a CV / project / repository item

Copy one `<div class="entry">` block and edit it:

```html
<div class="entry">
    <div class="entry-head">
        <h3>Title</h3>
        <span class="date">January 2027 – Ongoing</span>
    </div>
    <p class="entry-meta"><a href="https://...">Organization</a> · City</p>
    <p>Short description.</p>
</div>
```

Add `<span class="badge">Ongoing</span>` after a title for a small label.

## Change colors and fonts

The site is styled like an IEEE paper: a white sheet on a grey "desk".
All colors are at the top of `style.css` in `:root`. `--accent` is the link color,
`--desk` the background around the page. The font (STIX Two Text, a Times-like
serif) is loaded by the `@import` line at the top of `style.css`.

Section headings (`<h2>`) are numbered I., II., III. automatically.

## Preview locally

Pages use paths like `/style.css`, so open them through a small local server
instead of double-clicking the file:

```
python -m http.server 8000
```

Then visit http://localhost:8000
