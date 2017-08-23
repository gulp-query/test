import cfg from './config.json';
import b from './c.js';

export let a = (v) => {
  let c = b(cfg.version);
  return [...v];
};