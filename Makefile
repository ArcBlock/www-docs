TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build: clean init
	@echo "Building static pages..."
	@DEBUG=@arcblock/gatsby-config yarn build
	@rm public/*.js.map

all: build

init:
	@echo "Install npm dependencies required for this repo..."
	@npm install -g gatsby-cli yarn
	@yarn --force

clean:
	@rm -rf public && rm -rf .cache
	@echo "All pages are cleaned."

deploy: build
	@echo "Building and publishing the documenation..."
	@aws s3 sync ./docs s3://docs.arcblock.io/ --region us-west-2 --profile prod

run:
	@yarn dev

serve: build
	@yarn serve

travis: init
	@echo "Prepare travis build env"
	@gem install travis -v 1.8.9

.PHONY: all clean build run watch travis
