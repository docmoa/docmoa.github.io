---
url: /04-HashiCorp/07-Nomad/05-SampleJob/mongodb.md
description: Nomad Sample
---
# MongoDB

```hcl
job "mongodb" {
  datacenters = ["dc1"]

  group "mongodb" {
    network {
      port "db" {
        static = 27017
      }
    }

    service {
      port = "db"
      provider = "nomad"
      check {
        type     = "tcp"
        interval = "10s"
        timeout  = "2s"
      }
    }

    task "mongodb" {
      driver = "docker"

      config {
        image = "mongo:3.6.21"
        ports = ["db"]
      }

      env {
        MONGO_INITDB_ROOT_USERNAME = "admin"
        MONGO_INITDB_ROOT_PASSWORD = "password"
      }

      resources {
        cpu    = 2000
        memory = 1024
      }
    }
  }
}
```
