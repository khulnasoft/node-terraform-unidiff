# Terraform Plan Unidiff

Generate a human readable diff of Terraform Plan changes, using [Unified format (`unidiff`)][]

[![license][license-img]][license-url]
[![release][release-img]][release-url]
[![semantic][semantic-img]][semantic-url]

## Usage

### CLI

``` bash
npx @khulnasoft/terraform-unidiff /path/to/plan.json
```

### Library

#### Installation

``` bash
npm install @khulnasoft/terraform-unidiff
```

#### API

``` js
const unidiff = require('@khulnasoft/terraform-unidiff')

const plan = fs.readFileSync('path/to/plan.json')

const { summary, patches } = unidiff(plan)

console.log(patches) // array of changes in unidiff format
console.log(summary) // object with changes counts { create: 1, update: 3, delete: 0 }
```

## Plan JSON

to obtain a Terraform plan in JSON format, run the following command:

``` bash
terraform plan -out terraform.plan && terraform show -json terraform.plan > terraform.json
```

  [Unified format (`unidiff`)]: https://en.wikipedia.org/wiki/Diff#Unified_format

----
> Author: [KhulnaSoft](https://www.khulnasoft.com/) &bull;
> Twitter: [@KhulnaSoft](https://twitter.com/KhulnaSoft)

[license-url]: LICENSE
[license-img]: https://badgen.net/github/license/khulnasoft/node-terraform-unidiff

[release-url]: https://github.com/khulnasoft/node-terraform-unidiff/releases
[release-img]: https://badgen.net/github/release/khulnasoft/node-terraform-unidiff

[semantic-url]: https://github.com/khulnasoft/node-terraform-unidiff/actions?query=workflow%3Arelease
[semantic-img]: https://badgen.net/badge/📦/semantically%20released/blue
