# Removes posts tagged "test" from site.posts before rendering when
# site.include_test_posts is false (set in _config.yml).
#
# Effect: the filtered posts are not written to _site/, so their URLs
# truly 404 in production. Flipping the flag to true (or running with
# --config that overrides it) brings them back.

Jekyll::Hooks.register :site, :post_read do |site|
  next if site.config["include_test_posts"]

  site.posts.docs.reject! do |post|
    tags = Array(post.data["tags"])
    tags.any? { |t| t.to_s.downcase == "test" }
  end
end
