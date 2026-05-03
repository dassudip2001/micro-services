#!/bin/bash

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." >/dev/null 2>&1 && pwd)"

echo "==============================="
echo " Building all microservices... "
echo "==============================="

services=("api-eureka" "api-gateway" "api-application")

for service in "${services[@]}"; do
  service_dir="$ROOT_DIR/$service"
  echo ""
  echo ">>> Building $service..."

  if [[ ! -d "$service_dir" ]]; then
    echo "ERROR: service directory not found: $service_dir"
    exit 1
  fi

  pushd "$service_dir" >/dev/null

  if [[ -x "./mvnw" ]]; then
    ./mvnw clean package -DskipTests
  else
    mvn clean package -DskipTests
  fi

  popd >/dev/null

done

echo ""
echo "==============================="
echo " All services built successfully!"
echo "==============================="