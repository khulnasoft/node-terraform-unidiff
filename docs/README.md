## Usage

### CLI

```bash
npx @khulnasoft/terraform-unidiff /path/to/plan.json
```

### Library

#### Installation

```bash
npm install @khulnasoft/terraform-unidiff
```

#### API

```js
const unidiff = require('@khulnasoft/terraform-unidiff')

const plan = fs.readFileSync('path/to/plan.json')

const { summary, patches } = unidiff(plan)

console.log(patches) // array of changes in unidiff format
console.log(summary) // object with changes counts { create: 1, update: 3, delete: 0 }
```

## Plan JSON

to obtain a Terraform plan in JSON format, run the following command:

```bash
terraform plan -out terraform.plan && terraform show -json terraform.plan > terraform.json
```
