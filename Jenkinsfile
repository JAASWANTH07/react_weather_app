pipeline {
    agent any

    environment {
        // Add Node.js path if Jenkins can't find npm
        PATH = "/usr/bin:$PATH"
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo '🔄 Cloning repository...'
                git branch: 'master', url: 'https://github.com/JAASWANTH07/react_weather_app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages...'
                // If your package.json is inside a folder like 'client', change dir('client')
                dir('.') {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo '🧪 Running tests...'
                dir('.') {
                    sh 'npm test -- --watchAll=false'
                }
            }
        }

        stage('Build App') {
            steps {
                echo '⚙️ Building the production files...'
                dir('.') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy (Simulated)') {
            steps {
                echo '🚀 Deploying to server (simulated)...'
                dir('build') {
                    sh 'echo "Deploy step placeholder - e.g. upload build folder to S3 or EC2"'
                }
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed. Check logs for errors.'
        }
    }
}
