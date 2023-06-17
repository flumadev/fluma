pipeline {
  agent {
    node {
      label 'Node'
    }

  }
  stages {
    stage('teste') {
      steps {
        git(url: 'https://github.com/flumadev/fluma', branch: 'master', changelog: true)
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

  }
}