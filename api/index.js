/**
 * @typedef { import("@vercel/node").VercelRequest } VercelRequest
 * @typedef { import("@vercel/node").VercelResponse } VercelResponse
 */

const SIZE = 280;
const DEFAULT_COLOR = "#c30";

/**
 * Generate SVG
 * @param {Object} options
 * @param {Array.<String>} options.colors List of colors
 * @param {Boolean} [options.rotate=false] Whether to rotate the SVG by 90 degrees
 * @returns {String}
 */
export function getIcon({ colors = [DEFAULT_COLOR], rotate = false } = {}) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">
    ${colors
      .map(
        (color, i) =>
          `<rect width="${
            SIZE / colors.length
          }" height="280" transform="rotate(${rotate ? 90 : 0},${SIZE / 2},${
            SIZE / 2
          }) translate(${(i * SIZE) / colors.length})" fill="${color}" />`
      )
      .join("\n    ")}
    </svg>
  `;
}

/**
 * @param {VercelRequest} req
 * @param {VercelResponse} res
 */
export default (req, res) => {
  const { colors, rotate } = req.query;
  const icon = getIcon({
    colors: Array.isArray(colors) || !colors ? colors : [colors],
    rotate: rotate === "true",
  });

  res.setHeader("Content-type", "image/svg+xml");

  res.status(200).send(icon);
};
