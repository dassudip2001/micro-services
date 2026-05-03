FROM eclipse-temurin:22-jre-alpine

# Copy the jar file from the first stage
COPY --from=build /app/target/*.jar /app/app.jar

# Expose the port the app runs on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "/app/app.jar"]