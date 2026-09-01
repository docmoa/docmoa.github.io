---
url: /04-HashiCorp/07-Nomad/05-SampleJob/nexus.md
description: Nomad Sample
---
# Nexus

```hcl
job "nexus" {
  datacenters = ["dc1"]

  group "nexus" {
    count = 1

    network {
      port "http" {
        to = 8081
        static = 8081
      }
    }

    task "nexus" {
      driver = "docker"

      config {
        image = "sonatype/nexus3"
        ports = ["http"]
      }
      
      env {
        INSTALL4J_ADD_VM_PARAMS = "-Xms2703m -Xmx2703m -XX:MaxDirectMemorySize=2703m -Djava.util.prefs.userRoot=/some-other-dir"  
      }
      
      resources {
        cpu    = 1000
        memory = 8000
      }
    }
  }
}
```
