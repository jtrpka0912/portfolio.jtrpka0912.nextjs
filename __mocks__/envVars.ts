/**
 * @constant { NodeJS.ProcessEnv } oldEnv
 * @description The original environment variables before mocked.
 * @author J. Trpka
 * @see https://stackoverflow.com/a/48042799/4008500
 */
export const oldEnv: NodeJS.ProcessEnv = process.env;