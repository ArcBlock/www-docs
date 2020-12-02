TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build: clean init
	@echo "Building static pages..."
	@DEBUG=@arcblock/gatsby-config yarn build
	@rm public/*.js.map

init: install dep
	@echo "Initializing the repo..."

install:
	@echo "Install software required for this repo..."
	@npm install -g gatsby-cli yarn

dep:
	@echo "Install npm dependencies required for this repo..."
	@yarn

pre-build: install dep clean
	@echo "Running scripts before the build..."

post-build:
	@echo "Running scripts after the build is done..."

all: pre-build build post-build

test:
	@echo "Running test suites..."

lint:
	@echo "Linting the software..."
	@yarn lint

doc:
	@echo "Building the documenation..."

precommit: dep lint doc build test

run:
	@echo "Running the software..."
	@yarn start

deploy:
	@echo "Deploying the software..."
	@netlify deploy

sync: build
	@echo "Building and publishing the documenation..."
	@aws s3 sync ./public s3://docs.arcblock.io/ --region us-west-2 --profile prod

oss: build
	@echo "Building and publishing the documenation..."
	@oss cp public oss://arcblock-docs -r -u

include .makefiles/*.mk

.PHONY: build init install dep pre-build post-build all test doc precommit clean watch run bump-version create-pr
