import { NextApiRequest, NextApiResponse } from "next";
import { retrieveProjectById, retrieveProjectBySlug } from "../../../api/contentful/projects";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  retrieveProjectBySlug('portfolio');
  // const response = await retrieveProjectById('4fVBG83m9kAGaQu2XNUEhl');
  // console.info(response);

  res.status(200).json({
    "hello-world": "foo-bar"
  });
}

export default handler;