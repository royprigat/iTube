#!/bin/bash

# Add all changes.
git add -A
git commit -m "deploy"
git push heroku master