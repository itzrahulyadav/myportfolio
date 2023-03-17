#!/bin/bash

curl -v --silent localhost:3000/status 2>&1 | grep ok