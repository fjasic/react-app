#!/bin/bash
echo "::debug ::Debug message"
echo "::warning ::warning message"
echo "::error ::error message"

echo "::add-mask::$1"
echo "Hello $1"

echo "::set-output name=time::$(date)"

echo "::group::some logs"
echo "bla"
echo "::endgroup::"

echo "::set-env name=HELLO::hello"
