source "https://rubygems.org"

# Jekyll version used by this academic homepage template
gem "jekyll", "~> 3.9"

# Plugin used in _config.yml
group :jekyll_plugins do
  gem "jekyll-email-protect"
end

# Markdown parser used by Jekyll
gem "kramdown-parser-gfm"

# Required by Jekyll on newer Ruby versions
gem "webrick", "~> 1.7"

# Ruby 3.4+/4.0 compatibility: some formerly default libraries must be explicit
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"

# Windows timezone data
gem "tzinfo-data", platforms: [:windows, :jruby]

# wdm is disabled because it fails to compile on Ruby 4.0
# gem "wdm", "~> 0.1.0" if Gem.win_platform?
