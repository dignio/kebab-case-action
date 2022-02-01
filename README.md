# Letter case action

<p align="center">
  <a href="https://github.com/dignio/letter-case-action/actions"><img alt="letter-case-action status" src="https://github.com/dignio/letter-case-action/actions/workflows/test.yml/badge.svg"></a>
</p>

This action transforms a string to kebab, camel and snake case strings. Information: [https://en.wikipedia.org/wiki/Letter_case#Special_case_styles](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles)

Under the hood we are using [Lodash](https://lodash.com/) to perform these actions.

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: dignio/letter-case-action@v1
id: letter_case
with:
  string: "feature/branch-1337"
```

Get the output

```yaml
- uses: ...
  run: |
    echo "kebab: ${{ steps.letter_case.outputs.kebab }}"
    echo "camel: ${{ steps.letter_case.outputs.camel }}"
    echo "snake: ${{ steps.letter_case.outputs.snake }}"
```

## Run the code locally

```bash
npm install

# This will show the complete output
INPUT_STRING=feature/branch-1337 node index.js
# OUT:

# Converting string to kebab, camel, and snake case
# ::set-output name=kebab::feature-branch-1337
# ::set-output name=camel::featureBranch1337
# ::set-output name=snake::feature_branch_1337

# For tests
npm test

# Testing the compiled script (https://github.com/vercel/ncc)
npm run build
INPUT_STRING=feature/branch-1337 node dist/index.js
```

## Package for distribution

GitHub Actions will run the entry point from the action.yml. Packaging assembles the code into one file that can be checked in to Git, enabling fast and reliable execution and preventing the need to check in node_modules.

Actions are run from GitHub repos. Packaging the action will create a packaged action in the dist folder.

Run build

```bash
npm run build
```

Since the packaged index.js is run from the dist folder.

```bash
git add dist
```

See the [actions tab](https://github.com/dignio/letter-case-action/actions) for runs of this action! :rocket:
