import * as GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger()

export function slugify(text) {
  return slugger.slug(text);
}