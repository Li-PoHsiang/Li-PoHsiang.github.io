# China Album System

This update replaces the former Showcase structure with a province-level China album system.

## Main files

- `_data/china_albums.yml`: album data for all 34 provincial-level regions, including Taiwan, Hong Kong, and Macao.
- `china.html`: China atlas index page with search and filters.
- `china-album.html`: reusable album detail page.
- `assets/css/china.css`: China page styles only.
- `assets/js/china.js`: China page search, filtering, lightbox, and AI prompt helper.

## Image paths

Current explored albums use:

- `assets/images/showcase/Youmadi.jpg`
- `assets/images/showcase/Taipingshan.jpg`
- `assets/images/showcase/Miaojie.jpg`
- `assets/images/showcase/QingxiuShan.jpg`

To add photos to a province, edit `_data/china_albums.yml`, set `cover`, and add items under `photos`.

## AI description helper

GitHub Pages is static and cannot securely call an AI API directly. The button in each photo lightbox copies a tailored AI prompt and opens ChatGPT. This keeps the website static, safe, and easy to deploy.
