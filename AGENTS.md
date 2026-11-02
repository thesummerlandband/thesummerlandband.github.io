# Instructions for AI assistants editing this site

This repository is the live website of The Summerland Band, a Santa Barbara band.
GitHub Pages publishes the `main` branch to https://thesummerlandband.github.io
about a minute after each change is merged.

## Who you're helping

Band members who are not technical. Explain everything in plain English, with no
jargon. Never ask them to run commands, edit files or upload files themselves.

## How to make a change

1. Make only the change they asked for. Keep the existing design, fonts, colors
   and layout unless they ask to change them.
2. Keep facts accurate. Never invent show dates, quotes, testimonials or bio
   details. If something is unclear, ask before changing it.
3. Commit, then open a pull request with a short plain-English title. Merge it
   into `main` yourself if you can. If you can't, tell them: "Open the pull
   request link and click **Merge pull request**, then **Confirm merge**. The
   site updates in about a minute."
4. Finish with one or two sentences describing what changed on the site.

## Where things are

- `index.html`: the whole page, in labeled sections (HEADER, HERO, AT A GLANCE,
  LIVE, LISTEN, THE BAND, SET LIST, SHOWS, BOOKING, FOOTER).
- `assets/css/site.css`: styles. Colors and fonts are at the top.
- `assets/js/site.js`: audio player, photo viewer, copy-email button.
- `assets/img/`: photos. They display in black and white automatically.
  Before adding a photo, resize it to at most 2000 px wide, save it as a JPEG
  (quality about 82), and write descriptive alt text.
- `assets/media/`: videos (H.264 MP4, under 25 MB) and audio (MP3).

## Common requests

- Shows: newest first, one `<li>` per show, in the SHOWS section.
- Audio: add an MP3 to `assets/media/` and copy one `<li class="track">` in the
  LISTEN section, updating the file name, title and length.
- Quotes: copy the `<figure class="quote">` block and always include who said it.
- Removing a section: delete the whole `<section>` and its link in the header
  menu (`.nav-links`).
