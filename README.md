# www-docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/3788c3b0-fff2-4867-b389-62bd49c670dd/deploy-status)](https://app.netlify.com/sites/arcblock-docs/deploys)

## Live View

The same content will be deployed to the following domain:

- [https://docs.arcblock.io](https://docs.arcblock.io)
- [https://arcblock-docs.netlify.com](https://arcblock-docs.netlify.com)
- [https://docs.arcblockio.cn](https://docs.arcblockio.cn)

Documentation site for ArcBlock

## Usage

```shell
git clone git@github.com:ArcBlock/www-docs.git
cd www-docs
make init
make run
```

Then open `http://localhost:8000`

## Deployment

Currently, the content is automatically build and deployed to netlify, and accessible from `docs.arcblock.io` and `arcblock-docs.netlify.com`.

To get a better user experience for China developers, this repo need to be deployed manually to aliyun OSS, by running `make oss` in the aliyun ECS.
