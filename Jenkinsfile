pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'testjenkins', url: 'https://github.com/DjamelYousfi25/Jet_tours.git', branch: 'main'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    bat 'npm install'
                    bat 'npm install playwright@latest'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    bat 'npx playwright test --workers=1'
                }
            }
        }
        stage('Check Index.html') {
          steps {
        script {
            bat "type C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Jenkins_jet_tours\\playwright-report\\index.html"
        }
    }
}
    
    }
    post {
        always {
            script {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'C:\\ProgramData\\Jenkins\\.jenkins\\workspace\\Jenkins_jet_tours\\playwright-report\\',
                    reportFiles: 'index.html',
                    reportName: "Report"
                ])
            }
        }
    }
}
