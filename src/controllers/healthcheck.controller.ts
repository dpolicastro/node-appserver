import {
  controller, httpGet, request, response, httpPost
} from 'inversify-express-utils';
import * as express from 'express';

@controller('/healthcheck')
export class HealthcheckController {

  constructor() { }
  private statusCode: number = 200;

  @httpGet("/")
  private async get(@request() req: express.Request, @response() res: express.Response) {
    try {
      return res.status(this.statusCode).json({ status: 'success' });

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  @httpPost("/")
  private async post(@request() req: express.Request, @response() res: express.Response) {
    try {

      this.statusCode = req.body.statusCode;
      return res.status(200).json({ status: 'success', message: 'Status code changed.' });

    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default HealthcheckController;
