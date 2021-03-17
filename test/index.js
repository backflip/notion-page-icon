import test from "ava";
import { getIcon } from "../api";

test("default color", async (t) => {
  const result = getIcon();
  const expected = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <rect width="280" height="280" transform="rotate(0,140,140) translate(0)" fill="#c30" />
    </svg>
  `;

  t.is(result, expected);
});

test("single color", async (t) => {
  const result = getIcon({ colors: ["blue"] });
  const expected = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <rect width="280" height="280" transform="rotate(0,140,140) translate(0)" fill="blue" />
    </svg>
  `;

  t.is(result, expected);
});

test("two colors", async (t) => {
  const result = getIcon({ colors: ["blue", "#c30"] });
  const expected = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <rect width="140" height="280" transform="rotate(0,140,140) translate(0)" fill="blue" />
    <rect width="140" height="280" transform="rotate(0,140,140) translate(140)" fill="#c30" />
    </svg>
  `;

  t.is(result, expected);
});

test("two colors rotated", async (t) => {
  const result = getIcon({ colors: ["red", "blue"], rotate: true });
  const expected = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280">
    <rect width="140" height="280" transform="rotate(90,140,140) translate(0)" fill="red" />
    <rect width="140" height="280" transform="rotate(90,140,140) translate(140)" fill="blue" />
    </svg>
  `;

  t.is(result, expected);
});
