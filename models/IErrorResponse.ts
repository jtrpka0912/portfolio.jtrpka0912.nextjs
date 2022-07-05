/**
 * @interface IErrorResponse
 * @summary API Error Response
 * @author J. Trpka
 * @property { number } status
 * @property { string } title - Short title about the error
 * @property { string } message - Short message about the error (more likely what was thrown)
 */
export interface IErrorResponse {
  status: number;
  message: string;
}