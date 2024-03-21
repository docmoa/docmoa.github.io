function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-BL1PH3Yh.js","assets/plugin-vue_export-helper-DlAUqK2U.js","assets/01-Overview.html-Bvp0Atsi.js","assets/vuepress-DVMSUmm5.js","assets/index.html-BkRtJeBR.js","assets/index.html-CExxztIv.js","assets/index.html-BZO6b8Qh.js","assets/index.html-B9d6B0Tq.js","assets/index.html-hakT38sf.js","assets/index.html-BxJsdRZp.js","assets/index.html-Cn_gEyTp.js","assets/01-About.html-Cz7VOLgC.js","assets/02-Thanks.html-BV9RgB5h.js","assets/01-Start.html-DBYWKB2P.js","assets/02-Contribute.html-CHzveiuV.js","assets/04-Template.html-DonVV6C8.js","assets/index.html-Daa2mUK4.js","assets/Chart.html-Dm3RzWse.js","assets/CodeBlock.html-BjY8f4GN.js","assets/Link.html-BS-JzdCq.js","assets/PlantUML.html-BayWJgb6.js","assets/index.html-CNf0MgPM.js","assets/Tabs.html-q5XVxCqH.js","assets/TipBox.html-CE2yLfwv.js","assets/container_runtime_sheet.html-CLI-MhJR.js","assets/rancher-desktop-disk-resize-mac.html-D626lxoR.js","assets/rancher-desktop-insecure-setup-mac.html-qE2juZpz.js","assets/deploying_specificnode_by_namespace.html-DcSoBedV.js","assets/openshift3.11_custom_metric_with_jboss.html-CuO68Yk-.js","assets/Vsphere_template_issue.html-kVvYB9pt.js","assets/CredentialConfig.html-lGGLKL9Z.js","assets/index.html-CqkfgNN3.js","assets/index.html-BQghOMc8.js","assets/index.html-DeUDGp-A.js","assets/theshortcut.html-DY_3r04F.js","assets/devops-discussion-1st.html-3BrR4Szp.js","assets/devops-discussion-20240213.html-D63yL__j.js","assets/devops-discussion-2nd.html-Dz8JUsI7.js","assets/Keyboard-Eng.html-Co8X3VlG.js","assets/acronyms.html-P7P3zaEY.js","assets/brew-cert-issue.html-CUvj_BsU.js","assets/libunistring-issue.html-BLHqauF9.js","assets/node-sass.html-9e-vLCzn.js","assets/Oom_killer.html-DCYd_9mz.js","assets/SSH Too many authentication failures.html-D2rsT5if.js","assets/docker_bridge_netstat.html-CI_H69Gu.js","assets/Kubernetes_scheduler.html-DgwmLKkv.js","assets/kubernetes_with_out_docker.html-BzMG7-Ho.js","assets/vagrant_k8s.html-vTi2hJ4l.js","assets/01-kops-on-aws.html-BaggFT4Y.js","assets/02-kops-network-storage.html-B1pvi0jK.js","assets/01-eks-deploy.html-BL6OwnbB.js","assets/02-eks-networking.html-B61FDmpN.js","assets/03-eks-storage.html-BojBnW5j.js","assets/HCP_Packer_Intro.html-zGIINyKt.js","assets/AlibabaCloud.html-BTD8eb22.js","assets/Azure.html-Q79miLlX.js","assets/GCP.html-C6bG_0cm.js","assets/aws-ubuntu.html-DDGbKDPr.js","assets/aws-windows.html-D0bG41rQ.js","assets/nCloud.html-CzNb8Ior.js","assets/multi-linux-sample.html-0_pPRXvD.js","assets/hostonlynetworkissue.html-DbKFXfca.js","assets/00-introduction.html-DKxMb7vI.js","assets/01-infrastructure_maturity.html-Chfj04ip.js","assets/02-hcl.html-JfID3ION.js","assets/remoteruns.html-Bl1dEd0P.js","assets/remotestate.html-Cmm7XdPL.js","assets/sentinel.html-C5J15qxI.js","assets/variables.html-BhJiYggg.js","assets/workspace.html-CEG-JAT_.js","assets/TFEAdminPasswordReset.html-BUDnBz7A.js","assets/terraform-cloud-agent-guide-custom.html-DUkfuA9O.js","assets/hashicat-azure.html-BPYm7TfA.js","assets/nomad-csi-sample.html-CdQmJbZH.js","assets/NotAllowAdminUsername.html-BcDeWJg6.js","assets/StateRemove.html-CTp33-eY.js","assets/TFE_v202111-1(582)_Issue.html-GbmTbuKB.js","assets/error-state-snapshot-was-created-by-terraform-version.html-itxLdGrF.js","assets/re-install.html-Bx4GfSy9.js","assets/ProviderBundling.html-NtNDM0bw.js","assets/ProviderLocalFilesystem.html-D7ChAnNp.js","assets/ProviderLocalMirroring.html-Jhrn1gkP.js","assets/Consul Enterprise Feature.html-B6X6vPxR.js","assets/consul-sizing.html-UvOatF8p.js","assets/port-info.html-BdoRnOUS.js","assets/ForwardDns.html-34ceei_3.js","assets/acl-sample.html-DbshscGD.js","assets/client.html-C9p57dso.js","assets/common.html-Bnuewecx.js","assets/server.html-DEyscLco.js","assets/Consul Enterprise Feature.html-CqkoMmHL.js","assets/Consul Health Check.html-DAu_mqUV.js","assets/Consul Enterprise Feature.html-CLX1mrGH.js","assets/Consul Install.html-OHUSdxh9.js","assets/Consul Sidecar Inject not working on k8s.html-BdY7wepA.js","assets/connection-termination.html-38YyBJX8.js","assets/kv-sample.html-Cx4Duujp.js","assets/nginx.html-C4y7Ul6y.js","assets/OnConsulNomad.html-BHLsxW1K.js","assets/OnNomad-devmode.html-BVbFj_QJ.js","assets/BoundaryTerraformSample01.html-CoL54UlU.js","assets/kmip-faq.html-aEYZesif.js","assets/port-info.html-DGpCJYpx.js","assets/vault-audit.html-BXmUPfu8.js","assets/vault-dev-mode-option.html-kopXY-NR.js","assets/vault-server-configuration-info.html-BGOhcRSs.js","assets/vault-sizing.html-D5IrY045.js","assets/vault-token.html-CYkgLsx9.js","assets/keymgmt.html-B83NNEs3.js","assets/kmip-mongo.html-BF7BI0gZ.js","assets/pki-nginx.html-D_QvHKJG.js","assets/ssh-otp-debian.html-CrCVjeVz.js","assets/ssh-otp-redhat.html-B0IAdt0z.js","assets/ssh-signed-certificates.html-BUys2Kll.js","assets/transform-fpe.html-C_FJbXA2.js","assets/transit-import.html-B-6QwaJ8.js","assets/transit.html-zA-AvD3r.js","assets/aws-auth.html-BlTBSYxP.js","assets/mfa-login.html-DsqAB4gO.js","assets/super-user-create.html-DJ6Rk50V.js","assets/token_role.html-C1NJOlqB.js","assets/vault-kv-v2-ui-policy.html-CVIVQRS8.js","assets/API-security.html-BmPgj7Xt.js","assets/argocd-vault-plugin.html-B2bdEOTd.js","assets/jenkins-pipeilne-vault-approle.html-DLOeUldc.js","assets/jenkins-with-vault-otp.html-BrSiwllB.js","assets/jenkins-with-vault.html-CXzDO7O5.js","assets/mtls.html-zQJlY365.js","assets/nomad-integration.html-BDzE2skb.js","assets/sentinel-check-identity-cidr.html-BhuUFGNn.js","assets/spring-boot.html-Car1Wnki.js","assets/terraform-with-aws-secret-engine.html-yJ2ztf-y.js","assets/transit-stress-test.html-CBMdB1j5.js","assets/vault-k8s-integration-three-methods.html-UnBBhzd_.js","assets/vault-k8s-manually-using-the-sidecar.html-BZkCXq66.js","assets/vault-k8s-usecase-csi-injection.html-3dgeP-ic.js","assets/windows-password-rotation.html-hjecEz9c.js","assets/400-error.html-DrEeq7AG.js","assets/vault-sizing.html-D0odKRXa.js","assets/tls-config.html-CuLtz3A6.js","assets/vault-agent.html-BOmqSmND.js","assets/vault-entierprise-license.html-WgKbOOZR.js","assets/aws-secrets-credential-type-check.html-DZlKSxvr.js","assets/transit-secrets-key-exportable-deny.html-Dog-rij_.js","assets/nomad-sizing.html-BePeA0yn.js","assets/nomad_job_restart.html-BopONBqy.js","assets/Cloudwatch-Logging.html-73IS0NWL.js","assets/Namespace.html-qXZiIaK2.js","assets/Nomad-Ui-Token.html-BTTALTis.js","assets/Nomad-sslkey-create.html-Dh4m543w.js","assets/Server.html-iWd9jUqH.js","assets/client.html-grsgOTgJ.js","assets/common.html-B1LB5s9d.js","assets/consul-namespace.html-BLQ28vFA.js","assets/csi-nfs.html-O4bPCACK.js","assets/custom-ui-link.html-1bou9Gl-.js","assets/integrateVault.html-CDM9pfG7.js","assets/nomad-guide-basic.html-BLGYoJMu.js","assets/nomad-on-windows.html-BYhamXjD.js","assets/jenkins-pipeline.html-CBzJHLHi.js","assets/job-start-from-hcl.html-BcjMVrKC.js","assets/springboot-graceful-shutdown.html-Bj7UKOms.js","assets/DAS.html-Qmh2Gqly.js","assets/VaultSWLB-nginx.html-BZGcoqpR.js","assets/autoscaler.html-B8EwbSPQ.js","assets/code-server.html-DxkGqFsE.js","assets/elastic.html-ijgvyIWj.js","assets/elk_version7.html-XcK-LqME.js","assets/ingress-gateway.html-Cp3UOKuc.js","assets/install-ansible-docker.html-DJ7MCh1b.js","assets/jboss.html-BigO34kW.js","assets/jenkins_java_driver.html-CnxjTeGE.js","assets/keycloak.html-CitCxjOt.js","assets/mongodb.html-C5e41SMc.js","assets/nexus.html-uCJ7iivJ.js","assets/nginx.html-miCu6QU1.js","assets/nomad-pack.html-ld7xFZPE.js","assets/oracleXE.html-Byj9RRqc.js","assets/param-batch-job.html-Coax6QXB.js","assets/redis.html-C1FAvFeW.js","assets/scouter.html-Bkk-IPlu.js","assets/service-mesh-test.html-BGBJkDFs.js","assets/sidecar-tomcat.html-Cv91Vwg8.js","assets/tomcat.html-DyF7jp5f.js","assets/update.html-YSou8Bcv.js","assets/withConsulKV.html-B1kvhuxQ.js","assets/withVaultKV.html-BgsSGfhn.js","assets/2024-01.html-BKdl1tEV.js","assets/2024-02.html-Y6qUhNUb.js","assets/2023-01.html-CsXto2B1.js","assets/2023-02.html-B7D7dQTZ.js","assets/2023-03.html-Bae1ZCyE.js","assets/2023-04.html-CqbdWv2P.js","assets/2023-05.html-B3bcIncL.js","assets/2023-06.html-bpF3mFqI.js","assets/2023-07.html-kC_LygzQ.js","assets/2023-08.html-Dq9xYMoG.js","assets/2023-09.html-DcHK4shS.js","assets/2023-10.html-CYGCPCIK.js","assets/2023-11.html-C9XX-4Bh.js","assets/2022-07.html-ByksApi-.js","assets/2022-08.html-IaheJXer.js","assets/2022-09.html-0ycbInMx.js","assets/2022-10.html-DZWtKLzo.js","assets/2022-11.html-CxhNgCml.js","assets/2022-12.html-DDCtPFgA.js","assets/00-introduction.html-D2jHDQBE.js","assets/01-cicd.html-BL6OmpWM.js","assets/02-jobs.html-BSmwHL_4.js","assets/1563945539114-BeDUHaoS.js","assets/03-builds.html-BxNTp425.js","assets/1564365395583-BYzBww3x.js","assets/04-agent.html--mfX92Is.js","assets/1564449679656-jDgy1EGt.js","assets/05-plugins.html-D_NP5t3T.js","assets/1564450122219-xixIqXDz.js","assets/06-notifications.html-Bv4haICr.js","assets/1564465713857-Bb9GicK7.js","assets/07-testing.html-DhUtazAZ.js","assets/1564471729123-DnEyDLm_.js","assets/08-restapi.html-ocoKDHZr.js","assets/09-security.html-CBhj87S2.js","assets/1564543591394-BKf8t37i.js","assets/10-artifacts.html-LgTq1lqn.js","assets/1564546697375-DhhAeZD5.js","assets/11-pipelines.html-CTLmo5F_.js","assets/1564557613406-aoabhQ4f.js","assets/12-appendix.html-CIPxZKCM.js","assets/13-jenkins_101_single.html-D54aZ0x9.js","assets/01-Introduction.html-DUWhjyvI.js","assets/02-env.html-CrXolLzE.js","assets/03-installation.html-Cc2c-OUH.js","assets/04-configuration.html-l6m3iMei.js","assets/05-deployment.html-C5c_XGUG.js","assets/06-dbconnection.html-Dh4qZZK8.js","assets/07-host.html-I4uM7zDz.js","assets/08-webserver.html-WymRv1-G.js","assets/09-thread.html-pfifhPsU.js","assets/10-monitoring.html-CIqvon6z.js","assets/11-tip.html-CYGzUuCN.js","assets/00-overview.html-rxD6Wh-S.js","assets/01-terraform-intro.html-Bv4gt44K.js","assets/02-terraform-basic.html-DCSc9oOi.js","assets/02-z-lab_terraform_basic.html-CHJowpFZ.js","assets/lab1-02-By4gwc7V.js","assets/03-terraform-in-Action.html-BeA9nHA3.js","assets/03-z-lab_terraform_action.html-C0NT0IbI.js","assets/04-ncp-provisioning-and-configuration.html-Croe_iHQ.js","assets/04-z-lab_provisioners_variables_outputs.html-UJqvH4pP.js","assets/05-terraform-state.html-BvbSrBMT.js","assets/06-terraform-cloud.html-BsiTdGGb.js","assets/06-z-lab_terraform_cloud.html-Ezbt7Ba2.js","assets/01-Install.html-BE1geiA1.js","assets/02-SideCar.html-CWAEPrPP.js","assets/03-use-crd.html-DGRgAlzz.js","assets/04-traffic-management.html-CixuogLi.js","assets/ingress-and-serviceroute.html-BxyFymQS.js","assets/multiport.html-Dg76Rcxq.js","assets/envoy_timeout.html-C5yZXueb.js","assets/consul-istio.html-DJXNnu34.js","assets/jaeger_tracing.html-BWrKIJd6.js","assets/1-vso-overview.html-BpgrKbfu.js","assets/2-vso-install.html-BEWsLPfZ.js","assets/3-vso-samples.html-CxWvdRkL.js","assets/404.html-3InTdONk.js","assets/index.html-C6t7ypkR.js","assets/index.html-VXZAwr-g.js","assets/index.html-C20mgIc6.js","assets/index.html-DnfdcXFt.js","assets/index.html-BbVhEOkv.js","assets/index.html-BDryNweu.js","assets/index.html-DZ-9vmf9.js","assets/index.html-DeLyVEPB.js","assets/index.html-Z4-t7YPN.js","assets/index.html-BYNcXK9F.js","assets/index.html-gKTycLZ0.js","assets/index.html-BC4Clurc.js","assets/index.html-v84x5jKP.js","assets/index.html-C5PdWttI.js","assets/index.html-8BRJBoHE.js","assets/index.html-CE3cqyV7.js","assets/index.html-BGUkIX84.js","assets/index.html-C6pk8Mkr.js","assets/index.html-DoH18K4O.js","assets/index.html-DMnCesl3.js","assets/index.html-C2y673JN.js","assets/index.html-CbyUbhjQ.js","assets/index.html-Btj_b6IW.js","assets/index.html-0LJDvDXc.js","assets/index.html-B2abmErt.js","assets/index.html-DCdEIcOj.js","assets/index.html-DSlKsWQj.js","assets/index.html-DBJYHQJO.js","assets/index.html-CapHP6QJ.js","assets/index.html-BMXKGGFQ.js","assets/index.html-V6ETkeN0.js","assets/index.html-Citd8cVa.js","assets/index.html-DidAAQN0.js","assets/index.html-DnVEJRxf.js","assets/index.html-6vKbhke2.js","assets/index.html-C5vHXt_I.js","assets/index.html-B3bFxz-5.js","assets/index.html-Dck3wAgY.js","assets/index.html-B_wA41-I.js","assets/index.html-BiEHhyUm.js","assets/index.html-Dfwbzbq-.js","assets/index.html-D8dN7mHI.js","assets/index.html-lGohR3TU.js","assets/index.html-CAY1YUeO.js","assets/index.html-q8DpuOEU.js","assets/index.html-pS-usHDA.js","assets/index.html-BrNI9Xtc.js","assets/index.html-8D9KQOTe.js","assets/index.html-D_OQB9UT.js","assets/index.html-IH7_j9MK.js","assets/index.html-CXAnO7JD.js","assets/index.html-D2ovzGb9.js","assets/index.html-BIkpQNWn.js","assets/index.html-DbnZA5p8.js","assets/index.html-Bm7FITuf.js","assets/index.html-DXD3WXHH.js","assets/index.html-Dm1uS-N0.js","assets/index.html-DOYXUDtG.js","assets/index.html-DZS1B9qq.js","assets/index.html-DWXZZGTG.js","assets/index.html-COfg27RH.js","assets/index.html-BP3RgDRa.js","assets/index.html-ChvEJBpi.js","assets/index.html-BIwBeCf8.js","assets/index.html-GFemiIAa.js","assets/index.html-CAfyQnJF.js","assets/index.html-DuDOfMp4.js","assets/index.html-TzawRoU3.js","assets/index.html-DXifWcd9.js","assets/index.html-B3t111-C.js","assets/index.html-BidOl4lL.js","assets/index.html-BX6TeuiG.js","assets/index.html-xyIRysKZ.js","assets/index.html-k3Y43GAt.js","assets/index.html-9IFmzrU4.js","assets/index.html-CGS53UTx.js","assets/index.html-Cf4gg3HL.js","assets/index.html-cQS5zgfN.js","assets/index.html--o69edya.js","assets/index.html-aNZ7TptU.js","assets/index.html-BLHiX8if.js","assets/index.html-vpyigKpl.js","assets/index.html-Bcml4Nf2.js","assets/index.html-CcltBgqf.js","assets/index.html-n4t8B6BJ.js","assets/index.html-gE2w_xie.js","assets/index.html-Be_Fut3b.js","assets/index.html-w144HV-M.js","assets/index.html-DQDwpkhU.js","assets/index.html-CtcUZyVC.js","assets/index.html-D5i_ky7E.js","assets/index.html-BibxeOAB.js","assets/index.html-DHG4ukMt.js","assets/index.html-BvhxjCcz.js","assets/index.html-1KSFe1x-.js","assets/index.html-BiUK7eYV.js","assets/index.html-DerxdTg9.js","assets/index.html-DKIJjPce.js","assets/index.html-hckY9zGU.js","assets/index.html-DPvQSNz0.js","assets/index.html-BKY0y4oA.js","assets/index.html-sdDELVOG.js","assets/index.html-CSZE7o6p.js","assets/index.html-turQc0qF.js","assets/index.html-CNVqFeAm.js","assets/index.html-BlG6hveV.js","assets/index.html-DXaPXtVF.js","assets/index.html-D_6G9SuC.js","assets/index.html-ODpABWDY.js","assets/index.html-DNhsTJrf.js","assets/index.html-BPuJs59X.js","assets/index.html-DAv2KFl9.js","assets/index.html-D5uIOwzQ.js","assets/index.html-oeAw2LCF.js","assets/index.html-Cx-UC3cn.js","assets/index.html-DtqfessO.js","assets/index.html-C8oY56iE.js","assets/index.html-BPYot1qT.js","assets/index.html-CazCgg-p.js","assets/index.html-oUa1RzWm.js","assets/index.html-D3oBvtbj.js","assets/index.html-BQuTXlu9.js","assets/index.html-DlGecYeE.js","assets/index.html-D-ZqsXha.js","assets/index.html-DqKOtObC.js","assets/index.html-Byp7uhgh.js","assets/index.html-DOppKK8u.js","assets/index.html-TPBvJ-pe.js","assets/index.html-CGLcTrCO.js","assets/index.html-Bolk7g_Q.js","assets/index.html-CCfGSqUk.js","assets/index.html-xT3o5Brn.js","assets/index.html-BkHFJ-oi.js","assets/index.html-BEB9-DZM.js","assets/index.html-Jq5AhJEQ.js","assets/index.html-8-rBm6Ey.js","assets/index.html-Cmm7eDu9.js","assets/index.html-B3mnbFw6.js","assets/index.html-D5c5fBt0.js","assets/index.html-CoBFj4im.js","assets/index.html-FAccXpPZ.js","assets/index.html-B32N5nMm.js","assets/index.html-q8Xwe082.js","assets/index.html-C3CtZFm4.js","assets/index.html-BQk3A5Sx.js","assets/index.html-6R6zDau-.js","assets/index.html-EQ9_lYWj.js","assets/index.html-BUzp8GOo.js","assets/index.html-C3Dl6Dkp.js","assets/index.html-DKFQJQXQ.js","assets/index.html-CDyaWVZD.js","assets/index.html-DjzoD1dn.js","assets/index.html-EmS82Wm0.js","assets/index.html-DcZtCKns.js","assets/index.html-BHST4i0Y.js","assets/index.html-YUJOGtan.js","assets/index.html-DLiav9Jg.js","assets/index.html-CH26_dVm.js","assets/index.html-CH1l-f2b.js","assets/index.html-D7evhbgH.js","assets/index.html-B8FQtMAw.js","assets/index.html-Dmmkdcuw.js","assets/index.html-C3WoOJzZ.js","assets/index.html-DvOhmBJ9.js","assets/index.html-BgXLK9Ig.js","assets/index.html-kjCbXnG6.js","assets/index.html-DPOSsHej.js","assets/index.html-Dy0UMwnz.js","assets/index.html-CR2Tz5CF.js","assets/index.html-ADVr7Gpa.js","assets/index.html-MM5OMB0-.js","assets/index.html-CigN4lnq.js","assets/index.html-Btrc01FG.js","assets/index.html-B8i39jjM.js","assets/index.html-Bg61xgKx.js","assets/index.html-Dl7S-xFt.js","assets/index.html-DB0eRzm4.js","assets/index.html-CK7fxddE.js","assets/index.html-CsUlV_G8.js","assets/index.html-CjQw8opU.js","assets/index.html-CqKCXRMv.js","assets/index.html-BqWSyeb6.js","assets/index.html-58NUFNbf.js","assets/index.html-B8abGZGM.js","assets/index.html-B5tv9_bX.js","assets/index.html-CBk1kC2E.js","assets/index.html-C_zy-YnN.js","assets/index.html-76G93XYZ.js","assets/index.html-D3x0JpM5.js","assets/index.html-Ckx0cs7N.js","assets/index.html-MwttTZfG.js","assets/index.html-Bco2keHI.js","assets/index.html-DbJb6m4t.js","assets/index.html-DFNq-diX.js","assets/index.html-EDH5qTrx.js","assets/index.html-Do0kBpU_.js","assets/index.html-BTHgtRyD.js","assets/index.html-DZALPzCn.js","assets/index.html-CG7Chs_a.js","assets/index.html-CYHAqTX1.js","assets/index.html-BHLOMNVH.js","assets/index.html-DSBrX6f7.js","assets/index.html-BKvT2sbO.js","assets/index.html-DeMYGgaS.js","assets/index.html-CmjBMCpT.js","assets/index.html-v5Sha3pN.js","assets/index.html-C20ZBm2k.js","assets/index.html-Bk1ydRS_.js","assets/index.html-BzHvK_La.js","assets/index.html-DQ7kLpne.js","assets/index.html-DYxUMqgj.js","assets/index.html-Q8on9ylZ.js","assets/index.html-CHByfrIM.js","assets/index.html-uMExY_LW.js","assets/index.html-BAKgjGH5.js","assets/index.html-9ZYKsADG.js","assets/index.html-Bsnc9bF5.js","assets/index.html-4mKf35qf.js","assets/index.html-Cmx_P07m.js","assets/index.html-D7CFuzRD.js","assets/index.html-L5xE5hig.js","assets/index.html-Du89O0Ee.js","assets/index.html-Dnj3Fs__.js","assets/index.html--egACzYG.js","assets/index.html-DB9jhU54.js","assets/index.html-DWxvLBLD.js","assets/index.html-DlIxOs9z.js","assets/index.html-BMSfhG01.js","assets/index.html-CA06rNaq.js","assets/index.html-uMBHb8Wm.js","assets/index.html-DCMzrH9f.js","assets/index.html-2bbDzOPy.js","assets/index.html-C2golA4k.js","assets/index.html-CWR1BD7z.js","assets/index.html-gK-Sevxy.js","assets/index.html-hz1Yjqqk.js","assets/index.html-BMViYi_S.js","assets/index.html-BDxyORfS.js","assets/index.html-CUEZ7gmr.js","assets/index.html-p9MbIfFx.js","assets/index.html-DYdW_x9-.js","assets/index.html-BkjewRZv.js","assets/index.html-CMN7ibAR.js","assets/index.html-dbz_rr0I.js","assets/index.html-CsmSJkUv.js","assets/index.html-CdkzEiYn.js","assets/index.html-qMXYdv30.js","assets/index.html-BDK5jN_2.js","assets/index.html-CksOgM62.js","assets/index.html-DUtbNDsH.js","assets/index.html-1rsldZtv.js","assets/index.html-C3HvyYax.js","assets/index.html-KEPuQbjz.js","assets/index.html-CE_-uoRB.js","assets/index.html-JHHabYYQ.js","assets/index.html-npLPwvI0.js","assets/index.html-CAgZwg32.js","assets/index.html-4hxh5-xj.js","assets/index.html-DejARvih.js","assets/index.html-ByYSmXsw.js","assets/index.html-yCwIeaXn.js","assets/index.html-BTAXb6x6.js","assets/vidstack-player-CFQ60-Li.js","assets/vidstack-D1JzjGR7-CCsK3iYH.js","assets/vidstack-player-layouts-C3rRQ6JW.js","assets/vidstack-CbhL8rpf-C0Lj70YY.js","assets/vidstack-player-ui-CotaCWs7.js","assets/vue-repl-C7CkvEHG.js","assets/utils-B8VQ4rym-D7HXbP0h.js","assets/codemirror-editor-HpcVK8IU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Go(n,e){const t=new Set(n.split(","));return e?a=>t.has(a.toLowerCase()):a=>t.has(a)}const In={},Ot=[],me=()=>{},Xu=()=>!1,Pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Wo=n=>n.startsWith("onUpdate:"),Hn=Object.assign,Jo=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Zu=Object.prototype.hasOwnProperty,mn=(n,e)=>Zu.call(n,e),Q=Array.isArray,Rt=n=>Es(n)==="[object Map]",Cp=n=>Es(n)==="[object Set]",an=n=>typeof n=="function",Nn=n=>typeof n=="string",Gt=n=>typeof n=="symbol",Sn=n=>n!==null&&typeof n=="object",Tp=n=>(Sn(n)||an(n))&&an(n.then)&&an(n.catch),Ip=Object.prototype.toString,Es=n=>Ip.call(n),Qu=n=>Es(n).slice(8,-1),Sp=n=>Es(n)==="[object Object]",Yo=n=>Nn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vt=Go(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nd=/-(\w)/g,le=Cs(n=>n.replace(nd,(e,t)=>t?t.toUpperCase():"")),ed=/\B([A-Z])/g,at=Cs(n=>n.replace(ed,"-$1").toLowerCase()),xa=Cs(n=>n.charAt(0).toUpperCase()+n.slice(1)),qs=Cs(n=>n?`on${xa(n)}`:""),Le=(n,e)=>!Object.is(n,e),ps=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},us=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},yo=n=>{const e=parseFloat(n);return isNaN(e)?n:e},td=n=>{const e=Nn(n)?Number(n):NaN;return isNaN(e)?n:e};let Zr;const Pp=()=>Zr||(Zr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xo(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++){const a=n[t],s=Nn(a)?rd(a):Xo(a);if(s)for(const o in s)e[o]=s[o]}return e}else if(Nn(n)||Sn(n))return n}const ad=/;(?![^(]*\))/g,sd=/:([^]+)/,od=/\/\*[^]*?\*\//g;function rd(n){const e={};return n.replace(od,"").split(ad).forEach(t=>{if(t){const a=t.split(sd);a.length>1&&(e[a[0].trim()]=a[1].trim())}}),e}function Zo(n){let e="";if(Nn(n))e=n;else if(Q(n))for(let t=0;t<n.length;t++){const a=Zo(n[t]);a&&(e+=a+" ")}else if(Sn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ld="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pd=Go(ld);function xp(n){return!!n||n===""}const k_=n=>Nn(n)?n:n==null?"":Q(n)||Sn(n)&&(n.toString===Ip||!an(n.toString))?JSON.stringify(n,Ap,2):String(n),Ap=(n,e)=>e&&e.__v_isRef?Ap(n,e.value):Rt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[a,s],o)=>(t[Gs(a,o)+" =>"]=s,t),{})}:Cp(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Gs(t))}:Gt(e)?Gs(e):Sn(e)&&!Q(e)&&!Sp(e)?String(e):e,Gs=(n,e="")=>{var t;return Gt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class id{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ae,!e&&ae&&(this.index=(ae.scopes||(ae.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ae;try{return ae=this,e()}finally{ae=t}}}on(){ae=this}off(){ae=this.parent}stop(e){if(this._active){let t,a;for(t=0,a=this.effects.length;t<a;t++)this.effects[t].stop();for(t=0,a=this.cleanups.length;t<a;t++)this.cleanups[t]();if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function cd(n,e=ae){e&&e.active&&e.effects.push(n)}function Lp(){return ae}function ud(n){ae&&ae.cleanups.push(n)}let vt;class Qo{constructor(e,t,a,s){this.fn=e,this.trigger=t,this.scheduler=a,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cd(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,wt();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(dd(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Et()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=nt,t=vt;try{return nt=!0,vt=this,this._runnings++,Qr(this),this.fn()}finally{nl(this),this._runnings--,vt=t,nt=e}}stop(){var e;this.active&&(Qr(this),nl(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function dd(n){return n.value}function Qr(n){n._trackId++,n._depsLength=0}function nl(n){if(n.deps.length>n._depsLength){for(let e=n._depsLength;e<n.deps.length;e++)Op(n.deps[e],n);n.deps.length=n._depsLength}}function Op(n,e){const t=n.get(e);t!==void 0&&e._trackId!==t&&(n.delete(e),n.size===0&&n.cleanup())}let nt=!0,bo=0;const Rp=[];function wt(){Rp.push(nt),nt=!1}function Et(){const n=Rp.pop();nt=n===void 0?!0:n}function nr(){bo++}function er(){for(bo--;!bo&&wo.length;)wo.shift()()}function Vp(n,e,t){if(e.get(n)!==n._trackId){e.set(n,n._trackId);const a=n.deps[n._depsLength];a!==e?(a&&Op(a,n),n.deps[n._depsLength++]=e):n._depsLength++}}const wo=[];function Dp(n,e,t){nr();for(const a of n.keys()){let s;a._dirtyLevel<e&&(s??(s=n.get(a)===a._trackId))&&(a._shouldSchedule||(a._shouldSchedule=a._dirtyLevel===0),a._dirtyLevel=e),a._shouldSchedule&&(s??(s=n.get(a)===a._trackId))&&(a.trigger(),(!a._runnings||a.allowRecurse)&&a._dirtyLevel!==2&&(a._shouldSchedule=!1,a.scheduler&&wo.push(a.scheduler)))}er()}const Hp=(n,e)=>{const t=new Map;return t.cleanup=n,t.computed=e,t},ds=new WeakMap,_t=Symbol(""),Eo=Symbol("");function ne(n,e,t){if(nt&&vt){let a=ds.get(n);a||ds.set(n,a=new Map);let s=a.get(t);s||a.set(t,s=Hp(()=>a.delete(t))),Vp(vt,s)}}function Ne(n,e,t,a,s,o){const r=ds.get(n);if(!r)return;let p=[];if(e==="clear")p=[...r.values()];else if(t==="length"&&Q(n)){const i=Number(a);r.forEach((c,d)=>{(d==="length"||!Gt(d)&&d>=i)&&p.push(c)})}else switch(t!==void 0&&p.push(r.get(t)),e){case"add":Q(n)?Yo(t)&&p.push(r.get("length")):(p.push(r.get(_t)),Rt(n)&&p.push(r.get(Eo)));break;case"delete":Q(n)||(p.push(r.get(_t)),Rt(n)&&p.push(r.get(Eo)));break;case"set":Rt(n)&&p.push(r.get(_t));break}nr();for(const i of p)i&&Dp(i,4);er()}function md(n,e){var t;return(t=ds.get(n))==null?void 0:t.get(e)}const hd=Go("__proto__,__v_isRef,__isVue"),Np=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Gt)),el=kd();function kd(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const a=cn(this);for(let o=0,r=this.length;o<r;o++)ne(a,"get",o+"");const s=a[e](...t);return s===-1||s===!1?a[e](...t.map(cn)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){wt(),nr();const a=cn(this)[e].apply(this,t);return er(),Et(),a}}),n}function fd(n){const e=cn(this);return ne(e,"has",n),e.hasOwnProperty(n)}class Mp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,a){const s=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return o;if(t==="__v_raw")return a===(s?o?xd:Bp:o?zp:$p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(a)?e:void 0;const r=Q(e);if(!s){if(r&&mn(el,t))return Reflect.get(el,t,a);if(t==="hasOwnProperty")return fd}const p=Reflect.get(e,t,a);return(Gt(t)?Np.has(t):hd(t))||(s||ne(e,"get",t),o)?p:jn(p)?r&&Yo(t)?p:p.value:Sn(p)?s?st(p):Aa(p):p}}class jp extends Mp{constructor(e=!1){super(!1,e)}set(e,t,a,s){let o=e[t];if(!this._isShallow){const i=Bt(o);if(!ms(a)&&!Bt(a)&&(o=cn(o),a=cn(a)),!Q(e)&&jn(o)&&!jn(a))return i?!1:(o.value=a,!0)}const r=Q(e)&&Yo(t)?Number(t)<e.length:mn(e,t),p=Reflect.set(e,t,a,s);return e===cn(s)&&(r?Le(a,o)&&Ne(e,"set",t,a):Ne(e,"add",t,a)),p}deleteProperty(e,t){const a=mn(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&a&&Ne(e,"delete",t,void 0),s}has(e,t){const a=Reflect.has(e,t);return(!Gt(t)||!Np.has(t))&&ne(e,"has",t),a}ownKeys(e){return ne(e,"iterate",Q(e)?"length":_t),Reflect.ownKeys(e)}}class gd extends Mp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const vd=new jp,_d=new gd,yd=new jp(!0),tr=n=>n,Ts=n=>Reflect.getPrototypeOf(n);function Fa(n,e,t=!1,a=!1){n=n.__v_raw;const s=cn(n),o=cn(e);t||(Le(e,o)&&ne(s,"get",e),ne(s,"get",o));const{has:r}=Ts(s),p=a?tr:t?or:ma;if(r.call(s,e))return p(n.get(e));if(r.call(s,o))return p(n.get(o));n!==s&&n.get(e)}function qa(n,e=!1){const t=this.__v_raw,a=cn(t),s=cn(n);return e||(Le(n,s)&&ne(a,"has",n),ne(a,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ga(n,e=!1){return n=n.__v_raw,!e&&ne(cn(n),"iterate",_t),Reflect.get(n,"size",n)}function tl(n){n=cn(n);const e=cn(this);return Ts(e).has.call(e,n)||(e.add(n),Ne(e,"add",n,n)),this}function al(n,e){e=cn(e);const t=cn(this),{has:a,get:s}=Ts(t);let o=a.call(t,n);o||(n=cn(n),o=a.call(t,n));const r=s.call(t,n);return t.set(n,e),o?Le(e,r)&&Ne(t,"set",n,e):Ne(t,"add",n,e),this}function sl(n){const e=cn(this),{has:t,get:a}=Ts(e);let s=t.call(e,n);s||(n=cn(n),s=t.call(e,n)),a&&a.call(e,n);const o=e.delete(n);return s&&Ne(e,"delete",n,void 0),o}function ol(){const n=cn(this),e=n.size!==0,t=n.clear();return e&&Ne(n,"clear",void 0,void 0),t}function Wa(n,e){return function(a,s){const o=this,r=o.__v_raw,p=cn(r),i=e?tr:n?or:ma;return!n&&ne(p,"iterate",_t),r.forEach((c,d)=>a.call(s,i(c),i(d),o))}}function Ja(n,e,t){return function(...a){const s=this.__v_raw,o=cn(s),r=Rt(o),p=n==="entries"||n===Symbol.iterator&&r,i=n==="keys"&&r,c=s[n](...a),d=t?tr:e?or:ma;return!e&&ne(o,"iterate",i?Eo:_t),{next(){const{value:m,done:h}=c.next();return h?{value:m,done:h}:{value:p?[d(m[0]),d(m[1])]:d(m),done:h}},[Symbol.iterator](){return this}}}}function Ue(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function bd(){const n={get(o){return Fa(this,o)},get size(){return Ga(this)},has:qa,add:tl,set:al,delete:sl,clear:ol,forEach:Wa(!1,!1)},e={get(o){return Fa(this,o,!1,!0)},get size(){return Ga(this)},has:qa,add:tl,set:al,delete:sl,clear:ol,forEach:Wa(!1,!0)},t={get(o){return Fa(this,o,!0)},get size(){return Ga(this,!0)},has(o){return qa.call(this,o,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Wa(!0,!1)},a={get(o){return Fa(this,o,!0,!0)},get size(){return Ga(this,!0)},has(o){return qa.call(this,o,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Ja(o,!1,!1),t[o]=Ja(o,!0,!1),e[o]=Ja(o,!1,!0),a[o]=Ja(o,!0,!0)}),[n,t,e,a]}const[wd,Ed,Cd,Td]=bd();function ar(n,e){const t=e?n?Td:Cd:n?Ed:wd;return(a,s,o)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?a:Reflect.get(mn(t,s)&&s in a?t:a,s,o)}const Id={get:ar(!1,!1)},Sd={get:ar(!1,!0)},Pd={get:ar(!0,!1)},$p=new WeakMap,zp=new WeakMap,Bp=new WeakMap,xd=new WeakMap;function Ad(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ld(n){return n.__v_skip||!Object.isExtensible(n)?0:Ad(Qu(n))}function Aa(n){return Bt(n)?n:sr(n,!1,vd,Id,$p)}function Up(n){return sr(n,!1,yd,Sd,zp)}function st(n){return sr(n,!0,_d,Pd,Bp)}function sr(n,e,t,a,s){if(!Sn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const o=s.get(n);if(o)return o;const r=Ld(n);if(r===0)return n;const p=new Proxy(n,r===2?a:t);return s.set(n,p),p}function Dt(n){return Bt(n)?Dt(n.__v_raw):!!(n&&n.__v_isReactive)}function Bt(n){return!!(n&&n.__v_isReadonly)}function ms(n){return!!(n&&n.__v_isShallow)}function Kp(n){return Dt(n)||Bt(n)}function cn(n){const e=n&&n.__v_raw;return e?cn(e):n}function Fp(n){return Object.isExtensible(n)&&us(n,"__v_skip",!0),n}const ma=n=>Sn(n)?Aa(n):n,or=n=>Sn(n)?st(n):n;class qp{constructor(e,t,a,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qo(()=>e(this._value),()=>oa(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=a}get value(){const e=cn(this);return(!e._cacheable||e.effect.dirty)&&Le(e._value,e._value=e.effect.run())&&oa(e,4),rr(e),e.effect._dirtyLevel>=2&&oa(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Od(n,e,t=!1){let a,s;const o=an(n);return o?(a=n,s=me):(a=n.get,s=n.set),new qp(a,s,o||!s,t)}function rr(n){var e;nt&&vt&&(n=cn(n),Vp(vt,(e=n.dep)!=null?e:n.dep=Hp(()=>n.dep=void 0,n instanceof qp?n:void 0)))}function oa(n,e=4,t){n=cn(n);const a=n.dep;a&&Dp(a,e)}function jn(n){return!!(n&&n.__v_isRef===!0)}function K(n){return Gp(n,!1)}function hn(n){return Gp(n,!0)}function Gp(n,e){return jn(n)?n:new Rd(n,e)}class Rd{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:cn(e),this._value=t?e:ma(e)}get value(){return rr(this),this._value}set value(e){const t=this.__v_isShallow||ms(e)||Bt(e);e=t?e:cn(e),Le(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ma(e),oa(this,4))}}function _e(n){return jn(n)?n.value:n}const Vd={get:(n,e,t)=>_e(Reflect.get(n,e,t)),set:(n,e,t,a)=>{const s=n[e];return jn(s)&&!jn(t)?(s.value=t,!0):Reflect.set(n,e,t,a)}};function Wp(n){return Dt(n)?n:new Proxy(n,Vd)}class Dd{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:a}=e(()=>rr(this),()=>oa(this));this._get=t,this._set=a}get value(){return this._get()}set value(e){this._set(e)}}function Is(n){return new Dd(n)}class Hd{constructor(e,t,a){this._object=e,this._key=t,this._defaultValue=a,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return md(cn(this._object),this._key)}}class Nd{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Wt(n,e,t){return jn(n)?n:an(n)?new Nd(n):Sn(n)&&arguments.length>1?Md(n,e,t):K(n)}function Md(n,e,t){const a=n[e];return jn(a)?a:new Hd(n,e,t)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function et(n,e,t,a){try{return a?n(...a):n()}catch(s){La(s,e,t)}}function he(n,e,t,a){if(an(n)){const o=et(n,e,t,a);return o&&Tp(o)&&o.catch(r=>{La(r,e,t)}),o}const s=[];for(let o=0;o<n.length;o++)s.push(he(n[o],e,t,a));return s}function La(n,e,t,a=!0){const s=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](n,r,p)===!1)return}o=o.parent}const i=e.appContext.config.errorHandler;if(i){et(i,null,10,[n,r,p]);return}}jd(n,t,s,a)}function jd(n,e,t,a=!0){console.error(n)}let ha=!1,Co=!1;const Kn=[];let Ae=0;const Ht=[];let Je=null,ht=0;const Jp=Promise.resolve();let lr=null;function ot(n){const e=lr||Jp;return n?e.then(this?n.bind(this):n):e}function $d(n){let e=Ae+1,t=Kn.length;for(;e<t;){const a=e+t>>>1,s=Kn[a],o=ka(s);o<n||o===n&&s.pre?e=a+1:t=a}return e}function Ss(n){(!Kn.length||!Kn.includes(n,ha&&n.allowRecurse?Ae+1:Ae))&&(n.id==null?Kn.push(n):Kn.splice($d(n.id),0,n),Yp())}function Yp(){!ha&&!Co&&(Co=!0,lr=Jp.then(Xp))}function zd(n){const e=Kn.indexOf(n);e>Ae&&Kn.splice(e,1)}function Bd(n){Q(n)?Ht.push(...n):(!Je||!Je.includes(n,n.allowRecurse?ht+1:ht))&&Ht.push(n),Yp()}function rl(n,e,t=ha?Ae+1:0){for(;t<Kn.length;t++){const a=Kn[t];if(a&&a.pre){if(n&&a.id!==n.uid)continue;Kn.splice(t,1),t--,a()}}}function hs(n){if(Ht.length){const e=[...new Set(Ht)].sort((t,a)=>ka(t)-ka(a));if(Ht.length=0,Je){Je.push(...e);return}for(Je=e,ht=0;ht<Je.length;ht++)Je[ht]();Je=null,ht=0}}const ka=n=>n.id==null?1/0:n.id,Ud=(n,e)=>{const t=ka(n)-ka(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Xp(n){Co=!1,ha=!0,Kn.sort(Ud);try{for(Ae=0;Ae<Kn.length;Ae++){const e=Kn[Ae];e&&e.active!==!1&&et(e,null,14)}}finally{Ae=0,Kn.length=0,hs(),ha=!1,lr=null,(Kn.length||Ht.length)&&Xp()}}function Kd(n,e,...t){if(n.isUnmounted)return;const a=n.vnode.props||In;let s=t;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in a){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:m,trim:h}=a[d]||In;h&&(s=t.map(k=>Nn(k)?k.trim():k)),m&&(s=t.map(yo))}let p,i=a[p=qs(e)]||a[p=qs(le(e))];!i&&o&&(i=a[p=qs(at(e))]),i&&he(i,n,6,s);const c=a[p+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[p])return;n.emitted[p]=!0,he(c,n,6,s)}}function Zp(n,e,t=!1){const a=e.emitsCache,s=a.get(n);if(s!==void 0)return s;const o=n.emits;let r={},p=!1;if(!an(n)){const i=c=>{const d=Zp(c,e,!0);d&&(p=!0,Hn(r,d))};!t&&e.mixins.length&&e.mixins.forEach(i),n.extends&&i(n.extends),n.mixins&&n.mixins.forEach(i)}return!o&&!p?(Sn(n)&&a.set(n,null),null):(Q(o)?o.forEach(i=>r[i]=null):Hn(r,o),Sn(n)&&a.set(n,r),r)}function Ps(n,e){return!n||!Pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),mn(n,e[0].toLowerCase()+e.slice(1))||mn(n,at(e))||mn(n,e))}let Mn=null,xs=null;function ks(n){const e=Mn;return Mn=n,xs=n&&n.type.__scopeId||null,e}function f_(n){xs=n}function g_(){xs=null}function Fd(n,e=Mn,t){if(!e||n._n)return n;const a=(...s)=>{a._d&&vl(-1);const o=ks(e);let r;try{r=n(...s)}finally{ks(o),a._d&&vl(1)}return r};return a._n=!0,a._c=!0,a._d=!0,a}function Ws(n){const{type:e,vnode:t,proxy:a,withProxy:s,props:o,propsOptions:[r],slots:p,attrs:i,emit:c,render:d,renderCache:m,data:h,setupState:k,ctx:g,inheritAttrs:w}=n;let E,_;const T=ks(n);try{if(t.shapeFlag&4){const S=s||a,N=S;E=ve(d.call(N,S,m,o,k,h,g)),_=i}else{const S=e;E=ve(S.length>1?S(o,{attrs:i,slots:p,emit:c}):S(o,null)),_=e.props?i:qd(i)}}catch(S){ia.length=0,La(S,n,1),E=On(re)}let b=E;if(_&&w!==!1){const S=Object.keys(_),{shapeFlag:N}=b;S.length&&N&7&&(r&&S.some(Wo)&&(_=Gd(_,r)),b=tt(b,_))}return t.dirs&&(b=tt(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),E=b,ks(T),E}const qd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Pa(t))&&((e||(e={}))[t]=n[t]);return e},Gd=(n,e)=>{const t={};for(const a in n)(!Wo(a)||!(a.slice(9)in e))&&(t[a]=n[a]);return t};function Wd(n,e,t){const{props:a,children:s,component:o}=n,{props:r,children:p,patchFlag:i}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&i>=0){if(i&1024)return!0;if(i&16)return a?ll(a,r,c):!!r;if(i&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const h=d[m];if(r[h]!==a[h]&&!Ps(c,h))return!0}}}else return(s||p)&&(!p||!p.$stable)?!0:a===r?!1:a?r?ll(a,r,c):!0:!!r;return!1}function ll(n,e,t){const a=Object.keys(e);if(a.length!==Object.keys(n).length)return!0;for(let s=0;s<a.length;s++){const o=a[s];if(e[o]!==n[o]&&!Ps(t,o))return!0}return!1}function Jd({vnode:n,parent:e},t){for(;e;){const a=e.subTree;if(a.suspense&&a.suspense.activeBranch===n&&(a.el=n.el),a===n)(n=e.vnode).el=t,e=e.parent;else break}}const Qp="components";function se(n,e){return Xd(Qp,n,!0,e)||n}const Yd=Symbol.for("v-ndc");function Xd(n,e,t=!0,a=!1){const s=Mn||Bn;if(s){const o=s.type;if(n===Qp){const p=Fm(o,!1);if(p&&(p===e||p===le(e)||p===xa(le(e))))return o}const r=pl(s[n]||o[n],e)||pl(s.appContext[n],e);return!r&&a?o:r}}function pl(n,e){return n&&(n[e]||n[le(e)]||n[xa(le(e))])}const Zd=n=>n.__isSuspense;function ni(n,e){e&&e.pendingBranch?Q(n)?e.effects.push(...n):e.effects.push(n):Bd(n)}const Qd=Symbol.for("v-scx"),nm=()=>gn(Qd);function pr(n,e){return As(n,null,e)}function em(n,e){return As(n,null,{flush:"sync"})}const Ya={};function on(n,e,t){return As(n,e,t)}function As(n,e,{immediate:t,deep:a,flush:s,once:o,onTrack:r,onTrigger:p}=In){if(e&&o){const I=e;e=(...G)=>{I(...G),N()}}const i=Bn,c=I=>a===!0?I:ft(I,a===!1?1:void 0);let d,m=!1,h=!1;if(jn(n)?(d=()=>n.value,m=ms(n)):Dt(n)?(d=()=>c(n),m=!0):Q(n)?(h=!0,m=n.some(I=>Dt(I)||ms(I)),d=()=>n.map(I=>{if(jn(I))return I.value;if(Dt(I))return c(I);if(an(I))return et(I,i,2)})):an(n)?e?d=()=>et(n,i,2):d=()=>(k&&k(),he(n,i,3,[g])):d=me,e&&a){const I=d;d=()=>ft(I())}let k,g=I=>{k=b.onStop=()=>{et(I,i,4),k=b.onStop=void 0}},w;if(Va)if(g=me,e?t&&he(e,i,3,[d(),h?[]:void 0,g]):d(),s==="sync"){const I=nm();w=I.__watcherHandles||(I.__watcherHandles=[])}else return me;let E=h?new Array(n.length).fill(Ya):Ya;const _=()=>{if(!(!b.active||!b.dirty))if(e){const I=b.run();(a||m||(h?I.some((G,M)=>Le(G,E[M])):Le(I,E)))&&(k&&k(),he(e,i,3,[I,E===Ya?void 0:h&&E[0]===Ya?[]:E,g]),E=I)}else b.run()};_.allowRecurse=!!e;let T;s==="sync"?T=_:s==="post"?T=()=>Xn(_,i&&i.suspense):(_.pre=!0,i&&(_.id=i.uid),T=()=>Ss(_));const b=new Qo(d,me,T),S=Lp(),N=()=>{b.stop(),S&&Jo(S.effects,b)};return e?t?_():E=b.run():s==="post"?Xn(b.run.bind(b),i&&i.suspense):b.run(),w&&w.push(N),N}function tm(n,e,t){const a=this.proxy,s=Nn(n)?n.includes(".")?ei(a,n):()=>a[n]:n.bind(a,a);let o;an(e)?o=e:(o=e.handler,t=e);const r=Ra(this),p=As(s,o.bind(a),t);return r(),p}function ei(n,e){const t=e.split(".");return()=>{let a=n;for(let s=0;s<t.length&&a;s++)a=a[t[s]];return a}}function ft(n,e,t=0,a){if(!Sn(n)||n.__v_skip)return n;if(e&&e>0){if(t>=e)return n;t++}if(a=a||new Set,a.has(n))return n;if(a.add(n),jn(n))ft(n.value,e,t,a);else if(Q(n))for(let s=0;s<n.length;s++)ft(n[s],e,t,a);else if(Cp(n)||Rt(n))n.forEach(s=>{ft(s,e,t,a)});else if(Sp(n))for(const s in n)ft(n[s],e,t,a);return n}function v_(n,e){if(Mn===null)return n;const t=Rs(Mn)||Mn.proxy,a=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,r,p,i=In]=e[s];o&&(an(o)&&(o={mounted:o,updated:o}),o.deep&&ft(r),a.push({dir:o,instance:t,value:r,oldValue:void 0,arg:p,modifiers:i}))}return n}function xe(n,e,t,a){const s=n.dirs,o=e&&e.dirs;for(let r=0;r<s.length;r++){const p=s[r];o&&(p.oldValue=o[r].value);let i=p.dir[a];i&&(wt(),he(i,t,8,[n.el,p,n,e]),Et())}}const Ye=Symbol("_leaveCb"),Xa=Symbol("_enterCb");function ti(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sn(()=>{n.isMounted=!0}),pi(()=>{n.isUnmounting=!0}),n}const ce=[Function,Array],ai={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ce,onEnter:ce,onAfterEnter:ce,onEnterCancelled:ce,onBeforeLeave:ce,onLeave:ce,onAfterLeave:ce,onLeaveCancelled:ce,onBeforeAppear:ce,onAppear:ce,onAfterAppear:ce,onAppearCancelled:ce},am={name:"BaseTransition",props:ai,setup(n,{slots:e}){const t=Ct(),a=ti();return()=>{const s=e.default&&ir(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const h of s)if(h.type!==re){o=h;break}}const r=cn(n),{mode:p}=r;if(a.isLeaving)return Js(o);const i=il(o);if(!i)return Js(o);const c=fa(i,r,a,t);ga(i,c);const d=t.subTree,m=d&&il(d);if(m&&m.type!==re&&!kt(i,m)){const h=fa(m,r,a,t);if(ga(m,h),p==="out-in")return a.isLeaving=!0,h.afterLeave=()=>{a.isLeaving=!1,t.update.active!==!1&&(t.effect.dirty=!0,t.update())},Js(o);p==="in-out"&&i.type!==re&&(h.delayLeave=(k,g,w)=>{const E=si(a,m);E[String(m.key)]=m,k[Ye]=()=>{g(),k[Ye]=void 0,delete c.delayedLeave},c.delayedLeave=w})}return o}}},sm=am;function si(n,e){const{leavingVNodes:t}=n;let a=t.get(e.type);return a||(a=Object.create(null),t.set(e.type,a)),a}function fa(n,e,t,a){const{appear:s,mode:o,persisted:r=!1,onBeforeEnter:p,onEnter:i,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:m,onLeave:h,onAfterLeave:k,onLeaveCancelled:g,onBeforeAppear:w,onAppear:E,onAfterAppear:_,onAppearCancelled:T}=e,b=String(n.key),S=si(t,n),N=(M,Y)=>{M&&he(M,a,9,Y)},I=(M,Y)=>{const O=Y[1];N(M,Y),Q(M)?M.every(F=>F.length<=1)&&O():M.length<=1&&O()},G={mode:o,persisted:r,beforeEnter(M){let Y=p;if(!t.isMounted)if(s)Y=w||p;else return;M[Ye]&&M[Ye](!0);const O=S[b];O&&kt(n,O)&&O.el[Ye]&&O.el[Ye](),N(Y,[M])},enter(M){let Y=i,O=c,F=d;if(!t.isMounted)if(s)Y=E||i,O=_||c,F=T||d;else return;let V=!1;const nn=M[Xa]=Ln=>{V||(V=!0,Ln?N(F,[M]):N(O,[M]),G.delayedLeave&&G.delayedLeave(),M[Xa]=void 0)};Y?I(Y,[M,nn]):nn()},leave(M,Y){const O=String(n.key);if(M[Xa]&&M[Xa](!0),t.isUnmounting)return Y();N(m,[M]);let F=!1;const V=M[Ye]=nn=>{F||(F=!0,Y(),nn?N(g,[M]):N(k,[M]),M[Ye]=void 0,S[O]===n&&delete S[O])};S[O]=n,h?I(h,[M,V]):V()},clone(M){return fa(M,e,t,a)}};return G}function Js(n){if(Oa(n))return n=tt(n),n.children=null,n}function il(n){return Oa(n)?n.children?n.children[0]:void 0:n}function ga(n,e){n.shapeFlag&6&&n.component?ga(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ir(n,e=!1,t){let a=[],s=0;for(let o=0;o<n.length;o++){let r=n[o];const p=t==null?r.key:String(t)+String(r.key!=null?r.key:o);r.type===Gn?(r.patchFlag&128&&s++,a=a.concat(ir(r.children,e,p))):(e||r.type!==re)&&a.push(p!=null?tt(r,{key:p}):r)}if(s>1)for(let o=0;o<a.length;o++)a[o].patchFlag=-2;return a}/*! #__NO_SIDE_EFFECTS__ */function R(n,e){return an(n)?Hn({name:n.name},e,{setup:n}):n}const Nt=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function oi(n){an(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:a,delay:s=200,timeout:o,suspensible:r=!0,onError:p}=n;let i=null,c,d=0;const m=()=>(d++,i=null,h()),h=()=>{let k;return i||(k=i=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),p)return new Promise((w,E)=>{p(g,()=>w(m()),()=>E(g),d+1)});throw g}).then(g=>k!==i&&i?i:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return R({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return c},setup(){const k=Bn;if(c)return()=>Ys(c,k);const g=T=>{i=null,La(T,k,13,!a)};if(r&&k.suspense||Va)return h().then(T=>()=>Ys(T,k)).catch(T=>(g(T),()=>a?On(a,{error:T}):null));const w=K(!1),E=K(),_=K(!!s);return s&&setTimeout(()=>{_.value=!1},s),o!=null&&setTimeout(()=>{if(!w.value&&!E.value){const T=new Error(`Async component timed out after ${o}ms.`);g(T),E.value=T}},o),h().then(()=>{w.value=!0,k.parent&&Oa(k.parent.vnode)&&(k.parent.effect.dirty=!0,Ss(k.parent.update))}).catch(T=>{g(T),E.value=T}),()=>{if(w.value&&c)return Ys(c,k);if(E.value&&a)return On(a,{error:E.value});if(t&&!_.value)return On(t)}}})}function Ys(n,e){const{ref:t,props:a,children:s,ce:o}=e.vnode,r=On(n,a,s);return r.ref=t,r.ce=o,delete e.vnode.ce,r}const Oa=n=>n.type.__isKeepAlive;function om(n,e){ri(n,"a",e)}function rm(n,e){ri(n,"da",e)}function ri(n,e,t=Bn){const a=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ls(e,a,t),t){let s=t.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&lm(a,e,t,s),s=s.parent}}function lm(n,e,t,a){const s=Ls(e,n,a,!0);rt(()=>{Jo(a[e],s)},t)}function Ls(n,e,t=Bn,a=!1){if(t){const s=t[n]||(t[n]=[]),o=e.__weh||(e.__weh=(...r)=>{if(t.isUnmounted)return;wt();const p=Ra(t),i=he(e,t,n,r);return p(),Et(),i});return a?s.unshift(o):s.push(o),o}}const $e=n=>(e,t=Bn)=>(!Va||n==="sp")&&Ls(n,(...a)=>e(...a),t),pm=$e("bm"),sn=$e("m"),im=$e("bu"),li=$e("u"),pi=$e("bum"),rt=$e("um"),cm=$e("sp"),um=$e("rtg"),dm=$e("rtc");function mm(n,e=Bn){Ls("ec",n,e)}function __(n,e,t,a){let s;const o=t&&t[a];if(Q(n)||Nn(n)){s=new Array(n.length);for(let r=0,p=n.length;r<p;r++)s[r]=e(n[r],r,void 0,o&&o[r])}else if(typeof n=="number"){s=new Array(n);for(let r=0;r<n;r++)s[r]=e(r+1,r,void 0,o&&o[r])}else if(Sn(n))if(n[Symbol.iterator])s=Array.from(n,(r,p)=>e(r,p,void 0,o&&o[p]));else{const r=Object.keys(n);s=new Array(r.length);for(let p=0,i=r.length;p<i;p++){const c=r[p];s[p]=e(n[c],c,p,o&&o[p])}}else s=[];return t&&(t[a]=s),s}function y_(n,e,t={},a,s){if(Mn.isCE||Mn.parent&&Nt(Mn.parent)&&Mn.parent.isCE)return e!=="default"&&(t.name=e),On("slot",t,a&&a());let o=n[e];o&&o._c&&(o._d=!1),yi();const r=o&&ii(o(t)),p=wi(Gn,{key:t.key||r&&r.key||`_${e}`},r||(a?a():[]),r&&n._===1?64:-2);return!s&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),o&&o._c&&(o._d=!0),p}function ii(n){return n.some(e=>vs(e)?!(e.type===re||e.type===Gn&&!ii(e.children)):!0)?n:null}const To=n=>n?Ii(n)?Rs(n)||n.proxy:To(n.parent):null,ra=Hn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>To(n.parent),$root:n=>To(n.root),$emit:n=>n.emit,$options:n=>cr(n),$forceUpdate:n=>n.f||(n.f=()=>{n.effect.dirty=!0,Ss(n.update)}),$nextTick:n=>n.n||(n.n=ot.bind(n.proxy)),$watch:n=>tm.bind(n)}),Xs=(n,e)=>n!==In&&!n.__isScriptSetup&&mn(n,e),hm={get({_:n},e){const{ctx:t,setupState:a,data:s,props:o,accessCache:r,type:p,appContext:i}=n;let c;if(e[0]!=="$"){const k=r[e];if(k!==void 0)switch(k){case 1:return a[e];case 2:return s[e];case 4:return t[e];case 3:return o[e]}else{if(Xs(a,e))return r[e]=1,a[e];if(s!==In&&mn(s,e))return r[e]=2,s[e];if((c=n.propsOptions[0])&&mn(c,e))return r[e]=3,o[e];if(t!==In&&mn(t,e))return r[e]=4,t[e];Io&&(r[e]=0)}}const d=ra[e];let m,h;if(d)return e==="$attrs"&&ne(n,"get",e),d(n);if((m=p.__cssModules)&&(m=m[e]))return m;if(t!==In&&mn(t,e))return r[e]=4,t[e];if(h=i.config.globalProperties,mn(h,e))return h[e]},set({_:n},e,t){const{data:a,setupState:s,ctx:o}=n;return Xs(s,e)?(s[e]=t,!0):a!==In&&mn(a,e)?(a[e]=t,!0):mn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(o[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:a,appContext:s,propsOptions:o}},r){let p;return!!t[r]||n!==In&&mn(n,r)||Xs(e,r)||(p=o[0])&&mn(p,r)||mn(a,r)||mn(ra,r)||mn(s.config.globalProperties,r)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:mn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function cl(n){return Q(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Io=!0;function km(n){const e=cr(n),t=n.proxy,a=n.ctx;Io=!1,e.beforeCreate&&ul(e.beforeCreate,n,"bc");const{data:s,computed:o,methods:r,watch:p,provide:i,inject:c,created:d,beforeMount:m,mounted:h,beforeUpdate:k,updated:g,activated:w,deactivated:E,beforeDestroy:_,beforeUnmount:T,destroyed:b,unmounted:S,render:N,renderTracked:I,renderTriggered:G,errorCaptured:M,serverPrefetch:Y,expose:O,inheritAttrs:F,components:V,directives:nn,filters:Ln}=e;if(c&&fm(c,a,null),r)for(const en in r){const W=r[en];an(W)&&(a[en]=W.bind(t))}if(s){const en=s.call(t,t);Sn(en)&&(n.data=Aa(en))}if(Io=!0,o)for(const en in o){const W=o[en],Vn=an(W)?W.bind(t,t):an(W.get)?W.get.bind(t,t):me,Ie=!an(W)&&an(W.set)?W.set.bind(t):me,ie=y({get:Vn,set:Ie});Object.defineProperty(a,en,{enumerable:!0,configurable:!0,get:()=>ie.value,set:$n=>ie.value=$n})}if(p)for(const en in p)ci(p[en],a,t,en);if(i){const en=an(i)?i.call(t):i;Reflect.ownKeys(en).forEach(W=>{oe(W,en[W])})}d&&ul(d,n,"c");function q(en,W){Q(W)?W.forEach(Vn=>en(Vn.bind(t))):W&&en(W.bind(t))}if(q(pm,m),q(sn,h),q(im,k),q(li,g),q(om,w),q(rm,E),q(mm,M),q(dm,I),q(um,G),q(pi,T),q(rt,S),q(cm,Y),Q(O))if(O.length){const en=n.exposed||(n.exposed={});O.forEach(W=>{Object.defineProperty(en,W,{get:()=>t[W],set:Vn=>t[W]=Vn})})}else n.exposed||(n.exposed={});N&&n.render===me&&(n.render=N),F!=null&&(n.inheritAttrs=F),V&&(n.components=V),nn&&(n.directives=nn)}function fm(n,e,t=me){Q(n)&&(n=So(n));for(const a in n){const s=n[a];let o;Sn(s)?"default"in s?o=gn(s.from||a,s.default,!0):o=gn(s.from||a):o=gn(s),jn(o)?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[a]=o}}function ul(n,e,t){he(Q(n)?n.map(a=>a.bind(e.proxy)):n.bind(e.proxy),e,t)}function ci(n,e,t,a){const s=a.includes(".")?ei(t,a):()=>t[a];if(Nn(n)){const o=e[n];an(o)&&on(s,o)}else if(an(n))on(s,n.bind(t));else if(Sn(n))if(Q(n))n.forEach(o=>ci(o,e,t,a));else{const o=an(n.handler)?n.handler.bind(t):e[n.handler];an(o)&&on(s,o,n)}}function cr(n){const e=n.type,{mixins:t,extends:a}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:r}}=n.appContext,p=o.get(e);let i;return p?i=p:!s.length&&!t&&!a?i=e:(i={},s.length&&s.forEach(c=>fs(i,c,r,!0)),fs(i,e,r)),Sn(e)&&o.set(e,i),i}function fs(n,e,t,a=!1){const{mixins:s,extends:o}=e;o&&fs(n,o,t,!0),s&&s.forEach(r=>fs(n,r,t,!0));for(const r in e)if(!(a&&r==="expose")){const p=gm[r]||t&&t[r];n[r]=p?p(n[r],e[r]):e[r]}return n}const gm={data:dl,props:ml,emits:ml,methods:aa,computed:aa,beforeCreate:qn,created:qn,beforeMount:qn,mounted:qn,beforeUpdate:qn,updated:qn,beforeDestroy:qn,beforeUnmount:qn,destroyed:qn,unmounted:qn,activated:qn,deactivated:qn,errorCaptured:qn,serverPrefetch:qn,components:aa,directives:aa,watch:_m,provide:dl,inject:vm};function dl(n,e){return e?n?function(){return Hn(an(n)?n.call(this,this):n,an(e)?e.call(this,this):e)}:e:n}function vm(n,e){return aa(So(n),So(e))}function So(n){if(Q(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function qn(n,e){return n?[...new Set([].concat(n,e))]:e}function aa(n,e){return n?Hn(Object.create(null),n,e):e}function ml(n,e){return n?Q(n)&&Q(e)?[...new Set([...n,...e])]:Hn(Object.create(null),cl(n),cl(e??{})):e}function _m(n,e){if(!n)return e;if(!e)return n;const t=Hn(Object.create(null),n);for(const a in e)t[a]=qn(n[a],e[a]);return t}function ui(){return{app:null,config:{isNativeTag:Xu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ym=0;function bm(n,e){return function(a,s=null){an(a)||(a=Hn({},a)),s!=null&&!Sn(s)&&(s=null);const o=ui(),r=new WeakSet;let p=!1;const i=o.app={_uid:ym++,_component:a,_props:s,_container:null,_context:o,_instance:null,version:Pi,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&an(c.install)?(r.add(c),c.install(i,...d)):an(c)&&(r.add(c),c(i,...d))),i},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),i},component(c,d){return d?(o.components[c]=d,i):o.components[c]},directive(c,d){return d?(o.directives[c]=d,i):o.directives[c]},mount(c,d,m){if(!p){const h=On(a,s);return h.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),d&&e?e(h,c):n(h,c,m),p=!0,i._container=c,c.__vue_app__=i,Rs(h.component)||h.component.proxy}},unmount(){p&&(n(null,i._container),delete i._container.__vue_app__)},provide(c,d){return o.provides[c]=d,i},runWithContext(c){const d=la;la=i;try{return c()}finally{la=d}}};return i}}let la=null;function oe(n,e){if(Bn){let t=Bn.provides;const a=Bn.parent&&Bn.parent.provides;a===t&&(t=Bn.provides=Object.create(a)),t[n]=e}}function gn(n,e,t=!1){const a=Bn||Mn;if(a||la){const s=a?a.parent==null?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:la._context.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&an(e)?e.call(a&&a.proxy):e}}function wm(n,e,t,a=!1){const s={},o={};us(o,Os,1),n.propsDefaults=Object.create(null),di(n,e,s,o);for(const r in n.propsOptions[0])r in s||(s[r]=void 0);t?n.props=a?s:Up(s):n.type.props?n.props=s:n.props=o,n.attrs=o}function Em(n,e,t,a){const{props:s,attrs:o,vnode:{patchFlag:r}}=n,p=cn(s),[i]=n.propsOptions;let c=!1;if((a||r>0)&&!(r&16)){if(r&8){const d=n.vnode.dynamicProps;for(let m=0;m<d.length;m++){let h=d[m];if(Ps(n.emitsOptions,h))continue;const k=e[h];if(i)if(mn(o,h))k!==o[h]&&(o[h]=k,c=!0);else{const g=le(h);s[g]=Po(i,p,g,k,n,!1)}else k!==o[h]&&(o[h]=k,c=!0)}}}else{di(n,e,s,o)&&(c=!0);let d;for(const m in p)(!e||!mn(e,m)&&((d=at(m))===m||!mn(e,d)))&&(i?t&&(t[m]!==void 0||t[d]!==void 0)&&(s[m]=Po(i,p,m,void 0,n,!0)):delete s[m]);if(o!==p)for(const m in o)(!e||!mn(e,m))&&(delete o[m],c=!0)}c&&Ne(n,"set","$attrs")}function di(n,e,t,a){const[s,o]=n.propsOptions;let r=!1,p;if(e)for(let i in e){if(Vt(i))continue;const c=e[i];let d;s&&mn(s,d=le(i))?!o||!o.includes(d)?t[d]=c:(p||(p={}))[d]=c:Ps(n.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,r=!0)}if(o){const i=cn(t),c=p||In;for(let d=0;d<o.length;d++){const m=o[d];t[m]=Po(s,i,m,c[m],n,!mn(c,m))}}return r}function Po(n,e,t,a,s,o){const r=n[t];if(r!=null){const p=mn(r,"default");if(p&&a===void 0){const i=r.default;if(r.type!==Function&&!r.skipFactory&&an(i)){const{propsDefaults:c}=s;if(t in c)a=c[t];else{const d=Ra(s);a=c[t]=i.call(null,e),d()}}else a=i}r[0]&&(o&&!p?a=!1:r[1]&&(a===""||a===at(t))&&(a=!0))}return a}function mi(n,e,t=!1){const a=e.propsCache,s=a.get(n);if(s)return s;const o=n.props,r={},p=[];let i=!1;if(!an(n)){const d=m=>{i=!0;const[h,k]=mi(m,e,!0);Hn(r,h),k&&p.push(...k)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!o&&!i)return Sn(n)&&a.set(n,Ot),Ot;if(Q(o))for(let d=0;d<o.length;d++){const m=le(o[d]);hl(m)&&(r[m]=In)}else if(o)for(const d in o){const m=le(d);if(hl(m)){const h=o[d],k=r[m]=Q(h)||an(h)?{type:h}:Hn({},h);if(k){const g=gl(Boolean,k.type),w=gl(String,k.type);k[0]=g>-1,k[1]=w<0||g<w,(g>-1||mn(k,"default"))&&p.push(m)}}}const c=[r,p];return Sn(n)&&a.set(n,c),c}function hl(n){return n[0]!=="$"&&!Vt(n)}function kl(n){return n===null?"null":typeof n=="function"?n.name||"":typeof n=="object"&&n.constructor&&n.constructor.name||""}function fl(n,e){return kl(n)===kl(e)}function gl(n,e){return Q(e)?e.findIndex(t=>fl(t,n)):an(e)&&fl(e,n)?0:-1}const hi=n=>n[0]==="_"||n==="$stable",ur=n=>Q(n)?n.map(ve):[ve(n)],Cm=(n,e,t)=>{if(e._n)return e;const a=Fd((...s)=>ur(e(...s)),t);return a._c=!1,a},ki=(n,e,t)=>{const a=n._ctx;for(const s in n){if(hi(s))continue;const o=n[s];if(an(o))e[s]=Cm(s,o,a);else if(o!=null){const r=ur(o);e[s]=()=>r}}},fi=(n,e)=>{const t=ur(e);n.slots.default=()=>t},Tm=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=cn(e),us(e,"_",t)):ki(e,n.slots={})}else n.slots={},e&&fi(n,e);us(n.slots,Os,1)},Im=(n,e,t)=>{const{vnode:a,slots:s}=n;let o=!0,r=In;if(a.shapeFlag&32){const p=e._;p?t&&p===1?o=!1:(Hn(s,e),!t&&p===1&&delete s._):(o=!e.$stable,ki(e,s)),r=e}else e&&(fi(n,e),r={default:1});if(o)for(const p in s)!hi(p)&&r[p]==null&&delete s[p]};function gs(n,e,t,a,s=!1){if(Q(n)){n.forEach((h,k)=>gs(h,e&&(Q(e)?e[k]:e),t,a,s));return}if(Nt(a)&&!s)return;const o=a.shapeFlag&4?Rs(a.component)||a.component.proxy:a.el,r=s?null:o,{i:p,r:i}=n,c=e&&e.r,d=p.refs===In?p.refs={}:p.refs,m=p.setupState;if(c!=null&&c!==i&&(Nn(c)?(d[c]=null,mn(m,c)&&(m[c]=null)):jn(c)&&(c.value=null)),an(i))et(i,p,12,[r,d]);else{const h=Nn(i),k=jn(i);if(h||k){const g=()=>{if(n.f){const w=h?mn(m,i)?m[i]:d[i]:i.value;s?Q(w)&&Jo(w,o):Q(w)?w.includes(o)||w.push(o):h?(d[i]=[o],mn(m,i)&&(m[i]=d[i])):(i.value=[o],n.k&&(d[n.k]=i.value))}else h?(d[i]=r,mn(m,i)&&(m[i]=r)):k&&(i.value=r,n.k&&(d[n.k]=r))};r?(g.id=-1,Xn(g,t)):g()}}}let Ke=!1;const Sm=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Pm=n=>n.namespaceURI.includes("MathML"),Za=n=>{if(Sm(n))return"svg";if(Pm(n))return"mathml"},Qa=n=>n.nodeType===8;function xm(n){const{mt:e,p:t,o:{patchProp:a,createText:s,nextSibling:o,parentNode:r,remove:p,insert:i,createComment:c}}=n,d=(b,S)=>{if(!S.hasChildNodes()){t(null,b,S),hs(),S._vnode=b;return}Ke=!1,m(S.firstChild,b,null,null,null),hs(),S._vnode=b,Ke&&console.error("Hydration completed but contains mismatches.")},m=(b,S,N,I,G,M=!1)=>{const Y=Qa(b)&&b.data==="[",O=()=>w(b,S,N,I,G,Y),{type:F,ref:V,shapeFlag:nn,patchFlag:Ln}=S;let xn=b.nodeType;S.el=b,Ln===-2&&(M=!1,S.dynamicChildren=null);let q=null;switch(F){case Ut:xn!==3?S.children===""?(i(S.el=s(""),r(b),b),q=b):q=O():(b.data!==S.children&&(Ke=!0,b.data=S.children),q=o(b));break;case re:T(b)?(q=o(b),_(S.el=b.content.firstChild,b,N)):xn!==8||Y?q=O():q=o(b);break;case pa:if(Y&&(b=o(b),xn=b.nodeType),xn===1||xn===3){q=b;const en=!S.children.length;for(let W=0;W<S.staticCount;W++)en&&(S.children+=q.nodeType===1?q.outerHTML:q.data),W===S.staticCount-1&&(S.anchor=q),q=o(q);return Y?o(q):q}else O();break;case Gn:Y?q=g(b,S,N,I,G,M):q=O();break;default:if(nn&1)(xn!==1||S.type.toLowerCase()!==b.tagName.toLowerCase())&&!T(b)?q=O():q=h(b,S,N,I,G,M);else if(nn&6){S.slotScopeIds=G;const en=r(b);if(Y?q=E(b):Qa(b)&&b.data==="teleport start"?q=E(b,b.data,"teleport end"):q=o(b),e(S,en,null,N,I,Za(en),M),Nt(S)){let W;Y?(W=On(Gn),W.anchor=q?q.previousSibling:en.lastChild):W=b.nodeType===3?Ti(""):On("div"),W.el=b,S.component.subTree=W}}else nn&64?xn!==8?q=O():q=S.type.hydrate(b,S,N,I,G,M,n,k):nn&128&&(q=S.type.hydrate(b,S,N,I,Za(r(b)),G,M,n,m))}return V!=null&&gs(V,null,I,S),q},h=(b,S,N,I,G,M)=>{M=M||!!S.dynamicChildren;const{type:Y,props:O,patchFlag:F,shapeFlag:V,dirs:nn,transition:Ln}=S,xn=Y==="input"||Y==="option";if(xn||F!==-1){nn&&xe(S,null,N,"created");let q=!1;if(T(b)){q=gi(I,Ln)&&N&&N.vnode.props&&N.vnode.props.appear;const W=b.content.firstChild;q&&Ln.beforeEnter(W),_(W,b,N),S.el=b=W}if(V&16&&!(O&&(O.innerHTML||O.textContent))){let W=k(b.firstChild,S,b,N,I,G,M);for(;W;){Ke=!0;const Vn=W;W=W.nextSibling,p(Vn)}}else V&8&&b.textContent!==S.children&&(Ke=!0,b.textContent=S.children);if(O)if(xn||!M||F&48)for(const W in O)(xn&&(W.endsWith("value")||W==="indeterminate")||Pa(W)&&!Vt(W)||W[0]===".")&&a(b,W,null,O[W],void 0,void 0,N);else O.onClick&&a(b,"onClick",null,O.onClick,void 0,void 0,N);let en;(en=O&&O.onVnodeBeforeMount)&&ue(en,N,S),nn&&xe(S,null,N,"beforeMount"),((en=O&&O.onVnodeMounted)||nn||q)&&ni(()=>{en&&ue(en,N,S),q&&Ln.enter(b),nn&&xe(S,null,N,"mounted")},I)}return b.nextSibling},k=(b,S,N,I,G,M,Y)=>{Y=Y||!!S.dynamicChildren;const O=S.children,F=O.length;for(let V=0;V<F;V++){const nn=Y?O[V]:O[V]=ve(O[V]);if(b)b=m(b,nn,I,G,M,Y);else{if(nn.type===Ut&&!nn.children)continue;Ke=!0,t(null,nn,N,null,I,G,Za(N),M)}}return b},g=(b,S,N,I,G,M)=>{const{slotScopeIds:Y}=S;Y&&(G=G?G.concat(Y):Y);const O=r(b),F=k(o(b),S,O,N,I,G,M);return F&&Qa(F)&&F.data==="]"?o(S.anchor=F):(Ke=!0,i(S.anchor=c("]"),O,F),F)},w=(b,S,N,I,G,M)=>{if(Ke=!0,S.el=null,M){const F=E(b);for(;;){const V=o(b);if(V&&V!==F)p(V);else break}}const Y=o(b),O=r(b);return p(b),t(null,S,O,Y,N,I,Za(O),G),Y},E=(b,S="[",N="]")=>{let I=0;for(;b;)if(b=o(b),b&&Qa(b)&&(b.data===S&&I++,b.data===N)){if(I===0)return o(b);I--}return b},_=(b,S,N)=>{const I=S.parentNode;I&&I.replaceChild(b,S);let G=N;for(;G;)G.vnode.el===S&&(G.vnode.el=G.subTree.el=b),G=G.parent},T=b=>b.nodeType===1&&b.tagName.toLowerCase()==="template";return[d,m]}const Xn=ni;function Am(n){return Lm(n,xm)}function Lm(n,e){const t=Pp();t.__VUE__=!0;const{insert:a,remove:s,patchProp:o,createElement:r,createText:p,createComment:i,setText:c,setElementText:d,parentNode:m,nextSibling:h,setScopeId:k=me,insertStaticContent:g}=n,w=(f,v,C,A=null,x=null,H=null,z=void 0,D=null,j=!!v.dynamicChildren)=>{if(f===v)return;f&&!kt(f,v)&&(A=P(f),$n(f,x,H,!0),f=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:L,ref:U,shapeFlag:Z}=v;switch(L){case Ut:E(f,v,C,A);break;case re:_(f,v,C,A);break;case pa:f==null&&T(v,C,A,z);break;case Gn:V(f,v,C,A,x,H,z,D,j);break;default:Z&1?N(f,v,C,A,x,H,z,D,j):Z&6?nn(f,v,C,A,x,H,z,D,j):(Z&64||Z&128)&&L.process(f,v,C,A,x,H,z,D,j,J)}U!=null&&x&&gs(U,f&&f.ref,H,v||f,!v)},E=(f,v,C,A)=>{if(f==null)a(v.el=p(v.children),C,A);else{const x=v.el=f.el;v.children!==f.children&&c(x,v.children)}},_=(f,v,C,A)=>{f==null?a(v.el=i(v.children||""),C,A):v.el=f.el},T=(f,v,C,A)=>{[f.el,f.anchor]=g(f.children,v,C,A,f.el,f.anchor)},b=({el:f,anchor:v},C,A)=>{let x;for(;f&&f!==v;)x=h(f),a(f,C,A),f=x;a(v,C,A)},S=({el:f,anchor:v})=>{let C;for(;f&&f!==v;)C=h(f),s(f),f=C;s(v)},N=(f,v,C,A,x,H,z,D,j)=>{v.type==="svg"?z="svg":v.type==="math"&&(z="mathml"),f==null?I(v,C,A,x,H,z,D,j):Y(f,v,x,H,z,D,j)},I=(f,v,C,A,x,H,z,D)=>{let j,L;const{props:U,shapeFlag:Z,transition:X,dirs:tn}=f;if(j=f.el=r(f.type,H,U&&U.is,U),Z&8?d(j,f.children):Z&16&&M(f.children,j,null,A,x,Zs(f,H),z,D),tn&&xe(f,null,A,"created"),G(j,f,f.scopeId,z,A),U){for(const wn in U)wn!=="value"&&!Vt(wn)&&o(j,wn,null,U[wn],H,f.children,A,x,Dn);"value"in U&&o(j,"value",null,U.value,H),(L=U.onVnodeBeforeMount)&&ue(L,A,f)}tn&&xe(f,null,A,"beforeMount");const ln=gi(x,X);ln&&X.beforeEnter(j),a(j,v,C),((L=U&&U.onVnodeMounted)||ln||tn)&&Xn(()=>{L&&ue(L,A,f),ln&&X.enter(j),tn&&xe(f,null,A,"mounted")},x)},G=(f,v,C,A,x)=>{if(C&&k(f,C),A)for(let H=0;H<A.length;H++)k(f,A[H]);if(x){let H=x.subTree;if(v===H){const z=x.vnode;G(f,z,z.scopeId,z.slotScopeIds,x.parent)}}},M=(f,v,C,A,x,H,z,D,j=0)=>{for(let L=j;L<f.length;L++){const U=f[L]=D?Xe(f[L]):ve(f[L]);w(null,U,v,C,A,x,H,z,D)}},Y=(f,v,C,A,x,H,z)=>{const D=v.el=f.el;let{patchFlag:j,dynamicChildren:L,dirs:U}=v;j|=f.patchFlag&16;const Z=f.props||In,X=v.props||In;let tn;if(C&&ut(C,!1),(tn=X.onVnodeBeforeUpdate)&&ue(tn,C,v,f),U&&xe(v,f,C,"beforeUpdate"),C&&ut(C,!0),L?O(f.dynamicChildren,L,D,C,A,Zs(v,x),H):z||W(f,v,D,null,C,A,Zs(v,x),H,!1),j>0){if(j&16)F(D,v,Z,X,C,A,x);else if(j&2&&Z.class!==X.class&&o(D,"class",null,X.class,x),j&4&&o(D,"style",Z.style,X.style,x),j&8){const ln=v.dynamicProps;for(let wn=0;wn<ln.length;wn++){const An=ln[wn],zn=Z[An],fe=X[An];(fe!==zn||An==="value")&&o(D,An,zn,fe,x,f.children,C,A,Dn)}}j&1&&f.children!==v.children&&d(D,v.children)}else!z&&L==null&&F(D,v,Z,X,C,A,x);((tn=X.onVnodeUpdated)||U)&&Xn(()=>{tn&&ue(tn,C,v,f),U&&xe(v,f,C,"updated")},A)},O=(f,v,C,A,x,H,z)=>{for(let D=0;D<v.length;D++){const j=f[D],L=v[D],U=j.el&&(j.type===Gn||!kt(j,L)||j.shapeFlag&70)?m(j.el):C;w(j,L,U,null,A,x,H,z,!0)}},F=(f,v,C,A,x,H,z)=>{if(C!==A){if(C!==In)for(const D in C)!Vt(D)&&!(D in A)&&o(f,D,C[D],null,z,v.children,x,H,Dn);for(const D in A){if(Vt(D))continue;const j=A[D],L=C[D];j!==L&&D!=="value"&&o(f,D,L,j,z,v.children,x,H,Dn)}"value"in A&&o(f,"value",C.value,A.value,z)}},V=(f,v,C,A,x,H,z,D,j)=>{const L=v.el=f?f.el:p(""),U=v.anchor=f?f.anchor:p("");let{patchFlag:Z,dynamicChildren:X,slotScopeIds:tn}=v;tn&&(D=D?D.concat(tn):tn),f==null?(a(L,C,A),a(U,C,A),M(v.children||[],C,U,x,H,z,D,j)):Z>0&&Z&64&&X&&f.dynamicChildren?(O(f.dynamicChildren,X,C,x,H,z,D),(v.key!=null||x&&v===x.subTree)&&vi(f,v,!0)):W(f,v,C,U,x,H,z,D,j)},nn=(f,v,C,A,x,H,z,D,j)=>{v.slotScopeIds=D,f==null?v.shapeFlag&512?x.ctx.activate(v,C,A,z,j):Ln(v,C,A,x,H,z,j):xn(f,v,j)},Ln=(f,v,C,A,x,H,z)=>{const D=f.component=$m(f,A,x);if(Oa(f)&&(D.ctx.renderer=J),zm(D),D.asyncDep){if(x&&x.registerDep(D,q),!f.el){const j=D.subTree=On(re);_(null,j,v,C)}}else q(D,f,v,C,x,H,z)},xn=(f,v,C)=>{const A=v.component=f.component;if(Wd(f,v,C))if(A.asyncDep&&!A.asyncResolved){en(A,v,C);return}else A.next=v,zd(A.update),A.effect.dirty=!0,A.update();else v.el=f.el,A.vnode=v},q=(f,v,C,A,x,H,z)=>{const D=()=>{if(f.isMounted){let{next:U,bu:Z,u:X,parent:tn,vnode:ln}=f;{const St=_i(f);if(St){U&&(U.el=ln.el,en(f,U,z)),St.asyncDep.then(()=>{f.isUnmounted||D()});return}}let wn=U,An;ut(f,!1),U?(U.el=ln.el,en(f,U,z)):U=ln,Z&&ps(Z),(An=U.props&&U.props.onVnodeBeforeUpdate)&&ue(An,tn,U,ln),ut(f,!0);const zn=Ws(f),fe=f.subTree;f.subTree=zn,w(fe,zn,m(fe.el),P(fe),f,x,H),U.el=zn.el,wn===null&&Jd(f,zn.el),X&&Xn(X,x),(An=U.props&&U.props.onVnodeUpdated)&&Xn(()=>ue(An,tn,U,ln),x)}else{let U;const{el:Z,props:X}=v,{bm:tn,m:ln,parent:wn}=f,An=Nt(v);if(ut(f,!1),tn&&ps(tn),!An&&(U=X&&X.onVnodeBeforeMount)&&ue(U,wn,v),ut(f,!0),Z&&Cn){const zn=()=>{f.subTree=Ws(f),Cn(Z,f.subTree,f,x,null)};An?v.type.__asyncLoader().then(()=>!f.isUnmounted&&zn()):zn()}else{const zn=f.subTree=Ws(f);w(null,zn,C,A,f,x,H),v.el=zn.el}if(ln&&Xn(ln,x),!An&&(U=X&&X.onVnodeMounted)){const zn=v;Xn(()=>ue(U,wn,zn),x)}(v.shapeFlag&256||wn&&Nt(wn.vnode)&&wn.vnode.shapeFlag&256)&&f.a&&Xn(f.a,x),f.isMounted=!0,v=C=A=null}},j=f.effect=new Qo(D,me,()=>Ss(L),f.scope),L=f.update=()=>{j.dirty&&j.run()};L.id=f.uid,ut(f,!0),L()},en=(f,v,C)=>{v.component=f;const A=f.vnode.props;f.vnode=v,f.next=null,Em(f,v.props,A,C),Im(f,v.children,C),wt(),rl(f),Et()},W=(f,v,C,A,x,H,z,D,j=!1)=>{const L=f&&f.children,U=f?f.shapeFlag:0,Z=v.children,{patchFlag:X,shapeFlag:tn}=v;if(X>0){if(X&128){Ie(L,Z,C,A,x,H,z,D,j);return}else if(X&256){Vn(L,Z,C,A,x,H,z,D,j);return}}tn&8?(U&16&&Dn(L,x,H),Z!==L&&d(C,Z)):U&16?tn&16?Ie(L,Z,C,A,x,H,z,D,j):Dn(L,x,H,!0):(U&8&&d(C,""),tn&16&&M(Z,C,A,x,H,z,D,j))},Vn=(f,v,C,A,x,H,z,D,j)=>{f=f||Ot,v=v||Ot;const L=f.length,U=v.length,Z=Math.min(L,U);let X;for(X=0;X<Z;X++){const tn=v[X]=j?Xe(v[X]):ve(v[X]);w(f[X],tn,C,null,x,H,z,D,j)}L>U?Dn(f,x,H,!0,!1,Z):M(v,C,A,x,H,z,D,j,Z)},Ie=(f,v,C,A,x,H,z,D,j)=>{let L=0;const U=v.length;let Z=f.length-1,X=U-1;for(;L<=Z&&L<=X;){const tn=f[L],ln=v[L]=j?Xe(v[L]):ve(v[L]);if(kt(tn,ln))w(tn,ln,C,null,x,H,z,D,j);else break;L++}for(;L<=Z&&L<=X;){const tn=f[Z],ln=v[X]=j?Xe(v[X]):ve(v[X]);if(kt(tn,ln))w(tn,ln,C,null,x,H,z,D,j);else break;Z--,X--}if(L>Z){if(L<=X){const tn=X+1,ln=tn<U?v[tn].el:A;for(;L<=X;)w(null,v[L]=j?Xe(v[L]):ve(v[L]),C,ln,x,H,z,D,j),L++}}else if(L>X)for(;L<=Z;)$n(f[L],x,H,!0),L++;else{const tn=L,ln=L,wn=new Map;for(L=ln;L<=X;L++){const te=v[L]=j?Xe(v[L]):ve(v[L]);te.key!=null&&wn.set(te.key,L)}let An,zn=0;const fe=X-ln+1;let St=!1,Jr=0;const Zt=new Array(fe);for(L=0;L<fe;L++)Zt[L]=0;for(L=tn;L<=Z;L++){const te=f[L];if(zn>=fe){$n(te,x,H,!0);continue}let Pe;if(te.key!=null)Pe=wn.get(te.key);else for(An=ln;An<=X;An++)if(Zt[An-ln]===0&&kt(te,v[An])){Pe=An;break}Pe===void 0?$n(te,x,H,!0):(Zt[Pe-ln]=L+1,Pe>=Jr?Jr=Pe:St=!0,w(te,v[Pe],C,null,x,H,z,D,j),zn++)}const Yr=St?Om(Zt):Ot;for(An=Yr.length-1,L=fe-1;L>=0;L--){const te=ln+L,Pe=v[te],Xr=te+1<U?v[te+1].el:A;Zt[L]===0?w(null,Pe,C,Xr,x,H,z,D,j):St&&(An<0||L!==Yr[An]?ie(Pe,C,Xr,2):An--)}}},ie=(f,v,C,A,x=null)=>{const{el:H,type:z,transition:D,children:j,shapeFlag:L}=f;if(L&6){ie(f.component.subTree,v,C,A);return}if(L&128){f.suspense.move(v,C,A);return}if(L&64){z.move(f,v,C,J);return}if(z===Gn){a(H,v,C);for(let Z=0;Z<j.length;Z++)ie(j[Z],v,C,A);a(f.anchor,v,C);return}if(z===pa){b(f,v,C);return}if(A!==2&&L&1&&D)if(A===0)D.beforeEnter(H),a(H,v,C),Xn(()=>D.enter(H),x);else{const{leave:Z,delayLeave:X,afterLeave:tn}=D,ln=()=>a(H,v,C),wn=()=>{Z(H,()=>{ln(),tn&&tn()})};X?X(H,ln,wn):wn()}else a(H,v,C)},$n=(f,v,C,A=!1,x=!1)=>{const{type:H,props:z,ref:D,children:j,dynamicChildren:L,shapeFlag:U,patchFlag:Z,dirs:X}=f;if(D!=null&&gs(D,null,C,f,!0),U&256){v.ctx.deactivate(f);return}const tn=U&1&&X,ln=!Nt(f);let wn;if(ln&&(wn=z&&z.onVnodeBeforeUnmount)&&ue(wn,v,f),U&6)Se(f.component,C,A);else{if(U&128){f.suspense.unmount(C,A);return}tn&&xe(f,null,v,"beforeUnmount"),U&64?f.type.remove(f,v,C,x,J,A):L&&(H!==Gn||Z>0&&Z&64)?Dn(L,v,C,!1,!0):(H===Gn&&Z&384||!x&&U&16)&&Dn(j,v,C),A&&ee(f)}(ln&&(wn=z&&z.onVnodeUnmounted)||tn)&&Xn(()=>{wn&&ue(wn,v,f),tn&&xe(f,null,v,"unmounted")},C)},ee=f=>{const{type:v,el:C,anchor:A,transition:x}=f;if(v===Gn){Re(C,A);return}if(v===pa){S(f);return}const H=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(f.shapeFlag&1&&x&&!x.persisted){const{leave:z,delayLeave:D}=x,j=()=>z(C,H);D?D(f.el,H,j):j()}else H()},Re=(f,v)=>{let C;for(;f!==v;)C=h(f),s(f),f=C;s(v)},Se=(f,v,C)=>{const{bum:A,scope:x,update:H,subTree:z,um:D}=f;A&&ps(A),x.stop(),H&&(H.active=!1,$n(z,f,v,C)),D&&Xn(D,v),Xn(()=>{f.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Dn=(f,v,C,A=!1,x=!1,H=0)=>{for(let z=H;z<f.length;z++)$n(f[z],v,C,A,x)},P=f=>f.shapeFlag&6?P(f.component.subTree):f.shapeFlag&128?f.suspense.next():h(f.anchor||f.el);let B=!1;const $=(f,v,C)=>{f==null?v._vnode&&$n(v._vnode,null,null,!0):w(v._vnode||null,f,v,null,null,null,C),B||(B=!0,rl(),hs(),B=!1),v._vnode=f},J={p:w,um:$n,m:ie,r:ee,mt:Ln,mc:M,pc:W,pbc:O,n:P,o:n};let un,Cn;return e&&([un,Cn]=e(J)),{render:$,hydrate:un,createApp:bm($,un)}}function Zs({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ut({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function gi(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vi(n,e,t=!1){const a=n.children,s=e.children;if(Q(a)&&Q(s))for(let o=0;o<a.length;o++){const r=a[o];let p=s[o];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=s[o]=Xe(s[o]),p.el=r.el),t||vi(r,p)),p.type===Ut&&(p.el=r.el)}}function Om(n){const e=n.slice(),t=[0];let a,s,o,r,p;const i=n.length;for(a=0;a<i;a++){const c=n[a];if(c!==0){if(s=t[t.length-1],n[s]<c){e[a]=s,t.push(a);continue}for(o=0,r=t.length-1;o<r;)p=o+r>>1,n[t[p]]<c?o=p+1:r=p;c<n[t[o]]&&(o>0&&(e[a]=t[o-1]),t[o]=a)}}for(o=t.length,r=t[o-1];o-- >0;)t[o]=r,r=e[r];return t}function _i(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:_i(e)}const Rm=n=>n.__isTeleport,Gn=Symbol.for("v-fgt"),Ut=Symbol.for("v-txt"),re=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),ia=[];let ye=null;function yi(n=!1){ia.push(ye=n?null:[])}function Vm(){ia.pop(),ye=ia[ia.length-1]||null}let va=1;function vl(n){va+=n}function bi(n){return n.dynamicChildren=va>0?ye||Ot:null,Vm(),va>0&&ye&&ye.push(n),n}function b_(n,e,t,a,s,o){return bi(Ci(n,e,t,a,s,o,!0))}function wi(n,e,t,a,s){return bi(On(n,e,t,a,s,!0))}function vs(n){return n?n.__v_isVNode===!0:!1}function kt(n,e){return n.type===e.type&&n.key===e.key}const Os="__vInternal",Ei=({key:n})=>n??null,is=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Nn(n)||jn(n)||an(n)?{i:Mn,r:n,k:e,f:!!t}:n:null);function Ci(n,e=null,t=null,a=0,s=null,o=n===Gn?0:1,r=!1,p=!1){const i={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ei(e),ref:e&&is(e),scopeId:xs,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:a,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mn};return p?(dr(i,t),o&128&&n.normalize(i)):t&&(i.shapeFlag|=Nn(t)?8:16),va>0&&!r&&ye&&(i.patchFlag>0||o&6)&&i.patchFlag!==32&&ye.push(i),i}const On=Dm;function Dm(n,e=null,t=null,a=0,s=null,o=!1){if((!n||n===Yd)&&(n=re),vs(n)){const p=tt(n,e,!0);return t&&dr(p,t),va>0&&!o&&ye&&(p.shapeFlag&6?ye[ye.indexOf(n)]=p:ye.push(p)),p.patchFlag|=-2,p}if(qm(n)&&(n=n.__vccOpts),e){e=Hm(e);let{class:p,style:i}=e;p&&!Nn(p)&&(e.class=Zo(p)),Sn(i)&&(Kp(i)&&!Q(i)&&(i=Hn({},i)),e.style=Xo(i))}const r=Nn(n)?1:Zd(n)?128:Rm(n)?64:Sn(n)?4:an(n)?2:0;return Ci(n,e,t,a,s,r,o,!0)}function Hm(n){return n?Kp(n)||Os in n?Hn({},n):n:null}function tt(n,e,t=!1){const{props:a,ref:s,patchFlag:o,children:r}=n,p=e?Nm(a||{},e):a;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:p,key:p&&Ei(p),ref:e&&e.ref?t&&s?Q(s)?s.concat(is(e)):[s,is(e)]:is(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Gn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tt(n.ssContent),ssFallback:n.ssFallback&&tt(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Ti(n=" ",e=0){return On(Ut,null,n,e)}function w_(n,e){const t=On(pa,null,n);return t.staticCount=e,t}function E_(n="",e=!1){return e?(yi(),wi(re,null,n)):On(re,null,n)}function ve(n){return n==null||typeof n=="boolean"?On(re):Q(n)?On(Gn,null,n.slice()):typeof n=="object"?Xe(n):On(Ut,null,String(n))}function Xe(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tt(n)}function dr(n,e){let t=0;const{shapeFlag:a}=n;if(e==null)e=null;else if(Q(e))t=16;else if(typeof e=="object")if(a&65){const s=e.default;s&&(s._c&&(s._d=!1),dr(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Os in e)?e._ctx=Mn:s===3&&Mn&&(Mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else an(e)?(e={default:e,_ctx:Mn},t=32):(e=String(e),a&64?(t=16,e=[Ti(e)]):t=8);n.children=e,n.shapeFlag|=t}function Nm(...n){const e={};for(let t=0;t<n.length;t++){const a=n[t];for(const s in a)if(s==="class")e.class!==a.class&&(e.class=Zo([e.class,a.class]));else if(s==="style")e.style=Xo([e.style,a.style]);else if(Pa(s)){const o=e[s],r=a[s];r&&o!==r&&!(Q(o)&&o.includes(r))&&(e[s]=o?[].concat(o,r):r)}else s!==""&&(e[s]=a[s])}return e}function ue(n,e,t,a=null){he(n,e,7,[t,a])}const Mm=ui();let jm=0;function $m(n,e,t){const a=n.type,s=(e?e.appContext:n.appContext)||Mm,o={uid:jm++,vnode:n,type:a,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mi(a,s),emitsOptions:Zp(a,s),emit:null,emitted:null,propsDefaults:In,inheritAttrs:a.inheritAttrs,ctx:In,data:In,props:In,attrs:In,slots:In,refs:In,setupState:In,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Kd.bind(null,o),n.ce&&n.ce(o),o}let Bn=null;const Ct=()=>Bn||Mn;let _s,xo;{const n=Pp(),e=(t,a)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(a),o=>{s.length>1?s.forEach(r=>r(o)):s[0](o)}};_s=e("__VUE_INSTANCE_SETTERS__",t=>Bn=t),xo=e("__VUE_SSR_SETTERS__",t=>Va=t)}const Ra=n=>{const e=Bn;return _s(n),n.scope.on(),()=>{n.scope.off(),_s(e)}},_l=()=>{Bn&&Bn.scope.off(),_s(null)};function Ii(n){return n.vnode.shapeFlag&4}let Va=!1;function zm(n,e=!1){e&&xo(e);const{props:t,children:a}=n.vnode,s=Ii(n);wm(n,t,s,e),Tm(n,a);const o=s?Bm(n,e):void 0;return e&&xo(!1),o}function Bm(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Fp(new Proxy(n.ctx,hm));const{setup:a}=t;if(a){const s=n.setupContext=a.length>1?Km(n):null,o=Ra(n);wt();const r=et(a,n,0,[n.props,s]);if(Et(),o(),Tp(r)){if(r.then(_l,_l),e)return r.then(p=>{yl(n,p,e)}).catch(p=>{La(p,n,0)});n.asyncDep=r}else yl(n,r,e)}else Si(n,e)}function yl(n,e,t){an(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Sn(e)&&(n.setupState=Wp(e)),Si(n,t)}let bl;function Si(n,e,t){const a=n.type;if(!n.render){if(!e&&bl&&!a.render){const s=a.template||cr(n).template;if(s){const{isCustomElement:o,compilerOptions:r}=n.appContext.config,{delimiters:p,compilerOptions:i}=a,c=Hn(Hn({isCustomElement:o,delimiters:p},r),i);a.render=bl(s,c)}}n.render=a.render||me}{const s=Ra(n);wt();try{km(n)}finally{Et(),s()}}}function Um(n){return n.attrsProxy||(n.attrsProxy=new Proxy(n.attrs,{get(e,t){return ne(n,"get","$attrs"),e[t]}}))}function Km(n){const e=t=>{n.exposed=t||{}};return{get attrs(){return Um(n)},slots:n.slots,emit:n.emit,expose:e}}function Rs(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Wp(Fp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ra)return ra[t](n)},has(e,t){return t in e||t in ra}}))}function Fm(n,e=!0){return an(n)?n.displayName||n.name:n.name||e&&n.__name}function qm(n){return an(n)&&"__vccOpts"in n}const y=(n,e)=>Od(n,e,Va);function C_(n,e,t=In){const a=Ct(),s=le(e),o=at(e),r=Is((i,c)=>{let d;return em(()=>{const m=n[e];Le(d,m)&&(d=m,c())}),{get(){return i(),t.get?t.get(d):d},set(m){const h=a.vnode.props;!(h&&(e in h||s in h||o in h)&&(`onUpdate:${e}`in h||`onUpdate:${s}`in h||`onUpdate:${o}`in h))&&Le(m,d)&&(d=m,c()),a.emit(`update:${e}`,t.set?t.set(m):m)}}}),p=e==="modelValue"?"modelModifiers":`${e}Modifiers`;return r[Symbol.iterator]=()=>{let i=0;return{next(){return i<2?{value:i++?n[p]||{}:r,done:!1}:{done:!0}}}},r}function l(n,e,t){const a=arguments.length;return a===2?Sn(e)&&!Q(e)?vs(e)?On(n,null,[e]):On(n,e):On(n,null,e):(a>3?t=Array.prototype.slice.call(arguments,2):a===3&&vs(t)&&(t=[t]),On(n,e,t))}const Pi="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Gm="http://www.w3.org/2000/svg",Wm="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,wl=Ze&&Ze.createElement("template"),Jm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,a)=>{const s=e==="svg"?Ze.createElementNS(Gm,n):e==="mathml"?Ze.createElementNS(Wm,n):Ze.createElement(n,t?{is:t}:void 0);return n==="select"&&a&&a.multiple!=null&&s.setAttribute("multiple",a.multiple),s},createText:n=>Ze.createTextNode(n),createComment:n=>Ze.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ze.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,a,s,o){const r=t?t.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===o||!(s=s.nextSibling)););else{wl.innerHTML=a==="svg"?`<svg>${n}</svg>`:a==="mathml"?`<math>${n}</math>`:n;const p=wl.content;if(a==="svg"||a==="mathml"){const i=p.firstChild;for(;i.firstChild;)p.appendChild(i.firstChild);p.removeChild(i)}e.insertBefore(p,t)}return[r?r.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Fe="transition",Qt="animation",Kt=Symbol("_vtc"),je=(n,{slots:e})=>l(sm,Ai(n),e);je.displayName="Transition";const xi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ym=je.props=Hn({},ai,xi),dt=(n,e=[])=>{Q(n)?n.forEach(t=>t(...e)):n&&n(...e)},El=n=>n?Q(n)?n.some(e=>e.length>1):n.length>1:!1;function Ai(n){const e={};for(const V in n)V in xi||(e[V]=n[V]);if(n.css===!1)return e;const{name:t="v",type:a,duration:s,enterFromClass:o=`${t}-enter-from`,enterActiveClass:r=`${t}-enter-active`,enterToClass:p=`${t}-enter-to`,appearFromClass:i=o,appearActiveClass:c=r,appearToClass:d=p,leaveFromClass:m=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:k=`${t}-leave-to`}=n,g=Xm(s),w=g&&g[0],E=g&&g[1],{onBeforeEnter:_,onEnter:T,onEnterCancelled:b,onLeave:S,onLeaveCancelled:N,onBeforeAppear:I=_,onAppear:G=T,onAppearCancelled:M=b}=e,Y=(V,nn,Ln)=>{Ge(V,nn?d:p),Ge(V,nn?c:r),Ln&&Ln()},O=(V,nn)=>{V._isLeaving=!1,Ge(V,m),Ge(V,k),Ge(V,h),nn&&nn()},F=V=>(nn,Ln)=>{const xn=V?G:T,q=()=>Y(nn,V,Ln);dt(xn,[nn,q]),Cl(()=>{Ge(nn,V?i:o),De(nn,V?d:p),El(xn)||Tl(nn,a,w,q)})};return Hn(e,{onBeforeEnter(V){dt(_,[V]),De(V,o),De(V,r)},onBeforeAppear(V){dt(I,[V]),De(V,i),De(V,c)},onEnter:F(!1),onAppear:F(!0),onLeave(V,nn){V._isLeaving=!0;const Ln=()=>O(V,nn);De(V,m),Oi(),De(V,h),Cl(()=>{V._isLeaving&&(Ge(V,m),De(V,k),El(S)||Tl(V,a,E,Ln))}),dt(S,[V,Ln])},onEnterCancelled(V){Y(V,!1),dt(b,[V])},onAppearCancelled(V){Y(V,!0),dt(M,[V])},onLeaveCancelled(V){O(V),dt(N,[V])}})}function Xm(n){if(n==null)return null;if(Sn(n))return[Qs(n.enter),Qs(n.leave)];{const e=Qs(n);return[e,e]}}function Qs(n){return td(n)}function De(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Kt]||(n[Kt]=new Set)).add(e)}function Ge(n,e){e.split(/\s+/).forEach(a=>a&&n.classList.remove(a));const t=n[Kt];t&&(t.delete(e),t.size||(n[Kt]=void 0))}function Cl(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Zm=0;function Tl(n,e,t,a){const s=n._endId=++Zm,o=()=>{s===n._endId&&a()};if(t)return setTimeout(o,t);const{type:r,timeout:p,propCount:i}=Li(n,e);if(!r)return a();const c=r+"end";let d=0;const m=()=>{n.removeEventListener(c,h),o()},h=k=>{k.target===n&&++d>=i&&m()};setTimeout(()=>{d<i&&m()},p+1),n.addEventListener(c,h)}function Li(n,e){const t=window.getComputedStyle(n),a=g=>(t[g]||"").split(", "),s=a(`${Fe}Delay`),o=a(`${Fe}Duration`),r=Il(s,o),p=a(`${Qt}Delay`),i=a(`${Qt}Duration`),c=Il(p,i);let d=null,m=0,h=0;e===Fe?r>0&&(d=Fe,m=r,h=o.length):e===Qt?c>0&&(d=Qt,m=c,h=i.length):(m=Math.max(r,c),d=m>0?r>c?Fe:Qt:null,h=d?d===Fe?o.length:i.length:0);const k=d===Fe&&/\b(transform|all)(,|$)/.test(a(`${Fe}Property`).toString());return{type:d,timeout:m,propCount:h,hasTransform:k}}function Il(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,a)=>Sl(t)+Sl(n[a])))}function Sl(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Oi(){return document.body.offsetHeight}function Qm(n,e,t){const a=n[Kt];a&&(e=(e?[e,...a]:[...a]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ys=Symbol("_vod"),Ri=Symbol("_vsh"),T_={beforeMount(n,{value:e},{transition:t}){n[ys]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):na(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:a}){!e!=!t&&(a?e?(a.beforeEnter(n),na(n,!0),a.enter(n)):a.leave(n,()=>{na(n,!1)}):na(n,e))},beforeUnmount(n,{value:e}){na(n,e)}};function na(n,e){n.style.display=e?n[ys]:"none",n[Ri]=!e}const n0=Symbol(""),e0=/(^|;)\s*display\s*:/;function t0(n,e,t){const a=n.style,s=Nn(t);let o=!1;if(t&&!s){if(e)if(Nn(e))for(const r of e.split(";")){const p=r.slice(0,r.indexOf(":")).trim();t[p]==null&&cs(a,p,"")}else for(const r in e)t[r]==null&&cs(a,r,"");for(const r in t)r==="display"&&(o=!0),cs(a,r,t[r])}else if(s){if(e!==t){const r=a[n0];r&&(t+=";"+r),a.cssText=t,o=e0.test(t)}}else e&&n.removeAttribute("style");ys in n&&(n[ys]=o?a.display:"",n[Ri]&&(a.display="none"))}const Pl=/\s*!important$/;function cs(n,e,t){if(Q(t))t.forEach(a=>cs(n,e,a));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const a=a0(n,e);Pl.test(t)?n.setProperty(at(a),t.replace(Pl,""),"important"):n[a]=t}}const xl=["Webkit","Moz","ms"],no={};function a0(n,e){const t=no[e];if(t)return t;let a=le(e);if(a!=="filter"&&a in n)return no[e]=a;a=xa(a);for(let s=0;s<xl.length;s++){const o=xl[s]+a;if(o in n)return no[e]=o}return e}const Al="http://www.w3.org/1999/xlink";function s0(n,e,t,a,s){if(a&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Al,e.slice(6,e.length)):n.setAttributeNS(Al,e,t);else{const o=pd(e);t==null||o&&!xp(t)?n.removeAttribute(e):n.setAttribute(e,o?"":t)}}function o0(n,e,t,a,s,o,r){if(e==="innerHTML"||e==="textContent"){a&&r(a,s,o),n[e]=t??"";return}const p=n.tagName;if(e==="value"&&p!=="PROGRESS"&&!p.includes("-")){const c=p==="OPTION"?n.getAttribute("value")||"":n.value,d=t??"";(c!==d||!("_value"in n))&&(n.value=d),t==null&&n.removeAttribute(e),n._value=t;return}let i=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=xp(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{n[e]=t}catch{}i&&n.removeAttribute(e)}function xt(n,e,t,a){n.addEventListener(e,t,a)}function r0(n,e,t,a){n.removeEventListener(e,t,a)}const Ll=Symbol("_vei");function l0(n,e,t,a,s=null){const o=n[Ll]||(n[Ll]={}),r=o[e];if(a&&r)r.value=a;else{const[p,i]=p0(e);if(a){const c=o[e]=u0(a,s);xt(n,p,c,i)}else r&&(r0(n,p,r,i),o[e]=void 0)}}const Ol=/(?:Once|Passive|Capture)$/;function p0(n){let e;if(Ol.test(n)){e={};let a;for(;a=n.match(Ol);)n=n.slice(0,n.length-a[0].length),e[a[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):at(n.slice(2)),e]}let eo=0;const i0=Promise.resolve(),c0=()=>eo||(i0.then(()=>eo=0),eo=Date.now());function u0(n,e){const t=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=t.attached)return;he(d0(a,t.value),e,5,[a])};return t.value=n,t.attached=c0(),t}function d0(n,e){if(Q(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(a=>s=>!s._stopped&&a&&a(s))}else return e}const Rl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,m0=(n,e,t,a,s,o,r,p,i)=>{const c=s==="svg";e==="class"?Qm(n,a,c):e==="style"?t0(n,t,a):Pa(e)?Wo(e)||l0(n,e,t,a,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):h0(n,e,a,c))?o0(n,e,a,o,r,p,i):(e==="true-value"?n._trueValue=a:e==="false-value"&&(n._falseValue=a),s0(n,e,a,c))};function h0(n,e,t,a){if(a)return!!(e==="innerHTML"||e==="textContent"||e in n&&Rl(e)&&an(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Rl(e)&&Nn(t)?!1:e in n}const Vi=new WeakMap,Di=new WeakMap,bs=Symbol("_moveCb"),Vl=Symbol("_enterCb"),Hi={name:"TransitionGroup",props:Hn({},Ym,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Ct(),a=ti();let s,o;return li(()=>{if(!s.length)return;const r=n.moveClass||`${n.name||"v"}-move`;if(!y0(s[0].el,t.vnode.el,r))return;s.forEach(g0),s.forEach(v0);const p=s.filter(_0);Oi(),p.forEach(i=>{const c=i.el,d=c.style;De(c,r),d.transform=d.webkitTransform=d.transitionDuration="";const m=c[bs]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",m),c[bs]=null,Ge(c,r))};c.addEventListener("transitionend",m)})}),()=>{const r=cn(n),p=Ai(r);let i=r.tag||Gn;s=o,o=e.default?ir(e.default()):[];for(let c=0;c<o.length;c++){const d=o[c];d.key!=null&&ga(d,fa(d,p,a,t))}if(s)for(let c=0;c<s.length;c++){const d=s[c];ga(d,fa(d,p,a,t)),Vi.set(d,d.el.getBoundingClientRect())}return On(i,null,o)}}},k0=n=>delete n.mode;Hi.props;const f0=Hi;function g0(n){const e=n.el;e[bs]&&e[bs](),e[Vl]&&e[Vl]()}function v0(n){Di.set(n,n.el.getBoundingClientRect())}function _0(n){const e=Vi.get(n),t=Di.get(n),a=e.left-t.left,s=e.top-t.top;if(a||s){const o=n.el.style;return o.transform=o.webkitTransform=`translate(${a}px,${s}px)`,o.transitionDuration="0s",n}}function y0(n,e,t){const a=n.cloneNode(),s=n[Kt];s&&s.forEach(p=>{p.split(/\s+/).forEach(i=>i&&a.classList.remove(i))}),t.split(/\s+/).forEach(p=>p&&a.classList.add(p)),a.style.display="none";const o=e.nodeType===1?e:e.parentNode;o.appendChild(a);const{hasTransform:r}=Li(a);return o.removeChild(a),r}const Dl=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Q(e)?t=>ps(e,t):e};function b0(n){n.target.composing=!0}function Hl(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const to=Symbol("_assign"),I_={created(n,{modifiers:{lazy:e,trim:t,number:a}},s){n[to]=Dl(s);const o=a||s.props&&s.props.type==="number";xt(n,e?"change":"input",r=>{if(r.target.composing)return;let p=n.value;t&&(p=p.trim()),o&&(p=yo(p)),n[to](p)}),t&&xt(n,"change",()=>{n.value=n.value.trim()}),e||(xt(n,"compositionstart",b0),xt(n,"compositionend",Hl),xt(n,"change",Hl))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:a,number:s}},o){if(n[to]=Dl(o),n.composing)return;const r=s||n.type==="number"?yo(n.value):n.value,p=e??"";r!==p&&(document.activeElement===n&&n.type!=="range"&&(t||a&&n.value.trim()===p)||(n.value=p))}},w0=["ctrl","shift","alt","meta"],E0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>w0.some(t=>n[`${t}Key`]&&!e.includes(t))},S_=(n,e)=>{const t=n._withMods||(n._withMods={}),a=e.join(".");return t[a]||(t[a]=(s,...o)=>{for(let r=0;r<e.length;r++){const p=E0[e[r]];if(p&&p(s,e))return}return n(s,...o)})},C0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},P_=(n,e)=>{const t=n._withKeys||(n._withKeys={}),a=e.join(".");return t[a]||(t[a]=s=>{if(!("key"in s))return;const o=at(s.key);if(e.some(r=>r===o||C0[r]===o))return n(s)})},T0=Hn({patchProp:m0},Jm);let ao,Nl=!1;function I0(){return ao=Nl?ao:Am(T0),Nl=!0,ao}const S0=(...n)=>{const e=I0().createApp(...n),{mount:t}=e;return e.mount=a=>{const s=x0(a);if(s)return t(s,!0,P0(s))},e};function P0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function x0(n){return Nn(n)?document.querySelector(n):n}var A0=["link","meta","script","style","noscript","template"],L0=["title","base"],O0=([n,e,t])=>L0.includes(n)?n:A0.includes(n)?n==="meta"&&e.name?`${n}.${e.name}`:n==="template"&&e.id?`${n}.${e.id}`:JSON.stringify([n,Object.entries(e).map(([a,s])=>typeof s=="boolean"?s?[a,""]:null:[a,s]).filter(a=>a!=null).sort(([a],[s])=>a.localeCompare(s)),t]):null,R0=n=>{const e=new Set,t=[];return n.forEach(a=>{const s=O0(a);s&&!e.has(s)&&(e.add(s),t.push(a))}),t},V0=n=>n[0]==="/"?n:`/${n}`,mr=n=>n[n.length-1]==="/"||n.endsWith(".html")?n:`${n}/`,Ce=n=>/^(https?:)?\/\//.test(n),D0=/.md((\?|#).*)?$/,_a=(n,e="/")=>!!(Ce(n)||n.startsWith("/")&&!n.startsWith(e)&&!D0.test(n)),Ni=n=>/^[a-z][a-z0-9+.-]*:/.test(n),be=n=>Object.prototype.toString.call(n)==="[object Object]",H0=n=>{const[e,...t]=n.split(/(\?|#)/);if(!e||e.endsWith("/"))return n;let a=e.replace(/(^|\/)README.md$/i,"$1index.html");return a.endsWith(".md")?a=a.substring(0,a.length-3)+".html":a.endsWith(".html")||(a=a+".html"),a.endsWith("/index.html")&&(a=a.substring(0,a.length-10)),a+t.join("")},Vs=n=>n[n.length-1]==="/"?n.slice(0,-1):n,Mi=n=>n[0]==="/"?n.slice(1):n,N0=(n,e)=>{const t=Object.keys(n).sort((a,s)=>{const o=s.split("/").length-a.split("/").length;return o!==0?o:s.length-a.length});for(const a of t)if(e.startsWith(a))return a;return"/"},ji=n=>typeof n=="function",_n=n=>typeof n=="string";const M0="modulepreload",j0=function(n){return"/"+n},Ml={},u=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){const o=document.getElementsByTagName("link");s=Promise.all(t.map(r=>{if(r=j0(r),r in Ml)return;Ml[r]=!0;const p=r.endsWith(".css"),i=p?'[rel="stylesheet"]':"";if(!!a)for(let m=o.length-1;m>=0;m--){const h=o[m];if(h.href===r&&(!p||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${i}`))return;const d=document.createElement("link");if(d.rel=p?"stylesheet":M0,p||(d.as="script",d.crossOrigin=""),d.href=r,document.head.appendChild(d),p)return new Promise((m,h)=>{d.addEventListener("load",m),d.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})}))}return s.then(()=>e()).catch(o=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=o,window.dispatchEvent(r),!r.defaultPrevented)throw o})},$0=JSON.parse("{}"),z0=Object.fromEntries([["/",{loader:()=>u(()=>import("./index.html-BL1PH3Yh.js"),__vite__mapDeps([0,1])),meta:{d:1627556976e3,e:`<!-- <script>
import { defineComponent } from 'vue'
import { usePages as infrastructure } from '@temp/infrastructure'  // pages.js is default filename
import { usePages as privateplatform } from '@temp/privateplatform'  // pages.js is default filename
import { usePages as publiccloud } from '@temp/publiccloud'  // pages.js is default filename
import { usePages as hashicorp } from '@temp/hashicorp'  // pages.js is default filename
import { usePages as software } from '@temp/software'  // pages.js is default filename
import { usePages as etc } from '@temp/etcpage'  // pages.js is default filename

export default defineComponent({
  setup() {
    const contents= ['01-Infrastructure', '02-PrivatePlatform', '03-Public%20Cloud', '04-HashiCorp', '05-Software', '06-etc']
    const pages = {}
    pages['01-Infrastructure'] = infrastructure;
    pages['02-PrivatePlatform'] = privateplatform;
    pages['03-PublicCloud'] = publiccloud;
    pages['04-HashiCorp'] = hashicorp;
    pages['05-Software'] = software;
    pages['06-etc'] = etc;
    console.log(pages)
    return { contents, pages }
  },
})
<\/script>

<div>
  <div v-for="content in contents" v-bind:key="content.id">
    <a :href="\`/\${content}/\`" class="vp-link vp-features-item link" role="navigation">{{ content.split('-')[1].replace("%20"," ") }}
      <h3 class="vp-feature-title"></h3>
      <p></p>
    </a>

  </div>
</div> -->`,r:{minutes:5.77,words:346},y:"h",t:"docmoa",i:"home"}}],["/00-Howto/01-Overview.html",{loader:()=>u(()=>import("./01-Overview.html-Bvp0Atsi.js"),__vite__mapDeps([2,3,1])),meta:{d:1634225909e3,e:`
<p>문서가 인터넷상에 공개되는 목적은 접근성을 극대화 하기 위함 입니다. 또한 로컬환경에서 빠르게 문서를 검색하기 위해 해당 git repo를 clone 받거나 download 받아서 별도의 마크다운 툴과 연동하는 것도 가능합니다. <code>VuePress</code> 기반으로 구성되었기 때문에 이외의 방식은 문서 표기에 제약이 있을 수 있습니다.</p>
<h2>github page</h2>
<p><a href="https://docmoa.github.io/" target="_blank" rel="noopener noreferrer">docmoa</a>의 공개된 페이지를 통해 문서를 읽을 수 있습니다.</p>`,r:{minutes:3.2,words:192},y:"a",t:"docmoa 활용 가이드"}}],["/00-Howto/",{loader:()=>u(()=>import("./index.html-BkRtJeBR.js"),__vite__mapDeps([4,1])),meta:{d:1628085698e3,e:`
<p>문서를 올바르게 작성하고 공유하기 위한 몇가지 사항을 안내합니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">안내</p>
<p>문서 기여 시 <a href="/00-Howto/02-Guide/01-Start.html" target="_blank"><strong>문서 작성 가이드</strong></a>를 꼭 한번 확인해주세요.</p>
</div>
<h2>활용 가이드</h2>
<p>docmoa를 활용할 수 있는 몇가지 가이드를 <a href="/00-Howto/01-Overview.html" target="_blank">docmoa 활용 가이드</a> 에서 설명합니다.</p>`,r:{minutes:1.28,words:77},y:"a",t:'How to "docmoa"'}}],["/01-Infrastructure/",{loader:()=>u(()=>import("./index.html-CExxztIv.js"),__vite__mapDeps([5,1])),meta:{d:1628085698e3,g:["Infrastructure"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>`,r:{minutes:.97,words:58},y:"a",t:"Infrastructure"}}],["/02-PrivatePlatform/",{loader:()=>u(()=>import("./index.html-BZO6b8Qh.js"),__vite__mapDeps([6,1])),meta:{d:1695042774e3,g:["Platform"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>`,r:{minutes:.98,words:59},y:"a",t:"Private Platform"}}],["/03-PublicCloud/",{loader:()=>u(()=>import("./index.html-B9d6B0Tq.js"),__vite__mapDeps([7,1])),meta:{d:1695042774e3,g:["Cloud"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>
`,r:{minutes:.98,words:59},y:"a",t:"Public Cloud"}}],["/04-HashiCorp/",{loader:()=>u(()=>import("./index.html-hakT38sf.js"),__vite__mapDeps([8,1])),meta:{d:1628085698e3,g:["HashiCorp"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>
<h2>Packer</h2>
<blockquote>
<p>다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구</p>
</blockquote>`,r:{minutes:6.55,words:393},y:"a",t:"HashiCorp"}}],["/05-Software/",{loader:()=>u(()=>import("./index.html-BxJsdRZp.js"),__vite__mapDeps([9,1])),meta:{d:164032788e4,g:["Software"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>
<h2>Jenkins</h2>
`,r:{minutes:1.03,words:62},y:"a",t:"Software"}}],["/06-etc/",{loader:()=>u(()=>import("./index.html-Cn_gEyTp.js"),__vite__mapDeps([10,1])),meta:{d:1640259507e3,g:["Etc"],e:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>
`,r:{minutes:.97,words:58},y:"a",t:"Etc."}}],["/99-about/01-About.html",{loader:()=>u(()=>import("./01-About.html-Cz7VOLgC.js"),__vite__mapDeps([11,1])),meta:{d:1628085698e3,e:`
<figure><img src="/logo.png" alt="logo" tabindex="0" loading="lazy"><figcaption>logo</figcaption></figure>
<p>기술은 지속적으로 발전하고 시시각각 변화하고 있습니다. 더불어 IT라는 분야도 점점더 세분화되고, 혼자서는 모든것을 아는것은 거의 불가능합니다.<br>
IT 업을 하면서 정리와 스크랩은 일상이 되어가지만 변화를 쫓아가기는 정말 버겁습니다.</p>
<p>하지만 혼자서가 아니라면 어떨까 라는 생각을 합니다.<br>
<strong>집단지성</strong> 이란 표현이 있듯, 개인보다는 여럿이 만들어가는 노트입니다. 과거에는 이런 노하우가 개인의 자산으로 비밀처럼 감춰두던 지식이였지만 지금은 서로 공유하고, 알리고, 기여하는 것도 의미 있는 시기인것 같습니다.</p>`,r:{minutes:1.3,words:78},y:"a",t:"docmoa"}}],["/99-about/02-Thanks.html",{loader:()=>u(()=>import("./02-Thanks.html-BV9RgB5h.js"),__vite__mapDeps([12,1])),meta:{d:1628085698e3,e:`
<div>
  <h3>Contributors:</h3>
  <ul v-if="contributors.length">
    <li v-for="contributor in contributors" :key="contributor.id">
      <a :href="contributor.html_url" target="_blank">
        
        {{ contributor.login }}
      </a>
    </li>
  </ul>
  <p v-else="">Loading contributors...</p>
</div>`,r:{minutes:1.48,words:89},y:"a",t:"Thank you"}}],["/00-Howto/02-Guide/01-Start.html",{loader:()=>u(()=>import("./01-Start.html-DBYWKB2P.js"),__vite__mapDeps([13,3,1])),meta:{d:1634225909e3,e:`
<p>docmoa에 문서 기여하기위한 가이드를 설명합니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>다양한 방법으로 문서를 작성하고 기여할 수 있습니다.<br>
얽매이지 마세요.</p>
</div>
<p>문서는 모두 git으로 관리되며 공개되어있습니다. <a href="/00-Howto/02-Guide/02-Contribute.html" target="_blank">문서 기여를 위한 방식</a>은 별도 안내로 구분하여 설명합니다.</p>`,r:{minutes:4.03,words:242},y:"a",t:"문서작성 '시작'"}}],["/00-Howto/02-Guide/02-Contribute.html",{loader:()=>u(()=>import("./02-Contribute.html-CHzveiuV.js"),__vite__mapDeps([14,1])),meta:{d:1634225909e3,e:`
<p>docmoa에 문서 기여하기위한 가이드를 설명합니다. 일반적인 github 상에서의 코드 기여 방식과 동일합니다.</p>
<h2>git 설치(Option)</h2>
<p>로컬 환경에서 git 명령을 수행하기 위해 설치합니다. github 브라우저 환경에서 수정하는 것도 가능하지만, 로컬에서 문서를 활용하고 오프라인 작업을 위해서는 설치하시기를 권장합니다.</p>
<p><a href="https://git-scm.com/book/ko/v2/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0-Git-%EC%84%A4%EC%B9%98" target="_blank" rel="noopener noreferrer">Git 설치 방법 안내</a>를 참고하여 아래 설명합니다.</p>`,r:{minutes:5.58,words:335},y:"a",t:"Contribute"}}],["/00-Howto/02-Guide/04-Template.html",{loader:()=>u(()=>import("./04-Template.html-DonVV6C8.js"),__vite__mapDeps([15,1])),meta:{d:1634225909e3,e:`
<p>docmoa에 문서 템플릿을 설명합니다.</p>
<div class="hint-container caution">
<p class="hint-container-title">주의</p>
<p>기본 템플릿 가이드를 잘 지켜주세요. 함께 만드는 문서 모음이므로, 기본적인 형식이 필요합니다.</p>
</div>
<h2>최소 Template</h2>
<div class="language-markdown" data-ext="md" data-title="md"><pre md="" class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>

<span class="token punctuation">---</span></span>

<span class="token title important"><span class="token punctuation">#</span> h1 제목 = Title 입니다.</span>
내용은 마크다운 형식으로 작성합니다.

<span class="token title important"><span class="token punctuation">##</span> h2 제목</span>

</code></pre></div>`,r:{minutes:.73,words:44},y:"a",t:"Template"}}],["/00-Howto/02-Guide/",{loader:()=>u(()=>import("./index.html-Daa2mUK4.js"),__vite__mapDeps([16,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.08,words:5},y:"a",t:"Guides"}}],["/00-Howto/03-Tips/Chart.html",{loader:()=>u(()=>import("./Chart.html-Dm3RzWse.js"),__vite__mapDeps([17,1])),meta:{d:1663987184e3,e:`
<p>문서 작성시 차트를 추가하는 방법을 안내합니다.</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/guide/markdown/chart.html" target="_blank" rel="noopener noreferrer">공식 문서</a></li>
</ul>
<p>차트 구성 방식은 <a href="https://www.chartjs.org/docs/latest/" target="_blank" rel="noopener noreferrer">ChartJS</a>를 따릅니다.</p>
<p><code>::: chart</code> 와 <code>:::</code>로 처리합니다.</p>`,r:{minutes:4.62,words:277},y:"a",t:"Chart"}}],["/00-Howto/03-Tips/CodeBlock.html",{loader:()=>u(()=>import("./CodeBlock.html-BjY8f4GN.js"),__vite__mapDeps([18,1])),meta:{d:1634225909e3,e:'\n<p>마크다운 기본 사용 법과 거의 동일합니다.</p>\n<h2>기본 사용법</h2>\n<p>코드블록은 ``` 과 ``` 사이에 코드를 넣어 로 표기합니다. 아래와 같이 md 파일 내에 작성하면</p>\n<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block"># Code block e.g.\nThis is my code</span>\n<span class="token punctuation">```</span></span>\n</code></pre></div>',r:{minutes:3.28,words:197},y:"a",t:"Code Block"}}],["/00-Howto/03-Tips/Link.html",{loader:()=>u(()=>import("./Link.html-BS-JzdCq.js"),__vite__mapDeps([19,1])),meta:{d:1634225909e3,e:`
<p>문서 작성시 외부 링크를 포함하는 예를 설명합니다. <a href="https://www.markdownguide.org/basic-syntax/#links" target="_blank" rel="noopener noreferrer">참고 문서</a></p>
<h2>텍스트에 링크 달기</h2>
<p>설명하던 글의 특정 단어에 대해 외부 링크를 추가하고자 하는 경우 브라킷<code>[ ]</code>과 괄호를 사용합니다. domain을 같이 기입하는 경우 새창에서 열기로 표기됩니다.</p>
<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>새창으로 이동하는 <span class="token url">[<span class="token content">링크 달기</span>](<span class="token url">http://docmoa.github.io/00-Howto/03-Tips/Link.html</span>)</span>
현재 창에서 이동하는 <span class="token url">[<span class="token content">링크 달기</span>](<span class="token url">/00-Howto/03-Tips/Link.html</span>)</span>
</code></pre></div>`,r:{minutes:2.22,words:133},y:"a",t:"Link"}}],["/00-Howto/03-Tips/PlantUML.html",{loader:()=>u(()=>import("./PlantUML.html-BayWJgb6.js"),__vite__mapDeps([20,1])),meta:{d:1634225909e3,e:`
<p><a href="https://github.com/gmunguia/markdown-it-plantuml#readme" target="_blank" rel="noopener noreferrer">markdown-it-plantuml</a> 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다.</p>
<h2>기본 사용법</h2>
<p>UML 블록은 <code>@startuml</code> 과 <code>@enduml</code> 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면</p>`,r:{minutes:13.85,words:831},y:"a",t:"UML"}}],["/00-Howto/03-Tips/",{loader:()=>u(()=>import("./index.html-CNf0MgPM.js"),__vite__mapDeps([21,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.08,words:5},y:"a",t:"Tips"}}],["/00-Howto/03-Tips/Tabs.html",{loader:()=>u(()=>import("./Tabs.html-q5XVxCqH.js"),__vite__mapDeps([22,1])),meta:{d:1634225909e3,e:`
<p>컨텐츠에 탭을 추가하여 상황에 따라 선택적으로 문서를 읽을 수 있도록 합니다.<br>
상세 내용은 <code>Markdown Enhance</code>의 <a href="https://plugin-md-enhance.vuejs.press/guide/tabs.html" target="_blank" rel="noopener noreferrer">Tabs</a>, <a href="https://plugin-md-enhance.vuejs.press/guide/code-tabs.html" target="_blank" rel="noopener noreferrer">Code Tabs</a> 를 확인해보세요.</p>`,r:{minutes:1.98,words:119},y:"a",t:"Tabs"}}],["/00-Howto/03-Tips/TipBox.html",{loader:()=>u(()=>import("./TipBox.html-CE2yLfwv.js"),__vite__mapDeps([23,1])),meta:{d:1634225909e3,e:`
<p>문서 작성시 팁과 주의사항을 표기하는 방법을 설명합니다.<br>
<a href="https://vuepress.vuejs.org/guide/markdown.html#:~:text=markdown.toc%20option.-,%23,-Custom%20Containers" target="_blank" rel="noopener noreferrer">공식 문서</a></p>
<h2>기본 사용법</h2>
<div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
</code></pre></div>`,r:{minutes:2.22,words:133},y:"a",t:"Tip Box"}}],["/01-Infrastructure/Container/container_runtime_sheet.html",{loader:()=>u(()=>import("./container_runtime_sheet.html-CLI-MhJR.js"),__vite__mapDeps([24,1])),meta:{d:1640262e6,g:["container","docker","podman"],e:`
<blockquote>
<p>update : 2021. 12. 23.</p>
</blockquote>
<table>
<thead>
<tr>
<th></th>
<th><strong>CRI-O</strong></th>
<th><strong>Containerd CRI plugin</strong></th>
<th><strong>Docker Engine</strong></th>
<th><strong>gVisor CRI plugin</strong></th>
<th><strong>CRI-O Kata Containers</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>sponsors</td>
<td>CNCF</td>
<td>CNCF</td>
<td>Docker Inc</td>
<td>Google</td>
<td>Intel</td>
</tr>
<tr>
<td>started</td>
<td>2016</td>
<td>2015</td>
<td>Mar 2013</td>
<td>2015</td>
<td>2017</td>
</tr>
<tr>
<td>version</td>
<td>1.23</td>
<td>1.19</td>
<td>20.10</td>
<td>release-20211129.0</td>
<td>1.13</td>
</tr>
<tr>
<td>runtime</td>
<td>runc (default)</td>
<td>containerd managing runc</td>
<td>runc</td>
<td>runsc</td>
<td>kata-runtime</td>
</tr>
<tr>
<td>kernel</td>
<td>shared</td>
<td>shared</td>
<td>shared</td>
<td>partially shared</td>
<td>isolated</td>
</tr>
<tr>
<td>syscall filtering</td>
<td>no</td>
<td>no</td>
<td>no</td>
<td>yes</td>
<td>no</td>
</tr>
<tr>
<td>kernel blobs</td>
<td>no</td>
<td>no</td>
<td>no</td>
<td>no</td>
<td>yes</td>
</tr>
<tr>
<td>footprint</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>-</td>
<td>30mb</td>
</tr>
<tr>
<td>start time</td>
<td>&lt;10ms</td>
<td>&lt;10ms</td>
<td>&lt;10ms</td>
<td>&lt;10ms</td>
<td>&lt;100ms</td>
</tr>
<tr>
<td>io performance</td>
<td>host performance</td>
<td>host performance</td>
<td>host performance</td>
<td>slow</td>
<td>host performance</td>
</tr>
<tr>
<td>network performance</td>
<td>host performance</td>
<td>host performance</td>
<td>host performance</td>
<td>slow (see comment)</td>
<td>close to host performance</td>
</tr>
<tr>
<td>Docs</td>
<td><a href="https://github.com/kubernetes-sigs/cri-o/" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes-sigs/cri-o/</a></td>
<td><a href="https://github.com/containerd/cri" target="_blank" rel="noopener noreferrer">https://github.com/containerd/cri</a></td>
<td><a href="https://github.com/moby/moby" target="_blank" rel="noopener noreferrer">https://github.com/moby/moby</a></td>
<td><a href="https://github.com/google/gvisor" target="_blank" rel="noopener noreferrer">https://github.com/google/gvisor</a></td>
<td><a href="https://github.com/kata-containers/runtime" target="_blank" rel="noopener noreferrer">https://github.com/kata-containers/runtime</a></td>
</tr>
<tr>
<td>장점</td>
<td>경량의 쿠버네티스 전용 Docker 데몬이 필요하지 않음 OpenShift의 기본 컨테이너 런타임 아마도 최고의 컨테이너 기본 런타임</td>
<td>최신 Docker Engine과 함께 기본적으로 설치됨 Kubernetes는 ContainerD를 직접 사용할 수 있으며, Docker또한 동일한 호스트에서 직접 사용할 수도 있음  DockerD 데몬을 실행할 필요가 없음</td>
<td>방대한 수의 사용자가 테스트하고 반복 한 가장 성숙한 런타임 seccomp, SELinux 및 AppArmor를 사용하여 강화할 수 있음 가장 빠른 시작 시간  메모리 사용량이 가장 적음</td>
<td>gcloud appengine에서 고객 간의 격리 계층으로 사용함 상태를 저장하지 않는 웹 앱에 적합 표준 컨테이너에 두 개의 보안 계층을 추가함</td>
<td>아마도 가장 안전한 옵션 보안에 대한 주요 절충안으로 오버헤드가 발생하는것은 그렇게 나쁘지 않은 것으로 보임</td>
</tr>
<tr>
<td>단점</td>
<td>Docker Engine이 같고 있는 동일한 보안 이슈를 가지고 있음 보안정책을 별도로 관리해야 함</td>
<td>This is slightly newer as it has been through a few iterations of being installed differently.</td>
<td>Kubernetes는 <strong>CRI 플러그인 아키텍처로 이동하고 있음</strong> 보안을 강화하고 관리하는것은 너무 복잡함</td>
<td>버전이 지정되지 않았으며 아직 Kubernetes에서 프로덕션에 사용해서는 안됨 많은 syscall을 만드는 응용 프로그램에는 적합하지 않음 400 개 Linux syscall이 모두 구현되어 일부 앱이 작동하지 않을 수 있음 (예 : postgres).</td>
<td>kata-runtime 자체는 v1이지만 이것이 Kubernetes 상에서 어떻게 준비 되어 있는지  확인이 필요 30MB 메모리 오버 헤드로 인한 비효율적 패킹 시작 시간</td>
</tr>
</tbody>
</table>`,r:{minutes:2.88,words:173},y:"a",t:"Container Runtimes 비교 표"}}],["/01-Infrastructure/Container/rancher-desktop-disk-resize-mac.html",{loader:()=>u(()=>import("./rancher-desktop-disk-resize-mac.html-D626lxoR.js"),__vite__mapDeps([25,1])),meta:{d:1683621743e3,g:["rancher","docker","mac"],e:`
<blockquote>
<p>Private docker registry<br>
Rancher Desktop<br>
MacOS<br>
Src :  <a href="https://slack-archive.rancher.com/t/8508077/on-my-m1-mac-i-ve-started-getting-this-error-and-it-wont-go-#3e8d178c-aee8-46e6-b4cc-094c2339cbaa" target="_blank" rel="noopener noreferrer">https://slack-archive.rancher.com/t/8508077/on-my-m1-mac-i-ve-started-getting-this-error-and-it-wont-go-#3e8d178c-aee8-46e6-b4cc-094c2339cbaa</a></p>
</blockquote>`,r:{minutes:1.82,words:109},y:"a",t:"Rancher Desktop Disk Resize on MAC"}}],["/01-Infrastructure/Container/rancher-desktop-insecure-setup-mac.html",{loader:()=>u(()=>import("./rancher-desktop-insecure-setup-mac.html-qE2juZpz.js"),__vite__mapDeps([26,1])),meta:{d:165217296e4,g:["rancher","docker","mac"],e:`
<blockquote>
<p>Private docker registry<br>
Rancher Desktop<br>
MacOS<br>
Setup <code>insecure-registries</code></p>
</blockquote>
<h2>issue</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> push <span class="token number">192.168</span>.60.11:5000/example-python:1.0
Error response from daemon: Get https://192.168.60.11:5000/v1/example-python: http: server gave HTTP response to HTTPS client
</code></pre></div>`,r:{minutes:2.63,words:158},y:"a",t:"Rancher Desktop Insecure Setup on MAC"}}],["/02-PrivatePlatform/OpenShift/deploying_specificnode_by_namespace.html",{loader:()=>u(()=>import("./deploying_specificnode_by_namespace.html-DcSoBedV.js"),__vite__mapDeps([27,1])),meta:{d:1695042774e3,g:["openshift","ocp"],e:`
<blockquote>
<p>원문 : <a href="https://blog.openshift.com/deploying-applications-to-specific-nodes/" target="_blank" rel="noopener noreferrer">https://blog.openshift.com/deploying-applications-to-specific-nodes/</a></p>
</blockquote>
<p>Deployment나 Deployment Config에서 Nodeselect를 지정하는 방법 외에 Project 단위로 설정하는 방법을 설명합니다.</p>`,r:{minutes:2.75,words:165},y:"a",t:"OpenShift 3.x - 프로젝트 별로 특정 노드에 배포하기"}}],["/02-PrivatePlatform/OpenShift/openshift3.11_custom_metric_with_jboss.html",{loader:()=>u(()=>import("./openshift3.11_custom_metric_with_jboss.html-CuO68Yk-.js"),__vite__mapDeps([28,1])),meta:{d:1695042774e3,g:["openshift","ocp","jboss"],e:`
<blockquote>
<p>Autoscaling applications using custom metrics on OpenShift Container Platform 3.11 with JBoss EAP or Wildfly</p>
</blockquote>
<p>Red Hat OpenShift Container Platform 3.11 (OCP) 은 기본적으로 CPU에 대한 애플리케이션 자동 확장을 지원합니다. 추가적으로 <code>apis/autoscaling/v2beta1</code>를 활성화하여 <a href="#2-Memory-based-HPA">Memory의 메트릭을 기반으로 한 기능</a>도 지원 합니다. CPU나 Memory의 경우 애플리케이션에 종속되지 않은 기본적인 메트릭이나, 때로는 추가적인 메트릭 요소를 기반으로 확장할 필요성이 있습니다.</p>`,r:{minutes:32.17,words:1930},y:"a",t:"OpenShift 3.11 - Custom metric with JBoss"}}],["/02-PrivatePlatform/Vsphere/Vsphere_template_issue.html",{loader:()=>u(()=>import("./Vsphere_template_issue.html-kVvYB9pt.js"),__vite__mapDeps([29,1])),meta:{d:1695042774e3,g:["vsphere","template"],e:`
<ol>
<li>redhat 계열</li>
</ol>
<ul>
<li>아래 네개의 패키지의 설치가 필요하다. 특히 perl은 거의 설치가 안되어 있음</li>
<li>open-vm-tools, open-vm-tools-deploypkg, net-tools, perl</li>
<li>설치 후 template 생성하고 배포하면 됨</li>
</ul>
<ol start="2">
<li>debian 계열</li>
</ol>
<ul>
<li>/etc/systemd/system/vmtoolsd.service 파일에 구문 추가</li>
<li>18.04은 추가하여도 가끔 NIC, hostname이 기존에 템플릿의 정보를 가져올때가 있음</li>
</ul>`,r:{minutes:1.38,words:83},y:"a",t:"VSphere 템플릿 생성 이슈"}}],["/03-PublicCloud/AlibabaCloud/CredentialConfig.html",{loader:()=>u(()=>import("./CredentialConfig.html-lGGLKL9Z.js"),__vite__mapDeps([30,1])),meta:{d:1695042774e3,g:["alibaba","aliyun"],e:`
<h2>1. CLI 설치</h2>
<h3>1.1 Download 방식</h3>
<ul>
<li>Install guide : <a href="https://partners-intl.aliyun.com/help/doc-detail/139508.htm" target="_blank" rel="noopener noreferrer">https://partners-intl.aliyun.com/help/doc-detail/139508.htm</a></li>
<li>Release Download Page : <a href="https://github.com/aliyun/aliyun-cli/releases" target="_blank" rel="noopener noreferrer">https://github.com/aliyun/aliyun-cli/releases</a>
<ul>
<li>CLI 릴리즈 페이지에서 OS에 맞는 파일을 다운로드하여 사용</li>
</ul>
</li>
</ul>`,r:{minutes:5.7,words:342},y:"a",t:"Alibaba CLI 설정"}}],["/03-PublicCloud/AlibabaCloud/",{loader:()=>u(()=>import("./index.html-CqkfgNN3.js"),__vite__mapDeps([31,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.07,words:4},y:"a",t:"Alibaba Cloud"}}],["/03-PublicCloud/Azure/",{loader:()=>u(()=>import("./index.html-BQghOMc8.js"),__vite__mapDeps([32,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.05,words:3},y:"a",t:"Azure"}}],["/03-PublicCloud/NCP/",{loader:()=>u(()=>import("./index.html-DeUDGp-A.js"),__vite__mapDeps([33,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.07,words:4},y:"a",t:"NCP(Naver Cloud Platform)"}}],["/06-etc/book-memo/theshortcut.html",{loader:()=>u(()=>import("./theshortcut.html-DY_3r04F.js"),__vite__mapDeps([34,1])),meta:{d:171077002e4,g:["book","ai"],e:`
<h2>책 정보</h2>
<blockquote>
<ul>
<li>저자 : 넬로 크리스티아니니</li>
<li>역자 : 김정민</li>
<li>출간일 : 2023-11-30</li>
<li>페이지 : 256쪽</li>
<li>출판사 링크 : <a href="https://m.hanbit.co.kr/store/books/book_view.html?p_code=B5439705429" target="_blank" rel="noopener noreferrer">https://m.hanbit.co.kr/store/books/book_view.html?p_code=B5439705429</a></li>
<li>책소개 : 격동의 인공지능 시대, 지능형 기계와 공존하기 위한 실용적 조언<br>
<br>
25년 이상 인공지능 연구에 기여한 최고의 석학이 집필한 IT 과학교양서다. 현대 인공지능(AI)의 발전사부터 시작해, 주요 사건 사례들을 바탕으로 인공지능의 성장 과정을 살펴보고, 인간의 문화와 사회에 미치는 영향까지 조망한다. 특히 현재 인간의 삶과 인프라에 (치트키를 써서) 빠르고 깊게 침투 중인 지능형 기계의 무분별한 활용이 초래하는 의도치 않은 결과들을 객관적 시선으로 바라보며 강력하게 경고한다. 나아가 인간은 어떤 부분을 어떤 이유로 경계해야 하는지, 인공지능과 안전하게 공존하려면 지금부터 무엇을 해야 할지에 관한 다양한 아이디어를 제시한다.</li>
</ul>
</blockquote>`,r:{minutes:15.57,words:934},y:"a",t:"기계의 반칙"}}],["/06-etc/class/devops-discussion-1st.html",{loader:()=>u(()=>import("./devops-discussion-1st.html-3BrR4Szp.js"),__vite__mapDeps([35,1])),meta:{d:1640262e6,g:["devops","container"],e:`
<p>일시 : 2019년 4월 24일 수요일 저녁 19시 ~ 21시</p>
<p>안내 : <a href="https://www.facebook.com/groups/ContainersLab" target="_blank" rel="noopener noreferrer">컨테이너 연구소</a> - 컨테이너 시스템의 활용 방향 및 미래에 관련해서 좌담</p>
<p>장소 : 메가존 지하 강연장</p>
<h2>Q. 컨테이너란 무엇일까?</h2>
<ul>
<li>
<p>자원을 잘 나눠주는 프로세스.</p>
</li>
<li>
<p>Zip같은 패키지인데 바퀴도 있고 엔진도 있는</p>
</li>
<li>
<p>개발자들의 공용어</p>
</li>
<li>
<p>VM이 H/W와의 분리였다면 컨테이너는 OS와 분리</p>
</li>
<li>
<p>떠나보낸 연인...하지만 사랑한다</p>
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/DevOps_Discussion_1st_001.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
</li>
</ul>`,r:{minutes:.85,words:51},y:"a",t:"DevOps 연구소 좌담회 (1차)"}}],["/06-etc/class/devops-discussion-20240213.html",{loader:()=>u(()=>import("./devops-discussion-20240213.html-D63yL__j.js"),__vite__mapDeps([36,1])),meta:{a:"GS",d:1707896358e3,g:["devops","ai"],e:`<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/picgo/telegram-cloud-photo-size-5-6226272870942751266-y.jpg" alt="torder-townhall" tabindex="0" loading="lazy"><figcaption>torder-townhall</figcaption></figure>
<h1>DevOps Korea 좌담회 2024.2.13.</h1>
<ul>
<li>
<p>일시 : 2024년 2월 13일 (화) 19:00</p>
</li>
<li>
<p>안내 :</p>
<ul>
<li>Facebook : <a href="https://www.facebook.com/groups/TeAnE/permalink/2971918569610501/" target="_blank" rel="noopener noreferrer">DevOps Korea</a> - AI의 시대에서 DevOps가 가야할 방향</li>
<li>GitHub : <a href="https://github.com/ralfyang/DevOps_Korea_sitting_talking/tree/main/20240213" target="_blank" rel="noopener noreferrer">https://github.com/ralfyang/DevOps_Korea_sitting_talking/tree/main/20240213</a></li>
</ul>
</li>
<li>
<p>장소 : 파크원2타워 티오더</p>
</li>
<li>
<p>주요 아젠다</p>
<ul>
<li>AI시대 관련 변화된 시대에 맞게 대응 할 방향</li>
<li>DevOps 업무에 도움이 될만한 AI도구 및 방법론</li>
<li>이미 적용중인 AI를 활용한 엔지니어링 업무소개 등</li>
</ul>
</li>
</ul>`,r:{minutes:4.82,words:289},y:"a",t:"DevOps Korea 좌담회 2024.2.13."}}],["/06-etc/class/devops-discussion-2nd.html",{loader:()=>u(()=>import("./devops-discussion-2nd.html-Dz8JUsI7.js"),__vite__mapDeps([37,1])),meta:{d:1640262e6,g:["devops","container"],e:`
<p>일시 : 2019년 5월 23일 (목) 19:00 ~ 21:30</p>
<p>안내 : <a href="https://www.facebook.com/groups/ContainersLab" target="_blank" rel="noopener noreferrer">컨테이너 연구소</a> - 컨테이너 시스템의 활용 방향 및 미래에 관련해서 좌담 part2</p>
<p>장소 : 대륭서초타워 베스핀글로벌</p>
<h3>Q. 컨테이너란?</h3>
<ul>
<li>Namespace가 지원되는 Process (Tech 관점)</li>
<li>스타트업에서는 비용 절감 가능 ($ 관점)</li>
</ul>`,r:{minutes:1.72,words:103},y:"a",t:"DevOps 연구소 좌담회 (2차)"}}],["/06-etc/infomation/Keyboard-Eng.html",{loader:()=>u(()=>import("./Keyboard-Eng.html-Co8X3VlG.js"),__vite__mapDeps([38,1])),meta:{d:1695042774e3,g:["keyboard","tip"],e:`
<blockquote>
<p>원본링크 : <a href="https://www.facebook.com/DoppioLover/posts/10225430970749092?__cft__%5B0%5D=AZVQVje3HpQ-XcR1aulTomjrKkwP3dgMkwtxvqSrRed0-yZn5vMd_fFoawk9FqeqSj7bIGYg4Ui1zUDYaE2anZDkndlmTgjhFCEnIkTD__lyGfjDt8Kf8od2Ayz3ZPT4PSo&amp;__tn__=%2CO%2CP-R" target="_blank" rel="noopener noreferrer">https://www.facebook.com/DoppioLover/posts/10225430970749092?__cft__[0]=AZVQVje3HpQ-XcR1aulTomjrKkwP3dgMkwtxvqSrRed0-yZn5vMd_fFoawk9FqeqSj7bIGYg4Ui1zUDYaE2anZDkndlmTgjhFCEnIkTD__lyGfjDt8Kf8od2Ayz3ZPT4PSo&amp;__tn__=%2CO%2CP-R</a></p>
</blockquote>`,r:{minutes:2.6,words:156},y:"a",t:"키보드의 특수기호 영어 명칭"}}],["/06-etc/infomation/acronyms.html",{loader:()=>u(()=>import("./acronyms.html-P7P3zaEY.js"),__vite__mapDeps([39,1])),meta:{d:1695042774e3,g:["acronyms","tip"],e:`
<blockquote>
<p>Full name definition<br>
<a href="https://en.wikipedia.org/wiki/List_of_information_technology_initialisms" target="_blank" rel="noopener noreferrer">List of informationtechnology initialisms</a></p>
</blockquote>
<h2>A</h2>
<ul>
<li>ACL : Access Control List</li>
<li>AD : Active Directory</li>
<li>AES : Advanced Encryption Standard</li>
<li>AJAX : Asynchronous JavaScript and XML</li>
<li>API : Application Programming Interface</li>
<li>ARP : Address Resolution Protocol</li>
<li>AWS : Amazon Web Service</li>
<li>APM : Application Performance Monitoring(Management)</li>
</ul>`,r:{minutes:9.1,words:546},y:"a",t:"약어"}}],["/06-etc/mac/brew-cert-issue.html",{loader:()=>u(()=>import("./brew-cert-issue.html-CUvj_BsU.js"),__vite__mapDeps([40,1])),meta:{d:1640262179e3,g:["mac","homebrew","brew"],e:`
<ul>
<li>현상 : brew 설치시 인증서 에러 발생</li>
</ul>
<blockquote>
<p><a href="https://apple.stackexchange.com/questions/393481/homebrew-cask-download-failure-ssl-certificate-problem-certificate-has-expired" target="_blank" rel="noopener noreferrer">https://apple.stackexchange.com/questions/393481/homebrew-cask-download-failure-ssl-certificate-problem-certificate-has-expired</a></p>
</blockquote>`,r:{minutes:3.3,words:198},y:"a",t:"homebrew install - certificate has expired"}}],["/06-etc/mac/libunistring-issue.html",{loader:()=>u(()=>import("./libunistring-issue.html-BLHqauF9.js"),__vite__mapDeps([41,1])),meta:{d:1675205792e3,g:["mac","homebrew","brew","wget"],e:`
<h2>현상</h2>
<p>macOS Ventura 업그레이드 후 wget 실행시 오류 발생</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span>
dyld<span class="token punctuation">[</span><span class="token number">4414</span><span class="token punctuation">]</span>: Library not loaded: /usr/local/opt/libunistring/lib/libunistring.2.dylib
  Referenced from: <span class="token operator">&lt;</span>1ECBA17E-A426-310D-9902-EFF0D9E1053<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span> /usr/local/Cellar/wget/1.21.3/bin/wget
  Reason: tried: <span class="token string">'/usr/local/opt/libunistring/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/System/Volumes/Preboot/Cryptexes/OS/usr/local/opt/libunistring/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/local/opt/libunistring/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/local/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such file, not <span class="token keyword">in</span> dyld cache<span class="token punctuation">)</span>, <span class="token string">'/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/System/Volumes/Preboot/Cryptexes/OS/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/local/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such <span class="token function">file</span><span class="token punctuation">)</span>, <span class="token string">'/usr/lib/libunistring.2.dylib'</span> <span class="token punctuation">(</span>no such file, not <span class="token keyword">in</span> dyld cache<span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>    <span class="token number">4414</span> abort      <span class="token function">wget</span>
</code></pre></div>`,r:{minutes:4.67,words:280},y:"a",t:"Library not loaded: libunistring.2.dylib"}}],["/06-etc/nodejs/node-sass.html",{loader:()=>u(()=>import("./node-sass.html-9e-vLCzn.js"),__vite__mapDeps([42,1])),meta:{d:1667618041e3,g:["arm","nodejs"],e:`
<p>aarch64에서 vuepress 실행을 위해 테스트를 하던 도중 node-gyp와 node-sass에 대한 오류를 맞이하게 되었다.</p>
<p>node-sass의 경우 arm환경에 대한 빌드 릴리즈가 없는 관계로 <code>npm install</code>을 실행하면 다시 빌드를 하게되는데, 이때 node-sass를 빌드하는 과정에서 빌드 실패가 발생함</p>
<h2>node-sass란?</h2>
<p>node환경에서 sass는 css 코드로 변환해주는 스타일 전처리언어이다. c/c++로 되어있는 구성요소로 인해 빠른 빌드 속도를 제공한다.</p>`,r:{minutes:1.97,words:118},y:"a",t:"node-sass와 sass로의 전환"}}],["/01-Infrastructure/Linux/TroubleShooting/Oom_killer.html",{loader:()=>u(()=>import("./Oom_killer.html-DCYd_9mz.js"),__vite__mapDeps([43,1])),meta:{d:1640764183e3,g:["linux","oom","oom_killer"],e:`
<h2>OOM Killer의 주요 업무는 다음 두 가지입니다.</h2>
<ul>
<li>실행 중인 모든 프로세스를 살펴보며 각 프로세스의 메모리 사용량에 따라 OOM 점수를 산출합니다.</li>
<li>OS에서 메모리가 더 필요하면 점수가 가장 높은 프로세스를 종료시킵니다.</li>
</ul>
<h2>각 프로세스의 oom_score 관련 정보는 /proc/(pid) 디렉토리 하위에서 찾을 수 있습니다.</h2>
<ul>
<li>oom_adj (oom_adjust)</li>
<li>oom_score_adj</li>
<li>oom_score</li>
</ul>`,r:{minutes:1.67,words:100},y:"a",t:"OOM Killer가 일하는 방식"}}],["/01-Infrastructure/Linux/TroubleShooting/SSH%20Too%20many%20authentication%20failures.html",{loader:()=>u(()=>import("./SSH Too many authentication failures.html-D2rsT5if.js"),__vite__mapDeps([44,1])),meta:{d:1628085698e3,g:["linux","ssh"],e:`
<p>직역하자면 <code>너무많은 인증 실패로 인한 SSH 접속이 안된다.</code> 는 메시지를 간혹 보게되는 경우가 있다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">ssh</span> myserver
Received disconnect from <span class="token number">192.168</span>.0.43 port <span class="token number">22</span>:2: Too many authentication failures
Connection to <span class="token number">192.168</span>.0.43 closed by remote host.
Connection to <span class="token number">192.168</span>.0.43 closed.
</code></pre></div>`,r:{minutes:1.95,words:117},y:"a",t:"SSH Too many authentication failures"}}],["/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html",{loader:()=>u(()=>import("./docker_bridge_netstat.html-CI_H69Gu.js"),__vite__mapDeps([45,1])),meta:{d:1639634821e3,g:["linux","docker","bridge","netstat"],e:`
<ul>
<li>단순 netstat만으로 bridge모드로 기동된 docker의 port를 체크할 수 없다</li>
<li>그래서 아래와 같은 절차가 필요하다.</li>
</ul>
<h3>먼저 찾으려는 컨테이너의 port를 확인한다. (nomad로 배포되어 있는 컨테이너임)</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nomad alloc status d78d5b32
ID                  <span class="token operator">=</span> d78d5b32-00c3-5468-284a-8c201058c53a
Eval ID             <span class="token operator">=</span> c6c9a1d9
Name                <span class="token operator">=</span> 08_grafana.08_grafana<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
Node ID             <span class="token operator">=</span> e11b7729
Node Name           <span class="token operator">=</span> slave1
Job ID              <span class="token operator">=</span> 08_grafana
Job Version         <span class="token operator">=</span> <span class="token number">0</span>
Client Status       <span class="token operator">=</span> running
Client Description  <span class="token operator">=</span> Tasks are running
Desired Status      <span class="token operator">=</span> run
Desired Description <span class="token operator">=</span> <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
Created             <span class="token operator">=</span> 18h42m ago
Modified            <span class="token operator">=</span> 2h36m ago

Allocation Addresses <span class="token punctuation">(</span>mode <span class="token operator">=</span> <span class="token string">"bridge"</span><span class="token punctuation">)</span>
Label                   Dynamic  Address
*http                   <span class="token function">yes</span>      <span class="token number">10.0</span>.0.161:25546
*connect-proxy-grafana  <span class="token function">yes</span>      <span class="token number">10.0</span>.0.161:29382 -<span class="token operator">&gt;</span> <span class="token number">29382</span>
</code></pre></div>`,r:{minutes:5.28,words:317},y:"a",t:"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크"}}],["/02-PrivatePlatform/Kubernetes/01-Information/Kubernetes_scheduler.html",{loader:()=>u(()=>import("./Kubernetes_scheduler.html-DgwmLKkv.js"),__vite__mapDeps([46,1])),meta:{d:1695042774e3,g:["kubernetes","scheduler","알고리즘"],e:`
<ul>
<li>원본: <a href="https://github.com/kubernetes/community/blob/master/contributors/devel/sig-scheduling/scheduler_algorithm.md" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/community/blob/master/contributors/devel/sig-scheduling/scheduler_algorithm.md</a></li>
<li>예약되지 않은 각 포드에 대해 Kubernetes 스케줄러는 규칙 집합에 따라 클러스터에서 노드를 찾으려고합니다. Kubernetes 스케줄러에 대한 일반적인 소개는 <a href="http://scheduler.md" target="_blank" rel="noopener noreferrer">scheduler.md</a> 에서 찾을 수 있습니다 . 이 문서에서는 포드의 노드를 선택하는 방법에 대한 알고리즘을 설명합니다. 포드의 대상 노드를 선택하기 전에 두 단계가 있습니다. 첫 번째 단계는 모든 노드를 필터링하고 두 번째 단계는 나머지 노드의 순위를 매겨 포드에 가장 적합한 것을 찾는 것입니다.</li>
</ul>`,r:{minutes:3.27,words:196},y:"a",t:"kubernetes 스케쥴러 알고리즘"}}],["/02-PrivatePlatform/Kubernetes/02-Config/kubernetes_with_out_docker.html",{loader:()=>u(()=>import("./kubernetes_with_out_docker.html-BzMG7-Ho.js"),__vite__mapDeps([47,1])),meta:{d:1695042774e3,g:["kubernetes","docker아님","containerd"],e:`
<ul>
<li>docker가 없어도 k8s를 올릴 수 있다!</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 먼저 설치하여 환경파일을 가져오고 원하는 버전을 설치한다.</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> containerd <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/containerd

containerd config default <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/containerd/config.toml

<span class="token function">sudo</span> systemctl stop containerd

<span class="token function">curl</span> <span class="token parameter variable">-LO</span> https://github.com/containerd/containerd/releases/download/v1.4.4/containerd-1.4.4-linux-amd64.tar.gz

<span class="token function">tar</span> xvf containerd-1.4.4-linux-amd64.tar.gz

<span class="token function">rm</span> containerd-1.4.4-linux-amd64.tar.gz

<span class="token function">sudo</span> <span class="token function">cp</span> bin/* /usr/bin/

<span class="token function">sudo</span> systemctl start containerd

<span class="token function">rm</span> <span class="token parameter variable">-rf</span> bin

<span class="token function">sudo</span> systemctl status containerd <span class="token parameter variable">--lines</span> <span class="token number">1</span>

<span class="token comment"># k8s 설치시작</span>
<span class="token function">curl</span> <span class="token parameter variable">-s</span> https://packages.cloud.google.com/apt/doc/apt-key.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span>

<span class="token function">sudo</span> apt-add-repository <span class="token string">"deb http://apt.kubernetes.io/ kubernetes-xenial main"</span>

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> kubeadm kubelet kubectl <span class="token parameter variable">-y</span>

<span class="token function">sudo</span> apt-mark hold kubeadm kubelet kubectl containerd

<span class="token comment">#echo 'net.bridge.bridge-nf-call-iptables = 1' | sudo tee -a /etc/sysctl.conf</span>

<span class="token assign-left variable">SOURCE_FILE</span><span class="token operator">=</span><span class="token string">"/etc/sysctl.conf"</span>
<span class="token assign-left variable">LINE_INPUT</span><span class="token operator">=</span><span class="token string">"net.bridge.bridge-nf-call-iptables = 1"</span>

<span class="token function">grep</span> <span class="token parameter variable">-qF</span> <span class="token string">"<span class="token variable">$LINE_INPUT</span>"</span> <span class="token string">"<span class="token variable">$SOURCE_FILE</span>"</span>  <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$LINE_INPUT</span>"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> <span class="token parameter variable">-a</span> <span class="token string">"<span class="token variable">$SOURCE_FILE</span>"</span>

<span class="token function">sudo</span> <span class="token builtin class-name">echo</span> <span class="token string">'1'</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /proc/sys/net/ipv4/ip_forward

<span class="token function">cat</span> /proc/sys/net/ipv4/ip_forward

<span class="token function">sudo</span> <span class="token function">sysctl</span> <span class="token parameter variable">--system</span>

<span class="token function">sudo</span> modprobe overlay
<span class="token function">sudo</span> modprobe br_netfilter

<span class="token function">sudo</span> swapoff <span class="token parameter variable">-a</span>

<span class="token function">sudo</span> <span class="token function">sed</span> <span class="token parameter variable">-ri</span> <span class="token string">'/\\sswap\\s/s/^#?/#/'</span> /etc/fstab

<span class="token function">cat</span> /etc/fstab
</code></pre></div>`,r:{minutes:3.95,words:237},y:"a",t:"containerd를 런타임으로 사용한 Kubernetes 설치"}}],["/02-PrivatePlatform/Kubernetes/02-Config/vagrant_k8s.html",{loader:()=>u(()=>import("./vagrant_k8s.html-vTi2hJ4l.js"),__vite__mapDeps([48,1])),meta:{d:1695042774e3,g:["kubernetes","vagrant","docker","install"],e:`
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/그림판 - Google Slides 2022-01-01 00-47-10.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<blockquote>
<p>github : <a href="https://github.com/Great-Stone/vagrant-k8s" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/vagrant-k8s</a></p>
</blockquote>`,r:{minutes:8.92,words:535},y:"a",t:"Kubernetes, Vagrant로 로컬 환경 구성"}}],["/02-PrivatePlatform/Kubernetes/05-Kops/01-kops-on-aws.html",{loader:()=>u(()=>import("./01-kops-on-aws.html-BaggFT4Y.js"),__vite__mapDeps([49,1])),meta:{d:1695042774e3,g:["Kubernetes","Kops","EKS","PKOS"],e:`
<blockquote>
<p>💡 본 글은 PKOS(Production Kubernetes Online Study) 2기 스터디의 일부로 작성된 내용입니다.<br>
실제 Production Kubernetes 환경에서 활용 가능한 다양한 정보를 전달하기 위한 시리즈로 작성 예정입니다.</p>
</blockquote>
<h2>1. 실습환경 사전준비</h2>
<p>본 스터디는 AWS 환경에서 Kops(Kubernetes Operations)를 활용한 실습으로 진행할 예정입니다.</p>
<blockquote>
<p>📌 참고 : 필자는 개인적인 이유로 Route 53 계정과, kOps 클러스터 운영 계정을 나눠서 진행합니다.<br>
하나의 계정에서 실습을 진행할 경우에는 사전 환경구성이 다를 수 있는 점 참고 부탁드립니다.</p>
</blockquote>`,r:{minutes:17.58,words:1055},y:"a",t:"[PKOS]  1편 - AWS Kops 설치 및 기본 사용"}}],["/02-PrivatePlatform/Kubernetes/05-Kops/02-kops-network-storage.html",{loader:()=>u(()=>import("./02-kops-network-storage.html-B1pvi0jK.js"),__vite__mapDeps([50,1])),meta:{d:1695042774e3,g:["Kubernetes","Kops","EKS","PKOS"],e:`
<p>지난 1주차 스터디에이어 2주차 스터디를 진행하였습니다. 이번 스터디에서는 "쿠버네티스 네트워크" 및 "쿠버네티스 스토리지"를 중심으로 학습하였습니다.</p>
<blockquote>
<p>참고 :<br>
원활한 실습을 위해 인스턴스 타입을 변경한 후 진행합니다.</p>
</blockquote>
<h2>0. 사전준비</h2>
<h3>1) Kops 클러스터의 인스턴 그룹 변경</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kops get ig
NAME			ROLE	MACHINETYPE	MIN	MAX	ZONES
master-ap-northeast-2a	Master	t3.medium	<span class="token number">1</span>	<span class="token number">1</span>	ap-northeast-2a
nodes-ap-northeast-2a	Node	t3.medium	<span class="token number">1</span>	<span class="token number">1</span>	ap-northeast-2a
nodes-ap-northeast-2c	Node	t3.medium	<span class="token number">1</span>	<span class="token number">1</span>	ap-northeast-2c
</code></pre></div>`,r:{minutes:36.15,words:2169},y:"a",t:"[PKOS] 2편 - 네트워크 & 스토리지"}}],["/02-PrivatePlatform/Kubernetes/06-EKS/01-eks-deploy.html",{loader:()=>u(()=>import("./01-eks-deploy.html-BL6OwnbB.js"),__vite__mapDeps([51,1])),meta:{d:1695042774e3,g:["Kubernetes","EKS","PKOS"],e:`
<p>이번에 연재할 스터디는 AWS EKS Workshop Study (=AEWS)이다. AWS에서 공식적으로 제공되는 다양한 HOL 기반의 Workshop과 가시다님의 팀에서 2차 가공한 컨텐츠를 기반으로 진행한다.</p>
<figure><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/751VTo.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>필자는 기본적인 스터디내용을 이번 시리즈에 연재할 예정이며, 추가적으로 HashiCorp의 Consul, Vault 등을 샘플로 배포하며 연동하는 내용을 조금씩 다뤄볼 예정이다.</p>`,r:{minutes:25.93,words:1556},y:"a",t:"AEWS 1주차 - Amzaon EKS 설치 및 기본 사용"}}],["/02-PrivatePlatform/Kubernetes/06-EKS/02-eks-networking.html",{loader:()=>u(()=>import("./02-eks-networking.html-B61FDmpN.js"),__vite__mapDeps([52,1])),meta:{d:1695042774e3,g:["Kubernetes","EKS","PKOS"],e:`
<p>이번에 연재할 스터디는 AWS EKS Workshop Study (=AEWS)이다. AWS에서 공식적으로 제공되는 다양한 HOL 기반의 Workshop과 가시다님의 팀에서 2차 가공한 컨텐츠를 기반으로 진행한다.</p>
<figure><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/9cxho8.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2>0. 실습환경 준비</h2>`,r:{minutes:22.4,words:1344},y:"a",t:"AEWS 2주차 - Amzaon EKS Networking"}}],["/02-PrivatePlatform/Kubernetes/06-EKS/03-eks-storage.html",{loader:()=>u(()=>import("./03-eks-storage.html-BojBnW5j.js"),__vite__mapDeps([53,1])),meta:{d:1695042774e3,e:`
`,r:{minutes:.08,words:5},y:"a",t:"AEWS 3주차 - Amzaon EKS Storage"}}],["/04-HashiCorp/01-Packer/01-Information/HCP_Packer_Intro.html",{loader:()=>u(()=>import("./HCP_Packer_Intro.html-zGIINyKt.js"),__vite__mapDeps([54,1])),meta:{d:1647827749e3,g:["Packer","HCP","Terraform"],e:`
<p>HashiCorp의 제품은 설치형과 더불어 SaaS 모델로도 사용가능한 모델이 제공됩니다. 여기에는 지금까지 Terraform Cloud, HCP Vault, HCP Consul 이 제공되었습니다. HCP는 HashiCorp Cloud Platform의 약자 입니다.</p>
<ul>
<li>HCP : <a href="https://cloud.hashicorp.com/" target="_blank" rel="noopener noreferrer">https://cloud.hashicorp.com/</a></li>
</ul>
<p>여기에 최근 HCP Packer가 공식적으로 GA(General Available)되었습니다. HashiCorp의 솔루션들에 대해서 우선 OSS(Open Source Software)로 떠올려 볼 수 있지만 기업을 위해 기능이 차별화된 설치형 엔터프라이즈와 더불어 클라우드형 서비스도 제공되고 있으며 향후 새로운 솔루션들이 추가될 전망입니다.</p>`,r:{minutes:6.27,words:376},y:"a",t:"HCP Packer 소개"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/AlibabaCloud.html",{loader:()=>u(()=>import("./AlibabaCloud.html-BTD8eb22.js"),__vite__mapDeps([55,1])),meta:{d:1632808034e3,g:["Packer","Sample","Alibaba"],e:`
<h2>packer.pkr.hcl</h2>
<ul>
<li><code>vault()</code>는 vault 연동시 사용가능 : <a href="https://www.packer.io/docs/templates/hcl_templates/functions/contextual/vault" target="_blank" rel="noopener noreferrer">https://www.packer.io/docs/templates/hcl_templates/functions/contextual/vault</a></li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment"># packer build -force .</span>

<span class="token keyword">locals</span> <span class="token punctuation">{</span>
  <span class="token property">access_key</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv-v2/data/alicloud"</span>, <span class="token string">"access_key"</span>)
  <span class="token property">secret_key</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv-v2/data/alicloud"</span>, <span class="token string">"secret_key"</span>)
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "region" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span>     <span class="token punctuation">=</span> <span class="token string">"ap-southeast-1"</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">"https://www.alibabacloud.com/help/doc-detail/40654.htm"</span>
<span class="token punctuation">}</span>

source <span class="token string">"alicloud-ecs"</span> <span class="token string">"basic-example"</span> <span class="token punctuation">{</span>
  <span class="token property">access_key</span>           <span class="token punctuation">=</span> local.access_key
  <span class="token property">secret_key</span>           <span class="token punctuation">=</span> local.secret_key
  <span class="token property">region</span>               <span class="token punctuation">=</span> var.region
  <span class="token property">image_name</span>           <span class="token punctuation">=</span> <span class="token string">"ssh_otp_image_1_5"</span>
  <span class="token property">source_image</span>         <span class="token punctuation">=</span> <span class="token string">"centos_7_9_x64_20G_alibase_20210623.vhd"</span>
  <span class="token property">ssh_username</span>         <span class="token punctuation">=</span> <span class="token string">"root"</span>
  <span class="token property">instance_type</span>        <span class="token punctuation">=</span> <span class="token string">"ecs.n1.tiny"</span>
  <span class="token property">io_optimized</span>         <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">internet_charge_type</span> <span class="token punctuation">=</span> <span class="token string">"PayByTraffic"</span>
  <span class="token property">image_force_delete</span>   <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">sources</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"sources.alicloud-ecs.basic-example"</span><span class="token punctuation">]</span>

  <span class="token keyword">provisioner<span class="token type variable"> "file" </span></span><span class="token punctuation">{</span>
    <span class="token property">source</span>      <span class="token punctuation">=</span> <span class="token string">"./files/"</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/tmp"</span>
  <span class="token punctuation">}</span>

<span class="token comment"># Vault OTP</span>
  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"cp /tmp/sshd /etc/pam.d/sshd"</span>,
      <span class="token string">"cp /tmp/sshd_config /etc/ssh/sshd_config"</span>,
      <span class="token string">"mkdir -p /etc/vault.d"</span>,
      <span class="token string">"cp /tmp/vault.hcl /etc/vault.d/vault.hcl"</span>,
      <span class="token string">"cp /tmp/vault-ssh-helper /usr/bin/vault-ssh-helper"</span>,
      <span class="token string">"/usr/bin/vault-ssh-helper -verify-only -config=/etc/vault.d/vault.hcl -dev"</span>,
      <span class="token string">"sudo adduser test"</span>,
      <span class="token string">"echo password | passwd --stdin test"</span>,
      <span class="token string">"echo 'test ALL=(ALL) NOPASSWD: ALL' &gt;&gt; /etc/sudoers"</span>,
      <span class="token string">"sudo sed -ie 's/SELINUX=enforcing/SELINUX=disabled /g' /etc/selinux/config"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

<span class="token comment"># Apache</span>
  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"sudo yum -y update"</span>,
      <span class="token string">"sleep 15"</span>,
      <span class="token string">"sudo yum -y update"</span>,
      <span class="token string">"sudo yum -y install httpd"</span>,
      <span class="token string">"sudo systemctl enable httpd"</span>,
      <span class="token string">"sudo systemctl start httpd"</span>,
      <span class="token string">"chmod +x /tmp/deploy_app.sh"</span>,
      <span class="token string">"PLACEHOLDER=<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">placeholder</span><span class="token punctuation">}</span></span> WIDTH=600 HEIGHT=800 PREFIX=gs /tmp/deploy_app.sh"</span>,
      <span class="token comment"># "sudo firewall-cmd --zone=public --permanent --add-port=80/tcp",</span>
      <span class="token comment"># "sudo firewall-cmd --reload",</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "placeholder" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span>     <span class="token punctuation">=</span> <span class="token string">"placekitten.com"</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">"Image-as-a-service URL. Some other fun ones to try are fillmurray.com, placecage.com, placebeard.it, loremflickr.com, baconmockup.com, placeimg.com, placebear.com, placeskull.com, stevensegallery.com, placedog.net"</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.82,words:289},y:"a",t:"Alibaba Cloud Packer Sample"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/Azure.html",{loader:()=>u(()=>import("./Azure.html-Q79miLlX.js"),__vite__mapDeps([56,1])),meta:{d:1632808034e3,g:["Packer","Sample","Azure"],e:`
<h2>packer.pkr.hcl</h2>
<ul>
<li><code>vault()</code>는 vault 연동시 사용가능 : <a href="https://www.packer.io/docs/templates/hcl_templates/functions/contextual/vault" target="_blank" rel="noopener noreferrer">https://www.packer.io/docs/templates/hcl_templates/functions/contextual/vault</a></li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment"># packer init -upgrade .</span>
<span class="token comment"># packer build -force .</span>

<span class="token keyword">locals</span> <span class="token punctuation">{</span>
  <span class="token property">client_id</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv/data/azure"</span>, <span class="token string">"client_id"</span>)
  <span class="token property">client_secret</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv/data/azure"</span>, <span class="token string">"client_secret"</span>)
  <span class="token property">tenant_id</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv/data/azure"</span>, <span class="token string">"tenant_id"</span>)
  <span class="token property">subscription_id</span> <span class="token punctuation">=</span> vault(<span class="token string">"/kv/data/azure"</span>, <span class="token string">"subscription_id"</span>)
  <span class="token property">resource_group_name</span> <span class="token punctuation">=</span> var.resource_name
  <span class="token property">virtual_network_name</span> <span class="token punctuation">=</span> <span class="token string">"kbid-d-krc-vnet-002"</span>
  <span class="token property">virtual_network_subnet_name</span>  <span class="token punctuation">=</span> <span class="token string">"d-mgmt-snet-001"</span>
  <span class="token property">virtual_network_resource_group_name</span>  <span class="token punctuation">=</span> <span class="token string">"kbid-d-krc-mgmt-rg"</span>
  <span class="token property">timestamp</span> <span class="token punctuation">=</span> formatdate(<span class="token string">"YYYYMMDD_hhmmss"</span>, timeadd(timestamp(), <span class="token string">"9h"</span>)) <span class="token comment">#생성되는 이미지 이름을 time 기반으로 생성</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "placeholder" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span>     <span class="token punctuation">=</span> <span class="token string">"placekitten.com"</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">"Image-as-a-service URL. Some other fun ones to try are fillmurray.com, placecage.com, placebeard.it, loremflickr.com, baconmockup.com, placeimg.com, placebear.com, placeskull.com, stevensegallery.com, placedog.net"</span>
<span class="token punctuation">}</span>

<span class="token comment"># Basic example : https://www.packer.io/docs/builders/azure/arm#basic-example</span>
<span class="token comment"># MS Guide : https://docs.microsoft.com/ko-kr/azure/virtual-machines/linux/build-image-with-packer</span>
source <span class="token string">"azure-arm"</span> <span class="token string">"basic-example"</span> <span class="token punctuation">{</span>
  <span class="token property">client_id</span> <span class="token punctuation">=</span> local.client_id
  <span class="token property">client_secret</span> <span class="token punctuation">=</span> local.client_secret
  <span class="token property">subscription_id</span> <span class="token punctuation">=</span> local.subscription_id
  <span class="token property">tenant_id</span> <span class="token punctuation">=</span> local.tenant_id

  <span class="token comment"># shared_image_gallery {</span>
  <span class="token comment">#   subscription = local.subscription_id</span>
  <span class="token comment">#   resource_group = "myrg"</span>
  <span class="token comment">#   gallery_name = "GalleryName"</span>
  <span class="token comment">#   image_name = "gs_pkr_\${local.timestamp}"</span>
  <span class="token comment">#   image_version = "1.0.0"</span>
  <span class="token comment"># }</span>
  <span class="token property">managed_image_resource_group_name</span> <span class="token punctuation">=</span> local.resource_group_name
  <span class="token property">managed_image_name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">image_name</span><span class="token punctuation">}</span></span>-<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">timestamp</span><span class="token punctuation">}</span></span>"</span>

  <span class="token property">os_type</span> <span class="token punctuation">=</span> <span class="token string">"Linux"</span>
  <span class="token comment"># az vm image list-publishers --location koreacentral --output table</span>
  <span class="token property">image_publisher</span> <span class="token punctuation">=</span> <span class="token string">"RedHat"</span>
  <span class="token comment"># az vm image list-offers --location koreacentral --publisher RedHat --output table</span>
  <span class="token property">image_offer</span> <span class="token punctuation">=</span> <span class="token string">"RHEL"</span>
  <span class="token comment"># az vm image list-skus --location koreacentral --publisher RedHat --offer RHEL --output table</span>
  <span class="token property">image_sku</span> <span class="token punctuation">=</span> <span class="token string">"8_4"</span>

  <span class="token property">azure_tags</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
    <span class="token property">dept</span> <span class="token punctuation">=</span> <span class="token string">"KBHC Terraform POC"</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># az vm list-skus --location koreacentral --all --output table</span>
  <span class="token property">build_resource_group_name</span> <span class="token punctuation">=</span> local.resource_group_name

  <span class="token comment">#########################################</span>
  <span class="token comment"># 기존 생성되어있는 network 를 사용하기 위한 항목 #</span>
  <span class="token comment">#########################################</span>
  <span class="token property">virtual_network_name</span> <span class="token punctuation">=</span> local.virtual_network_name
  <span class="token property">virtual_network_subnet_name</span> <span class="token punctuation">=</span> local.virtual_network_subnet_name
  <span class="token property">virtual_network_resource_group_name</span> <span class="token punctuation">=</span> local.virtual_network_resource_group_name
  
  <span class="token comment"># location = "koreacentral"</span>
  <span class="token property">vm_size</span> <span class="token punctuation">=</span> <span class="token string">"Standard_A2_v2"</span>
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">sources</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"sources.azure-arm.basic-example"</span><span class="token punctuation">]</span>

  <span class="token keyword">provisioner<span class="token type variable"> "file" </span></span><span class="token punctuation">{</span>
    <span class="token property">source</span>      <span class="token punctuation">=</span> <span class="token string">"./files/"</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/tmp"</span>
  <span class="token punctuation">}</span>

<span class="token comment"># Vault OTP</span>
  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"sudo cp /tmp/sshd /etc/pam.d/sshd"</span>,
      <span class="token string">"sudo cp /tmp/sshd_config /etc/ssh/sshd_config"</span>,
      <span class="token string">"sudo mkdir -p /etc/vault.d"</span>,
      <span class="token string">"sudo cp /tmp/vault.hcl /etc/vault.d/vault.hcl"</span>,
      <span class="token string">"sudo cp /tmp/vault-ssh-helper /usr/bin/vault-ssh-helper"</span>,
      <span class="token string">"echo \\"=== Vault_Check ===\\""</span>,
      <span class="token string">"curl http://10.0.9.10:8200"</span>,
      <span class="token string">"/usr/bin/vault-ssh-helper -verify-only -config=/etc/vault.d/vault.hcl -dev"</span>,
      <span class="token string">"echo \\"=== Add User ===\\""</span>,
      <span class="token string">"sudo adduser jboss"</span>,
      <span class="token string">"echo password | sudo passwd --stdin jboss"</span>,
      <span class="token string">"echo 'jboss ALL=(ALL) NOPASSWD: ALL' | sudo tee -a /etc/sudoers"</span>,
      <span class="token string">"echo \\"=== SELINUX DISABLE ===\\""</span>,
      <span class="token string">"sudo sed -ie 's/SELINUX=enforcing/SELINUX=disabled /g' /etc/selinux/config"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

<span class="token comment"># Apache</span>
  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"sudo yum -y update"</span>,
      <span class="token string">"sleep 15"</span>,
      <span class="token string">"sudo yum -y update"</span>,
      <span class="token string">"sudo yum -y install httpd"</span>,
      <span class="token string">"sudo systemctl enable httpd"</span>,
      <span class="token string">"sudo systemctl start httpd"</span>,
      <span class="token string">"chmod +x /tmp/deploy_app.sh"</span>,
      <span class="token string">"sudo PLACEHOLDER=<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">placeholder</span><span class="token punctuation">}</span></span> WIDTH=600 HEIGHT=800 PREFIX=gs /tmp/deploy_app.sh"</span>,
      <span class="token string">"sudo firewall-cmd --zone=public --permanent --add-port=80/tcp"</span>,
      <span class="token string">"sudo firewall-cmd --reload"</span>,
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:7.07,words:424},y:"a",t:"Azure Packer Sample"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/GCP.html",{loader:()=>u(()=>import("./GCP.html-C6bG_0cm.js"),__vite__mapDeps([57,1])),meta:{d:1632809937e3,g:["Packer","Sample","GCP"],e:`
<h2>packer.pkr.hcl</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">variable<span class="token type variable"> "base_image" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"ubuntu-1804-bionic-v20210415"</span>
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> "project" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"gs-test-282101"</span>
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> "region" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"asia-northeast2"</span>
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> "zone" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"asia-northeast2-a"</span>
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> "image_name" </span></span><span class="token punctuation">{</span>
  
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> "placeholder" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span>     <span class="token punctuation">=</span> <span class="token string">"placekitten.com"</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">"Image-as-a-service URL. Some other fun ones to try are fillmurray.com, placecage.com, placebeard.it, loremflickr.com, baconmockup.com, placeimg.com, placebear.com, placeskull.com, stevensegallery.com, placedog.net"</span>
<span class="token punctuation">}</span>

source <span class="token string">"googlecompute"</span> <span class="token string">"basic-example"</span> <span class="token punctuation">{</span>
  <span class="token property">project_id</span> <span class="token punctuation">=</span> var.project
  <span class="token property">source_image</span> <span class="token punctuation">=</span> var.base_image
  <span class="token property">ssh_username</span> <span class="token punctuation">=</span> <span class="token string">"ubuntu"</span>
  <span class="token property">zone</span> <span class="token punctuation">=</span> var.zone
  <span class="token property">disk_size</span> <span class="token punctuation">=</span> <span class="token number">10</span>
  <span class="token property">disk_type</span> <span class="token punctuation">=</span> <span class="token string">"pd-ssd"</span>
  <span class="token property">image_name</span> <span class="token punctuation">=</span> var.image_name
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"packer"</span>
  source <span class="token string">"sources.googlecompute.basic-example"</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"packer"</span>
  <span class="token punctuation">}</span>

  provisioner <span class="token string">"file"</span><span class="token punctuation">{</span>
    <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"./files"</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/tmp/"</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"sudo apt-get -y update"</span>,
      <span class="token string">"sleep 15"</span>,
      <span class="token string">"sudo apt-get -y update"</span>,
      <span class="token string">"sudo apt-get -y install apache2"</span>,
      <span class="token string">"sudo systemctl enable apache2"</span>,
      <span class="token string">"sudo systemctl start apache2"</span>,
      <span class="token string">"sudo chown -R ubuntu:ubuntu /var/www/html"</span>,
      <span class="token string">"chmod +x /tmp/files/*.sh"</span>,
      <span class="token string">"PLACEHOLDER=<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">placeholder</span><span class="token punctuation">}</span></span> WIDTH=600 HEIGHT=800 PREFIX=gs /tmp/files/deploy_app.sh"</span>,
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.47,words:148},y:"a",t:"Google Cloud Platform Packer Sample"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/aws-ubuntu.html",{loader:()=>u(()=>import("./aws-ubuntu.html-DDGbKDPr.js"),__vite__mapDeps([58,1])),meta:{d:1639995661e3,g:["Packer","Sample","aws"],e:`
<h2>ubuntu.pkr.hcl</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment"># packer init client.pkr.hcl</span>
<span class="token comment"># packer build -force .</span>

<span class="token keyword">variable<span class="token type variable"> "region" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"ap-northeast-2"</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "cni-version" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"1.0.1"</span>
<span class="token punctuation">}</span>

<span class="token keyword">packer</span> <span class="token punctuation">{</span>
  <span class="token keyword">required_plugins</span> <span class="token punctuation">{</span>
    <span class="token property">amazon</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">"&gt;= 0.0.2"</span>
      <span class="token property">source</span>  <span class="token punctuation">=</span> <span class="token string">"github.com/hashicorp/amazon"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

source <span class="token string">"amazon-ebs"</span> <span class="token string">"example"</span> <span class="token punctuation">{</span>
  <span class="token property">ami_name</span>      <span class="token punctuation">=</span> <span class="token string">"gs_demo_ubuntu_{{timestamp}}"</span>
  <span class="token property">instance_type</span> <span class="token punctuation">=</span> <span class="token string">"t3.micro"</span>
  <span class="token property">region</span>        <span class="token punctuation">=</span> var.region
  <span class="token keyword">source_ami_filter</span> <span class="token punctuation">{</span>
    <span class="token property">filters</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>                <span class="token punctuation">=</span> <span class="token string">"ubuntu/images/*ubuntu-bionic-18.04-amd64-server-*"</span>
      <span class="token property">root-device-type</span>    <span class="token punctuation">=</span> <span class="token string">"ebs"</span>
      <span class="token property">virtualization-type</span> <span class="token punctuation">=</span> <span class="token string">"hvm"</span>
    <span class="token punctuation">}</span>
    <span class="token property">most_recent</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
    <span class="token property">owners</span>      <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"099720109477"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token property">ssh_username</span> <span class="token punctuation">=</span> <span class="token string">"ubuntu"</span>
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">sources</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"source.amazon-ebs.example"</span><span class="token punctuation">]</span>

  <span class="token keyword">provisioner<span class="token type variable"> "file" </span></span><span class="token punctuation">{</span>
    <span class="token property">source</span>      <span class="token punctuation">=</span> <span class="token string">"./file/"</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/tmp"</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"set -x"</span>,
      <span class="token string">"echo Connected via Consul/Nomad client at \\"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>build<span class="token punctuation">.</span>User<span class="token punctuation">}</span></span>@<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>build<span class="token punctuation">.</span>Host<span class="token punctuation">}</span></span>:<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>build<span class="token punctuation">.</span>Port<span class="token punctuation">}</span></span>\\""</span>,
      <span class="token string">"sudo apt-get update"</span>,
      <span class="token string">"sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release"</span>,
      <span class="token string">"sudo apt-get update"</span>,
      <span class="token string">"curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -"</span>,
      <span class="token string">"sudo apt-add-repository \\"deb [arch=amd64] https://apt.releases.hashicorp.com bionic main\\""</span>,
      <span class="token string">"sudo apt-get update &amp;&amp; sudo apt-get -y install consul nomad netcat nginx"</span>,
      <span class="token string">"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"</span>,
      <span class="token string">"sudo add-apt-repository \\"deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable\\""</span>,
      <span class="token string">"sudo apt-get update"</span>,
      <span class="token string">"sudo apt-get install -y docker-ce openjdk-11-jdk"</span>,
      <span class="token string">"curl -sL -o cni-plugins.tgz https://github.com/containernetworking/plugins/releases/download/v<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">cni</span>-version<span class="token punctuation">}</span></span>/cni-plugins-linux-amd64-v<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">cni</span>-version<span class="token punctuation">}</span></span>.tgz"</span>,
      <span class="token string">"sudo mkdir -p /opt/cni/bin"</span>,
      <span class="token string">"sudo tar -C /opt/cni/bin -xzf cni-plugins.tgz"</span>,
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.52,words:211},y:"a",t:"AWS Packer Sample - Ubuntu"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/aws-windows.html",{loader:()=>u(()=>import("./aws-windows.html-D0bG41rQ.js"),__vite__mapDeps([59,1])),meta:{d:1639995661e3,g:["Packer","Sample","aws"],e:`
<blockquote>
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/packer/aws-windows-image?in=packer/integrations" target="_blank" rel="noopener noreferrer">Build a Windows Image</a></p>
</blockquote>
<h2>windows.pkr.hcl</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">variable<span class="token type variable"> "region" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"ap-northeast-2"</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "cni-version" </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"1.0.1"</span>
<span class="token punctuation">}</span>

<span class="token keyword">locals</span> <span class="token punctuation">{</span>
  <span class="token property">nomad_url</span>  <span class="token punctuation">=</span> <span class="token string">"https://releases.hashicorp.com/nomad/1.2.3/nomad_1.2.3_windows_amd64.zip"</span>
  <span class="token property">consul_url</span> <span class="token punctuation">=</span> <span class="token string">"https://releases.hashicorp.com/consul/1.11.1/consul_1.11.1_windows_amd64.zip"</span>
  <span class="token property">jre_url</span>    <span class="token punctuation">=</span> <span class="token string">"https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.13%2B8/OpenJDK11U-jre_x64_windows_hotspot_11.0.13_8.zip"</span>
<span class="token punctuation">}</span>

<span class="token keyword">packer</span> <span class="token punctuation">{</span>
  <span class="token keyword">required_plugins</span> <span class="token punctuation">{</span>
    <span class="token property">amazon</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">"&gt;= 0.0.2"</span>
      <span class="token property">source</span>  <span class="token punctuation">=</span> <span class="token string">"github.com/hashicorp/amazon"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

source <span class="token string">"amazon-ebs"</span> <span class="token string">"example"</span> <span class="token punctuation">{</span>
  <span class="token property">ami_name</span>      <span class="token punctuation">=</span> <span class="token string">"gs_demo_windows_{{timestamp}}"</span>
  <span class="token property">communicator</span>  <span class="token punctuation">=</span> <span class="token string">"winrm"</span>
  <span class="token property">instance_type</span> <span class="token punctuation">=</span> <span class="token string">"t2.micro"</span>
  <span class="token property">region</span>        <span class="token punctuation">=</span> var.region
  <span class="token keyword">source_ami_filter</span> <span class="token punctuation">{</span>
    <span class="token property">filters</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">name</span>                <span class="token punctuation">=</span> <span class="token string">"*Windows_Server-2019-English-Full-Base*"</span>
      <span class="token property">root-device-type</span>    <span class="token punctuation">=</span> <span class="token string">"ebs"</span>
      <span class="token property">virtualization-type</span> <span class="token punctuation">=</span> <span class="token string">"hvm"</span>
    <span class="token punctuation">}</span>
    <span class="token property">most_recent</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
    <span class="token property">owners</span>      <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"amazon"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token property">user_data_file</span> <span class="token punctuation">=</span> <span class="token string">"./bootstrap_win.txt"</span>
  <span class="token property">winrm_password</span> <span class="token punctuation">=</span> <span class="token string">"SuperS3cr3t!!!!"</span>
  <span class="token property">winrm_username</span> <span class="token punctuation">=</span> <span class="token string">"Administrator"</span>
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">sources</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"source.amazon-ebs.example"</span><span class="token punctuation">]</span>

  <span class="token keyword">provisioner<span class="token type variable"> "powershell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"New-Item \\"C:\\\\temp\\" -ItemType Directory"</span>,
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// provisioner "file" {</span>
  <span class="token comment">//   source = "./file/"</span>
  <span class="token comment">//   destination = "/tmp"</span>
  <span class="token comment">// }</span>

  <span class="token keyword">provisioner<span class="token type variable"> "powershell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\jre\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\consul\\\\bin\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\consul\\\\data\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\consul\\\\conf\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\nomad\\\\bin\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\nomad\\\\data\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"New-Item \\"C:\\\\hashicorp\\\\nomad\\\\conf\\\\\\" -ItemType Directory"</span>,
      <span class="token string">"Invoke-WebRequest -Uri <span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">jre_url</span><span class="token punctuation">}</span></span> -OutFile $env:TEMP\\\\jre.zip"</span>,
      <span class="token string">"Invoke-WebRequest -Uri <span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">consul_url</span><span class="token punctuation">}</span></span> -OutFile $env:TEMP\\\\consul.zip"</span>,
      <span class="token string">"Invoke-WebRequest -Uri <span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">nomad_url</span><span class="token punctuation">}</span></span> -OutFile $env:TEMP\\\\nomad.zip"</span>,
      <span class="token string">"Expand-Archive $env:TEMP\\\\jre.zip -DestinationPath C:\\\\hashicorp\\\\jre\\\\"</span>,
      <span class="token string">"Expand-Archive $env:TEMP\\\\consul.zip -DestinationPath C:\\\\hashicorp\\\\consul\\\\bin\\\\"</span>,
      <span class="token string">"Expand-Archive $env:TEMP\\\\nomad.zip -DestinationPath C:\\\\hashicorp\\\\nomad\\\\bin\\\\"</span>,
      <span class="token string">"[Environment]::SetEnvironmentVariable(\\"Path\\", $env:Path + \\";C:\\\\hashicorp\\\\jre\\\\jdk-11.0.13+8-jre\\\\bin;C:\\\\hashicorp\\\\nomad\\\\bin;C:\\\\hashicorp\\\\consul\\\\bin\\", \\"Machine\\")"</span>,
      <span class="token comment">// "$old = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\\\System\\\\CurrentControlSet\\\\Control\\\\Session Manager\\\\Environment' -Name path).path",</span>
      <span class="token comment">// "$new = \\"$old;C:\\\\hashicorp\\\\jre\\\\jdk-11.0.13+8-jre\\\\bin;C:\\\\hashicorp\\\\nomad\\\\bin;C:\\\\hashicorp\\\\consul\\\\bin\\"",</span>
      <span class="token comment">// "Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\\\System\\\\CurrentControlSet\\\\Control\\\\Session Manager\\\\Environment' -Name path -Value $new",</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:9.18,words:551},y:"a",t:"AWS Packer Sample - Windows"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/nCloud.html",{loader:()=>u(()=>import("./nCloud.html-CzNb8Ior.js"),__vite__mapDeps([60,1])),meta:{d:1632809475e3,g:["Packer","Sample","NCP"],e:`
<h2>packer.pkr.hcl</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">packer</span> <span class="token punctuation">{</span>
  <span class="token keyword">required_plugins</span> <span class="token punctuation">{</span>
    <span class="token property">ncloud</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">"&gt;= 0.0.1"</span>
      <span class="token property">source</span>  <span class="token punctuation">=</span> <span class="token string">"github.com/hashicorp/ncloud"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

source <span class="token string">"ncloud"</span> <span class="token string">"example-linux"</span> <span class="token punctuation">{</span>
  <span class="token property">access_key</span>                <span class="token punctuation">=</span> var.access_key
  <span class="token property">secret_key</span>                <span class="token punctuation">=</span> var.secret_key
  <span class="token property">server_image_product_code</span> <span class="token punctuation">=</span> <span class="token string">"SPSW0LINUX000139"</span>
  <span class="token property">server_product_code</span>       <span class="token punctuation">=</span> <span class="token string">"SPSVRGPUSSD00001"</span>
  <span class="token property">server_image_name</span>         <span class="token punctuation">=</span> var.image_name
  <span class="token property">server_image_description</span>  <span class="token punctuation">=</span> <span class="token string">"server image description"</span>
  <span class="token property">region</span>                    <span class="token punctuation">=</span> <span class="token string">"Korea"</span>
  <span class="token property">communicator</span>              <span class="token punctuation">=</span> <span class="token string">"ssh"</span>
  <span class="token property">ssh_username</span>              <span class="token punctuation">=</span> <span class="token string">"root"</span>
<span class="token punctuation">}</span>

<span class="token keyword">build</span> <span class="token punctuation">{</span>
  <span class="token property">sources</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"source.ncloud.example-linux"</span><span class="token punctuation">]</span>

  <span class="token keyword">provisioner<span class="token type variable"> "file" </span></span><span class="token punctuation">{</span>
    <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"jupyter.service"</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/etc/systemd/system/jupyter.service"</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">provisioner<span class="token type variable"> "shell" </span></span><span class="token punctuation">{</span>
    <span class="token property">inline</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"yum clean all"</span>,
      <span class="token string">"yum -y install epel-release"</span>,
      <span class="token string">"yum -y install python3"</span>,
      <span class="token string">"yum -y install python-pip"</span>,
      <span class="token string">"pip3 install --upgrade pip"</span>,
      <span class="token string">"adduser jupyter"</span>,
      <span class="token string">"su - jupyter"</span>,
      <span class="token string">"pip3 install --user jupyter jupyter"</span>,
      <span class="token string">"systemctl enable jupyter"</span>,
      <span class="token string">"systemctl start jupyter"</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "access_key" </span></span><span class="token punctuation">{</span>
  <span class="token property">type</span>    <span class="token punctuation">=</span> string
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "secret_key" </span></span><span class="token punctuation">{</span>
  <span class="token property">type</span>    <span class="token punctuation">=</span> string
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> "image_name" </span></span><span class="token punctuation">{</span>
  <span class="token property">type</span>    <span class="token punctuation">=</span> string
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">"test"</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.8,words:108},y:"a",t:"Naver Cloud Platform Packer Sample"}}],["/04-HashiCorp/02-Vagrant/02-Config/multi-linux-sample.html",{loader:()=>u(()=>import("./multi-linux-sample.html-0_pPRXvD.js"),__vite__mapDeps([61,1])),meta:{d:162872854e4,g:["vagrant","virtualbox","linux"],e:`
<div class="language-ruby" data-ext="rb" data-title="rb"><pre class="language-ruby"><code><span class="token comment"># -*- mode: ruby -*-</span>
<span class="token comment"># vi: set ft=ruby :</span>

<span class="token comment"># base image : https://app.vagrantup.com/bento</span>
<span class="token comment"># Cluster IP have to set subnetting on private network subnet of VM</span>

<span class="token variable">$debianip</span> <span class="token operator">=</span> <span class="token number">50</span>
<span class="token variable">$centip</span> <span class="token operator">=</span> <span class="token number">60</span>
<span class="token variable">$suseip</span> <span class="token operator">=</span> <span class="token number">70</span>

debian_cluster <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">"ubuntu"</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token symbol">:image</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">"bento/ubuntu-18.04"</span></span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
cent_cluster <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">"centos"</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token symbol">:image</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">"centos/7"</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-literal"><span class="token string">"rocky"</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token symbol">:image</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">"rockylinux/8"</span></span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
suse_cluster <span class="token operator">=</span>  <span class="token punctuation">{</span>
  <span class="token string-literal"><span class="token string">"suse"</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token symbol">:image</span> <span class="token operator">=&gt;</span> <span class="token string-literal"><span class="token string">"opensuse/Tumbleweed.x86_64"</span></span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

Vagrant<span class="token punctuation">.</span>configure<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"2"</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span> <span class="token operator">|</span>config<span class="token operator">|</span>

  config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>synced_folder <span class="token string-literal"><span class="token string">'.'</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">'/vagrant'</span></span><span class="token punctuation">,</span> <span class="token symbol">disabled</span><span class="token operator">:</span> <span class="token boolean">true</span>

  debian_cluster<span class="token punctuation">.</span>each_with_index <span class="token keyword">do</span> <span class="token operator">|</span><span class="token punctuation">(</span>hostname<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token operator">|</span>
    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define hostname <span class="token keyword">do</span> <span class="token operator">|</span>server<span class="token operator">|</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token symbol">:image</span><span class="token punctuation">]</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> hostname
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">"private_network"</span></span><span class="token punctuation">,</span> <span class="token symbol">name</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"vboxnet1"</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"172.28.128.</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i <span class="token operator">+</span> <span class="token variable">$debianip</span></span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span>

      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">"virtualbox"</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
        v<span class="token punctuation">.</span>name <span class="token operator">=</span> hostname
        v<span class="token punctuation">.</span>gui <span class="token operator">=</span> <span class="token boolean">false</span>
        v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">1024</span>
        v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">1</span>

        v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"modifyvm"</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"--vram"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"9"</span></span><span class="token punctuation">]</span>
      <span class="token keyword">end</span> <span class="token comment"># end provider</span>
    <span class="token keyword">end</span> <span class="token comment"># end config</span>
  <span class="token keyword">end</span> <span class="token comment"># end cluster foreach</span>

  suse_cluster<span class="token punctuation">.</span>each_with_index <span class="token keyword">do</span> <span class="token operator">|</span><span class="token punctuation">(</span>hostname<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token operator">|</span>
    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define hostname <span class="token keyword">do</span> <span class="token operator">|</span>server<span class="token operator">|</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token symbol">:image</span><span class="token punctuation">]</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> hostname
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">"private_network"</span></span><span class="token punctuation">,</span> <span class="token symbol">name</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"vboxnet1"</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"172.28.128.</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i <span class="token operator">+</span> <span class="token variable">$suseip</span></span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">"virtualbox"</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
        v<span class="token punctuation">.</span>name <span class="token operator">=</span> hostname
        v<span class="token punctuation">.</span>gui <span class="token operator">=</span> <span class="token boolean">false</span>
        v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">1024</span>
        v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">1</span>

        v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"modifyvm"</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"--vram"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"9"</span></span><span class="token punctuation">]</span>
      <span class="token keyword">end</span> <span class="token comment"># end provider</span>
    <span class="token keyword">end</span> <span class="token comment"># end config</span>
  <span class="token keyword">end</span> <span class="token comment"># end cluster foreach</span>

  cent_cluster<span class="token punctuation">.</span>each_with_index <span class="token keyword">do</span> <span class="token operator">|</span><span class="token punctuation">(</span>hostname<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">,</span> i<span class="token operator">|</span>
    config<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>define hostname <span class="token keyword">do</span> <span class="token operator">|</span>server<span class="token operator">|</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>box <span class="token operator">=</span> info<span class="token punctuation">[</span><span class="token symbol">:image</span><span class="token punctuation">]</span>
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>hostname <span class="token operator">=</span> hostname
      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>network <span class="token string-literal"><span class="token string">"private_network"</span></span><span class="token punctuation">,</span> <span class="token symbol">name</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"vboxnet1"</span></span><span class="token punctuation">,</span> <span class="token symbol">ip</span><span class="token operator">:</span> <span class="token string-literal"><span class="token string">"172.28.128.</span><span class="token interpolation"><span class="token delimiter punctuation">#{</span><span class="token content">i <span class="token operator">+</span> <span class="token variable">$centip</span></span><span class="token delimiter punctuation">}</span></span><span class="token string">"</span></span>

      server<span class="token punctuation">.</span>vm<span class="token punctuation">.</span>provider <span class="token string-literal"><span class="token string">"virtualbox"</span></span> <span class="token keyword">do</span> <span class="token operator">|</span>v<span class="token operator">|</span>
        v<span class="token punctuation">.</span>name <span class="token operator">=</span> hostname
        v<span class="token punctuation">.</span>gui <span class="token operator">=</span> <span class="token boolean">false</span>
        v<span class="token punctuation">.</span>memory <span class="token operator">=</span> <span class="token number">1024</span>
        v<span class="token punctuation">.</span>cpus <span class="token operator">=</span> <span class="token number">1</span>

        v<span class="token punctuation">.</span>customize <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"modifyvm"</span></span><span class="token punctuation">,</span> <span class="token symbol">:id</span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"--vram"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"9"</span></span><span class="token punctuation">]</span>
      <span class="token keyword">end</span> <span class="token comment"># end provider</span>
    <span class="token keyword">end</span> <span class="token comment"># end config</span>
  <span class="token keyword">end</span> <span class="token comment"># end cluster foreach</span>
  
<span class="token keyword">end</span>

</code></pre></div>`,r:{minutes:3.5,words:210},y:"a",t:"다양한 Linux 생성 샘플"}}],["/04-HashiCorp/02-Vagrant/04-TroubleShooting/hostonlynetworkissue.html",{loader:()=>u(()=>import("./hostonlynetworkissue.html-DbKFXfca.js"),__vite__mapDeps([62,1])),meta:{d:1635125433e3,g:["vagrant","virtualbox"],e:`
<p><a href="https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9</a><br>
<a href="https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930</a></p>`,r:{minutes:1.68,words:101},y:"a",t:"Network : Code E_ACCESSDENIED (0x80070005)"}}],["/04-HashiCorp/03-Terraform/01-Information/00-introduction.html",{loader:()=>u(()=>import("./00-introduction.html-DKxMb7vI.js"),__vite__mapDeps([63,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<iframe width="560" height="315" src="https://www.youtube.com/embed/R6XxYKqB8EY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<h2>1. Provision</h2>
<p>프로비저닝과 관련하여 우리는 Day 0부터 Day 2까지의 여정이 있습니다.</p>
<ul>
<li>Day 0에 요구사항을 분석하고 아키텍쳐를 설계하고 훈련을 합니다.</li>
<li>Day 1에 드디어 설계된 아키텍쳐를 구현하지요. 인프라, 네트워크, 서비스 구성 등등 말이죠.</li>
<li>Day 2는 이제 Day 1에서 구성된 요소를 유지하고 관리하고 모니터링하면서 더나은 아키텍쳐로 변경하거나 추가 서비스를 붙이는 반복적 작업을 합니다.</li>
</ul>`,r:{minutes:3.45,words:207},y:"a",t:"Terraform 개념 소개"}}],["/04-HashiCorp/03-Terraform/01-Information/01-infrastructure_maturity.html",{loader:()=>u(()=>import("./01-infrastructure_maturity.html-Chfj04ip.js"),__vite__mapDeps([64,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<iframe width="560" height="315" src="https://www.youtube.com/embed/HB3LMVLNi_Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<p>이번에는 인프라의 변화와 적응이라는 제목으로 인프라의 성숙도와 관련한 이야기를 나누고자 합니다.</p>
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20200707110714298.png" alt="image-20200707110714298" tabindex="0" loading="lazy"><figcaption>image-20200707110714298</figcaption></figure>`,r:{minutes:3.47,words:208},y:"a",t:"인프라의 변화와 적응"}}],["/04-HashiCorp/03-Terraform/01-Information/02-hcl.html",{loader:()=>u(()=>import("./02-hcl.html-JfID3ION.js"),__vite__mapDeps([65,1])),meta:{d:1640262e6,g:["terraform","usecase","IaC","HCL"],e:`
<p>Terraform의 가장 주요한 기능으로 Infrastructure as Code 를 이야기 할 수 있습니다. 그리고 이를 지원하는 HCL에 대해 알아보고자 합니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/pSPZQdpWWjs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:4.58,words:275},y:"a",t:"HCL - HashiCorp Configuration Language"}}],["/04-HashiCorp/03-Terraform/01-Information/remoteruns.html",{loader:()=>u(()=>import("./remoteruns.html-Bl1dEd0P.js"),__vite__mapDeps([66,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<p>Terraform의 Remote Runs이라는 기능에 대해 확인합니다.</p>
<p>Terraform Cloud와 Terraform Enterprise는 원격으로 트리거링 되어 동작하는 메커니즘을 제공하고 있습니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fqCcVYm7u4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:4.12,words:247},y:"a",t:"Remote Runs"}}],["/04-HashiCorp/03-Terraform/01-Information/remotestate.html",{loader:()=>u(()=>import("./remotestate.html-Cmm7XdPL.js"),__vite__mapDeps([67,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<p>Terraform을 수행하고나면 실행되고난 뒤의 상태가 저장됩니다. 로컬에서 OSS로 실행 했을 때의 <code>terraform.tfstate</code> 파일이 그것 입니다. 서로 다른 팀이 각자의 워크스페이스에서 작업하고 난뒤 각 상태 공유하면 변경된 내역에 따라 다음 작업을 이어갈 수 있습니다. Terraform은  Terraform Cloud, HashiCorp Consul, Amazon S3, Alibaba Cloud OSS 등에 상태 저장을 지원합니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4b7IZAXzha8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:2.98,words:179},y:"a",t:"Remote State"}}],["/04-HashiCorp/03-Terraform/01-Information/sentinel.html",{loader:()=>u(()=>import("./sentinel.html-C5J15qxI.js"),__vite__mapDeps([68,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<p>Terraform은 인프라의 코드화 측면에서 그 기능을 충실히 실현해줍니다. 하지만 팀과 조직에서는 단지 인프라의 코드적 관리와 더불어 다른 기능들이 필요하기 마련입니다. 그중 하나로 정책을 꼽을 수 있습니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QQ2SnWmSbjE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:2.33,words:140},y:"a",t:"Policy as Code : Sentinel"}}],["/04-HashiCorp/03-Terraform/01-Information/variables.html",{loader:()=>u(()=>import("./variables.html-BhJiYggg.js"),__vite__mapDeps([69,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<p>Terraform은 코드로 인프라를 관리하기위한 그 '코드'의 핵심 요소인 변수처리를 다양하게 지원합니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/uBr0DGUqUR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<p>Terraform에서는 다양한 변수와 작성된 변수를 관리하기 위한 메커니즘을 제공합니다. 가장 기본이되는 기능 중 하나이며 오픈소스와 엔터프라이즈 모두에서 사용가능합니다.</p>`,r:{minutes:4.83,words:290},y:"a",t:"Variables"}}],["/04-HashiCorp/03-Terraform/01-Information/workspace.html",{loader:()=>u(()=>import("./workspace.html-CEG-JAT_.js"),__vite__mapDeps([70,1])),meta:{d:1640262e6,g:["terraform","IaC"],e:`
<p>Terraform의 워크스페이스(Workspace)는 일종의 원하는 인프라의 프로비저닝 단위로서, 하나의 state를 갖는 공간입니다. Terraform에서의 <code>plan</code> 혹은 <code>apply</code> 가 이뤄지는 단위이기도 합니다.</p>
<iframe width="560" height="315" src="https://www.youtube.com/embed/4UeMPVw-1Dw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:2.4,words:144},y:"a",t:"Workspace"}}],["/04-HashiCorp/03-Terraform/02-Config/TFEAdminPasswordReset.html",{loader:()=>u(()=>import("./TFEAdminPasswordReset.html-BUDnBz7A.js"),__vite__mapDeps([71,1])),meta:{a:"jsp",d:1631870131e3,g:["terraform","admin","password"],e:`
<p>Terraform Enterprise를 사용할 때, UI(https://TFE_SERVER) 상으로 접속할 수 없는 상황에서 비밀번호 변경이 필요한 경우, 아래와 같이 작업할 수 있다.</p>
<h2>Admin 계정의 경우</h2>
<p>다음과 같이 수정 가능.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 이전 버전의 TFE</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> ptfe_atlas /usr/bin/init.sh /app/scripts/wait-for-token -- <span class="token function">bash</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token string">'cd /app &amp;&amp; ./bin/rails c'</span>
<span class="token comment">## 수정 최신 버전의 TFE에서는 Container 이름이 변경됨 (2022.6.21)</span>
<span class="token function">sudo</span> <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> tfe-atlas /usr/bin/init.sh /app/scripts/wait-for-token -- <span class="token function">bash</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-c</span> <span class="token string">'cd /app &amp;&amp; ./bin/rails c'</span>
</code></pre></div>`,r:{minutes:3.65,words:219},y:"a",t:"Terraform Enterprise 사용자 비밀번호 변경"}}],["/04-HashiCorp/03-Terraform/02-Config/terraform-cloud-agent-guide-custom.html",{loader:()=>u(()=>import("./terraform-cloud-agent-guide-custom.html-DUkfuA9O.js"),__vite__mapDeps([72,1])),meta:{d:1704702469e3,g:["Terraform"],e:`
<p>Terraform Cloud Agent(Agent)는 Terraform Enterprise/Cloud(TFE/C)에서 사용가능한 사용자 정의 Terraform 실행 환경을 제공합니다. 사용자는 Agent를 사용하여 Terraform 실행을 위해 기본 제공되는 이미지 대신 커스텀 패키지가 설치된 별도 이미지를 사용할 수 있고, 이미지 실행 위치를 네트워크 환경에서 자체 호스팅 할 수 있습니다.</p>
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/picgo/Monosnap Terraform Agent | onemodel 2024-01-08 14-40-18.png" alt="Monosnap Terraform Agent | onemodel 2024-01-08 14-40-18" tabindex="0" loading="lazy"><figcaption>Monosnap Terraform Agent | onemodel 2024-01-08 14-40-18</figcaption></figure>`,r:{minutes:8.7,words:522},y:"a",t:"Terraform Cloud Agent 가이드"}}],["/04-HashiCorp/03-Terraform/03-Sample/hashicat-azure.html",{loader:()=>u(()=>import("./hashicat-azure.html-BPYm7TfA.js"),__vite__mapDeps([73,1])),meta:{d:168941454e4,g:["Terraform","Terraform on Azure","Azure","HashiCat","Terraform OSS","Terraform Cloud","Terraform Enterprise","Terraform 샘플","IaC"],e:`
<blockquote>
<p>본 글은 HashiCorp의 공식 워크샵인 "Intro to Terraform on Azure" 내용을 발췌하여 작성한 글입니다. <a href="https://hashicorp.github.io/field-workshops-terraform/slides/azure/terraform-oss/#1" target="_blank" rel="noopener noreferrer">참고</a></p>
<p>실습 원본 소스코드는 <a href="https://github.com/hashicorp/hashicat-azure" target="_blank" rel="noopener noreferrer">hashicat-azure 저장소</a>에서 확인할 수 있습니다.</p>
</blockquote>`,r:{minutes:20.9,words:1254},y:"a",t:"Intro to Terraform on Azure"}}],["/04-HashiCorp/03-Terraform/03-Sample/nomad-csi-sample.html",{loader:()=>u(()=>import("./nomad-csi-sample.html-CdQmJbZH.js"),__vite__mapDeps([74,1])),meta:{d:166454877e4,g:["Nomad","terrafom","CSI"],e:`
<ul>
<li>AWS에 EFS를 Nomad CSI로 활용</li>
<li>full code는 아래 github를 참고
<ul>
<li>참고 github: <a href="https://github.com/Great-Stone/nomad-demo-with-ecs" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/nomad-demo-with-ecs</a>
<ul>
<li>branches: ung</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:7.53,words:452},y:"a",t:"Nomad CSI Sample"}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/NotAllowAdminUsername.html",{loader:()=>u(()=>import("./NotAllowAdminUsername.html-BcDeWJg6.js"),__vite__mapDeps([75,1])),meta:{d:1632444868e3,g:["Terraform","Azure"],e:`
<table>
<thead>
<tr>
<th>Log</th>
</tr>
</thead>
<tbody>
<tr>
<td>Error : compute.VirtualMachinesClient#CreateOrUpdate: Failure sending request: StatusCode=400 – Original Error: Code=“InvalidParameter” Message=“The Admin Username specified is not allowed.” Target="adminUsername"</td>
</tr>
</tbody>
</table>`,r:{minutes:2.6,words:156},y:"a",t:"The Admin Username specified is not allowed."}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/StateRemove.html",{loader:()=>u(()=>import("./StateRemove.html-CTp33-eY.js"),__vite__mapDeps([76,1])),meta:{d:1642083602e3,g:["Terraform","State"],e:`
<ul>
<li>
<p>현상</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>... googleapi: Error 400: Invalid request: Invalid request since instance is not running.
</code></pre></div><p>: Terraform을 통하지 않고 리소스가 삭제되어, 해당 리소스를 찾지 못하는 상황 발생</p>
</li>
<li>
<p>State 삭제</p>
<p>Local 환경의 terraform에 remote를 Terraform cloud로 지정</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code>terraform <span class="token punctuation">{</span>
  required_version = <span class="token string">"&gt;= 0.12"</span>
  backend <span class="token string">"remote"</span> <span class="token punctuation">{</span>
    hostname = <span class="token string">"app.terraform.io"</span>
    organization = <span class="token string">"lguplus"</span>

    workspaces <span class="token punctuation">{</span>
      name = <span class="token string">"kids_library"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>state 리스트 확인 <code>terraform state list</code></p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>my-workspace <span class="token operator">&gt;</span> terraform state list
random_pet.sql
module.Cluster_GKE.google_container_cluster.k8sexample
module.Cluster_GKE.google_container_node_pool.pool_1
module.Cluster_GKE.google_container_node_pool.pool_2
module.gcs_buckets.google_storage_bucket.buckets<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
module.sql-db.google_sql_database.default
module.sql-db.google_sql_database_instance.default
module.sql-db.google_sql_user.default
module.sql-db.null_resource.module_depends_on
module.sql-db.random_id.user-password
module.network.module.routes.google_compute_route.route<span class="token punctuation">[</span><span class="token string">"egress-internet"</span><span class="token punctuation">]</span>
module.network.module.subnets.google_compute_subnetwork.subnetwork<span class="token punctuation">[</span><span class="token string">"asia-northeast3/fc-kidslib-stg-subnet-1"</span><span class="token punctuation">]</span>
module.network.module.vpc.google_compute_network.network
</code></pre></div><p>존재하지 않는 resource를 삭제 <code>terraform state rm [resource_name]</code></p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>my-workspace <span class="token operator">&gt;</span> terraform state <span class="token function">rm</span> module.sql-db
Removed module.sql-db.google_sql_database.default
Removed module.sql-db.google_sql_database_instance.default
Removed module.sql-db.google_sql_user.default
Removed module.sql-db.null_resource.module_depends_on
Removed module.sql-db.random_id.user-password
Successfully removed <span class="token number">5</span> resource instance<span class="token punctuation">(</span>s<span class="token punctuation">)</span>.
</code></pre></div></li>
</ul>`,r:{minutes:1.93,words:116},y:"a",t:"State rm"}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/TFE_v202111-1(582)_Issue.html",{loader:()=>u(()=>import("./TFE_v202111-1(582)_Issue.html-GbmTbuKB.js"),__vite__mapDeps([77,1])),meta:{d:1640238674e3,g:["Terraform","Enterprise"],e:`
<blockquote>
<p>v202111-1 (582) 버전 이상으로 설치, 또는 업그레이드 시 발생하는 이슈</p>
</blockquote>
<h2>현상</h2>
<figure><figcaption>error_console</figcaption></figure>
<table>
<thead>
<tr>
<th>Nginx access Log</th>
</tr>
</thead>
<tbody>
<tr>
<td>2021/12/17 02:58:31 [error] 10#10: *913 connect(0mfailed (111: Connection refused) while connecting to upstream, client: 10.10.10.100, server:tfe.mydomain.com, reguest: "GET / HTTP/1.1", upstream: "<a href="http://172.11.0.1:9292/" target="_blank" rel="noopener noreferrer">http://172.11.0.1:9292/</a>", host: "<a href="http://tfe.mydomain.com" target="_blank" rel="noopener noreferrer">tfe.mydomain.com</a>"</td>
</tr>
</tbody>
</table>`,r:{minutes:1.93,words:116},y:"a",t:"TFE Release v202111-1 (582) Issue"}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/error-state-snapshot-was-created-by-terraform-version.html",{loader:()=>u(()=>import("./error-state-snapshot-was-created-by-terraform-version.html-itxLdGrF.js"),__vite__mapDeps([78,1])),meta:{d:1695176473e3,g:["Terraform","Azure"],e:`
<table>
<thead>
<tr>
<th>Log</th>
</tr>
</thead>
<tbody>
<tr>
<td>Error: state snapshot was created by Terraform v0.13.2, which is newer than current v0.12.26; upgrade to Terraform v0.13.2 or greater to work with this state</td>
</tr>
</tbody>
</table>
<ul>
<li>버전관련 에러 메시지에 대해 몇가지 테스트 해본 결과, 상위버전으로 Terraform State가 생성 된 이후 하위 버전으로  Refresh/Plan/Apply 를 수행하는 경우에 발생하는 것으로 확인</li>
<li><code>terraform_remote_state</code> 는 버전에 관계 없이 워크스페이스 간에 output을 읽어올 수 있음을 확인</li>
</ul>`,r:{minutes:2.02,words:121},y:"a",t:"Error: state snapshot was created by Terraform vX.Y.Z"}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/re-install.html",{loader:()=>u(()=>import("./re-install.html-Bx4GfSy9.js"),__vite__mapDeps([79,1])),meta:{a:"jsp",d:1655861356e3,g:["Terraform","Enterprise","TFE"],e:`
<blockquote>
<p>관련 Knowledge Base Article : <a href="https://support.hashicorp.com/hc/en-us/articles/4409044739859-Container-ptfe-base-startup-failed" target="_blank" rel="noopener noreferrer">https://support.hashicorp.com/hc/en-us/articles/4409044739859-Container-ptfe-base-startup-failed</a></p>
</blockquote>`,r:{minutes:.82,words:49},y:"a",t:"TFE 재설치 주의사항"}}],["/04-HashiCorp/03-Terraform/05-Airgap/ProviderBundling.html",{loader:()=>u(()=>import("./ProviderBundling.html-NtNDM0bw.js"),__vite__mapDeps([80,1])),meta:{d:165041363e4,g:["terraform","provider"],e:`
<blockquote>
<p><a href="https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/terraform/tree/main/tools/terraform-bundle</a><br>
Terraform Enterprise에서 동작하는 기능입니다.</p>
</blockquote>
<p>Airgap 환경에서 사용할 특정 버전의 Terraform과 여러 제공자 플러그인을 모두 포함하는 zip 파일 인 "번들 아카이브"를 생성하는 툴을 사용합니다. 일반적으로 Terraform init을 통해 특정 구성 작업에 필요한 플러그인을 다운로드하고 설치하지만 Airgap 환경에서는 공식 플러그인 저장소에 액세스 할 수 없는 경우가 발생합니다. Bundle 툴을 사용하여 Terraform 버전과 선택한 공급자를 모두 설치하기 위해 대상 시스템에 압축을 풀 수있는 zip 파일이 생성되므로 즉석 플러그인 설치가 필요하지 않습니다.</p>`,r:{minutes:4.27,words:256},y:"a",t:"Terraform Provider - 번들링"}}],["/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalFilesystem.html",{loader:()=>u(()=>import("./ProviderLocalFilesystem.html-D7ChAnNp.js"),__vite__mapDeps([81,1])),meta:{d:165041363e4,g:["terraform","provider"],e:`
<blockquote>
<p><a href="https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories</a><br>
<a href="https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers</a></p>
</blockquote>`,r:{minutes:6.68,words:401},y:"a",t:"Terraform Provider - 로컬 디렉토리"}}],["/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalMirroring.html",{loader:()=>u(()=>import("./ProviderLocalMirroring.html-Jhrn1gkP.js"),__vite__mapDeps([82,1])),meta:{d:165041363e4,g:["terraform","provider"],e:`
<blockquote>
<p><a href="https://www.terraform.io/docs/cli/config/config-file.html#provider_installation" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs/cli/config/config-file.html#provider_installation</a></p>
</blockquote>
<p>Terraform CLI를 사용할 때, 기본적으로 코드 상에서 사용하는 플러그인은 <a href="http://registry.terraform.io/" target="_blank" rel="noopener noreferrer">registry.terraform.io</a>에서 다운로드 받게 되어 있습니다.</p>`,r:{minutes:1.2,words:72},y:"a",t:"Terraform Provider - 로컬 미러링"}}],["/04-HashiCorp/04-Consul/01-Information/Consul%20Enterprise%20Feature.html",{loader:()=>u(()=>import("./Consul Enterprise Feature.html-B6X6vPxR.js"),__vite__mapDeps([83,1])),meta:{d:1628557352e3,g:["Consul","Enterprise"],e:`
<ul>
<li>Enterprise Global Visibility &amp; Scale
<ul>
<li>Network Segments</li>
<li>Advanced Federation</li>
<li>Redendancy Zones</li>
<li>Enganced Read Scalability</li>
</ul>
</li>
<li>Governance &amp; Policy
<ul>
<li>Namespaces</li>
<li>Single Sign On</li>
<li>Audit Logging</li>
<li>Sentinel</li>
</ul>
</li>
</ul>`,r:{minutes:2.52,words:151},y:"a",t:"Consul Enterprise Feature"}}],["/04-HashiCorp/04-Consul/01-Information/consul-sizing.html",{loader:()=>u(()=>import("./consul-sizing.html-UvOatF8p.js"),__vite__mapDeps([84,1])),meta:{d:1642218029e3,g:["consul","sizing"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/consul/reference-architecture" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/reference-architecture</a></p>
<p>Consul은 Server/Client 구조로 구성되며, Client의 경우 자원사용량이 매우 미미하므로 자원산정은 Server를 기준으로 산정</p>
</blockquote>`,r:{minutes:2.28,words:137},y:"a",t:"Consul Sizing"}}],["/04-HashiCorp/04-Consul/01-Information/port-info.html",{loader:()=>u(()=>import("./port-info.html-BdoRnOUS.js"),__vite__mapDeps([85,1])),meta:{d:164023929e4,g:["consul","port","requirement"],e:`
<blockquote>
<p><a href="https://www.consul.io/docs/install/ports" target="_blank" rel="noopener noreferrer">https://www.consul.io/docs/install/ports</a></p>
</blockquote>
<h2>Consul 포트</h2>
<figure><figcaption>arc</figcaption></figure>
<h3>Port Table</h3>
<table>
<thead>
<tr>
<th style="text-align:left">Use</th>
<th style="text-align:left">Default Ports</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">DNS (TCP and UDP)</td>
<td style="text-align:left">8600</td>
</tr>
<tr>
<td style="text-align:left">HTTP (TCP Only)</td>
<td style="text-align:left">8500</td>
</tr>
<tr>
<td style="text-align:left">HTTPS (TCP Only)</td>
<td style="text-align:left">disabled (8501)*</td>
</tr>
<tr>
<td style="text-align:left">gRPC (TCP Only)</td>
<td style="text-align:left">disabled (8502)*</td>
</tr>
<tr>
<td style="text-align:left">LAN Serf (TCP and UDP)</td>
<td style="text-align:left">8301</td>
</tr>
<tr>
<td style="text-align:left">Wan Serf (TCP and UDP)</td>
<td style="text-align:left">8302</td>
</tr>
<tr>
<td style="text-align:left">server (TCP Only)</td>
<td style="text-align:left">8300</td>
</tr>
<tr>
<td style="text-align:left">Sidecar Proxy Min: 자동으로 할당된 사이드카 서비스 등록에 사용할 포함 최소 포트 번호</td>
<td style="text-align:left">21000</td>
</tr>
<tr>
<td style="text-align:left">Sidecar Proxy Max: 자동으로 할당된 사이드카 서비스 등록에 사용할 포괄적인 최대 포트 번호</td>
<td style="text-align:left">21255</td>
</tr>
</tbody>
</table>`,r:{minutes:1.53,words:92},y:"a",t:"Consul Port"}}],["/04-HashiCorp/04-Consul/02-Configuration/ForwardDns.html",{loader:()=>u(()=>import("./ForwardDns.html-34ceei_3.js"),__vite__mapDeps([86,1])),meta:{d:1642495573e3,g:["Consul","Enterprise","Configuration","ForwardDns"],e:`
<h2>Consul dns를 local에서도 사용해야 할 경우에는 dns forward를 해줘야한다. 아래는 ubuntu 환경에서 진행하였음</h2>
<h2>설정 명령어</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#systemd-resolved 설정파일 추가 및 변경</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/systemd/resolved.conf.d
<span class="token punctuation">(</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
[Resolve]
DNS=127.0.0.1
DNSSEC=false
Domains=~consul
EOF</span>
<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/systemd/resolved.conf.d/consul.conf
<span class="token punctuation">(</span>
<span class="token function">cat</span> <span class="token operator">&lt;&lt;-</span><span class="token string">EOF
nameserver 127.0.0.1
options edns0 trust-ad
EOF</span>
<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/resolv.conf
<span class="token comment">#iptables에 consul dns port 추가</span>
iptables <span class="token parameter variable">--table</span> nat <span class="token parameter variable">--append</span> OUTPUT <span class="token parameter variable">--destination</span> localhost <span class="token parameter variable">--protocol</span> udp <span class="token parameter variable">--match</span> udp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">--jump</span> REDIRECT --to-ports <span class="token number">8600</span>
iptables <span class="token parameter variable">--table</span> nat <span class="token parameter variable">--append</span> OUTPUT <span class="token parameter variable">--destination</span> localhost <span class="token parameter variable">--protocol</span> tcp <span class="token parameter variable">--match</span> tcp <span class="token parameter variable">--dport</span> <span class="token number">53</span> <span class="token parameter variable">--jump</span> REDIRECT --to-ports <span class="token number">8600</span>
<span class="token comment">#service 재시작</span>
systemctl restart systemd-resolved
</code></pre></div>`,r:{minutes:2.07,words:124},y:"a",t:"ForwardDns"}}],["/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html",{loader:()=>u(()=>import("./acl-sample.html-DbshscGD.js"),__vite__mapDeps([87,1])),meta:{d:1648777606e3,g:["Consul","Acl","Policy"],e:`
<h2>Consul ACL Policy sample</h2>
<p>Consul ACL을 활성화 할 경우 default를 deny로 할 지 allow를 할 지 정할 수 있다.<br>
deny로 할 경우에는 하나하나 policy로 tokne을 만들어서 사용해야 한다.</p>
<h2>Consul이 Vault의 Storage로 되어야 할 경우</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>key_prefix "vault/" {
  policy = "write"
}
service "vault" {
   policy = "write"
}
agent_prefix "" {
   policy = "read"
}
session_prefix "" {
   policy = "write"
}
</code></pre></div>`,r:{minutes:1.18,words:71},y:"a",t:"ACL Sample"}}],["/04-HashiCorp/04-Consul/02-Configuration/client.html",{loader:()=>u(()=>import("./client.html-C9p57dso.js"),__vite__mapDeps([88,1])),meta:{d:1629519876e3,g:["Consul","Enterprise","Configuration","Client"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 Client설정 파일입니다.<br>
네트워크는 프라이빗(온프레이머스) 환경입니다.</p>
</div>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>#consul client 설정
server = false

acl = {
  enabled = true
  default_policy = "deny"
  enable_token_persistence = true
  tokens = {
    agent = "f820514a-5215-e741-fcb3-c00857405230"
  }
}

license_path = "/opt/license/consul.license"

retry_join = ["172.30.1.17","172.30.1.18","172.30.1.19"]

rejoin_after_leave = true


#tls 설정
ca_file = "/opt/ssl/consul/consul-agent-ca.pem"
auto_encrypt = {
  tls = true
}

verify_incoming = false
verify_outgoing = true
verify_server_hostname = true
</code></pre></div>`,r:{minutes:2.3,words:138},y:"a",t:"Consul 클라이언트 설정"}}],["/04-HashiCorp/04-Consul/02-Configuration/common.html",{loader:()=>u(()=>import("./common.html-Bnuewecx.js"),__vite__mapDeps([89,1])),meta:{d:1629519254e3,g:["Consul","Enterprise","Configuration","Common"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server, client의 공통설정 파일입니다.<br>
저는 agent.hcl파일안에 다 넣고 실행하지만 나눠서 추후에는 기능별로 나눠서 사용할 예정입니다.</p>
</div>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>#node name에는 _금지
#node_name
 
client_addr = "0.0.0.0"
bind_addr = "{{ GetInterfaceIP \`ens192\` }}"
advertise_addr = "{{ GetInterfaceIP \`ens224\` }}"
 
#ipv4, ipv6를 나눠서 설정할 수 있음.
#advertise_addr_ipv4
#advertise_addr_ipv6
 
ports {
  #http = 8500
  http = -1
  dns = 8600
  #https = -1
  https = 8500
  serf_lan = 8301
  grpc = 8502
  server = 8300
}
 
#gossip ip 지정
#serf_lan
#gossip 대역대 지정
#serf_lan_allowed_cidrs
 
#사용자 감사, 사용자가 consul에서 사용한 행동을 기록
#audit {
#  enabled = true
#  sink "My sink" {
#    type   = "file"
#    format = "json"
#    path   = "data/audit/audit.json"
#    #consul의 감사작성방법 규칙, 현재는 best-effort만지원
#    delivery_guarantee = "best-effort"
#    rotate_duration = "24h"
#    rotate_max_files = 15
#    rotate_bytes = 25165824
#  }
#}
 
#consul 서버관리 설정 변경
#autopoilt {
#    #새로운 서버가 클러스터에 추가될 때 죽은 서버 자동제거
#    cleanup_dead_servers = ture
#
#    last_contact_threshold = 200ms
#    #최소 quorm 수 지정
#    min_quorum = ni
#    #클러스터에 서버가 추가될 시 안정상태로 되어야 하는 최소 시간
#    server_stabilization_time = 10s
#}
 
#동시에 처리할 수 있는 인증서 서명 요청 제한
#csr_max_concurrent = 0
#서버가 수락할 인증서 서명 요청(CSR)의 최대 수에 대한 속도 제한을 설정
#csr_max_per_second = 50
#클러스터에서 이전 루트 인증서를 교체할 때 사용
#leaf_cert_ttl = 72h
#CA 키 생성 타입
#private_key_type = ec
#CA 키 생성될 길이
#private_key_bits = 256
 
#서버에서만 client를 join할 수 있게 함
#disable remote exec
 
#enable syslog = true
log_level = "DEBUG"
data_dir = "/var/log/consul/consul"
log_file = "/var/log/consul/consul.log"
log_rotate_duration = "24h"
log_rotate_bytes = 104857600
log_rotate_max_files = 100
 
license_path = "/opt/license/consul.license"
 
acl {
  enabled = true
  default_policy = "allow"
  enable_token_persistence = true
 
  #acl policy ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음
  #policy_ttl = 30s
  #acl role ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음
  #role_ttl = 30s
}
 
connect {
  enabled = true
  #vault 연동 옵션
  #ca_provider
}
 
dns_config {
  allow_stale = true,
  max_stale = "87600h"
}
 
#block_endpoints할성화시 restapi 차단
#http_config {
#    block_endpoints = false
#}
 
#segments
 
rpc {
  enable_streaming = true
}
 
encrypt = "7VY2fVm0p6vJUYNS/oex/mr2e59dy4AaGMefTKtUGi0="
encrypt_verify_incoming = false
encrypt_verify_outgoing = false
</code></pre></div>`,r:{minutes:2.8,words:168},y:"a",t:"Consul 공통 설정"}}],["/04-HashiCorp/04-Consul/02-Configuration/server.html",{loader:()=>u(()=>import("./server.html-DEyscLco.js"),__vite__mapDeps([90,1])),meta:{d:1629519523e3,g:["Consul","Enterprise","Configuration","Server"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br>
네트워크는 프라이빗(온프레이머스) 환경입니다.</p>
</div>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>#consul server 설정
server = true
ui_config {
  enabled = true
}
bootstrap_expect = 3
  
license_path = "/opt/license/consul.license"
 
retry_join = ["172.30.1.17","172.30.1.18","172.30.1.19"]
 
performance {
  raft_multiplier = 1
}
 
#raft protocal 버전, consul 업데이트 시 1씩 증가
raft_protocol = 3
 
#node가 완전히 삭제되는 시간
reconnect_timeout = "72h"
 
raft_snapshot_interval = "5s"
 
#해당 서버를 non-voting server로 지정
#read_replica = false
 
limits {
  http_max_conns_per_client = 200
  rpc_handshake_timeout = "5s"
}
 
key_file = "/opt/ssl/consul/dc1-server-consul-0-key.pem"
cert_file = "/opt/ssl/consul/dc1-server-consul-0.pem"
ca_file = "/opt/ssl/consul/consul-agent-ca.pem"
auto_encrypt {
  allow_tls = true
}
 
verify_incoming = false,
verify_incoming_rpc = true
verify_outgoing = true
verify_server_hostname = false
</code></pre></div>`,r:{minutes:2.95,words:177},y:"a",t:"Consul 서버 설정"}}],["/04-HashiCorp/04-Consul/03-UseCase/Consul%20Enterprise%20Feature.html",{loader:()=>u(()=>import("./Consul Enterprise Feature.html-CqkoMmHL.js"),__vite__mapDeps([91,1])),meta:{d:1628557352e3,g:["Consul","Hybrid","Kubetenetes","k8s","VM"],e:`
<blockquote>
<p>이 문서에서는 Consul을 사용하여 상이한 두 Consul로 구성된 클러스터(마스터가 별개)의 서비스를 연계하는 방법을 설명합니다.</p>
</blockquote>
<h2>1. 개요</h2>
<h3>1.1 아키텍처</h3>
<p>네트워크 영역이 분리되어있는 두 환경의 애플리케이션 서비스들을 Service Mesh로 구성하는 방법을 알아 봅니다. 이번 구성 예에서는 Kubernetes와 Baremetal(BM)이나 VirtualMachine(VM)에 Consul Cluster(Datacenter)를 구성하고 각 환경의 애플리케이션 서비스를 Mesh Gateway로 연계합니다.</p>`,r:{minutes:40.25,words:2415},y:"a",t:"Consul Mesh Gateway - K8S x BMs/VMs"}}],["/04-HashiCorp/04-Consul/03-UseCase/Consul%20Health%20Check.html",{loader:()=>u(()=>import("./Consul Health Check.html-DAu_mqUV.js"),__vite__mapDeps([92,1])),meta:{a:"euimokna",d:1629704782e3,g:["Consul"],e:`
<blockquote>
<p><a href="https://www.consul.io/docs/discovery/services" target="_blank" rel="noopener noreferrer">https://www.consul.io/docs/discovery/services</a><br>
<a href="https://learn.hashicorp.com/tutorials/consul/service-registration-health-checks?in=consul/developer-discovery#tuning-scripts-to-be-compatible-with-consul" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/service-registration-health-checks?in=consul/developer-discovery#tuning-scripts-to-be-compatible-with-consul</a></p>
</blockquote>`,r:{minutes:1.17,words:70},y:"a",t:"Consul Health Check on VMs"}}],["/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Enterprise%20Feature.html",{loader:()=>u(()=>import("./Consul Enterprise Feature.html-CLX1mrGH.js"),__vite__mapDeps([93,1])),meta:{d:1628557352e3,g:["Consul"],e:`
<blockquote>
<p><a href="https://support.hashicorp.com/hc/en-us/articles/360058026733-Identifying-and-Recovering-from-a-Consul-Split-Brain" target="_blank" rel="noopener noreferrer">https://support.hashicorp.com/hc/en-us/articles/360058026733-Identifying-and-Recovering-from-a-Consul-Split-Brain</a></p>
</blockquote>`,r:{minutes:3.23,words:194},y:"a",t:"Identifying consul split-brain"}}],["/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Install.html",{loader:()=>u(()=>import("./Consul Install.html-OHUSdxh9.js"),__vite__mapDeps([94,1])),meta:{d:1645588712e3,g:["Consul","install"],e:`
<p>AmazonLinux 환경에서 하기와 같은 명령어로 consul 설치 후 systemd 를 통한 Consul 시작시 오류 발생</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager --add-repo https://rpm.releases.hashicorp.com/AmazonLinux/hashicorp.repo
<span class="token function">sudo</span> yum <span class="token parameter variable">-y</span> <span class="token function">install</span> consul
</code></pre></div>`,r:{minutes:1.12,words:67},y:"a",t:"Consul yum install issue"}}],["/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Sidecar%20Inject%20not%20working%20on%20k8s.html",{loader:()=>u(()=>import("./Consul Sidecar Inject not working on k8s.html-BdY7wepA.js"),__vite__mapDeps([95,1])),meta:{d:1628557352e3,g:["Consul","ServiceMesh","SideCar","Kubernetes","K8S"],e:`
<blockquote>
<p>Consul Version : 1.9.x<br>
Helm Chart : 0.30.0</p>
</blockquote>
<p>Consul을 쿠버네티스 상에 구성하게 되면 <code>annotation</code> 구성만으로도 쉽게 Sidecar를 애플리케이션과 함께 배포 가능하다.</p>
<p>참고 : <a href="https://www.consul.io/docs/k8s/connect#controlling-injection-via-annotation" target="_blank" rel="noopener noreferrer">Controlling Injection Via Annotation</a></p>`,r:{minutes:4.17,words:250},y:"a",t:"Consul Sidecar Inject not working on K8S"}}],["/04-HashiCorp/04-Consul/04-TroubleShooting/connection-termination.html",{loader:()=>u(()=>import("./connection-termination.html-38YyBJX8.js"),__vite__mapDeps([96,1])),meta:{d:1649167505e3,g:["Consul","ServiceMesh","SideCar","Kubernetes","K8S"],e:`
<blockquote>
<ul>
<li>blog : <a href="https://medium.com/expedia-group-tech/all-about-istio-proxy-5xx-issues-e0221b29e692" target="_blank" rel="noopener noreferrer">https://medium.com/expedia-group-tech/all-about-istio-proxy-5xx-issues-e0221b29e692</a></li>
<li>issue : <a href="https://github.com/envoyproxy/envoy/issues/14981" target="_blank" rel="noopener noreferrer">https://github.com/envoyproxy/envoy/issues/14981</a></li>
<li>envoy proxy error code : <a href="https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/response_code_details" target="_blank" rel="noopener noreferrer">https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_conn_man/response_code_details</a></li>
</ul>
</blockquote>`,r:{minutes:2.1,words:126},y:"a",t:"Connection termination"}}],["/04-HashiCorp/04-Consul/05-Template_Sample/kv-sample.html",{loader:()=>u(()=>import("./kv-sample.html-Cx4Duujp.js"),__vite__mapDeps([97,1])),meta:{d:1634871035e3,g:["Consul","Consul Template"],e:`
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/consul/consul-template" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/consul-template</a></p>
<h2>템플릿 파일 변환 하기</h2>
<h3>템플릿 파일 작성</h3>
<ul>
<li>대상 kv : apache/version</li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment"># apache_install.sh.ctmpl</span>
<span class="token comment">#!/bin/bash</span>
sudo apt-get remove -y apache2
sudo apt-get install -y <span class="token property">apache2</span><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token string">"/apache/version"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.82,words:109},y:"a",t:"KV Sample"}}],["/04-HashiCorp/04-Consul/05-Template_Sample/nginx.html",{loader:()=>u(()=>import("./nginx.html-C4y7Ul6y.js"),__vite__mapDeps([98,1])),meta:{d:1634871035e3,g:["Consul","Consul Template","NGINX"],e:`
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/consul/load-balancing-nginx" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/load-balancing-nginx</a></p>
<h2>템플릿 파일 변환 하기</h2>
<h3>템플릿 파일 작성</h3>
<ul>
<li>대상 서비스 : nginx-backend</li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment"># nginx.conf.ctmpl</span>
upstream <span class="token keyword">backend</span> <span class="token punctuation">{</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>- range service <span class="token string">"nginx-backend"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
  <span class="token keyword">server</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>.Address<span class="token punctuation">}</span><span class="token punctuation">}</span>:<span class="token punctuation">{</span><span class="token punctuation">{</span>.Port<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token property">max_fails</span><span class="token punctuation">=</span><span class="token number">3</span> <span class="token property">fail_timeout</span><span class="token punctuation">=</span><span class="token number">60</span> <span class="token property">weight</span><span class="token punctuation">=</span><span class="token number">1</span>;
  <span class="token punctuation">{</span><span class="token punctuation">{</span>else<span class="token punctuation">}</span><span class="token punctuation">}</span>server <span class="token number">127.0</span>.<span class="token number">0.1</span>:<span class="token number">65535</span>; <span class="token comment"># force a 502</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>- end<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">server</span> <span class="token punctuation">{</span>
  listen <span class="token number">80</span> default_server;

  location /<span class="token keyword">stub_status</span> <span class="token punctuation">{</span>
    stub_status;
  <span class="token punctuation">}</span>

  location / <span class="token punctuation">{</span>
    proxy_pass http:<span class="token comment">//backend;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.8,words:108},y:"a",t:"NGINX Sample"}}],["/04-HashiCorp/05-Boundary/01-Install/OnConsulNomad.html",{loader:()=>u(()=>import("./OnConsulNomad.html-BHLsxW1K.js"),__vite__mapDeps([99,1])),meta:{d:1634219407e3,g:["Boundary","Install"],e:`
<h2>1. Nomad namespace create</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nomad namespace apply <span class="token parameter variable">-description</span> <span class="token string">"Boundary"</span> boundary
</code></pre></div><h2>2. Postgresql setup</h2>`,r:{minutes:11.47,words:688},y:"a",t:"Boundary Install on Consul-Nomad"}}],["/04-HashiCorp/05-Boundary/01-Install/OnNomad-devmode.html",{loader:()=>u(()=>import("./OnNomad-devmode.html-BVbFj_QJ.js"),__vite__mapDeps([100,1])),meta:{d:1653031029e3,g:["Boundary","Install"],e:`
<h2>1. Job sample</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">locals</span> <span class="token punctuation">{</span>
  <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">"0.8.1"</span>
  <span class="token property">private_ip</span> <span class="token punctuation">=</span> <span class="token string">"192.168.0.27"</span>
  <span class="token property">public_ip</span> <span class="token punctuation">=</span> <span class="token string">"11.129.13.30"</span>
<span class="token punctuation">}</span>

job <span class="token string">"boundary-dev"</span> <span class="token punctuation">{</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"service"</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"home"</span><span class="token punctuation">]</span>
  <span class="token property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"boundary"</span>

  <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
    <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>os<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>"</span>
    <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"raspbian"</span>
  <span class="token punctuation">}</span>

  group <span class="token string">"dev"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    <span class="token keyword">ephemeral_disk</span> <span class="token punctuation">{</span> <span class="token property">sticky</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"host"</span>
      port <span class="token string">"api"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"cluster"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9201</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">9201</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"worker"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9202</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">9202</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"dev"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"raw_exec"</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">BOUNDARY_DEV_CONTROLLER_API_LISTEN_ADDRESS</span> <span class="token punctuation">=</span> local.private_ip
        <span class="token property">BOUNDARY_DEV_CONTROLLER_CLUSTER_LISTEN_ADDRESS</span> <span class="token punctuation">=</span> <span class="token string">"0.0.0.0"</span>
        <span class="token property">BOUNDARY_DEV_WORKER_PUBLIC_ADDRESS</span> <span class="token punctuation">=</span> local.public_ip
        <span class="token property">BOUNDARY_DEV_WORKER_PROXY_LISTEN_ADDRESS</span> <span class="token punctuation">=</span> local.private_ip
        <span class="token property">BOUNDARY_DEV_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"password"</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// artifact {</span>
      <span class="token comment">//   source = "https://releases.hashicorp.com/boundary/\${local.version}/boundary_\${local.version}_linux_arm.zip"</span>
      <span class="token comment">// }</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">"boundary"</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dev"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">500</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">service</span> <span class="token punctuation">{</span>
        <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"boundary"</span>
        <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"cluster"</span><span class="token punctuation">]</span>

        <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"cluster"</span>

        <span class="token keyword">check</span> <span class="token punctuation">{</span>
          <span class="token property">type</span>  <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
          <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
          <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
          <span class="token property">port</span>  <span class="token punctuation">=</span> <span class="token string">"api"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.2,words:132},y:"a",t:"Boundary Run Dev Mode on Nomad Job"}}],["/04-HashiCorp/05-Boundary/02-Config/BoundaryTerraformSample01.html",{loader:()=>u(()=>import("./BoundaryTerraformSample01.html-CoL54UlU.js"),__vite__mapDeps([101,1])),meta:{d:1634219407e3,g:["Boundary","Terraform","Config"],e:`
<ul>
<li>Terraform provider : <a href="https://registry.terraform.io/providers/hashicorp/boundary/latest/docs" target="_blank" rel="noopener noreferrer">https://registry.terraform.io/providers/hashicorp/boundary/latest/docs</a></li>
<li>learn site : <a href="https://learn.hashicorp.com/tutorials/boundary/getting-started-config" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/boundary/getting-started-config</a></li>
</ul>`,r:{minutes:8.6,words:516},y:"a",t:"Configure Boudary using Terraform"}}],["/04-HashiCorp/06-Vault/01-Information/kmip-faq.html",{loader:()=>u(()=>import("./kmip-faq.html-aEYZesif.js"),__vite__mapDeps([102,1])),meta:{a:"hashicat(MZC), chadness12(MZC)",d:1707979472e3,g:["vault","kmip"],e:`
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/picgo/20240215150300.png" alt="KMIP 적용 흐름도" tabindex="0" loading="lazy"><figcaption>KMIP 적용 흐름도</figcaption></figure>
<h2>Client 인증서의 유효 기간</h2>
<p>기본 설정시 1,209,600초(2주)의 유효 기간을 갖게 되며, 설정에 따라 긴 유효시간의 적용이 가능합니다. (옵션 : <code>deault_tls_client_ttl</code>)<br>
설정은 상기 도식화한 절차 중 "2. kmip 기본 config" 단계에 적용 가능하며. 이는 <code>KMIP 적용 흐름도</code>의 "4. kmip scope, role 정의" 단계에서 override 할 수 있습니다.</p>`,r:{minutes:8,words:480},y:"a",t:"Vault KMIP FAQ"}}],["/04-HashiCorp/06-Vault/01-Information/port-info.html",{loader:()=>u(()=>import("./port-info.html-DGpCJYpx.js"),__vite__mapDeps([103,1])),meta:{d:1640239298e3,g:["vault","port","requirement"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/vault/reference-architecture#network-connectivity" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/reference-architecture#network-connectivity</a></p>
</blockquote>
<h2>Vault 포트</h2>
<h3>TCP</h3>
<ul>
<li>Url : <a href="https://www.vaultproject.io/docs/configuration/listener/tcp#tcp-listener-parameters" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/docs/configuration/listener/tcp#tcp-listener-parameters</a>
<ul>
<li>address default : <code>127.0.0.1:8200</code></li>
<li>cluster_address default : <code>127.0.0.1:8201</code></li>
</ul>
</li>
</ul>`,r:{minutes:2.57,words:154},y:"a",t:"Vault Listen Address & Port"}}],["/04-HashiCorp/06-Vault/01-Information/vault-audit.html",{loader:()=>u(()=>import("./vault-audit.html-BXmUPfu8.js"),__vite__mapDeps([104,1])),meta:{d:1641009317e3,g:["vault","audit"],e:`
<p>Vault Audit은 <code>-path</code>를 달리하여 여러 Audit 메커니즘을 중복해서 구성 가능</p>
<h2>File</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault audit <span class="token builtin class-name">enable</span> <span class="token function">file</span> <span class="token assign-left variable">file_path</span><span class="token operator">=</span>/var/log/vault/vault_audit.log
$ vault audit <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>file2 <span class="token function">file</span> <span class="token assign-left variable">file_path</span><span class="token operator">=</span>/var/log/vault/vault_audit2.log
</code></pre></div>`,r:{minutes:1.08,words:65},y:"a",t:"Vault Audit"}}],["/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html",{loader:()=>u(()=>import("./vault-dev-mode-option.html-kopXY-NR.js"),__vite__mapDeps([105,1])),meta:{d:1676188911e3,g:["vault","optinos"],e:`
<p>볼트 개발 모드 서버를 시작하는 기초적인 커맨드와 실행 후 안내 메시지는 다음과 같다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault server <span class="token parameter variable">-dev</span>

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server configuration:

             Api Address: http://127.0.0.1:8200
                     Cgo: disabled
         Cluster Address: https://127.0.0.1:8201
   Environment Variables: <span class="token environment constant">HOME</span>, ITERM_PROFILE, <span class="token punctuation">..</span>.
              Go Version: go1.19.4
              Listener <span class="token number">1</span>: tcp <span class="token punctuation">(</span>addr: <span class="token string">"127.0.0.1:8200"</span>, cluster address: <span class="token string">"127.0.0.1:8201"</span>, max_request_duration: <span class="token string">"1m30s"</span>, max_request_size: <span class="token string">"33554432"</span>, tls: <span class="token string">"disabled"</span><span class="token punctuation">)</span>
               Log Level: info
                   Mlock: supported: false, enabled: <span class="token boolean">false</span>
           Recovery Mode: <span class="token boolean">false</span>
                 Storage: inmem
                 Version: Vault v1.12.3, built <span class="token number">2023</span>-02-02T09:07:27Z
             Version Sha: 209b3dd99fe8ca320340d08c70cff5f620261f9b

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server started<span class="token operator">!</span> Log data will stream <span class="token keyword">in</span> below:

<span class="token punctuation">..</span>.
</code></pre></div>`,r:{minutes:7.45,words:447},y:"a",t:"Vault Development Mode Options"}}],["/04-HashiCorp/06-Vault/01-Information/vault-server-configuration-info.html",{loader:()=>u(()=>import("./vault-server-configuration-info.html-BGOhcRSs.js"),__vite__mapDeps([106,1])),meta:{d:1676186503e3,g:["vault","configuration"],e:`
<p>볼트 서버를 시작하는 기초적인 커맨드와 실행 후 안내 메시지는 다음과 같다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault server <span class="token parameter variable">-dev</span>

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server configuration:

             Api Address: http://127.0.0.1:8200
                     Cgo: disabled
         Cluster Address: https://127.0.0.1:8201
   Environment Variables: <span class="token environment constant">HOME</span>, ITERM_PROFILE, <span class="token punctuation">..</span>.
              Go Version: go1.19.4
              Listener <span class="token number">1</span>: tcp <span class="token punctuation">(</span>addr: <span class="token string">"127.0.0.1:8200"</span>, cluster address: <span class="token string">"127.0.0.1:8201"</span>, max_request_duration: <span class="token string">"1m30s"</span>, max_request_size: <span class="token string">"33554432"</span>, tls: <span class="token string">"disabled"</span><span class="token punctuation">)</span>
               Log Level: info
                   Mlock: supported: false, enabled: <span class="token boolean">false</span>
           Recovery Mode: <span class="token boolean">false</span>
                 Storage: inmem
                 Version: Vault v1.12.3, built <span class="token number">2023</span>-02-02T09:07:27Z
             Version Sha: 209b3dd99fe8ca320340d08c70cff5f620261f9b

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server started<span class="token operator">!</span> Log data will stream <span class="token keyword">in</span> below:

<span class="token punctuation">..</span>.
</code></pre></div>`,r:{minutes:3.22,words:193},y:"a",t:"Vault Server Configuration - Info"}}],["/04-HashiCorp/06-Vault/01-Information/vault-sizing.html",{loader:()=>u(()=>import("./vault-sizing.html-D5IrY045.js"),__vite__mapDeps([107,1])),meta:{d:1641009317e3,g:["vault","sizing"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/vault/reference-architecture#deployment-system-requirements" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/reference-architecture#deployment-system-requirements</a></p>
<p>Vault의 Backend-Storage 사용 여부에 따라 구성에 차이가 발생</p>
</blockquote>`,r:{minutes:3.27,words:196},y:"a",t:"Vault Sizing"}}],["/04-HashiCorp/06-Vault/01-Information/vault-token.html",{loader:()=>u(()=>import("./vault-token.html-CYkgLsx9.js"),__vite__mapDeps([108,1])),meta:{d:1677917082e3,g:["vault","token"],e:`
<blockquote>
<p><a href="https://developer.hashicorp.com/vault/docs/concepts/tokens" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/concepts/tokens</a></p>
</blockquote>
<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20230304125220402.png" alt="image-20230304125220402" tabindex="0" loading="lazy"><figcaption>image-20230304125220402</figcaption></figure>`,r:{minutes:17.23,words:1034},y:"a",t:"Token의 이해"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/keymgmt.html",{loader:()=>u(()=>import("./keymgmt.html-B83NNEs3.js"),__vite__mapDeps([109,1])),meta:{d:1691365293e3,g:["vault","Vault Enterprise","keymgmt"],e:`
<blockquote>
<p>Key Management Secret Engine을 활성화 하기 위해서는 <code>ADP</code> 수준의 라이선스가 필요하다.</p>
</blockquote>
<p>Key Management 시크릿 엔진은 KMS(Key Management Service)를 공급하는 대상의 암호화 키의 배포 및 수명 주기 관리를 위한 워크플로를 제공한다. KMS 공급자 고유의 암호화 기능을 기존처럼 사용하면서도, 볼트에서 키를 중앙 집중식으로 제어할 수 있다.</p>
<p>볼트는 KMS의 구성에 사용되는 Key Meterial 원본을 생성하여 보유한다. 관리가능한 KMS에 대해 키 수명주기를 설정 및 관리하면 Key Meterial의 복사본이 대상에 배포된다. 이 방식으로 볼트는 KMS 서비스의 전체 수명 주기 관리 및 키 복구 수단을 제공한다. 지원되는 KMS는 다음과 같다.</p>`,r:{minutes:67.97,words:4078},y:"a",t:"Key Management"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/kmip-mongo.html",{loader:()=>u(()=>import("./kmip-mongo.html-BF7BI0gZ.js"),__vite__mapDeps([110,1])),meta:{d:1641009317e3,g:["vault","Vault Enterprise","KMIP","MongoDB"],e:`
<blockquote>
<p>Enterprise 기능</p>
</blockquote>
<h2>Vault - dev mode run (Option)</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">VAULT_UI</span><span class="token operator">=</span>true vault server -dev-root-token-id<span class="token operator">=</span>root <span class="token parameter variable">-dev</span> -log-level<span class="token operator">=</span>trace

<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span><span class="token string">"http://127.0.0.1:8200"</span>
<span class="token builtin class-name">echo</span> <span class="token string">"export VAULT_ADDR=<span class="token variable">$VAULT_ADDR</span>"</span> <span class="token operator">&gt;&gt;</span> /root/.bashrc
vault status
vault login root
</code></pre></div>`,r:{minutes:4.27,words:256},y:"a",t:"KMIP - MongoDB"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/pki-nginx.html",{loader:()=>u(()=>import("./pki-nginx.html-D_QvHKJG.js"),__vite__mapDeps([111,1])),meta:{d:1641009317e3,g:["vault","PKI"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/vault/pki-engine" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/pki-engine</a></p>
</blockquote>
<h2>Vault 구성</h2>
<p>환경 변수</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_SKIP_VERIFY</span><span class="token operator">=</span>True
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span><span class="token string">'http://172.28.128.11:8200'</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span>s.8YXFI825TZxnwLtYHsLc9Fnb
</code></pre></div>`,r:{minutes:16,words:960},y:"a",t:"PKI - nginx 샘플"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-debian.html",{loader:()=>u(()=>import("./ssh-otp-debian.html-CrCVjeVz.js"),__vite__mapDeps([112,1])),meta:{d:1641009317e3,g:["vault","SSH","OTP","Debian","Ubuntu"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/vault/pki-engine" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/pki-engine</a></p>
</blockquote>
<h2>Vault설정</h2>
<p>시크릿 엔진 활성화</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span> <span class="token function">ssh</span> <span class="token function">ssh</span>
</code></pre></div>`,r:{minutes:5.55,words:333},y:"a",t:"SSH OTP - Debian 계열"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.html",{loader:()=>u(()=>import("./ssh-otp-redhat.html-B0IAdt0z.js"),__vite__mapDeps([113,1])),meta:{d:1641009317e3,g:["vault","SSH","OTP","Rocky","RHEL","CentOS"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/vault/pki-engine" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/pki-engine</a></p>
</blockquote>
<h2>Vault설정</h2>
<p>시크릿 엔진 활성화</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span> <span class="token function">ssh</span> <span class="token function">ssh</span>
</code></pre></div>`,r:{minutes:5.25,words:315},y:"a",t:"SSH OTP - RedHat 계열"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-signed-certificates.html",{loader:()=>u(()=>import("./ssh-signed-certificates.html-BUys2Kll.js"),__vite__mapDeps([114,1])),meta:{d:1641009317e3,g:["vault","SSH"],e:`
<h2>Vault설정</h2>
<p>시크릿 엔진 활성화</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>ssh-client-signer <span class="token function">ssh</span>
</code></pre></div>`,r:{minutes:3.7,words:222},y:"a",t:"SSH - Signed Certificates"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/transform-fpe.html",{loader:()=>u(()=>import("./transform-fpe.html-C_FJbXA2.js"),__vite__mapDeps([115,1])),meta:{d:1645244902e3,g:["vault","transform","fpe"],e:`
<p>Transform secrets 엔진은 제공된 입력 값에 대해 안전한 데이터 변환 및 토큰화를 처리합니다. 변환 방법은 FF3-1 을 통한 형태 보존 암호화(FPE) 와 같은 NIST 검증된 암호화 표준을 포함 할 수 있지만 마스킹과 같은 다른 수단을 통한 데이터의 익명 변환일 수도 있습니다.</p>
<ul>
<li>Doc : <a href="https://www.vaultproject.io/docs/secrets/transform" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/docs/secrets/transform</a></li>
<li>Learn : <a href="https://learn.hashicorp.com/tutorials/vault/transform" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/transform</a></li>
</ul>`,r:{minutes:4.33,words:260},y:"a",t:"Transform FPE (Ent)"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/transit-import.html",{loader:()=>u(()=>import("./transit-import.html-B-6QwaJ8.js"),__vite__mapDeps([116,1])),meta:{d:1695292702e3,g:["vault","transit"],e:`
<p>키 가져오기(Import) 기능은 HSM, 사용자 정의 키, 기타 외부 시스템에서 기존 키를 가져와야 하는 경우를 지원한다. 공개키(Public Key)만을 가져올 수도 있다.</p>
<div class="hint-container info">
<p class="hint-container-title">links</p>
<ul>
<li>
<p>Article : <a href="https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK" target="_blank" rel="noopener noreferrer">https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK</a></p>
</li>
<li>
<p>CLI : <a href="https://developer.hashicorp.com/vault/docs/commands/transit/import" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/commands/transit/import</a></p>
</li>
<li>
<p>API : <a href="https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key</a></p>
</li>
</ul>
</div>`,r:{minutes:22.67,words:1360},y:"a",t:"Transit (Import)"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/transit.html",{loader:()=>u(()=>import("./transit.html-zA-AvD3r.js"),__vite__mapDeps([117,1])),meta:{d:1641009317e3,g:["vault","transit"],e:`
<iframe width="560" height="315" src="https://www.youtube.com/embed/LkyperCGEDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<h2>Vault구성 (Option)</h2>
<p>시크릿 엔진 활성화</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_SKIP_VERIFY</span><span class="token operator">=</span>True
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span><span class="token string">'http://172.28.128.21:8200'</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span><span class="token operator">&lt;</span>mytoken<span class="token operator">&gt;</span>
</code></pre></div>`,r:{minutes:7.22,words:433},y:"a",t:"Transit"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/aws-auth.html",{loader:()=>u(()=>import("./aws-auth.html-BlTBSYxP.js"),__vite__mapDeps([118,1])),meta:{d:1688129915e3,g:["vault auth","AWS"],e:`
<blockquote>
<p><a href="https://developer.hashicorp.com/vault/docs/auth/aws" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/auth/aws</a></p>
<p><a href="https://developer.hashicorp.com/vault/api-docs/auth/aws" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/api-docs/auth/aws</a></p>
<p><a href="https://blog.gruntwork.io/a-guide-to-automating-hashicorp-vault-3-authenticating-with-an-iam-user-or-role-a3203a3ee088" target="_blank" rel="noopener noreferrer">https://blog.gruntwork.io/a-guide-to-automating-hashicorp-vault-3-authenticating-with-an-iam-user-or-role-a3203a3ee088</a></p>
</blockquote>`,r:{minutes:22.43,words:1346},y:"a",t:"AWS Auth Method"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/mfa-login.html",{loader:()=>u(()=>import("./mfa-login.html-DsqAB4gO.js"),__vite__mapDeps([119,1])),meta:{d:1651826418e3,g:["vault auth","MFA"],e:`
<blockquote>
<p>HashiCorp Learn - Login MFA : <a href="https://learn.hashicorp.com/tutorials/vault/multi-factor-authentication" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/multi-factor-authentication</a><br>
Configure TOTP MFA Method : <a href="https://www.vaultproject.io/api-docs/secret/identity/mfa/totp" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/api-docs/secret/identity/mfa/totp</a><br>
Vault Login MFA Overview : <a href="https://www.vaultproject.io/docs/auth/login-mfa" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/docs/auth/login-mfa</a><br>
1.10.3+ recommend : <a href="https://discuss.hashicorp.com/t/vault-1-10-3-released/39394" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/vault-1-10-3-released/39394</a></p>
</blockquote>`,r:{minutes:4.7,words:282},y:"a",t:"MFA Login with Vault TOTP"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html",{loader:()=>u(()=>import("./super-user-create.html-DJ6Rk50V.js"),__vite__mapDeps([120,1])),meta:{d:1641009317e3,g:["vault auth"],e:`
<div class="hint-container caution">
<p class="hint-container-title">주의</p>
<p>해당 방법은 username/password 방식의 Admin권한의 사용자를 생성하나,<br>
보안상 실 구성에는 권장하지 않습니다.</p>
</div>
<ol>
<li>userpass 활성화</li>
</ol>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth <span class="token builtin class-name">enable</span> userpass
</code></pre></div>`,r:{minutes:3.2,words:192},y:"a",t:"Vault SuperUser 생성"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/token_role.html",{loader:()=>u(()=>import("./token_role.html-C1NJOlqB.js"),__vite__mapDeps([121,1])),meta:{d:1651059687e3,g:["vault auth"],e:`
<p>별도 Auth Method를 사용하지 않고 Token으로만 사용하는 경우 Token에 대한 role을 생성하여 해당 role의 정의된 설정에 종속된 Token을 생성할 수 있음</p>
<ul>
<li>Entity가 발생하므로 Vault Client Count 절약 가능</li>
<li>일관된 Token 생성 가능</li>
<li>Token에 대한 별도 Tune(TTL 조정 등) 가능</li>
</ul>
<h2>절차</h2>
<ol>
<li>
<p>UI &gt; Access &gt; Entities &gt; [create entity] : <code>100y-entity</code></p>
</li>
<li>
<p>entity에서 aliases 생성 : <code>100y-alias</code></p>
</li>
<li>
<p>role 생성 (payload.json)</p>
<div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"allowed_policies"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"my-policy"</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"100y"</span><span class="token punctuation">,</span>
  <span class="token property">"orphan"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"bound_cidrs"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"127.0.0.1/32"</span><span class="token punctuation">,</span> <span class="token string">"128.252.0.0/16"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"renewable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"allowed_entity_aliases"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"100y-alias"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>role 적용</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">"X-Vault-Token: hvs.QKRiVmCedA06dCSc2TptmSk1"</span> <span class="token parameter variable">-X</span> POST <span class="token parameter variable">--data</span> @payload.json http://127.0.0.1:8200/v1/auth/token/roles/100y
</code></pre></div></li>
<li>
<p>role에 대한 사용자 정의 tune 적용(옵션)</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth tune -max-lease-ttl<span class="token operator">=</span>876000h token/role/100y
vault auth tune -default-lease-ttl<span class="token operator">=</span>876000h token/role/100y
</code></pre></div></li>
<li>
<p>tune 적용된 role 확인</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token builtin class-name">read</span> auth/token/roles/100y

Key                         Value
---                         -----
allowed_entity_aliases      <span class="token punctuation">[</span>100y-alias<span class="token punctuation">]</span>
allowed_policies            <span class="token punctuation">[</span>default<span class="token punctuation">]</span>
allowed_policies_glob       <span class="token punctuation">[</span><span class="token punctuation">]</span>
bound_cidrs                 <span class="token punctuation">[</span><span class="token number">127.0</span>.0.1 <span class="token number">128.252</span>.0.0/16<span class="token punctuation">]</span>
disallowed_policies         <span class="token punctuation">[</span><span class="token punctuation">]</span>
disallowed_policies_glob    <span class="token punctuation">[</span><span class="token punctuation">]</span>
explicit_max_ttl            0s
name                        100y
orphan                      <span class="token boolean">false</span>
path_suffix                 n/a
period                      0s
renewable                   <span class="token boolean">true</span>
token_bound_cidrs           <span class="token punctuation">[</span><span class="token number">127.0</span>.0.1 <span class="token number">128.252</span>.0.0/16<span class="token punctuation">]</span>
token_explicit_max_ttl      0s
token_no_default_policy     <span class="token boolean">false</span>
token_period                0s
token_type                  default-service
</code></pre></div></li>
<li>
<p>token 생성</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault token create -entity-alias<span class="token operator">=</span>100y-alias <span class="token parameter variable">-role</span><span class="token operator">=</span>100y
Key                  Value
---                  -----
token                hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4
token_accessor       Cx6qjyUGwqPmqoPNe9tmkCiN
token_duration       876000h
token_renewable      <span class="token boolean">true</span>
token_policies       <span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span>
identity_policies    <span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span>
policies             <span class="token punctuation">[</span><span class="token string">"default"</span><span class="token punctuation">]</span>
</code></pre></div></li>
<li>
<p>token이 role의 구성이 반영되었는지 확인</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault token lookup hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4

Key                            Value
---                            -----
accessor                       Cx6qjyUGwqPmqoPNe9tmkCiN
bound_cidrs                    <span class="token punctuation">[</span><span class="token number">127.0</span>.0.1 <span class="token number">128.252</span>.0.0/16<span class="token punctuation">]</span>
creation_time                  <span class="token number">1651059486</span>
creation_ttl                   876000h
display_name                   token
entity_id                      53fc4716-fc0d-db34-14b8-ab4258f89fb1
expire_time                    <span class="token number">2122</span>-04-03T20:38:06.73198+09:00
explicit_max_ttl               0s
external_namespace_policies    map<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token function">id</span>                             hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4
identity_policies              <span class="token punctuation">[</span>default<span class="token punctuation">]</span>
issue_time                     <span class="token number">2022</span>-04-27T20:38:06.731984+09:00
meta                           <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
num_uses                       <span class="token number">0</span>
orphan                         <span class="token boolean">false</span>
path                           auth/token/create/100y
policies                       <span class="token punctuation">[</span>default<span class="token punctuation">]</span>
renewable                      <span class="token boolean">true</span>
role                           100y
ttl                            875999h59m3s
<span class="token builtin class-name">type</span>                           <span class="token function">service</span>
</code></pre></div></li>
</ol>`,r:{minutes:5.88,words:353},y:"a",t:"Token Role"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/vault-kv-v2-ui-policy.html",{loader:()=>u(()=>import("./vault-kv-v2-ui-policy.html-CVIVQRS8.js"),__vite__mapDeps([122,1])),meta:{d:1641009317e3,g:["vault","kv","policy"],e:`
<blockquote>
<p>사용자별 UI 접근에 대한 설정을 Kv-v2를 예로 확인</p>
</blockquote>
<h2>Policy 구성</h2>
<p>UI 접근을 위해서는 <code>metadata</code>에 대한 권한 추가가 필요함</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault policy <span class="token function">write</span> ui-kv-policy - <span class="token operator">&lt;&lt;</span> <span class="token string">EOF

path "kv-v2/data/path/" {
  capabilities = ["create", "update", "read", "delete", "list"]
}
path "kv-v2/delete/path/" {
  capabilities = ["update"]
}
path "kv-v2/metadata/path/" {
  capabilities = ["list", "read", "delete"]
}
path "kv-v2/destroy/path/" {
  capabilities = ["update"]
}

path "kv-v2/data/path/userid/*" {
  capabilities = ["create", "update", "read", "delete", "list"]
}
path "kv-v2/delete/path/userid/*" {
  capabilities = ["update"]
}
path "kv-v2/metadata/path/userid/*" {
  capabilities = ["list", "read", "delete"]
}
path "kv-v2/destroy/path/userid/*" {
  capabilities = ["update"]
}

# Additional access for UI
path "kv-v2/metadata" {
  capabilities = ["list"]
}
EOF</span>

<span class="token comment">##### or #####</span>

vault policy <span class="token function">write</span> ui-kv-policy - <span class="token operator">&lt;&lt;</span> <span class="token string">EOF

path "kv-v2/data/path/userid" {
  capabilities = ["create", "update", "read", "delete", "list"]
}
path "kv-v2/delete/path/userid" {
  capabilities = ["update"]
}
path "kv-v2/metadata/path/userid" {
  capabilities = ["list", "read", "delete"]
}
path "kv-v2/destroy/path/userid" {
  capabilities = ["update"]
}

# Additional access for UI
path "kv-v2/metadata/*" {
  capabilities = ["list"]
}
EOF</span>

</code></pre></div>`,r:{minutes:3.78,words:227},y:"a",t:"kv-v2 UI Policy"}}],["/04-HashiCorp/06-Vault/04-UseCase/API-security.html",{loader:()=>u(()=>import("./API-security.html-BmPgj7Xt.js"),__vite__mapDeps([123,1])),meta:{a:"GS",d:1710859305e3,g:["vault","token","pki","mTLS"],e:`
<blockquote>
<p>참고 1: <a href="https://owasp.org/API-Security/editions/2023/en/0x11-t10/" target="_blank" rel="noopener noreferrer">OWASP Top 10 API Securit Risks - 2023</a><br>
참고 2: <a href="https://cf-assets.www.cloudflare.com/slt3lc6tev37/5zfIEoxvRDHLRbkBaLJqsT/c712b0273971194774fc7326b3b1da34/Whitepaper_A-Guide-to-API-Security_Korean_20220622.pdf" target="_blank" rel="noopener noreferrer">Cloudflare API 보안 가이드</a></p>
</blockquote>`,r:{minutes:30.62,words:1837},y:"a",t:"API 보안을 위한 Vault 활용 (API Key)"}}],["/04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.html",{loader:()=>u(()=>import("./argocd-vault-plugin.html-B2bdEOTd.js"),__vite__mapDeps([124,1])),meta:{d:1686536963e3,g:["vault","argocd","gitops","devsescops","pipeline","github","gitlab","secret","kubernetes","k8s","eks"],e:`
<blockquote>
<p>참고 : 본 글은 AEWS 스터디 7주차 내용중 일부로 작성된 내용입니다.</p>
</blockquote>
<h2>1. ArgoCD</h2>
<img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/oH5ELj.jpg" alt="img" style="zoom:50%;">
<h3>1) 개요 및 소개</h3>
<p>Argo <strong>CD</strong> is a declarative, <strong>GitOps</strong> continuous delivery tool for <strong>Kubernetes</strong>.</p>`,r:{minutes:35.45,words:2127},y:"a",t:"ArgoCD Vault Plugin"}}],["/04-HashiCorp/06-Vault/04-UseCase/jenkins-pipeilne-vault-approle.html",{loader:()=>u(()=>import("./jenkins-pipeilne-vault-approle.html-DLOeUldc.js"),__vite__mapDeps([125,1])),meta:{d:1656429396e3,g:["vault","jenkins","approle"],e:`
<p>Vault의 AppRole 인증 방식은 Vault Token을 얻기위한 단기 자격증명을 사용하는 장점이 있지만 자동화된 환경에 어울리는(반대로 사람에게 불편한)방식으로 Vault를 이용하는 애플리케이션/스크립트의 배포 파이프라인을 구성하는 방식을 추천합니다.</p>
<details class="hint-container details"><summary>TEST ENV</summary>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ sw_vers
ProductName:	macOS
ProductVersion:	<span class="token number">12.4</span>

$ brew <span class="token parameter variable">--version</span>
Homebrew <span class="token number">3.5</span>.2

$ <span class="token function">git</span> version
<span class="token function">git</span> version <span class="token number">2.27</span>.0

$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
openjdk version <span class="token string">"11.0.14.1"</span> <span class="token number">2022</span>-02-08

$ gradle <span class="token parameter variable">--version</span>
Welcome to Gradle <span class="token number">7.4</span>.2<span class="token operator">!</span>

$ <span class="token function">docker</span> version
Client:
 Version:           <span class="token number">20.10</span>.9

Server:
 Engine:
  Version:          <span class="token number">20.10</span>.14

$ vault version
Vault v1.11.0

$ nomad version
Nomad v1.3.1

$ <span class="token function">curl</span> <span class="token parameter variable">--version</span>
<span class="token function">curl</span> <span class="token number">7.79</span>.1 <span class="token punctuation">(</span>x86_64-apple-darwin21.0<span class="token punctuation">)</span>
</code></pre></div></details>`,r:{minutes:27.25,words:1635},y:"a",t:"Jenkins Pipeline Vault Approle (with Nomad)"}}],["/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault-otp.html",{loader:()=>u(()=>import("./jenkins-with-vault-otp.html-BrSiwllB.js"),__vite__mapDeps([126,1])),meta:{d:1645000713e3,g:["vault","jenkins","otp","token"],e:`
<p>jenkins와 vault otp를 연동하여 pipe line에서 ssh/scp test</p>
<h2>otp 설정은 docmoa의 ssh-otp 참고</h2>
<ul>
<li><a href="/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.html" target="_blank">OTP 설정 링크</a></li>
</ul>
<h2>vault token 설정</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># ssh 권한을 사용 할 policy 생성</span>
$ <span class="token function">tee</span> ssh-policy.hcl <span class="token operator">&lt;&lt;</span><span class="token string">EOF
# To list SSH secrets paths
path "ssh/*" {
  capabilities = [ "list" ]
}
# To use the configured SSH secrets engine otp_key_role role
path "ssh/creds/otp_key_role" {
  capabilities = ["create", "read", "update"]
}
EOF</span>

<span class="token comment">#ssh(otp) 정책 생성</span>
$ vault policy <span class="token function">write</span> <span class="token function">ssh</span> ssh-policy.hcl

<span class="token comment">#rest api에서 사용 할 token 생성</span>
$ vault token create <span class="token parameter variable">-policy</span><span class="token operator">=</span>ssh
</code></pre></div>`,r:{minutes:3.3,words:198},y:"a",t:"jenkins with vault otp"}}],["/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html",{loader:()=>u(()=>import("./jenkins-with-vault.html-CXzDO7O5.js"),__vite__mapDeps([127,1])),meta:{d:1643344857e3,g:["vault","jenkins","screct","kv"],e:`
<p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br>
이 예제는 진짜 kv까지만 테스트함</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># approle 엔진 생성</span>
$ vault auth <span class="token builtin class-name">enable</span> approle
<span class="token comment"># kv2 enable</span>
$ vault secrets <span class="token builtin class-name">enable</span> kv-v2
<span class="token comment"># kv enable</span>
$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv

<span class="token comment"># jenkins 정책으로 될 파일 생성 v1, v2</span>
$ <span class="token function">tee</span> jenkins-policy.hcl <span class="token operator">&lt;&lt;</span><span class="token string">EOF
path "kv/secret/data/jenkins/*" {
  capabilities = [ "read" ]
}
path "kv-v2/data/jenkins/*" {
  capabilities = [ "read" ]
}
EOF</span>

<span class="token comment">#jenkins 정책 생성</span>
vault policy <span class="token function">write</span> jenkins jenkins-policy.hcl

<span class="token comment">#approle 생성 및 정책 jenkins에 연결</span>
vault <span class="token function">write</span> auth/approle/role/jenkins <span class="token assign-left variable">token_policies</span><span class="token operator">=</span><span class="token string">"jenkins"</span> <span class="token punctuation">\\</span>
<span class="token assign-left variable">token_ttl</span><span class="token operator">=</span>1h <span class="token assign-left variable">token_max_ttl</span><span class="token operator">=</span>4h
 
<span class="token comment">#Role id, secret id 가져오기</span>

vault <span class="token builtin class-name">read</span> auth/approle/role/jenkins/role-id
vault <span class="token function">write</span> <span class="token parameter variable">-f</span> auth/approle/role/jenkins/secret-id


vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv
$ <span class="token function">tee</span> gitlab.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  "gitlabIP": "172.21.2.52",
  "api-key": "RjLAbbWsSAzXoyBvo2qL"
}
EOF</span>

<span class="token function">tee</span> gitlab-v2.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  "gitlabIP": "172.21.2.52",
  "api-key": "RjLAbbWsSAzXoyBvo2qL",
  "version": "v2"
}
EOF</span>

vault kv put kv/secret/data/jenkins/gitlab @gitlab.json
vault kv put kv-v2/jenkins/gitlab @gitlab-v2.json
</code></pre></div>`,r:{minutes:4.32,words:259},y:"a",t:"jenkins with vault"}}],["/04-HashiCorp/06-Vault/04-UseCase/mtls.html",{loader:()=>u(()=>import("./mtls.html-zQJlY365.js"),__vite__mapDeps([128,1])),meta:{d:1679214075e3,g:["vault","pki","mTLS"],e:`
<blockquote>
<p>Demo App Github : <a href="https://github.com/Great-Stone/vault-mtls-demo" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/vault-mtls-demo</a></p>
</blockquote>
<h2>1. mTLS 설명</h2>
<h3>1.1 SSL과 TLS</h3>
<p>SSL(Secure Sokets Layer, 보안 소캣 계층)는 클라이언트와 서버 사이에 전송된 데이터를 암호화 하고 인터넷 연결에 보안을 유지하는 표준 기술이다. 악의적 외부인이 클라이언트와 서버 사이에 전송되는 정보를 확인 및 탈취하는 것을 방지한다.</p>`,r:{minutes:43.32,words:2599},y:"a",t:"Vault PKI - mTLS demo"}}],["/04-HashiCorp/06-Vault/04-UseCase/nomad-integration.html",{loader:()=>u(()=>import("./nomad-integration.html-BDzE2skb.js"),__vite__mapDeps([129,1])),meta:{d:16536985e5,g:["nomad","vault","aws","db"],e:`
<blockquote>
<p>Dev Mode 를 활용한 테스트</p>
<ul>
<li>
<p><strong>목적</strong> : Spring boot 기반 애플리케이션에서 Nomad 를 이용하여 Vault의 dynamic secret 을 최소한의 코드변경으로 사용할 수 있는 워크 플로우 구성</p>
</li>
<li>
<p><strong>코드 기반 인경우의 예제</strong> : <a href="https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g" target="_blank" rel="noopener noreferrer">https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g</a></p>
</li>
<li>
<p><strong>Vault-Nomad Integration</strong> : <a href="https://www.nomadproject.io/docs/integrations/vault-integration" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/docs/integrations/vault-integration</a></p>
</li>
<li>
<p><strong>Version</strong> (<a href="https://releases.hashicorp.com" target="_blank" rel="noopener noreferrer">Download</a>)</p>
<ul>
<li>Nomad v1.3.1 (2b054e38e91af964d1235faa98c286ca3f527e56)</li>
<li>Vault v1.10.3 (af866591ee60485f05d6e32dd63dde93df686dfb)</li>
</ul>
</li>
<li>
<p>Kubernetes 환경인 경우 Vault CSI Provider를 통해 비슷한 구성 가능 : <a href="https://www.vaultproject.io/docs/platform/k8s/csi" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/docs/platform/k8s/csi</a></p>
</li>
</ul>
</blockquote>`,r:{minutes:21.18,words:1271},y:"a",t:"Vault & Nomad Integration Test"}}],["/04-HashiCorp/06-Vault/04-UseCase/sentinel-check-identity-cidr.html",{loader:()=>u(()=>import("./sentinel-check-identity-cidr.html-BhuUFGNn.js"),__vite__mapDeps([130,1])),meta:{d:1668567247e3,g:["vault","sentinel","cidr","enterprise"],e:`
<blockquote>
<p>Enterprise 기능</p>
</blockquote>
<p>Token Role에 <code>bound_cidr</code>을 적용하거나 여타 인증(AppRole, Userpass 등)에 허용하는 cidr을 적용하는 경우 다시 Token을 발급하거나 인증받지 않는한은 cidr을 기반으로한 차단을 동적으로 적용할 수 없다.</p>
<p>이경우 Sentinel을 사용하여 동적인 정책을 적용할 수 있다. Sentinel은 ACL방식의 기존 <code>Policy</code>와는 달리 Path가 아닌 다른 검증 조건을 추가할 수 있다.</p>`,r:{minutes:6.58,words:395},y:"a",t:"Sentinel - (Identity & CIDR)"}}],["/04-HashiCorp/06-Vault/04-UseCase/spring-boot.html",{loader:()=>u(()=>import("./spring-boot.html-Car1Wnki.js"),__vite__mapDeps([131,1])),meta:{d:1681084498e3,g:["vault","java","spring"],e:`
<blockquote>
<p>Example Source : <a href="https://github.com/Great-Stone/vault_springboot_example" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/vault_springboot_example</a></p>
</blockquote>
<p>볼트는 애플리케이션(앱)의 구성관리, 특히 사용자 ID, 패스워드, Token, 인증서, 엔드포인트, AWS 자격증명 등과 같은 민감한 정보를 안전하게 저장하는 중앙 집중식 인프라를 제공한다. 서비스의 성장과 더불어, 이를 구성하는 앱은 확장과 분리 요구 사항이 발생하면 구성 관리가 어려워 진다. 특히, 시크릿 정보가 포함되는 구성 관리는 수동으로 관리하는 경우 로컬 환경을 포함한 여러 시스템에 노출되는 위험성을 갖고, 환경마다 다른 시크릿을 관리하기위한 유지 관리의 노력과 비용이 증가한다. 볼트에서 이야기하는 앱과 관련한 "시크릿 스프롤(퍼짐)" 현상은 다음과 같다.</p>`,r:{minutes:25.33,words:1520},y:"a",t:"Vault로 Spring Boot 구성관리"}}],["/04-HashiCorp/06-Vault/04-UseCase/terraform-with-aws-secret-engine.html",{loader:()=>u(()=>import("./terraform-with-aws-secret-engine.html-yJ2ztf-y.js"),__vite__mapDeps([132,1])),meta:{a:"powhapki",d:1650373852e3,g:["terraform","vault","aws"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p><a href="https://learn.hashicorp.com/tutorials/terraform/secrets-vault?in=vault/secrets-management" target="_blank" rel="noopener noreferrer">Inject Secrets into Terraform Using the Vault Provider</a></p>
<p><a href="https://registry.terraform.io/providers/hashicorp/vault/latest/docs#using-vault-credentials-in-terraform-configuration" target="_blank" rel="noopener noreferrer">Using Vault credentials in Terraform configuration</a></p>
<p><a href="https://www.youtube.com/watch?v=fOybhcbuxJ0" target="_blank" rel="noopener noreferrer">Best Practices for using Terraform with Vault</a></p>
</div>`,r:{minutes:5.88,words:353},y:"a",t:"Terraform 코드 상에서 Vault 연동하기"}}],["/04-HashiCorp/06-Vault/04-UseCase/transit-stress-test.html",{loader:()=>u(()=>import("./transit-stress-test.html-CBMdB1j5.js"),__vite__mapDeps([133,1])),meta:{d:1647319815e3,g:["vault","performance","transit"],e:`
<blockquote>
<p>wrk github : <a href="https://github.com/wg/wrk" target="_blank" rel="noopener noreferrer">https://github.com/wg/wrk</a><br>
transit : <a href="https://www.vaultproject.io/docs/secrets/transit" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/docs/secrets/transit</a></p>
</blockquote>`,r:{minutes:2.55,words:153},y:"a",t:"Vault Stress Test"}}],["/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-integration-three-methods.html",{loader:()=>u(()=>import("./vault-k8s-integration-three-methods.html-UnBBhzd_.js"),__vite__mapDeps([134,1])),meta:{d:1682257604e3,g:["vault","kubernetes","secret","VSO"],e:`
<ul>
<li>Sidecar Agent Injector</li>
<li>CSI provider</li>
<li>Vault Secrets Operator</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">개요</p>
<p>본 글에서는 HashiCorp Vault 및 Kubernetes 통합을 위해 HashiCorp가 지원하는 세 가지 방법을 자세히 비교한다:</p>
<ol>
<li>볼트 사이드카 에이전트 인젝터(Sidecar Agent Injector)</li>
<li>볼트 컨테이너 스토리지 인터페이스 공급자(Container Storage Interface (CSI) provider)</li>
<li>볼트 시크릿 오퍼레이터(Secrets Operator)</li>
</ol>
<p>각 방법에 대한 실용적인 지침(guidance)을 제공하여 사용 사례에 가장 적합한 방법을 이해하고 선택할 수 있도록 안내한다.</p>
</div>`,r:{minutes:16.12,words:967},y:"a",t:"Kubernetes Vault 통합방안 3가지 비교"}}],["/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-manually-using-the-sidecar.html",{loader:()=>u(()=>import("./vault-k8s-manually-using-the-sidecar.html-BZkCXq66.js"),__vite__mapDeps([135,1])),meta:{d:1701658962e3,g:["vault","kubernetes"],e:`
<p>Kubernetes(K8s)환경에서 외부 Vault(External Vault Server)와 연계하는 경우 일반적으로 <code>kubernetes</code> 인증방식을 활용하여 Vault와 K8s 간 플랫폼 수준에서의 인증을 처리하나, K8s로의 Cluster API에 대한 inbound가 막혀있는 경우 이같은 방식은 사용할 수 없다. 따라서 <code>helm</code>, <code>vso</code> 같은 방식의 사용이 불가능하므로 Vault Agent를 Sidecar로 함께 배포하는 경우 수동으로 구성해주어야 한다.</p>`,r:{minutes:12.95,words:777},y:"a",t:"Kubernetes에 Vault Agent(Sidecar) 수동 구성"}}],["/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-usecase-csi-injection.html",{loader:()=>u(()=>import("./vault-k8s-usecase-csi-injection.html-3dgeP-ic.js"),__vite__mapDeps([136,1])),meta:{d:1678338483e3,g:["vault","kubernetes"],e:`
<p>Vault에 저장된 시크릿 또는 발행되는(Dynamic) 시크릿을 획득하기 위해서는, 시크릿을 요청하는 클라이언트(사람/앱/장비)가 다음의 과정을 수행해야 합니다.</p>
<ol>
<li>클라이언트가 Vault 토큰을 획득하기 위한 인증 절차</li>
<li>획득한 Vault 토큰의 수명주기 관리 (갱신과 재요청)</li>
<li>Vault의 특정 시크릿 경로를 저장하고 해당 시크릿 요청</li>
<li>동적(Dynamic) 시크릿인 경우 해당 임대(Lease)정보 확인 및 갱신과 재요청</li>
</ol>
<p>Vault는 위의 과정을 클라이언트 대신 플랫폼 수준에서 대행할 수 있는 방안을 제공하고 있습니다. 여기서는 Kubernetes 상에서의 Vault와의 통합 구성을 활용하여 위 과정을 대체하고 Kubernetes 플랫폼 자체(Kuberetes Native)의 기능을 사용하듯 Vault의 시크릿을 사용하게 만드는 방식에 대해 설명합니다.</p>`,r:{minutes:64.25,words:3855},y:"a",t:"How to integrate Vault with K8s (CSI & Injection & VSO)"}}],["/04-HashiCorp/06-Vault/04-UseCase/windows-password-rotation.html",{loader:()=>u(()=>import("./windows-password-rotation.html-hjecEz9c.js"),__vite__mapDeps([137,1])),meta:{d:1641009317e3,g:["vault","windows","nomad","password"],e:`
<blockquote>
<p><a href="https://scarolan.github.io/painless-password-rotation/#37" target="_blank" rel="noopener noreferrer">https://scarolan.github.io/painless-password-rotation/#37</a></p>
</blockquote>
<p>Kv 추가</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-version</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>systemcreds/ kv
</code></pre></div>`,r:{minutes:10.6,words:636},y:"a",t:"Windows Password rotation"}}],["/04-HashiCorp/06-Vault/05-TroubleShooting/400-error.html",{loader:()=>u(()=>import("./400-error.html-DrEeq7AG.js"),__vite__mapDeps([138,1])),meta:{d:1647319815e3,g:["vault","error","400"],e:`
<blockquote>
<p>Vault HTTP Status Codes : <a href="https://www.vaultproject.io/api#http-status-codes" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/api#http-status-codes</a></p>
</blockquote>
<p>Vault에 API 요청시 400에러가 발생하는 경우 Vault로 전달된 데이터 형태가 올바른지 확인이 필요하다.</p>
<ul>
<li><code>400</code> :  Invalid request, missing or invalid data.</li>
</ul>`,r:{minutes:2.32,words:139},y:"a",t:"Vault 400 Error"}}],["/04-HashiCorp/06-Vault/05-TroubleShooting/vault-sizing.html",{loader:()=>u(()=>import("./vault-sizing.html-D0odKRXa.js"),__vite__mapDeps([139,1])),meta:{d:1641009317e3,g:["vault","MiriaDB"],e:`
<ul>
<li>
<p>현상 : $vault read mysql/creds/my-role 입력시 오류</p>
</li>
<li>
<p>오류 내용 :</p>
</li>
</ul>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Error reading mysql/creds/my-role: Error making API request.
URL: GET http://127.0.0.1:8200/v1/mysql/creds/my-role
Code: 500. Errors:

* 1 error occurred:
      * Error 1470: String 'v-root-my-role-87BP93fheiaHKGelc' is too long for user name (should be no longer than 16)
</code></pre></div>`,r:{minutes:1.93,words:116},y:"a",t:"Vault MariaDB5.5 Dynamic Secret"}}],["/04-HashiCorp/06-Vault/06-Config/tls-config.html",{loader:()=>u(()=>import("./tls-config.html-CuLtz3A6.js"),__vite__mapDeps([140,1])),meta:{d:1645407262e3,g:["Vault","https","Configuration","Server"],e:`
<ul>
<li>Consul tls create 명령어를 이용하여 인증서 생성, 그외에 사설인증서 만드는 방법으로는 더 테스트 해봐야 할듯</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># consul tls create로 인증서 생성</span>
consul tls ca create <span class="token parameter variable">-domain</span><span class="token operator">=</span>vault <span class="token parameter variable">-days</span> <span class="token number">3650</span>
consul tls cert create <span class="token parameter variable">-domain</span><span class="token operator">=</span>vault <span class="token parameter variable">-dc</span><span class="token operator">=</span>global  <span class="token parameter variable">-server</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span>
consul tls cert create <span class="token parameter variable">-domain</span><span class="token operator">=</span>vault <span class="token parameter variable">-dc</span><span class="token operator">=</span>global  <span class="token parameter variable">-client</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span>
consul tls cert create <span class="token parameter variable">-domain</span><span class="token operator">=</span>vault <span class="token parameter variable">-dc</span><span class="token operator">=</span>global  <span class="token parameter variable">-cli</span> <span class="token parameter variable">-days</span> <span class="token number">3650</span>

<span class="token comment"># vault config는 아래와 같다.</span>
ui <span class="token operator">=</span> <span class="token boolean">true</span>

storage <span class="token string">"consul"</span> <span class="token punctuation">{</span>
  address <span class="token operator">=</span> <span class="token string">"127.0.0.1:8500"</span>
  path    <span class="token operator">=</span> <span class="token string">"vault/"</span>
<span class="token punctuation">}</span>

listener <span class="token string">"tcp"</span> <span class="token punctuation">{</span>
  address         <span class="token operator">=</span> <span class="token string">"0.0.0.0:8200"</span>
  <span class="token comment">#tls_disable = 1</span>
  tls_cert_file <span class="token operator">=</span> <span class="token string">"/root/temp/global-server-vault-0.pem"</span>
  tls_key_file  <span class="token operator">=</span> <span class="token string">"/root/temp/global-server-vault-0-key.pem"</span>
<span class="token punctuation">}</span>

disable_mlock <span class="token operator">=</span> <span class="token boolean">true</span>
default_lease_ttl <span class="token operator">=</span> <span class="token string">"768h"</span>
max_lease_ttl <span class="token operator">=</span> <span class="token string">"768h"</span>

api_addr <span class="token operator">=</span>  <span class="token string">"https://172.21.2.50:8200"</span>

<span class="token comment"># 명령어를 써야 할 경우 cli 인증서를 export 해줘야한다.</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_CACERT</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/temp/vault-agent-ca.pem"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_CLIENT_CERT</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/temp/global-cli-vault-0.pem"</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_CLIENT_KEY</span><span class="token operator">=</span><span class="token string">"<span class="token variable">\${<span class="token environment constant">HOME</span>}</span>/temp/global-cli-vault-0-key.pem"</span>
</code></pre></div>`,r:{minutes:2.07,words:124},y:"a",t:"Vault Server tls 설정"}}],["/04-HashiCorp/06-Vault/06-Config/vault-agent.html",{loader:()=>u(()=>import("./vault-agent.html-BOmqSmND.js"),__vite__mapDeps([141,1])),meta:{d:1656577693e3,g:["Vault","AWS","Configuration","Agent"],e:`
<blockquote>
<p>참고 URL : <a href="https://learn.hashicorp.com/tutorials/vault/agent-aws" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/vault/agent-aws</a></p>
</blockquote>
<details class="hint-container details"><summary>Test ENV</summary>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ sw_vers
ProductName:	macOS
ProductVersion:	<span class="token number">12.4</span>

$ vault version
Vault v1.11.0
</code></pre></div></details>`,r:{minutes:13.85,words:831},y:"a",t:"Vault Agent (with aws secret)"}}],["/04-HashiCorp/06-Vault/06-Config/vault-entierprise-license.html",{loader:()=>u(()=>import("./vault-entierprise-license.html-WgKbOOZR.js"),__vite__mapDeps([142,1])),meta:{d:1695769332e3,g:["Vault","Enterprise","License"],e:`
<div class="hint-container tip">
<p class="hint-container-title">관련 URL</p>
<p><a href="https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades</a></p>
</div>`,r:{minutes:2.67,words:160},y:"a",t:"Vault +1.12 라이선스"}}],["/04-HashiCorp/06-Vault/07-Sentinel-Sample/aws-secrets-credential-type-check.html",{loader:()=>u(()=>import("./aws-secrets-credential-type-check.html-DZlKSxvr.js"),__vite__mapDeps([143,1])),meta:{d:1689216508e3,g:["Vault","Sentinel","Policy"],e:`
<h2>1. EGP용 정책 생성 egp_iam_user_deny.sentinel</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>import <span class="token string">"strings"</span>

<span class="token comment"># print(request.data)</span>
<span class="token property">credential_type</span> <span class="token punctuation">=</span> request.data.credential_type
print(<span class="token string">"CREDENTIAL_TYPE: "</span>, credential_type)

<span class="token property">allow_role_type</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"federation_token"</span><span class="token punctuation">]</span>

<span class="token property">role_type_check</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
  credential_type in allow_role_type
<span class="token punctuation">}</span>

<span class="token comment"># Only check AWS Secret Engine</span>
<span class="token comment"># Only check create, update</span>
<span class="token property">precond</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
	request.operation in <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"update"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token property">main</span> <span class="token punctuation">=</span> rule when <span class="token keyword">precond</span> <span class="token punctuation">{</span>
    role_type_check
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.5,words:210},y:"a",t:"AWS Secrets Role Type Check"}}],["/04-HashiCorp/06-Vault/07-Sentinel-Sample/transit-secrets-key-exportable-deny.html",{loader:()=>u(()=>import("./transit-secrets-key-exportable-deny.html-Dog-rij_.js"),__vite__mapDeps([144,1])),meta:{d:1702878519e3,g:["Vault","Sentinel","Policy"],e:`
<h2>1. EGP용 정책 생성 exportable_deny.sentinel</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>import <span class="token string">"strings"</span>

<span class="token property">exportable</span> <span class="token punctuation">=</span> request.data.exportable

<span class="token property">exportable_check</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
  exportable is <span class="token string">"false"</span>
<span class="token punctuation">}</span>

<span class="token property">main</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
  exportable_check
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.85,words:231},y:"a",t:"Transit Key Exportable Deny"}}],["/04-HashiCorp/07-Nomad/01-Information/nomad-sizing.html",{loader:()=>u(()=>import("./nomad-sizing.html-BePeA0yn.js"),__vite__mapDeps([145,1])),meta:{d:1642218029e3,g:["nomad","sizing"],e:`
<blockquote>
<p><a href="https://learn.hashicorp.com/tutorials/nomad/production-reference-architecture-vm-with-consul" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/nomad/production-reference-architecture-vm-with-consul</a></p>
<p>Nomad는 Server/Client 구조로 구성되며, Client의 경우 자원사용량이 매우 미미하므로 자원산정은 Server를 기준으로 산정</p>
</blockquote>`,r:{minutes:1.32,words:79},y:"a",t:"Nomad Sizing"}}],["/04-HashiCorp/07-Nomad/01-Information/nomad_job_restart.html",{loader:()=>u(()=>import("./nomad_job_restart.html-BopONBqy.js"),__vite__mapDeps([146,1])),meta:{d:1644889869e3,g:["nomad","sizing"],e:`
<blockquote>
<p>원문 : <a href="https://www.hashicorp.com/blog/resilient-infrastructure-with-nomad-restarting-tasks" target="_blank" rel="noopener noreferrer">https://www.hashicorp.com/blog/resilient-infrastructure-with-nomad-restarting-tasks</a><br>
Nomad가 종종 운영자 개입 없이 장애, 중단 상황, Nomad 클러스터 인프라의 유지 관리를 처리하는 방법 확인</p>
</blockquote>`,r:{minutes:5.07,words:304},y:"a",t:"task 복구 방식"}}],["/04-HashiCorp/07-Nomad/02-Config/Cloudwatch-Logging.html",{loader:()=>u(()=>import("./Cloudwatch-Logging.html-73IS0NWL.js"),__vite__mapDeps([147,1])),meta:{d:1639533195e3,g:["Nomad","AWS","Cloudwatch","log"],e:`
<p>docker 런타임에는 log driver로 "awslogs"를 지원합니다.<br>
<a href="https://docs.docker.com/config/containers/logging/awslogs/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/config/containers/logging/awslogs/</a></p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>Nomad에서 docker 자체의 로깅을 사용하므로서, Nomad에서 실행되는 docker 기반 컨테이너의 로깅이 특정 환경에 락인되는것을 방지합니다.</p>
</div>`,r:{minutes:4.27,words:256},y:"a",t:"Docker log driver and Cloudwatch on Nomad"}}],["/04-HashiCorp/07-Nomad/02-Config/Namespace.html",{loader:()=>u(()=>import("./Namespace.html-qXZiIaK2.js"),__vite__mapDeps([148,1])),meta:{d:1628557352e3,g:["Nomad","Namespace"],e:`
<blockquote>
<p>Nomad Version : &gt;=  1.0.0<br>
Nomad Ent. Version : &gt;= 0.7.0<br>
<a href="https://learn.hashicorp.com/tutorials/nomad/namespaces" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/nomad/namespaces</a></p>
</blockquote>
<h2>Namespace 생성</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ nomad namespace apply <span class="token parameter variable">-description</span> <span class="token string">"PoC Application"</span> apps
</code></pre></div>`,r:{minutes:1.88,words:113},y:"a",t:"Nomad Namespace"}}],["/04-HashiCorp/07-Nomad/02-Config/Nomad-Ui-Token.html",{loader:()=>u(()=>import("./Nomad-Ui-Token.html-BTTALTis.js"),__vite__mapDeps([149,1])),meta:{d:1648772616e3,g:["Nomad","ACL"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>해당 Token의 policy는 특정인이 원하여 만들었으며, 더 다양한 제약과 허용을 할 수 있습니다. 해당 policy는 아래와 같은 제약과 허용을 합니다.</p>
<ol>
<li>UI에서 exec(job에 접근) 제한</li>
<li>그 외에 job, node, volume, server등의 모든 화면 읽어오기</li>
</ol>
</div>
<h2>Nomad cli</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#원하는 권한이 있는 policy file</span>
$ <span class="token function">cat</span> nomad-ui-policy.hcl
namespace <span class="token string">"*"</span> <span class="token punctuation">{</span>
  policy       <span class="token operator">=</span> <span class="token string">"read"</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"submit-job"</span>, <span class="token string">"dispatch-job"</span>, <span class="token string">"read-logs"</span>, <span class="token string">"list-jobs"</span>, <span class="token string">"parse-job"</span>, <span class="token string">"read-job"</span>, <span class="token string">"csi-list-volume"</span>, <span class="token string">"csi-read-volume"</span>, <span class="token string">"list-scaling-policies"</span>, <span class="token string">"read-scaling-policy"</span>, <span class="token string">"read-job-scaling"</span>, <span class="token string">"read-fs"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token function">node</span> <span class="token punctuation">{</span>
  policy <span class="token operator">=</span> <span class="token string">"read"</span>
<span class="token punctuation">}</span>
host_volume <span class="token string">"*"</span> <span class="token punctuation">{</span>
  policy <span class="token operator">=</span> <span class="token string">"write"</span>
<span class="token punctuation">}</span>
plugin <span class="token punctuation">{</span>
  policy <span class="token operator">=</span> <span class="token string">"read"</span>
<span class="token punctuation">}</span>

<span class="token comment">#위에서 만든 policy 파일을 nomad cluster에 적용</span>
$ nomad acl policy apply <span class="token parameter variable">-description</span> <span class="token string">"Production UI policy"</span> prod-ui nomad-ui-policy.hcl

<span class="token comment">#해당 policy로 token생성(policy는 여러개를 넣을 수도 있음)</span>
$ nomad acl token create <span class="token parameter variable">-name</span><span class="token operator">=</span><span class="token string">"prod ui token"</span> <span class="token parameter variable">-policy</span><span class="token operator">=</span>prod-ui <span class="token parameter variable">-type</span><span class="token operator">=</span>client <span class="token operator">|</span> <span class="token function">tee</span> ui-prod.token
<span class="token comment">#웹 브라우저 로그인을 위해 Secret ID 복사</span>
</code></pre></div>`,r:{minutes:2.02,words:121},y:"a",t:"Nomad UI Token"}}],["/04-HashiCorp/07-Nomad/02-Config/Nomad-sslkey-create.html",{loader:()=>u(()=>import("./Nomad-sslkey-create.html-Dh4m543w.js"),__vite__mapDeps([150,1])),meta:{d:162955514e4,g:["Nomad","SSL"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>공식 사이트에 consul 인증서 생성 가이드는 있는데 Nomad 인증서 생성가이드는<br>
Show Terminal을 들어가야 볼 수 있기때문에 귀찮음을 해결하기 위해 공유합니다.</p>
</div>
<h2>Nomad 인증서 생성</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>consul tls ca create -domain=nomad -days 3650

consul tls cert create -domain=nomad -dc=global  -server -days 3650

consul tls cert create -domain=nomad -dc=global  -client -days 3650

consul tls cert create -domain=nomad -dc=global  -cli -days 3650
</code></pre></div>`,r:{minutes:1.38,words:83},y:"a",t:"Nomad 인증서 생성"}}],["/04-HashiCorp/07-Nomad/02-Config/Server.html",{loader:()=>u(()=>import("./Server.html-iWd9jUqH.js"),__vite__mapDeps([151,1])),meta:{d:162955514e4,g:["Nomad","Enterprise","Configuration","Server"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br>
네트워크는 프라이빗(온프레이머스) 환경입니다.</p>
</div>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">#nomad server 설정</span>
<span class="token keyword">server</span> <span class="token punctuation">{</span>
  <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">bootstrap_expect</span> <span class="token punctuation">=</span> <span class="token number">3</span>
  <span class="token property">license_path</span><span class="token punctuation">=</span><span class="token string">"/opt/nomad/license/nomad.license"</span>
  <span class="token keyword">server_join</span> <span class="token punctuation">{</span>
    <span class="token property">retry_join</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"172.30.1.17"</span>,<span class="token string">"172.30.1.18"</span>,<span class="token string">"172.30.1.19"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token property">raft_protocol</span> <span class="token punctuation">=</span> <span class="token number">3</span>
  <span class="token property">event_buffer_size</span> <span class="token punctuation">=</span> <span class="token number">100</span>
  <span class="token property">non_voting_server</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token property">heartbeat_grace</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
<span class="token punctuation">}</span>
 
 
<span class="token comment">#tls 설정</span>
<span class="token keyword">tls</span> <span class="token punctuation">{</span>
  <span class="token property">http</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">rpc</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
 
  <span class="token property">ca_file</span>   <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/nomad-agent-ca.pem"</span>
  <span class="token property">cert_file</span> <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/global-server-nomad-0.pem"</span>
  <span class="token property">key_file</span>  <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/global-server-nomad-0-key.pem"</span>
 
  <span class="token comment">#UI오픈할 서버만 변경</span>
  <span class="token property">verify_server_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token property">verify_https_client</span>    <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token comment">#일반서버는 아래와 같이 설정</span>
  <span class="token property">verify_server_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">verify_https_client</span>    <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.68,words:161},y:"a",t:"Nomad 서버 설정"}}],["/04-HashiCorp/07-Nomad/02-Config/client.html",{loader:()=>u(()=>import("./client.html-grsgOTgJ.js"),__vite__mapDeps([152,1])),meta:{d:162955514e4,g:["Nomad","Enterprise","Configuration","Client"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 Client설정 파일입니다.<br>
네트워크는 프라이빗(온프레이머스) 환경입니다.</p>
</div>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">#nomad client 설정</span>
 
<span class="token keyword">client</span> <span class="token punctuation">{</span>
  <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">servers</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"172.30.1.17"</span>,<span class="token string">"172.30.1.18"</span>,<span class="token string">"172.30.1.19"</span><span class="token punctuation">]</span>
  <span class="token keyword">server_join</span> <span class="token punctuation">{</span>
    <span class="token property">retry_join</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"172.30.1.17"</span>,<span class="token string">"172.30.1.18"</span>,<span class="token string">"172.30.1.19"</span><span class="token punctuation">]</span>
    <span class="token property">retry_max</span> <span class="token punctuation">=</span> <span class="token number">3</span>
    <span class="token property">retry_interval</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span>
  <span class="token punctuation">}</span>
  <span class="token comment">#host에서 nomad에서 사용할 수 있는 volume 설정</span>
  host_volume <span class="token string">"logs"</span> <span class="token punctuation">{</span>
    <span class="token property">path</span>      <span class="token punctuation">=</span> <span class="token string">"/var/logs/elk/"</span>
    <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
  <span class="token comment">#각각의 client의 레이블 작성</span>
  <span class="token comment">#meta {</span>
  <span class="token comment">#   name = "moon"</span>
  <span class="token comment">#   zone = "web"</span>
  <span class="token comment">#}</span>
  <span class="token comment">#nomad에서 예약할 자원</span>
  <span class="token keyword">reserved</span> <span class="token punctuation">{</span>
    <span class="token comment">#Specifies the amount of CPU to reserve, in MHz.</span>
    <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">200</span>
    <span class="token comment">#Specifies the amount of memory to reserve, in MB.</span>
    <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">8192</span>
    <span class="token comment">#Specifies the amount of disk to reserve, in MB.</span>
    <span class="token property">disk</span> <span class="token punctuation">=</span> <span class="token number">102400</span>
  <span class="token punctuation">}</span>
  <span class="token property">no_host_uuid</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token comment">#bridge network interface name</span>
  <span class="token property">bridge_network_name</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
  <span class="token property">bridge_network_subnet</span> <span class="token punctuation">=</span> <span class="token string">"172.26.64.0/20"</span>
  <span class="token property">cni_path</span> <span class="token punctuation">=</span> <span class="token string">"/opt/cni/bin"</span>
  <span class="token property">cni_config_dir</span> <span class="token punctuation">=</span> <span class="token string">"/opt/cni/config"</span>
<span class="token punctuation">}</span>
<span class="token comment">#tls 설정</span>
<span class="token keyword">tls</span> <span class="token punctuation">{</span>
  <span class="token property">http</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">rpc</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
 
  <span class="token property">ca_file</span>   <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/nomad-agent-ca.pem"</span>
  <span class="token property">cert_file</span> <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/global-client-nomad-0.pem"</span>
  <span class="token property">key_file</span>  <span class="token punctuation">=</span> <span class="token string">"/opt/ssl/nomad/global-client-nomad-0-key.pem"</span>
 
  <span class="token property">verify_server_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">verify_https_client</span>    <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:3.08,words:185},y:"a",t:"Nomad 클라이언트 설정"}}],["/04-HashiCorp/07-Nomad/02-Config/common.html",{loader:()=>u(()=>import("./common.html-B1LB5s9d.js"),__vite__mapDeps([153,1])),meta:{d:162955514e4,g:["Nomad","Enterprise","Configuration","Common"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server, client의 공통설정 파일입니다.<br>
저는 agent.hcl파일안에 다 넣고 실행하지만 나눠서 추후에는 기능별로 나눠서 사용할 예정입니다.</p>
</div>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">#nomad 공통 설정</span>
<span class="token property">datacenter</span> <span class="token punctuation">=</span> <span class="token string">"dc1"</span>
<span class="token property">region</span> <span class="token punctuation">=</span> <span class="token string">"global"</span>
<span class="token property">data_dir</span> <span class="token punctuation">=</span> <span class="token string">"/opt/nomad/nomad"</span>
<span class="token property">bind_addr</span> <span class="token punctuation">=</span> <span class="token string">"{{ GetInterfaceIP \`ens192\` }}"</span>
 
<span class="token keyword">advertise</span> <span class="token punctuation">{</span>
  <span class="token comment"># Defaults to the first private IP address.</span>
  <span class="token comment">#http = "{{ GetInterfaceIP \`ens244\` }}"</span>
  <span class="token comment">#rpc  = "{{ GetInterfaceIP \`ens244\` }}"</span>
  <span class="token comment">#serf = "{{ GetInterfaceIP \`ens244\` }}"</span>
  <span class="token property">http</span> <span class="token punctuation">=</span> <span class="token string">"{{ GetInterfaceIP \`ens192\` }}"</span>
  <span class="token property">rpc</span> <span class="token punctuation">=</span> <span class="token string">"{{ GetInterfaceIP \`ens192\` }}"</span>
  <span class="token property">serf</span> <span class="token punctuation">=</span> <span class="token string">"{{ GetInterfaceIP \`ens192\` }}"</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">consul</span> <span class="token punctuation">{</span>
  <span class="token property">address</span>  <span class="token punctuation">=</span> <span class="token string">"127.0.0.1:8500"</span>
  <span class="token property">server_service_name</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
  <span class="token property">client_service_name</span> <span class="token punctuation">=</span> <span class="token string">"nomad-client"</span>
  <span class="token property">auto_advertise</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">server_auto_join</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">client_auto_join</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token comment">#consul join용 token</span>
  <span class="token property">token</span> <span class="token punctuation">=</span> <span class="token string">"33ee4276-e1ef-8e5b-d212-1f94ca8cf81e"</span>
<span class="token punctuation">}</span>
<span class="token property">enable_syslog</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token property">enable_debug</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
<span class="token property">disable_update_check</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
 
<span class="token property">log_level</span> <span class="token punctuation">=</span> <span class="token string">"DEBUG"</span>
<span class="token property">log_file</span> <span class="token punctuation">=</span> <span class="token string">"/var/log/nomad/nomad.log"</span>
<span class="token property">log_rotate_duration</span> <span class="token punctuation">=</span> <span class="token string">"24h"</span>
<span class="token property">log_rotate_bytes</span> <span class="token punctuation">=</span> <span class="token number">104857600</span>
<span class="token property">log_rotate_max_files</span> <span class="token punctuation">=</span> <span class="token number">100</span>
 
<span class="token keyword">ports</span> <span class="token punctuation">{</span>
  <span class="token property">http</span> <span class="token punctuation">=</span> <span class="token number">4646</span>
  <span class="token property">rpc</span> <span class="token punctuation">=</span> <span class="token number">4647</span>
  <span class="token property">serf</span> <span class="token punctuation">=</span> <span class="token number">4648</span>
<span class="token punctuation">}</span>
 
<span class="token comment">#prometheus에서 nomad의 metrics값을 수집 해 갈 수 있게 해주는 설정</span>
<span class="token keyword">telemetry</span> <span class="token punctuation">{</span>
  <span class="token property">collection_interval</span> <span class="token punctuation">=</span> <span class="token string">"1s"</span>
  <span class="token property">disable_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">prometheus_metrics</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">publish_allocation_metrics</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">publish_node_metrics</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
 
 
plugin <span class="token string">"docker"</span> <span class="token punctuation">{</span>
  <span class="token keyword">config</span> <span class="token punctuation">{</span>
    <span class="token keyword">auth</span> <span class="token punctuation">{</span>
      <span class="token property">config</span> <span class="token punctuation">=</span> <span class="token string">"/root/.docker/config.json"</span>
    <span class="token punctuation">}</span>
    <span class="token comment">#온프레이머스환경에서는 해당 이미지를 private repository에 ㅓㄶ고 변경</span>
    <span class="token property">infra_image</span> <span class="token punctuation">=</span> <span class="token string">"google-containers/pause-amd64:3.1"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">acl</span> <span class="token punctuation">{</span>
  <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.17,words:130},y:"a",t:"Nomad 공통 설정"}}],["/04-HashiCorp/07-Nomad/02-Config/consul-namespace.html",{loader:()=>u(()=>import("./consul-namespace.html-BLQ28vFA.js"),__vite__mapDeps([154,1])),meta:{d:1630463356e3,g:["Nomad","Enterprise","Consul"],e:`
<h2>Job의 Consul Namespace 정의</h2>
<p>Consul Enterprise는 <code>Namespace</code>가 있어서 Nomad로 Consul에 서비스 등록 시 특정 Namespace를 지정할 수 있음</p>
<p>Job &gt; Group &gt; Consul</p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre hcl="" class="language-hcl"><code>job <span class="token string">"frontback_job"</span> <span class="token punctuation">{</span>
  group <span class="token string">"backend_group_v1"</span> <span class="token punctuation">{</span>

    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    <span class="token keyword">consul</span> <span class="token punctuation">{</span>
      <span class="token property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"mynamespace"</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"backend"</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>

      <span class="token keyword">connect</span> <span class="token punctuation">{</span>
        <span class="token keyword">sidecar_service</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"http"</span>
        <span class="token property">path</span>     <span class="token punctuation">=</span> <span class="token string">"/"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"5s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"3s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment"># 생략</span>
</code></pre></div>`,r:{minutes:13.97,words:838},y:"a",t:"Consul namespace 사용시 Nomad의 서비스 등록"}}],["/04-HashiCorp/07-Nomad/02-Config/csi-nfs.html",{loader:()=>u(()=>import("./csi-nfs.html-O4bPCACK.js"),__vite__mapDeps([155,1])),meta:{d:1639892483e3,g:["Nomad","config","csi","nfs"],e:`
<ul>
<li>nomad에서 외부 storage를 사용하기 위한 plugin
<ul>
<li>그 중에서도 접근성이 좋은 nfs를 사용, public cloud에서 제공하는 storage와는 사용법이 다를 수 있음</li>
</ul>
</li>
<li>구성환경은 아래와 같다.(사실 nfs server정보만 보면 될 거 같음)
<ul>
<li>nfs-server 10.0.0.151:/mnt/data</li>
</ul>
</li>
</ul>
<h2>controller</h2>
<ul>
<li>하나이상의 node에 storage를 배포할 수 있게 해주는 중앙관리 기능</li>
<li>어느 node(client)에 띄어져도 상관없다.</li>
</ul>`,r:{minutes:3.45,words:207},y:"a",t:"nomad csi (nfs)"}}],["/04-HashiCorp/07-Nomad/02-Config/custom-ui-link.html",{loader:()=>u(()=>import("./custom-ui-link.html-1bou9Gl-.js"),__vite__mapDeps([156,1])),meta:{d:1661946241e3,g:["Nomad","UI"],e:`
<blockquote>
<p><a href="https://www.nomadproject.io/docs/configuration/ui" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/docs/configuration/ui</a></p>
</blockquote>
<p>Nomad ui 설정에 다음과 같이 Consul과 Vault의 링크를 추가할 수 있습니다.</p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">ui</span> <span class="token punctuation">{</span>
  <span class="token property">enabled</span> <span class="token punctuation">=</span>  <span class="token boolean">true</span>

  <span class="token keyword">consul</span> <span class="token punctuation">{</span>
    <span class="token property">ui_url</span> <span class="token punctuation">=</span> <span class="token string">"https://consul.example.com:8500/ui"</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">vault</span> <span class="token punctuation">{</span>
    <span class="token property">ui_url</span> <span class="token punctuation">=</span> <span class="token string">"https://vault.example.com:8200/ui"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.68,words:41},y:"a",t:"Nomad UI에 Consul과 Vault 링크 추가"}}],["/04-HashiCorp/07-Nomad/02-Config/integrateVault.html",{loader:()=>u(()=>import("./integrateVault.html-CDM9pfG7.js"),__vite__mapDeps([157,1])),meta:{d:1642495601e3,g:["Nomad","Namespace"],e:`
<h2>아래 작업 전 Forward DNS for Consul Service Discovery을 진행해야함</h2>
<ul>
<li><a href="/04-HashiCorp/04-Consul/02-Configuration/ForwardDns.html" target="_blank">Consul 설정 링크</a></li>
</ul>
<h2>예제를 위한 vault kv 설정</h2>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 사용된 policy들</span>
$ <span class="token function">cat</span> nomad-cluster-role.json
<span class="token punctuation">{</span>
    <span class="token string">"allowed_policies"</span><span class="token builtin class-name">:</span> <span class="token string">"admin"</span>,
    <span class="token string">"token_explicit_max_ttl"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"nomad-cluster"</span>,
    <span class="token string">"orphan"</span><span class="token builtin class-name">:</span> true,
    <span class="token string">"token_period"</span><span class="token builtin class-name">:</span> <span class="token number">259200</span>,
    <span class="token string">"renewable"</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
vault <span class="token function">write</span> /auth/token/roles/nomad-cluster @nomad-cluster-role.json

$ <span class="token function">cat</span> admin-policy.hcl 
<span class="token comment"># Read system health check</span>
path <span class="token string">"sys/health"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"read"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Create and manage ACL policies broadly across Vault</span>

<span class="token comment"># List existing policies</span>
path <span class="token string">"sys/policies/acl"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"list"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Create and manage ACL policies</span>
path <span class="token string">"sys/policies/acl/*"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"read"</span>, <span class="token string">"update"</span>, <span class="token string">"delete"</span>, <span class="token string">"list"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Enable and manage authentication methods broadly across Vault</span>

<span class="token comment"># Manage auth methods broadly across Vault</span>
path <span class="token string">"auth/*"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"read"</span>, <span class="token string">"update"</span>, <span class="token string">"delete"</span>, <span class="token string">"list"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Create, update, and delete auth methods</span>
path <span class="token string">"sys/auth/*"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"update"</span>, <span class="token string">"delete"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># List auth methods</span>
path <span class="token string">"sys/auth"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"read"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Enable and manage the key/value secrets engine at \`secret/\` path</span>

<span class="token comment"># List, create, update, and delete key/value secrets</span>
path <span class="token string">"secret/*"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"read"</span>, <span class="token string">"update"</span>, <span class="token string">"delete"</span>, <span class="token string">"list"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># Manage secrets engines</span>
path <span class="token string">"sys/mounts/*"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"create"</span>, <span class="token string">"read"</span>, <span class="token string">"update"</span>, <span class="token string">"delete"</span>, <span class="token string">"list"</span>, <span class="token string">"sudo"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># List existing secrets engines.</span>
path <span class="token string">"sys/mounts"</span>
<span class="token punctuation">{</span>
  capabilities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"read"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

vault policy <span class="token function">write</span> admin admin-policy.hcl

<span class="token comment"># token 생성</span>
vault token create <span class="token parameter variable">-policy</span> admin <span class="token parameter variable">-period</span> 72h <span class="token parameter variable">-orphan</span>
</code></pre></div>`,r:{minutes:3.67,words:220},y:"a",t:"integrate Vault"}}],["/04-HashiCorp/07-Nomad/02-Config/nomad-guide-basic.html",{loader:()=>u(()=>import("./nomad-guide-basic.html-BLGYoJMu.js"),__vite__mapDeps([158,1])),meta:{d:1652660873e3,g:["Nomad","Sample"],e:`
<h2>Download</h2>
<ul>
<li>Release link : <a href="https://releases.hashicorp.com/nomad" target="_blank" rel="noopener noreferrer">https://releases.hashicorp.com/nomad</a></li>
<li>Version : 1.3.x</li>
<li>Platform 선택
<ul>
<li>darwin(= MAC)</li>
<li>Linux</li>
<li>Windows</li>
</ul>
</li>
</ul>
<h2>on Linux</h2>`,r:{minutes:13.72,words:823},y:"a",t:"Nomad Guide - Basic"}}],["/04-HashiCorp/07-Nomad/02-Config/nomad-on-windows.html",{loader:()=>u(()=>import("./nomad-on-windows.html-BYhamXjD.js"),__vite__mapDeps([159,1])),meta:{d:1658932718e3,g:["Nomad","Windows"],e:`
<p>Nomad를 Windows환경에 구성하고 실행을위해 서비스로 등록하는 방법을 알아봅니다. 솔루션 실행 환경 또는 운영/개발자의 익숙함 정도에 따라 다양한 OS를 선택하여 애플리케이션을 배포하게 됩니다. Nomad를 통해 배포를 위한 오케스트레이터를 Windows 환경에 적용하고 서비스에 등록하여 상시적으로 실행될 수 있도록하는 구성을 안내합니다.</p>
<h2>Port 구성</h2>
<blockquote>
<p>참고 url : <a href="https://www.nomadproject.io/docs/install/production/requirements#ports-used" target="_blank" rel="noopener noreferrer">Port used</a></p>
</blockquote>`,r:{minutes:11.73,words:704},y:"a",t:"Nomad on Windows"}}],["/04-HashiCorp/07-Nomad/04-UseCase/jenkins-pipeline.html",{loader:()=>u(()=>import("./jenkins-pipeline.html-CBzJHLHi.js"),__vite__mapDeps([160,1])),meta:{d:1656411375e3,g:["Nomad","Jenkins","Java","Docker","Vault"],e:`
<h3>Test ENV</h3>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ sw_vers
ProductName:	macOS
ProductVersion:	<span class="token number">12.4</span>

$ brew <span class="token parameter variable">--version</span>
Homebrew <span class="token number">3.5</span>.2

$ <span class="token function">git</span> version
<span class="token function">git</span> version <span class="token number">2.27</span>.0

$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
openjdk version <span class="token string">"11.0.14.1"</span> <span class="token number">2022</span>-02-08

$ gradle <span class="token parameter variable">--version</span>
Welcome to Gradle <span class="token number">7.4</span>.2<span class="token operator">!</span>

$ <span class="token function">docker</span> version
Client:
 Version:           <span class="token number">20.10</span>.9

Server:
 Engine:
  Version:          <span class="token number">20.10</span>.14

$ vault version
Vault v1.11.0

$ nomad version
Nomad v1.3.1

$ <span class="token function">curl</span> <span class="token parameter variable">--version</span>
<span class="token function">curl</span> <span class="token number">7.79</span>.1 <span class="token punctuation">(</span>x86_64-apple-darwin21.0<span class="token punctuation">)</span>

$ aws <span class="token parameter variable">--version</span>
aws-cli/2.7.11 Python/3.10.5 Darwin/21.5.0 source/x86_64 prompt/off
</code></pre></div>`,r:{minutes:27.6,words:1656},y:"a",t:"Jenkins Pipeline Nomad (Integrated Vault)"}}],["/04-HashiCorp/07-Nomad/04-UseCase/job-start-from-hcl.html",{loader:()=>u(()=>import("./job-start-from-hcl.html-BcjMVrKC.js"),__vite__mapDeps([161,1])),meta:{d:167721987e4,g:["Nomad","API","HCL"],e:`
<p>HCL로 작성된 Job의 경우 Nomad CLI 또는 UI 접속이 가능하다면 바로 적용 가능하다.</p>
<details class="hint-container details"><summary>HCL Job Sample (2048.hcl)</summary>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"2048-game"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token property">type</span>        <span class="token punctuation">=</span> <span class="token string">"service"</span>
  group <span class="token string">"game"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span> <span class="token comment"># number of instances</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">80</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"2048"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"alexwhen/docker-2048"</span>

        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"http"</span>
        <span class="token punctuation">]</span>

      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span> <span class="token comment"># 500 MHz</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">256</span> <span class="token comment"># 256MB</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>`,r:{minutes:5.07,words:304},y:"a",t:"Pass HCL to API"}}],["/04-HashiCorp/07-Nomad/04-UseCase/springboot-graceful-shutdown.html",{loader:()=>u(()=>import("./springboot-graceful-shutdown.html-Bj7UKOms.js"),__vite__mapDeps([162,1])),meta:{d:1673502484e3,g:["Nomad","SpringBoot","Java"],e:`
<blockquote>
<p>GitHub 리소스 : <a href="https://github.com/Great-Stone/nomad-springboot-graceful-shutdown" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/nomad-springboot-graceful-shutdown</a></p>
</blockquote>
<h2>테스트 환경</h2>
<ul>
<li>Gradle 7.4.2</li>
<li>Java 11</li>
<li>Spring Boot 2.7.7</li>
<li>Nomad 1.4.3</li>
</ul>`,r:{minutes:8.37,words:502},y:"a",t:"Graceful Shutdown 적용 (kill_signal)"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html",{loader:()=>u(()=>import("./DAS.html-Qmh2Gqly.js"),__vite__mapDeps([163,1])),meta:{d:1664763179e3,g:["Nomad","sample","job","autoscaler","das"],e:`
<ul>
<li>Nomad autoscaler 배포 후 사용할 수 있는 기능 중에 하나</li>
<li>Dynamic application sizing(DAS)의 기능이 설정되어 있는 job을 배포 한 이후 autoscaler job에서 resource의 권고를 받아올 수 있음</li>
<li>권고 받은 값을 사용자가 확인 후 허용할 경우 job의 resource의 변화가 정상적으로 적용됨</li>
</ul>
<h2>autoscaler job은 기존에 사용하던 job을 사용</h2>
<ul>
<li><a href="/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html" target="_blank">AutoScaler job</a></li>
</ul>`,r:{minutes:6.17,words:370},y:"a",t:"Dynamic application sizing"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/VaultSWLB-nginx.html",{loader:()=>u(()=>import("./VaultSWLB-nginx.html-BZGcoqpR.js"),__vite__mapDeps([164,1])),meta:{d:164543379e4,g:["Nomad","Sample","Job","Vault","SWLB"],e:`
<ul>
<li>Vault의 HA구성 시에는 LB가 필요한데, LB대용으로 SWLB를 이용하여 Vault를 사용할 수 있다.
<ul>
<li>해당 페이지에서는 nginx를 사용하였지만, HAproxy도 비슷하게 사용이 가능하다.</li>
</ul>
</li>
</ul>
<h1>nginx job 파일</h1>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"nginx"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"nginx"</span> <span class="token punctuation">{</span>

    <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
      <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
      <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave0"</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#Vault tls가 있고 nomad client hcl 파일에 host volume이 명시되어 있는 설정 값</span>
    volume <span class="token string">"cert-data"</span> <span class="token punctuation">{</span>
      <span class="token property">type</span>      <span class="token punctuation">=</span> <span class="token string">"host"</span>
      <span class="token property">source</span>    <span class="token punctuation">=</span> <span class="token string">"cert-data"</span>
      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#실패 없이 되라고 행운의 숫자인 7을 4번 줌</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">7777</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">7777</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"nginx"</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"nginx"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span>
        <span class="token property">volume</span>      <span class="token punctuation">=</span> <span class="token string">"cert-data"</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/usr/local/cert"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"nginx"</span>

        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span><span class="token punctuation">]</span>
        <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local:/etc/nginx/conf.d"</span>,

        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF        
#Vault는 active서버 1대외에는 전부 standby상태이며 
#서비스 호출 시(write)에는 active 서비스만 호출해야함으로 아래와 같이 consul에서 서비스를 불러옴

upstream backend {
{{ range service "active.vault" }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}

server {
   listen 7777 ssl;
   #위에서 nomad host volume을 mount한 cert를 가져옴
   ssl on;
   ssl_certificate /usr/local/cert/vault/global-client-vault-0.pem;
   ssl_certificate_key /usr/local/cert/vault/global-client-vault-0-key.pem;
   #vault ui 접근 시 / -&gt; /ui redirect되기 때문에 location이 /외에는 되지 않는다.
   location / {
      proxy_pass https://backend;
   }
}
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/load-balancer.conf"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">100</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.65,words:159},y:"a",t:"Vault SWLB용도의 nginx"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html",{loader:()=>u(()=>import("./autoscaler.html-B8EwbSPQ.js"),__vite__mapDeps([165,1])),meta:{d:1644990252e3,g:["Nomad","sample","job","autoscaler","aws"],e:`
<ul>
<li>aws cloud 환경에서 별도의 모니터링 툴을 사용하지 않고 nomad-apm 기능을 이용한 auscaler 구성</li>
<li>Nomad Autoscaler 다운로드 :
<ul>
<li>VM환경: <a href="https://releases.hashicorp.com/nomad-autoscaler/" target="_blank" rel="noopener noreferrer">https://releases.hashicorp.com/nomad-autoscaler/</a></li>
<li>Container환경: <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler</a> , <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise</a></li>
</ul>
</li>
<li>주요링크
<ul>
<li>Nomad Autoscaler aws IAM policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg</a></li>
<li>Nomad Autoscaler policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/policy" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/policy</a></li>
<li>Nomad Autoscaler의 nomad-apm 을 사용하는 경우 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.05,words:363},y:"a",t:"Autoscaler"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/code-server.html",{loader:()=>u(()=>import("./code-server.html-DxkGqFsE.js"),__vite__mapDeps([166,1])),meta:{d:1669181764e3,g:["Nomad","Sample","Job","vs-code"],e:`
<ul>
<li>vs-code를 local이 아닌 환경에서 사용할 수 있도록 도와주는 code-server의 예시입니다.</li>
<li>이 code의 변수는 nomad variable를 활용해서 배포합니다.</li>
</ul>
<h2>변수 선언</h2>
<ul>
<li>web ui 접근 password와 code-server terminal에서 사용 할 sudo의 password 를 변수로 선언했습니다.</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># nomad var put {path기반의 varialbes} key=vaule</span>
$ nomad var put code/config <span class="token assign-left variable">password</span><span class="token operator">=</span>password
</code></pre></div>`,r:{minutes:2.03,words:122},y:"a",t:"code-server"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html",{loader:()=>u(()=>import("./elastic.html-ijgvyIWj.js"),__vite__mapDeps([167,1])),meta:{a:"Ung",d:1632449108e3,g:["Nomad","Sample","Job"],e:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"db"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">5601</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span>
      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/elasticsearch/elasticsearch:6.8.9"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span><span class="token punctuation">]</span>
        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span>
            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/elasticsearch/config/elasticsearch.yml"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
network.host: 0.0.0.0
discovery.seed_hosts: ["127.0.0.1"]
xpack.security.enabled: true
xpack.license.self_generated.type: trial
xpack.monitoring.collection.enabled: true
EOH</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token comment"># "discovery.type":"single-node",</span>
        <span class="token property">ES_JAVA_OPTS</span> <span class="token punctuation">=</span> <span class="token string">"-Xms512m -Xmx1024m"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/kibana/kibana:6.8.9"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span>
        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span>
            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/kibana/config/kibana.yml"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
server.name: kibana
elasticsearch.username: elastic
elasticsearch.password: elastic
EOH</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">ELASTICSEARCH_URL</span><span class="token punctuation">=</span><span class="token string">"http://172.28.128.31:9200"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:2.03,words:122},y:"a",t:"Elastic"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html",{loader:()=>u(()=>import("./elk_version7.html-XcK-LqME.js"),__vite__mapDeps([168,1])),meta:{a:"Ung",d:1642040133e3,g:["Nomad","Sample","Job","elk"],e:`
<h2>7버전에 elsaticsearch에서 기본패스워드를 찾지 못해서 env로 넣어줌</h2>
<h2>logstash는 적당한 샘플을 찾지 못해서 일단은 비워둠</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"elk"</span> <span class="token punctuation">{</span>

    <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

    <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
        <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>kernel<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>"</span>
        <span class="token property">value</span> <span class="token punctuation">=</span> <span class="token string">"linux"</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">update</span> <span class="token punctuation">{</span>
        <span class="token property">stagger</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">max_parallel</span> <span class="token punctuation">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    group <span class="token string">"elk"</span> <span class="token punctuation">{</span>
        <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

        <span class="token keyword">restart</span> <span class="token punctuation">{</span>
            <span class="token property">attempts</span> <span class="token punctuation">=</span> <span class="token number">2</span>
            <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"1m"</span>
            <span class="token property">delay</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span>
            <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"delay"</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">network</span> <span class="token punctuation">{</span>
          port <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">9200</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5601</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

           <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
             <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
             <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
           <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"elasticsearch:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"elastic"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml"</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
cluster.name: "my-cluster"
network.host: 0.0.0.0
discovery.type: single-node
discovery.seed_hosts: ["127.0.0.1"]
xpack.security.enabled: true
xpack.license.self_generated.type: trial
xpack.monitoring.collection.enabled: true
EOF</span>
        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>
            <span class="token keyword">env</span> <span class="token punctuation">{</span>
              <span class="token property">ELASTIC_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-elasticsearch"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2048</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"kibana:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/kibana.yml:/usr/share/kibana/config/kibana.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
#
# ** THIS IS AN AUTO-GENERATED FILE **
#

# Default Kibana configuration for docker target
server.host: "0.0.0.0"
server.shutdownTimeout: "5s"
elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
elasticsearch.username: elastic
elasticsearch.password: elastic
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-kibana"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"kibana"</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
                <span class="token keyword">check</span> <span class="token punctuation">{</span>
                    <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
                    <span class="token property">path</span> <span class="token punctuation">=</span> <span class="token string">"/"</span>
                    <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
                    <span class="token property">timeout</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"logstash:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"logstash"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/logstash.yml:/usr/share/logstash/config/logstash.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
http.host: "0.0.0.0"
xpack.monitoring.elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/logstash.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-logstash"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"logstash"</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">200</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:4.08,words:245},y:"a",t:"elk_version7"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html",{loader:()=>u(()=>import("./ingress-gateway.html-Cp3UOKuc.js"),__vite__mapDeps([169,1])),meta:{a:"Ung",d:164015281e4,g:["Nomad","Sample","Job",""],e:`
<h2>Nomad job으로 ingress gateway 사용하기 (with consul)</h2>
<ul>
<li>consul로 설정하는 ingress gateway가 아닌 Nomad job 기동 시에 ingress gateway 활성화 예제
<ul>
<li>hashicorp 공식 예제가 아닌 다른 걸 해보려하다, 특이한 부분을 확인하여 공유합니다.</li>
</ul>
</li>
<li>사전에 Consul Server는 구축되어 있어야 합니다.</li>
</ul>
<h3>테스트 job (python fastapi)</h3>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"22-fastapi"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"fastapi"</span> <span class="token punctuation">{</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"bridge"</span>
      <span class="token comment">#service가 80으로 뜸, 만약 다른 포트로 뜨는 서비스를 사용 할 경우 image와 to만 변경</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">80</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"fastapi"</span>
      <span class="token comment">#여기서 port에 위에서 미리 선언한 http를 쓸 경우 다이나믹한 port를 가져오는데 </span>
      <span class="token comment">#그럴 경우 ingress gateway에서 못 읽어 온다.</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"80"</span>
      <span class="token keyword">connect</span> <span class="token punctuation">{</span>
        sidecar_service<span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"fastapi"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"tiangolo/uvicorn-gunicorn-fastapi"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">282</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">scaling</span>  <span class="token punctuation">{</span>
      <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
      <span class="token property">min</span>     <span class="token punctuation">=</span> <span class="token number">1</span>
      <span class="token property">max</span>     <span class="token punctuation">=</span> <span class="token number">3</span>

      <span class="token keyword">policy</span> <span class="token punctuation">{</span>
        <span class="token property">evaluation_interval</span> <span class="token punctuation">=</span> <span class="token string">"5s"</span>
        <span class="token property">cooldown</span>            <span class="token punctuation">=</span> <span class="token string">"1m"</span>
        <span class="token comment">#driver = "nomad-apm"</span>
        check <span class="token string">"mem_allocated_percentage"</span> <span class="token punctuation">{</span>
          <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"nomad-apm"</span>
          <span class="token property">query</span>  <span class="token punctuation">=</span> <span class="token string">"max_memory"</span>

          strategy <span class="token string">"target-value"</span> <span class="token punctuation">{</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token number">80</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,r:{minutes:2.92,words:175},y:"a",t:"Nomad ingress gateway"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html",{loader:()=>u(()=>import("./install-ansible-docker.html-DJ7MCh1b.js"),__vite__mapDeps([170,1])),meta:{a:"GS",d:1693402327e3,g:["Nomad","Ansible","Job","Docker"],e:`
<blockquote>
<p>참고 : <a href="https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525</a></p>
</blockquote>
<p>Nomad를 통해 Ops작업을 수행할 때 <code>sysbatch</code> 타입의 Job에 Ansible을 <code>raw_exec</code>로 실행하면 전체 노드에서 일괄로 작업을 수행할 수 있다.</p>`,r:{minutes:4.23,words:254},y:"a",t:"Nomad에서 Ansible로 Docker 설치와 Template 주의사항"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html",{loader:()=>u(()=>import("./jboss.html-BigO34kW.js"),__vite__mapDeps([171,1])),meta:{a:"GS",d:1639892483e3,g:["Nomad","Sample","Job","wildfly","JBoss"],e:`
<blockquote>
<p>image info : <a href="https://quay.io/repository/wildfly/wildfly?tab=info" target="_blank" rel="noopener noreferrer">https://quay.io/repository/wildfly/wildfly?tab=info</a><br>
github : <a href="https://github.com/jboss-dockerfiles/wildfly" target="_blank" rel="noopener noreferrer">https://github.com/jboss-dockerfiles/wildfly</a><br>
wildfly docker example : <a href="http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/" target="_blank" rel="noopener noreferrer">http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/</a></p>
</blockquote>`,r:{minutes:5.27,words:316},y:"a",t:"Wildfly(Jboss)"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html",{loader:()=>u(()=>import("./jenkins_java_driver.html-CnxjTeGE.js"),__vite__mapDeps([172,1])),meta:{a:"GS",d:166773544e4,g:["Nomad","Sample","Job","Jenkins"],e:`
<blockquote>
<p>Nomad</p>
<ul>
<li>Java Driver : <a href="https://developer.hashicorp.com/nomad/docs/drivers/java" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/docs/drivers/java</a></li>
<li>Schecuduler Config : <a href="https://developer.hashicorp.com/nomad/api-docs/operator/scheduler" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/api-docs/operator/scheduler</a></li>
</ul>
</blockquote>`,r:{minutes:6.48,words:389},y:"a",t:"Jenkins(Java Driver) on Nomad"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html",{loader:()=>u(()=>import("./keycloak.html-CitCxjOt.js"),__vite__mapDeps([173,1])),meta:{a:"GS",d:16324491e5,g:["Nomad","Sample","Job"],e:`
<p>Keycloak은 Stateful 한 특성이 있어서 볼륨을 붙여주는것이 좋다.</p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">// nomad namespace apply -description "Keycloak" keycloak</span>

job <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"service"</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>

  group <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    volume <span class="token string">"keycloak-vol"</span> <span class="token punctuation">{</span>
      <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"host"</span>
      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span>
        <span class="token property">volume</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/opt/jboss/keycloak/standalone/data"</span>
        <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"quay.io/keycloak/keycloak:14.0.0"</span>
        <span class="token keyword">port_map</span> <span class="token punctuation">{</span>
          <span class="token property">keycloak</span> <span class="token punctuation">=</span> <span class="token number">8080</span>
          <span class="token property">callback</span> <span class="token punctuation">=</span> <span class="token number">8250</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">KEYCLOAK_USER</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
        <span class="token property">KEYCLOAK_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">550</span>

        <span class="token keyword">network</span> <span class="token punctuation">{</span>
          port <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18080</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"callback"</span> <span class="token punctuation">{</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18250</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">service</span> <span class="token punctuation">{</span>
        <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>
        <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"auth"</span><span class="token punctuation">]</span>

        <span class="token keyword">check</span> <span class="token punctuation">{</span>
          <span class="token property">type</span>  <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
          <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
          <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
          <span class="token property">port</span>  <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.58,words:95},y:"a",t:"Keycloak"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html",{loader:()=>u(()=>import("./mongodb.html-C5e41SMc.js"),__vite__mapDeps([174,1])),meta:{a:"Ung",d:1632449108e3,g:["Nomad","Sample","Job"],e:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"db"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">27017</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span>
      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"mongo:3.6.21"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">MONGO_INITDB_ROOT_USERNAME</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
        <span class="token property">MONGO_INITDB_ROOT_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"password"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.9,words:54},y:"a",t:"MongoDB"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/nexus.html",{loader:()=>u(()=>import("./nexus.html-uCJ7iivJ.js"),__vite__mapDeps([175,1])),meta:{d:1656325647e3,g:["Nomad","Sample","Job"],e:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"nexus"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"nexus"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">8081</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">8081</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"nexus"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"sonatype/nexus3"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">INSTALL4J_ADD_VM_PARAMS</span> <span class="token punctuation">=</span> <span class="token string">"-Xms2703m -Xmx2703m -XX:MaxDirectMemorySize=2703m -Djava.util.prefs.userRoot=/some-other-dir"</span>  
      <span class="token punctuation">}</span>
      
      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2703</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.82,words:49},y:"a",t:"Nexus"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html",{loader:()=>u(()=>import("./nginx.html-miCu6QU1.js"),__vite__mapDeps([176,1])),meta:{d:1633418665e3,g:["Nomad","Sample","Job","reverse proxy","consul service discovery"],e:`
<ul>
<li>nomad와 consul로 cluster로 구성되어 있는 환경에 L4이후에 nomad로 LB를 해야할 경우 사용
<ul>
<li>nginx server_name설정에서 도메인을 받아오고 location에서는 각각의 서브도메인 별로 reverse proxy 동작
<ul>
<li>reverse proxy(up stream)에서는 각각의 consul의 등록된 서비스 호출</li>
</ul>
</li>
</ul>
</li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"nginx"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"nginx"</span> <span class="token punctuation">{</span>
    <span class="token comment">//인증서는 host volume에 업로드</span>
    volume <span class="token string">"certs"</span> <span class="token punctuation">{</span>
      <span class="token property">type</span>      <span class="token punctuation">=</span> <span class="token string">"host"</span>
      <span class="token property">source</span>    <span class="token punctuation">=</span> <span class="token string">"certs"</span>
      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">80</span>
        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">80</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"https"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">443</span>
        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">443</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"nginx"</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
      <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"web"</span><span class="token punctuation">]</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>    
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">port</span>     <span class="token punctuation">=</span> <span class="token string">"http"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"server"</span> <span class="token punctuation">{</span>

      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span>
        <span class="token property">volume</span>      <span class="token punctuation">=</span> <span class="token string">"certs"</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/etc/nginx/certs"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"nginx"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span>,<span class="token string">"https"</span><span class="token punctuation">]</span>
        <span class="token comment">#ports = ["http","https"]</span>
        <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local:/etc/nginx/conf.d"</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF

upstream login.shoping.co.kr {
{{ range service "login" }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}
upstream singup.shoping.co.kr {
{{ range service "signup" }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}
upstream main.shoping.co.kr {
{{ range service "main" }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}

server {
   listen 80;
   listen 443 ssl;
   //domain 및 subdomain호출
   server_name *.shoping.co.kr;
   ssl_certificate "/etc/nginx/certs/server.pem";
   ssl_certificate_key "/etc/nginx/certs/server.key";
   proxy_read_timeout      300;
   proxy_buffers           64 16k;

   //각 sub도메인별
   location / {
      if ($host = login.shoping.co.kr) {
        proxy_pass login.shoping.co.kr;
      }
      if ($host = singup.shoping.co.kr) {
        proxy_pass singup.shoping.co.kr;
      }
      if ($host !~ "(.*main)") {
        proxy_pass main.shoping.co.kr;
      }
   }
}



EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/load-balancer.conf"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div>`,r:{minutes:3.33,words:200},y:"a",t:"nginx"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html",{loader:()=>u(()=>import("./nomad-pack.html-ld7xFZPE.js"),__vite__mapDeps([177,1])),meta:{a:"Ung",d:16395807e5,g:["Nomad","Sample","Job","nomad-pack","vuepress"],e:`
<ul>
<li>nomad job파일을 템플릿처럼 다룰 수 있게 해주는 고마운 기능
<ul>
<li>nomad-pack custom 메뉴얼 주소 및 커뮤니티 registry
<ul>
<li>nomad-pack: <a href="https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md</a></li>
<li>커뮤니티 registry : <a href="https://github.com/hashicorp/nomad-pack-community-registry" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack-community-registry</a></li>
</ul>
</li>
</ul>
</li>
<li>해당 예제는 Vue.js의 vuepress기반의 컨테이너
<ul>
<li>참조링크
<ul>
<li>gitlab: <a href="https://gitlab.com/swbs9000/vuepress" target="_blank" rel="noopener noreferrer">https://gitlab.com/swbs9000/vuepress</a></li>
<li>docker: <a href="https://hub.docker.com/repository/docker/swbs90/vuepress" target="_blank" rel="noopener noreferrer">https://hub.docker.com/repository/docker/swbs90/vuepress</a> CLI: docker push swbs90/vuepress:0.0.3</li>
<li>vuepress: <a href="https://github.com/docmoa/docs" target="_blank" rel="noopener noreferrer">https://github.com/docmoa/docs</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:8.85,words:531},y:"a",t:"nomad-pack custom registry"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/oracleXE.html",{loader:()=>u(()=>import("./oracleXE.html-Byj9RRqc.js"),__vite__mapDeps([178,1])),meta:{d:1632449108e3,g:["Nomad","Sample","Job"],e:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"oracle"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"oracle"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"db"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">1521</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"manage"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">5500</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span>

      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"oracle"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"oracle/database:18.4.0-xe"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span>, <span class="token string">"manage"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">DB_MEMORY</span> <span class="token punctuation">=</span> <span class="token string">"2GB"</span>
        <span class="token property">ORACLE_PWD</span> <span class="token punctuation">=</span> <span class="token string">"password"</span>
        <span class="token property">ORACLE_SID</span> <span class="token punctuation">=</span> <span class="token string">"XE"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:.98,words:59},y:"a",t:"Oracle XE"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html",{loader:()=>u(()=>import("./param-batch-job.html-Coax6QXB.js"),__vite__mapDeps([179,1])),meta:{a:"Ung",d:1640585468e3,g:["Nomad","Sample","Job","param","batch"],e:`
<ul>
<li>parameter를 받아와서 해당 값을 이용하여 다음으로 실행될 job의 값을 다이나믹하게 넣어 만드는 샘플
<ul>
<li>meta_required에 원하는 값을 넣고 template에 env "NOMAD_META_메타명(key)"와 같이 넣어주면 된다.</li>
</ul>
</li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"24-paramete"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"batch"</span>

  <span class="token keyword">parameterized</span> <span class="token punctuation">{</span>
    <span class="token property">payload</span>       <span class="token punctuation">=</span> <span class="token string">"forbidden"</span>
    <span class="token property">meta_required</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"room_num"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  group <span class="token string">"run-main-job"</span> <span class="token punctuation">{</span>

    task <span class="token string">"run-main-job"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"raw_exec"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
        <span class="token comment"># arguments</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"job"</span>, <span class="token string">"run"</span>, <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>NOMAD_TASK_DIR<span class="token punctuation">}</span></span>/room.job"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH

#####################

job "{{ env "NOMAD_META_room_num" }}" {
    datacenters = ["dc1"]

    group "jboss" {

        network {
            port "http" {
                to = "8080"
            }
        }
        service {
            port = "http"
            provider = "nomad"
            name = "{{ env "NOMAD_META_room_num" }}"
            check {
                type     = "tcp"
                interval = "10s"
                timeout  = "2s"
            }
        }
        task "http" {
            driver = "docker"
            config {
                image = "jboss/wildfly"
                ports = ["http"]
            }
            resources {
                cpu    = 500
                memory = 282
            }
        }
    }
}

EOH</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/room.job"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:1.68,words:101},y:"a",t:"param-batch-job"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/redis.html",{loader:()=>u(()=>import("./redis.html-C1FAvFeW.js"),__vite__mapDeps([180,1])),meta:{d:1633418665e3,g:["Nomad","Sample","Job"],e:`
<ul>
<li>추가내용: redis는 data dir, cluster info dir(클러스터 시) 이 두개의 dir가 필요하여 volume을 추가로 붙여줘야한다.
<ul>
<li>data dir을 변경이 번거로움(docker build를 다시 해야함) 그래서 클러스터 시에는 docker build, nomad volume으로 나눔과 같은 방법이 있음</li>
<li>cluster-enabled : 클러스터로 사용합니다. (cluster volume으로 빼둬야됨)</li>
<li>cluster-config-file : 노드별로 클러스터 노드 정보를 conf 파일에 저장합니다.</li>
<li>cluster-node-timeout : 노드간 통신이 되지 않아 timeout 되는 시간을 설정합니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.25,words:255},y:"a",t:"redis"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/scouter.html",{loader:()=>u(()=>import("./scouter.html-Bkk-IPlu.js"),__vite__mapDeps([181,1])),meta:{a:"GS",d:1639485865e3,g:["Nomad","Consul","Scouter","Job"],e:`
<ul>
<li>공식 Github : <a href="https://github.com/scouter-project/scouter" target="_blank" rel="noopener noreferrer">https://github.com/scouter-project/scouter</a></li>
<li>Scouter 다운로드
<ul>
<li>scouter collector와 host-agent 를 실행하는 job에서 버전정보를 기반으로 다운로드</li>
<li>host agent는 <code>system</code> 타입으로 모든 노드에서 실행되도록 구성</li>
</ul>
</li>
<li>tomcat 다운로드
<ul>
<li>다운로드 받지않고 호스트에 미리 설치해 놓는 방식이 더 가벼워보임 --&gt; 아마도 Packer, Terraform의 조합이면 가능</li>
<li>다운로드 받게 구성하면 컨테이너처럼 Nomad가 배포할 때마다 다운받아서 구성 가능</li>
</ul>
</li>
<li>Template - server.xml
<ul>
<li>server.xml 기본 구성에서 port가 선언되는 자리를 java option에서 받을 수 있도록 변경</li>
<li>Template 구성도 가능하고 미리 구성한 xml을 다운로드 받게 하는것도 괜찮아 보임</li>
</ul>
</li>
<li>Consul과 함께 구성된 경우 Nginx같은 LB 구성 Job 에서 backend를 동적으로 구성 가능</li>
<li>Nomad에 Scouter Collector와 Host Agent를 위한 별도 Namespace를 구성하는 것도 관리를 위해 좋아보임<br>
<code>nomad namespace apply -description "scouter" scouter</code></li>
</ul>`,r:{minutes:10.17,words:610},y:"a",t:"Scouter"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/service-mesh-test.html",{loader:()=>u(()=>import("./service-mesh-test.html-BGBJkDFs.js"),__vite__mapDeps([182,1])),meta:{d:1632449108e3,g:["Nomad","Consul","Sample","Job","Service Mesh"],e:`
<p>HashiCorp 공식 Service Mesh Test App</p>
<p><a href="https://learn.hashicorp.com/tutorials/nomad/consul-service-mesh" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/nomad/consul-service-mesh</a></p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"countdash"</span> <span class="token punctuation">{</span>
  <span class="token property">region</span>      <span class="token punctuation">=</span> <span class="token string">"global"</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token comment"># namespace   = "mesh"</span>

  group <span class="token string">"api"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"bridge"</span>
      port <span class="token string">"api"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">9001</span> <span class="token comment"># static 설정이 없으므로 컨테이너의 앱 9001과 노출되는 임의의 포트와 맵핑</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"count-api"</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"api"</span> <span class="token comment"># 임의의 포트 할당을 network port id로 지정</span>

      <span class="token keyword">connect</span> <span class="token punctuation">{</span>
        <span class="token keyword">sidecar_service</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"web"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>
      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"hashicorpnomad/counter-api:v1"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"api"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  group <span class="token string">"dashboard"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"bridge"</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9002</span> <span class="token comment"># 컨테이너 앱 9002와 외부노출되는 사용자 지정 static port를 맵핑</span>
        <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">9002</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"count-dashboard"</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"http"</span> <span class="token comment"># 할당된 포트를 network port id로 지정</span>

      <span class="token keyword">connect</span> <span class="token punctuation">{</span>
        <span class="token keyword">sidecar_service</span> <span class="token punctuation">{</span>
          <span class="token keyword">proxy</span> <span class="token punctuation">{</span>
            <span class="token keyword">upstreams</span> <span class="token punctuation">{</span>
              <span class="token property">destination_name</span> <span class="token punctuation">=</span> <span class="token string">"count-api"</span>
              <span class="token property">local_bind_port</span>  <span class="token punctuation">=</span> <span class="token number">8080</span> <span class="token comment"># backend인 count-api의 실제 port와는 별개로 frontend가 호출할 port 지정</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"dashboard"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>
      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">COUNTING_SERVICE_URL</span> <span class="token punctuation">=</span> <span class="token string">"http://<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>NOMAD_UPSTREAM_ADDR_count_api<span class="token punctuation">}</span></span>"</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"hashicorpnomad/counter-dashboard:v1"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">scaling</span> <span class="token punctuation">{</span>
      <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
      <span class="token property">min</span> <span class="token punctuation">=</span> <span class="token number">1</span>
      <span class="token property">max</span> <span class="token punctuation">=</span> <span class="token number">10</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.07,words:124},y:"a",t:"Service Mesh Test"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/sidecar-tomcat.html",{loader:()=>u(()=>import("./sidecar-tomcat.html-Cv91Vwg8.js"),__vite__mapDeps([183,1])),meta:{a:"Ung",d:1634806591e3,g:["Nomad","Sample","Job","sidecar","tomcat"],e:`
<ul>
<li>참고 링크
<ul>
<li><a href="https://discuss.hashicorp.com/t/nomad-error-creating-an-ingress-gateway-with-sidecar-service/24731" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/nomad-error-creating-an-ingress-gateway-with-sidecar-service/24731</a></li>
</ul>
</li>
</ul>`,r:{minutes:1.4,words:84},y:"a",t:"tomcat-sidecar"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/tomcat.html",{loader:()=>u(()=>import("./tomcat.html-DyF7jp5f.js"),__vite__mapDeps([184,1])),meta:{d:1632449108e3,g:["Nomad","Consul","Sample","Job"],e:`
<ul>
<li>tomcat 다운로드
<ul>
<li>다운로드 받지않고 호스트에 미리 설치해 놓는 방식이 더 가벼워보임 --&gt; 아마도 Packer, Terraform의 조합이면 가능</li>
<li>다운로드 받게 구성하면 컨테이너처럼 Nomad가 배포할 때마다 다운받아서 구성 가능</li>
</ul>
</li>
<li>Template - server.xml
<ul>
<li>server.xml 기본 구성에서 port가 선언되는 자리를 java option에서 받을 수 있도록 변경</li>
<li>Template 구성도 가능하고 미리 구성한 xml을 다운로드 받게 하는것도 괜찮아 보임</li>
</ul>
</li>
<li>Consul과 함께 구성된 경우 Nginx같은 LB 구성 Job 에서 backend를 동적으로 구성 가능</li>
</ul>`,r:{minutes:10.33,words:620},y:"a",t:"Tomcat"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/update.html",{loader:()=>u(()=>import("./update.html-YSou8Bcv.js"),__vite__mapDeps([185,1])),meta:{d:163347429e4,g:["Nomad","Sample","Job"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>nomad의 배포 방법 중 canary와 rolling update 관련된 내용입니다.</p>
</div>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>...
  <span class="token comment">#canary update - 새로운 버전의 task를 canary 변수의 수만큼 기동시키고 상황에 맞게 확인 후 배포</span>
  group <span class="token string">"canary"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">5</span>

    <span class="token keyword">update</span> <span class="token punctuation">{</span>
      <span class="token property">max_parallel</span>     <span class="token punctuation">=</span> <span class="token number">1</span>
      <span class="token property">canary</span>           <span class="token punctuation">=</span> <span class="token number">1</span>
      <span class="token property">min_healthy_time</span> <span class="token punctuation">=</span> <span class="token string">"30s"</span>
      <span class="token property">healthy_deadline</span> <span class="token punctuation">=</span> <span class="token string">"10m"</span>
      <span class="token comment">#배포 실패시 자동으로 전 버전으로 돌아감(배포 중이던 task 제거됨)</span>
      <span class="token property">auto_revert</span>      <span class="token punctuation">=</span> <span class="token boolean">true</span>
      <span class="token comment">#task가 기동되어도 자동으로 다음 버전으로 넘어가지 않음(배포 전 버전 task 제거되지않음)</span>
      <span class="token property">auto_promote</span>     <span class="token punctuation">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">#rolling update - 기동 중이던 task를 하나씩(max_parallel만큼) 신규 task로 변환하면서 배포</span>
  group <span class="token string">"api-server"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">6</span>

    <span class="token keyword">update</span> <span class="token punctuation">{</span>
      <span class="token property">max_parallel</span>     <span class="token punctuation">=</span> <span class="token number">2</span>
      <span class="token property">min_healthy_time</span> <span class="token punctuation">=</span> <span class="token string">"30s"</span>
      <span class="token property">healthy_deadline</span> <span class="token punctuation">=</span> <span class="token string">"10m"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">#배포 시 service에 canary로 배포된 task에만 붙일 수 있는 tag 설정</span>
  <span class="token keyword">service</span> <span class="token punctuation">{</span>
    <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
    <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"canary-deployments"</span>

    <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"live"</span>
    <span class="token punctuation">]</span>

    <span class="token property">canary_tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
      <span class="token string">"canary"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
...
</code></pre></div>`,r:{minutes:1.2,words:72},y:"a",t:"update"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/withConsulKV.html",{loader:()=>u(()=>import("./withConsulKV.html-B1kvhuxQ.js"),__vite__mapDeps([186,1])),meta:{d:1633322494e3,g:["Nomad","Sample","Job"],e:`
<p>Consul의 KV에 값을 저장하고 비교하여 task batch를 수행하는 예제</p>
<ul>
<li>curl 을 사용하는 경우<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET http://127.0.0.1:8500/v1/kv/docmoa/commit_date <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">'.[0].Value | @base64d'</span>
</code></pre></div></li>
<li>template의 <code>key</code>를 사용하는 경우<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token string">"docmoa/commit_date"</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div></li>
</ul>`,r:{minutes:2.7,words:162},y:"a",t:"Consul KV Sample"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/withVaultKV.html",{loader:()=>u(()=>import("./withVaultKV.html-BgsSGfhn.js"),__vite__mapDeps([187,1])),meta:{d:1642495624e3,g:["Nomad","Sample","Job"],e:`
<h2>nomad job에서 vault의 secret에서 kv사용하기</h2>
<ul>
<li><a href="/04-HashiCorp/07-Nomad/02-Config/integrateVault.html" target="_blank">Nomad 설정 링크</a></li>
</ul>
<h2>nomad hcl 설정</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"logs"</span> <span class="token punctuation">{</span>
    <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

    <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
        <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>kernel<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>"</span>
        <span class="token property">value</span> <span class="token punctuation">=</span> <span class="token string">"linux"</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">update</span> <span class="token punctuation">{</span>
        <span class="token property">stagger</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">max_parallel</span> <span class="token punctuation">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    group <span class="token string">"elk"</span> <span class="token punctuation">{</span>
        <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

        <span class="token keyword">restart</span> <span class="token punctuation">{</span>
            <span class="token property">attempts</span> <span class="token punctuation">=</span> <span class="token number">2</span>
            <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"1m"</span>
            <span class="token property">delay</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span>
            <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"delay"</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">network</span> <span class="token punctuation">{</span>
          port <span class="token string">"elk"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">9200</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5601</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">vault</span> <span class="token punctuation">{</span>
              <span class="token property">policies</span>  <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">]</span>
              <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
              <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGINT"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"elasticsearch:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"elk"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml"</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
cluster.name: "my-cluster"
network.host: 0.0.0.0
discovery.type: single-node
discovery.seed_hosts: ["127.0.0.1"]
xpack.security.enabled: true
xpack.license.self_generated.type: trial
xpack.monitoring.collection.enabled: true
EOF</span>
        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
ELASTIC_PASSWORD="{{with secret "secret/elastic"}}{{.Data.passwd}}{{end}}"
EOH</span>

  <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"secrets/file.env"</span>
  <span class="token property">env</span>         <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-elasticsearch"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"elk"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1048</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">vault</span> <span class="token punctuation">{</span>
              <span class="token property">policies</span>  <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">]</span>
              <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
              <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGINT"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"kibana:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/kibana.yml:/usr/share/kibana/config/kibana.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
#
# ** THIS IS AN AUTO-GENERATED FILE **
#

# Default Kibana configuration for docker target
server.host: "0.0.0.0"
server.shutdownTimeout: "5s"
elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
elasticsearch.username: elastic
{{ with secret "secret/elastic" }}
elasticsearch.password: {{.Data.passwd}}
{{ end }}

EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-kibana"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"kibana"</span>
                <span class="token keyword">check</span> <span class="token punctuation">{</span>
                    <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
                    <span class="token property">path</span> <span class="token punctuation">=</span> <span class="token string">"/"</span>
                    <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
                    <span class="token property">timeout</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"logstash:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"logstash"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/logstash.yml:/usr/share/logstash/config/logstash.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
http.host: "0.0.0.0"
xpack.monitoring.elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/logstash.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-logstash"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"logstash"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">200</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:4.3,words:258},y:"a",t:"vaultKV"}}],["/04-HashiCorp/08-Updates/97-2024/2024-01.html",{loader:()=>u(()=>import("./2024-01.html-BKdl1tEV.js"),__vite__mapDeps([188,1])),meta:{d:1704238435e3,g:["Hashicorp","Update","Jan"],e:`
<h2>Product 소개</h2>
<ul>
<li>HashiCorp 2023 year in review: Community
<ul>
<li><a href="https://www.hashicorp.com/blog/hashicorp-2023-year-in-review-community" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>작년 2023년 한 해동안 있었던 Hashicorp 관련 이야기: 개최된 컨퍼런스 및 이벤트부터 새로 출시된 솔루션 별 트레이닝 및 자격증 관련, 그리고 창업자 Mitchell Hashimoto 의 퇴사 소식 등을 한 번에 확인하실 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:5.6,words:336},y:"a",t:"2024년 1월"}}],["/04-HashiCorp/08-Updates/97-2024/2024-02.html",{loader:()=>u(()=>import("./2024-02.html-Y6qUhNUb.js"),__vite__mapDeps([189,1])),meta:{d:17072917e5,g:["Hashicorp","Update","Feb"],e:`
<h2>Product 소개</h2>
<ul>
<li>HCP Vault Radar begins limited beta
<ul>
<li><a href="https://www.hashicorp.com/blog/hcp-vault-radar-begins-limited-beta" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>작년 2023년 10월 Hashiconf 에서 공개된 HCP Vault Radar 가 Alpha 를 거쳐 Beta 가 출시되었습니다. Beta 에서는 RBAC/ABAC 을 지원하며 스캔할 수 있는 새로운 데이터 소스도 선보입니다</li>
</ul>
</li>
</ul>`,r:{minutes:3.77,words:226},y:"a",t:"2024년 2월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-01.html",{loader:()=>u(()=>import("./2023-01.html-CsXto2B1.js"),__vite__mapDeps([190,1])),meta:{d:1672798178e3,g:["Hashicorp","Update","Jan"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Dynamic Secrets for Waypoint with Vault</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/dynamic-secrets-for-waypoint-with-vault" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Application 에 대한 Build, Deployment 및 Monitoring 을 간소화하고 쉽게 접근할 수 있도록 개발자를 지원하는 Waypoint 에서도 이제 Vault 와 연동하여 Hashicorp Vault config sourcer plugin 을 통해 Application Config 에 포함되는 보안 정보를 관리할 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:5.13,words:308},y:"a",t:"2023년 1월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-02.html",{loader:()=>u(()=>import("./2023-02.html-B7D7dQTZ.js"),__vite__mapDeps([191,1])),meta:{d:1675423442e3,g:["Hashicorp","Update","Feb"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Terraform Cloud Adds ‘Projects’ to Organize Workspaces at Scale</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/terraform-cloud-adds-projects-to-organize-workspaces-at-scale" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>기존의 Terraform Cloud 에서는 연관되는 Workspace 간 그룹화가 불가능하고 Organization 및 Workspace 단위로만 권한 할당이 가능함으로 인해 사용자들은 자원 활용에 대한 제약사항을 고려하여 Organization 및 Workspace 를 분할하는 불편함을 감수해야 했습니다. 'Projects' 는 Workspace 를 그룹화하고 Project 단위로 권한 설정을 지원함으로써 앞서 소개한 제약사항을 해소하도록 지원합니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.75,words:285},y:"a",t:"2023년 2월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-03.html",{loader:()=>u(()=>import("./2023-03.html-Bae1ZCyE.js"),__vite__mapDeps([192,1])),meta:{d:167819845e4,g:["Hashicorp","Update","Mar"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Writing Terraform for unsupported resources</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/writing-terraform-for-unsupported-resources" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Terraform 과 대상 환경 간 연동을 위해 Provider 를 활용할 때 대상 환경이 API 을 통해서는 지원하는 기능이지만 Provider 에는 구현되어 있지 않아 사용할 수 없는 기능이 종종 있습니다 (예: Vault Provider 기반 Vault 운영 시 Unseal 기능 사용 불가). Terracurl 을 통해 API 을 통해서만 지원되는 기능들을 Terraform Code 로 구성하여 하나의 Resource 로 관리할 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:6.17,words:370},y:"a",t:"2023년 3월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-04.html",{loader:()=>u(()=>import("./2023-04.html-CqbdWv2P.js"),__vite__mapDeps([193,1])),meta:{d:1680766775e3,g:["Hashicorp","Update","Apr"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Dynamic provider credentials now generally available for Terraform Cloud</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/dynamic-provider-credentials-now-ga-for-terraform-cloud" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>AWS, MS Azure, GCP 등 Cloud 환경을 Terraform 과 연동 및 인증하기 위해 Workspace Variable 또는 Variable Set 을 활용하여 Credential 정보를 설정해서 사용했습니다. 해당 Credential 정보는 장기간의 TTL 을 설정하여 사용하거나 혹은 보안취약점을 보완하기 위해 관리자가 수동으로 갱신 및 설정하는 등의 번거로움을 동반하고 있었습니다. Dynamic Provider Credential 은 각 Cloud Service 의 OIDC Provider 를 기반으로 Terraform 에 대한 TLS 인증 확인을 수행함으로써 매 Apply 마다  Terraform 에 대한 인증 처리 후 Resource Provisioning 등을 수행하는 <code>동적인증처리</code> 를 지원합니다.</li>
<li><a href="https://developer.hashicorp.com/terraform/tutorials/cloud/dynamic-credentials?product_intent=terraform" target="_blank" rel="noopener noreferrer">Hashicorp Officlal Tutorial</a> 을 참고하여 테스트 해보실 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.78,words:287},y:"a",t:"2023년 4월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-05.html",{loader:()=>u(()=>import("./2023-05.html-B3bcIncL.js"),__vite__mapDeps([194,1])),meta:{d:1682489034e3,g:["Hashicorp","Update","May"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Vault Secrets Operator: A new method for Kubernetes integration</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/vault-secrets-operator-a-new-method-for-kubernetes-integration" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>K8S Cluster 의 Secret 을 CRD (custom resource definitions) 를 기반으로 Vault 와 연동함으로써 K8S 를 이용하는 개발자 및 다양한 사용자들은 새로운 Tool 을 배울 필요 없이 기존의 경험을 바탕으로 K8S Secret 을 생명주기가 더해진 동적인 데이터로써 사용 가능합니다 .</li>
<li>기존에 제공되고 있던 Sidecar Injector 및 CSI Provider 방식과의 비교 분석은 <a href="https://www.hashicorp.com/blog/kubernetes-vault-integration-via-sidecar-agent-injector-vs-csi-provider" target="_blank" rel="noopener noreferrer">Hashicorp Blog: Kubernetes Vault Integration via Sidecar Agent Injector vs. Vault Secrets Operator vs. CSI Provider</a> 를 참고하세요.</li>
<li><a href="https://developer.hashicorp.com/vault/tutorials/kubernetes/vault-secrets-operator" target="_blank" rel="noopener noreferrer">Hashicorp Officlal Tutorial</a> 을 참고하여 테스트 해보실 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.53,words:272},y:"a",t:"2023년 5월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-06.html",{loader:()=>u(()=>import("./2023-06.html-bpF3mFqI.js"),__vite__mapDeps([195,1])),meta:{d:1686116077e3,g:["Hashicorp","Update","Jun"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Terraform Cloud updates plans with an enhanced Free tier and more flexibility</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/terraform-cloud-updates-plans-with-an-enhanced-free-tier-and-more-flexibility" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Terraform Cloud 에 대한 요금제가 개편됩니다. 요금제 개편과 함께 각 요금제에서 사용가능한 기능들도 추가되었습니다. (예를 들어 기존 Free Tier 에서는 사용불가 했던 Sentinel/OPA, SSO, Terraform Agent, Run Tasks 등)</li>
</ul>
</li>
<li>
<p>Terraform Cloud adds Vault-backed dynamic credentials</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/terraform-cloud-adds-vault-backed-dynamic-credentials" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>지난 4월 소개된 Dynamic provider credentials now generally available for Terraform Cloud 에 이어 Vault의 Cloud Secrets Engine (AWS, Azure, GCP) 를 연계한 동적 자격증명 발급 기능이 출시되었습니다. 이제, Terraform Apply 수행 시 마다 Vault 로 부터 자격증명을 발급받아 사용함으로써 보다 보안 강화된 워크플로우를 구성할 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:6.47,words:388},y:"a",t:"2023년 6월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-07.html",{loader:()=>u(()=>import("./2023-07.html-kC_LygzQ.js"),__vite__mapDeps([196,1])),meta:{d:1689171954e3,g:["Hashicorp","Update","Jul"],e:`
<h2>Product 소개 (Hashidays 2023)</h2>
<ul>
<li>매년 유럽 네덜란드에서 이틀간 진행되던 Hashiconf 가 올해는 한단계 더 성장하여 영국 런던, 프랑스 파리 그리고 독일 뮌헨에서 동시에 진행되는 Hashidays 2023 으로 개최되었습니다. 새롭게 펼쳐진 Hashidays 에서는 Terraform, Vault, Consul 그리고 Boundary 에 대해 그동안 사용자들이 사용하면서 느꼈던 불편함을 해소할 신기능을 출시했습니다.
<ul>
<li><a href="https://www.hashicorp.com/blog/a-hashicorp-ambassador-at-hashidays-london" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li><a href="https://www.hashicorp.com/blog/announcing-hcp-vault-secrets-public-beta" target="_blank" rel="noopener noreferrer">HCP Vault Secrets</a> (Public Beta): Vault 에서 가장 많이 활용되고 있는 Secret Engine 중 하나인 KV Engine 기반 시크릿 관리에 특화된 HCP SaaS 서비스로써 애플리케이션 개발 및 운영에 사용되는 시크릿에 대한 저장, 접근 그리고 자동 동기화 기능을 더욱 쉽게 구성 가능하도록 지원합니다. 특히 기존 사용 중인 AWS Secret Manager 등 클라우드 서비스와도 원클릭 동기화를 지원함으로써 기존 워크플로우에 대해 최소한의 변경으로 시크릿 동적관리가 가능합니다.</li>
<li><a href="https://www.hashicorp.com/blog/vault-secrets-operator-for-kubernetes-now-ga" target="_blank" rel="noopener noreferrer">Vault Secrets Operator</a>: CRD 기반으로 K8S의 Secrets 와 연계하여 Secrets 를 동적으로 관리함으로써 최소한의 추가 구성으로 기존 구성하여 사용중인 Secrets 에 대해  보안을 강화합니다.</li>
<li><a href="https://www.hashicorp.com/blog/boundary-0-13-introduces-ssh-session-recording-boundary-enterprise-and-more" target="_blank" rel="noopener noreferrer">Boundary Enterprise</a>: 기존에 Opensource 그리고 HCP SaaS 로만 제공되던 Boundary 가 드디어 Enterprise Edition 이 출시되었습니다. Enterprise Edition 에서는 그동안 많은 사용자들이 필요로 했던 Session Recording 과 더불어 그외 다양한 신규 기능들이 추가되었습니다.</li>
<li><a href="https://www.hashicorp.com/blog/new-terraform-cloud-capabilities-to-import-view-and-manage-infrastructure" target="_blank" rel="noopener noreferrer">Terraform</a>: 지난 6월호에서 소개한 <a href="https://www.hashicorp.com/blog/terraform-cloud-adds-vault-backed-dynamic-credentials" target="_blank" rel="noopener noreferrer">Vault-backed dynamic credentials</a> 의 정식 GA 출시, 그동안 너무 불편하고 어려웠던 Terraform import 를 보완해줄 <a href="https://www.hashicorp.com/blog/terraform-1-5-brings-config-driven-import-and-checks" target="_blank" rel="noopener noreferrer">Config-driven Import</a>, 생성 및 관리 중인 자원에 대한 보다 효과적인 관리를 위한 Explorer (Beta) 등 다양한 기능이 추가되었습니다.</li>
<li><a href="https://www.hashicorp.com/blog/consul-1-16-enhances-service-mesh-reliability-user-experience-and-security" target="_blank" rel="noopener noreferrer">Consul 1.16</a>: Envoy Proxy 에 Extension 이 출시되어 WASM (Web Assembly) Code 기반 추가 기능을 활용하거나 외부 보안 서비스와 연계하여 인증 기반 기능 활용합니다, 또한 여러 Cluster 에 걸쳐 동일 서비스에 대해 동일 서비스 이름을 사용하도록 하는 Sameness Groups 를 통해 서비스 관리 뿐만 아니라 장애 발생 시 수행하는 Failover 를 보다 간단하게 처리할 수 있습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:7.47,words:448},y:"a",t:"2023년 7월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-08.html",{loader:()=>u(()=>import("./2023-08.html-Dq9xYMoG.js"),__vite__mapDeps([197,1])),meta:{d:1690862751e3,g:["Hashicorp","Update","Aug"],e:`
<h2>Product 소개</h2>
<ul>
<li>Using Terraform dynamic provider credentials in your AWS landing zones
<ul>
<li><a href="https://www.hashicorp.com/blog/using-terraform-dynamic-provider-credentials-in-your-aws-landing-zones" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>지난 4월 소개된 Terraform 사용 시 필요한 대상 환경에 대한 클라우드 자격증명을 Vault 와 연동하여 동적으로 사용 및 관리하는 Dynamic Provider Credentials 기능을 AWS Landing Zone 에서도 사용하실 수 있습니다. Terraform 과 함께 Landing Zone 으로 시작하는 AWS 의 여정에서 더 보안 강화된 IaC 를 경험해보세요!</li>
</ul>
</li>
</ul>`,r:{minutes:5.03,words:302},y:"a",t:"2023년 8월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-09.html",{loader:()=>u(()=>import("./2023-09.html-DcHK4shS.js"),__vite__mapDeps([198,1])),meta:{d:1693797134e3,g:["Hashicorp","Update","Sep"],e:`
<h2>Product 소개</h2>
<ul>
<li>Terraform ephemeral workspaces public beta now available
<ul>
<li><a href="https://www.hashicorp.com/blog/terraform-ephemeral-workspaces-public-beta-now-available" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>개발 및 테스트 등을 위해 임시로 사용하는 Workspace 에 대해 사용 완료 후 방치함으로 인해 발생되는 자원 낭비 또는 보안 유출 위험성을 방지하고자 Workspace 사용에 대해 미리 시간 설정을 할 수 있는 기능이 베타로 출시되었습니다. 이제, 정해놓은 타이머가 도래하면 Workspace 와 해당 Workspace 를 통해 생성한 자원을 자동 폐기 및 정리함으로써 자원 관리의 효율성을 높이고 미사용 자원에 대한 보안 유출 등을 방지할 수 있습니다. 베타 버전은 Terraform Cloud (Plus 요금제 이상) 에서 체험 및 사용 가능합니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.73,words:284},y:"a",t:"2023년 9월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-10.html",{loader:()=>u(()=>import("./2023-10.html-CYGCPCIK.js"),__vite__mapDeps([199,1])),meta:{d:1696476441e3,g:["Hashicorp","Update","Oct"],e:`
<h2>Product 소개</h2>
<ul>
<li>Creating a multi-cloud golden image pipeline with Terraform Cloud and HCP Packer
<ul>
<li><a href="https://www.hashicorp.com/blog/multicloud-golden-image-pipeline-terraform-cloud-hcp-packer" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>조직 내 클라우드 사용환경에서 "표준화" 되지 않은 VM OS Image 로 인해 장애 발생 시 케이스를 표준화 하지 못하고 대응에 미진한 경우를 종종 접하곤 합니다. Hashicorp Packer 와 Terraform 을 연동하여 조직 내 사용중인 각 클라우드 환경 마다 Golden OS Image 를 구성하고 이를 활용하여 인스턴스 자원 배포하는 과정까지의 라이프사이클을 "표준화" 함으로써 보다 더 효율적이고 안정적인 시스템 환경을 구성해보세요.</li>
</ul>
</li>
</ul>`,r:{minutes:4.52,words:271},y:"a",t:"2023년 10월"}}],["/04-HashiCorp/08-Updates/98-2023/2023-11.html",{loader:()=>u(()=>import("./2023-11.html-C9XX-4Bh.js"),__vite__mapDeps([200,1])),meta:{d:1698990531e3,g:["Hashicorp","Update","Nov"],e:`
<h2>Product 소개</h2>
<ul>
<li>Infrastructure and security releases open HashiConf 2023
<ul>
<li><a href="https://www.hashicorp.com/blog/infrastructure-security-lifecycle-releases-open-hashiconf-2023" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>샌프란시스코에서 개최된 Hashiconf 2023 에서 8가지의 솔루션에 대해 그룹을 크게 Infrastructure 와 Security 로 구분지어 앞으로의 솔루션 포트폴리오 및 업데이트를 진행하며, Terraform test framework, Vault Secret Sync, Vault Radar 등 워크플로우 개선을 위한 새로운 기능이 공개했습니다. 자세한 사항은 행사 현장을 직접 다녀온 이들이 전해주는 <a href="https://www.linkedin.com/search/results/content/?fromMember=%5B%22ACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo%22%5D&amp;heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo&amp;keywords=jin%20sol%20kim&amp;position=0&amp;searchId=ccb5024f-0353-4b04-a8e3-41e3bace4159&amp;sid=_%40V&amp;update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7126034287874699264%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)" target="_blank" rel="noopener noreferrer">Hashicorp Korea: Hashiconf 2023</a> 에서 확인하세요!</li>
</ul>
</li>
</ul>`,r:{minutes:4.97,words:298},y:"a",t:"2023년 11월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-07.html",{loader:()=>u(()=>import("./2022-07.html-ByksApi-.js"),__vite__mapDeps([201,1])),meta:{d:1656980314e3,g:["Hashicorp","Update","July"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>HCP Boundary 출시 (Public Beta)</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/announcing-launch-and-free-public-beta-of-hcp-boundary" target="_blank" rel="noopener noreferrer">HCP Boundary 소개 Blog</a></li>
<li><a href="https://www.youtube.com/watch?v=p_Wbi12xliE" target="_blank" rel="noopener noreferrer">Hashicorp Korea Snapshot</a></li>
<li><a href="https://learn.hashicorp.com/collections/boundary/hcp-getting-started" target="_blank" rel="noopener noreferrer">HCP Boundary 시작하기</a></li>
<li>Hashicorp 는 모든 솔루션에 대해 사용자가 직접 설치하는 설치형 을 비롯해 이와 동일한 경험을 기반으로 SaaS 형태의 Cloud 서비스를 제공하고 있습니다. 지난 6월 21일, HCP Boundary 의 Public Beta 가 공개되어 무료 제공 중입니다.</li>
<li>AWS Platform 에 One click 으로 Cluster 생성 및 이용 가능하며 간단한 Network Peering 과정을 거쳐 AWS Platform 에 구성된 HVN (Hashicorp Virtual Network) 및 Cluster 와 사용자의 AWS 환경을 연결하여 미리 구성한 서비스들을 연동합니다. (AWS 지원 Region 확장 및 타 Cloud Platform 지원 예정)</li>
<li>HCP 계정 생성 시, <strong>USD 50불이 기본 Credit 으로 제공</strong>되며 이를 활용하여 Boundary Public Beta 외에도 다양한 Vault, Consul 과 같은 HCP Service 을 약 1개월간 체험해보실 수 있습니다.</li>
</ul>
</li>
<li>
<p>Hashicorp Developer Site 출시 (Public Beta)</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/new-hashicorp-developer-site-is-now-in-public-beta?fbclid=IwAR1_Snhw3Yiqai2J5qcvWUlE82yaslu1nlC3O2iWDe8-wCFFWNPbPr-dxx4" target="_blank" rel="noopener noreferrer">Hashicorp Developer Site 소개 Blog</a></li>
<li><a href="https://developer.hashicorp.com/" target="_blank" rel="noopener noreferrer">Hashicorp Developer Site</a></li>
<li>Tutorial 과 Reference Architecture 정보가 <a href="http://learn.hashicorp.com" target="_blank" rel="noopener noreferrer">learn.hashicorp.com</a> 을 비롯, 각 solution 별 website 에 파편화 되어 있어 Hashicorp Solution 을 보다 더 쉽게 이해하고 업무에 적용하는데에 어려움이 있었습니다. 새롭게 출시된 Hashicorp Developer Site 에서는 이러한 그동안 축적된 유용한 자료와 이를 테스트 해볼 수 있는 환경을 한 곳에 모아 통합 제공함으로써 보다 더 쉽게 Hashicorp Solution 을 경험할 수 있습니다.</li>
<li>Public Beta 기간에는 Hashicorp Solution 중 Vault 와 Waypoint 에 대해 이용 가능하고, 추후 모든 Solution 에 대해 제공 예정입니다.</li>
</ul>
</li>
</ul>`,r:{minutes:6.37,words:382},y:"a",t:"2022년 7월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-08.html",{loader:()=>u(()=>import("./2022-08.html-IaheJXer.js"),__vite__mapDeps([202,1])),meta:{d:1659510375e3,g:["Hashicorp","Update","Aug"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Consul Service Mesh 에 대한 AWS Lambda 지원 (Public Beta)</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/consul-service-mesh-support-for-aws-lambda-now-in-public-beta" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Service Mesh 내 구성된 Service 가 AWS Lambda 를 호출 할 수 있도록 지원함으로써, 기존의 K8S, VM, Nomad 혹은 Amazon ECS 등의 다양한 환경과 더불어 Serverless 환경까지 통합 지원하여 Service Mesh 구성의 범위를 확장하고 Workflow 일원화가 가능합니다.</li>
<li>참고문서 1: <a href="https://www.consul.io/docs/lambda/registration" target="_blank" rel="noopener noreferrer">Register Lambda Functions</a></li>
<li>참고문서 2: <a href="https://www.consul.io/docs/lambda/invocation" target="_blank" rel="noopener noreferrer">Invoke Lambda Fuctions</a></li>
<li>참고문서 3: <a href="https://registry.terraform.io/modules/hashicorp/consul-lambda-registrator/aws/0.1.0-alpha2" target="_blank" rel="noopener noreferrer">Terraform Registry: consul-lambda-registrator</a></li>
</ul>
</li>
</ul>`,r:{minutes:3.45,words:207},y:"a",t:"2022년 8월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-09.html",{loader:()=>u(()=>import("./2022-09.html-0ycbInMx.js"),__vite__mapDeps([203,1])),meta:{d:1662203164e3,g:["Hashicorp","Update","Sep"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>CDKTF (Cloud Development Kit for Terraform) General Available</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/cdk-for-terraform-now-generally-available" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Python, Go 등 프로그래밍 언어 기반으로 Terraform 을 활용하실 수 있도록 지원하는 CDKTF 가 정식 출시 되었습니다. CDKTF를 사용하면 개발자는 익숙한 프로그래밍 언어에서 컨텍스트 전환 없이 코드로 인프라를 설정할 수 있으며, 애플리케이션 비즈니스 로직을 정의하는 데 사용하는 인프라 리소스를 프로비저닝하기 위해 동일한 도구와 구문을 사용할 수 있습니다. 팀은 익숙한 구문으로 협업하면서 Terraform 에코시스템의 기능을 계속 활용하고 확립된 Terraform 배포 파이프라인을 통해 인프라 구성을 배포할 수 있습니다.</li>
<li>참고문서 1: <a href="https://github.com/hashicorp/terraform-cdk/blob/main/CHANGELOG.md#0120" target="_blank" rel="noopener noreferrer">CDK for Terraform v0.12: CHANGELOG</a></li>
<li>참고문서 2: <a href="https://www.terraform.io/cdktf?_gl=1*1sc3uq2*_ga*MjA4NTc1MTMyNy4xNjM4OTUwNzQ3*_ga_P7S46ZYEKW*MTY2MTMxOTcxNS4xMzQuMS4xNjYxMzIxMjUxLjAuMC4w" target="_blank" rel="noopener noreferrer">CDKTF Overview</a></li>
<li>참고문서 3: <a href="https://learn.hashicorp.com/collections/terraform/cdktf?_gl=1*1wv13qn*_ga*MjA4NTc1MTMyNy4xNjM4OTUwNzQ3*_ga_P7S46ZYEKW*MTY2MTMxOTcxNS4xMzQuMS4xNjYxMzIxMTcxLjAuMC4w" target="_blank" rel="noopener noreferrer">CDKTF Tutorials</a></li>
</ul>
</li>
</ul>`,r:{minutes:4.15,words:249},y:"a",t:"2022년 9월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-10.html",{loader:()=>u(()=>import("./2022-10.html-DZWtKLzo.js"),__vite__mapDeps([204,1])),meta:{d:1664864834e3,g:["Hashicorp","Update","Oct"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Nomad: Nomad Variables and Service Discovery</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/nomad-1-4-adds-nomad-variables-and-updates-service-discovery" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>Hashicorp Nomad는 Container 뿐만 아니라 Container 화 하기 어려운 Legacy Application 에 대해 배포하고 관리하는 데 사용되는 간단하고 유연한 오케스트레이터입니다. Nomad는 On-prem 및 Cloud 환경을 가리지 않고 작동합니다. Cloudflare, Roblox, Q2 및 Pandora와 같은 조직의 프로덕션에서 널리 채택되고 사용됩니다. 새롭게 출시된 HashiCorp Nomad 1.4 Beta Release 에서는 상태 확인을 통해 Service Discovery 지원을 강화하고 사용자가 구성 값을 저장할 수 있도록 하는 Nomad Variable 기능이 도입 되었습니다.</li>
</ul>
</li>
</ul>`,r:{minutes:3.75,words:225},y:"a",t:"2022년 10월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-11.html",{loader:()=>u(()=>import("./2022-11.html-CxhNgCml.js"),__vite__mapDeps([205,1])),meta:{d:166729331e4,g:["Hashicorp","Update","Nov"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Hashiconf Global</p>
<ul>
<li>
<p><a href="https://www.hashicorp.com/blog/hashiconf-global-2022-from-zero-trust-to-no-code" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></p>
</li>
<li>
<p>Day 1: ZTS (Zero Trust Security) 와 Cloud Service Networking 을 메인 주제로 새로운 기능과 HCP 서비스에 대한 소개</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/hcp-boundary-now-ga-bolsters-hashicorp-s-zero-trust-security-solution" target="_blank" rel="noopener noreferrer">HCP Boundary GA</a>: Opensource 버전만 지원하던 Boundary 에 대해 HCP Version 공식 출시</li>
<li><a href="https://www.hashicorp.com/blog/hcp-vault-on-microsoft-azure-now-in-public-beta" target="_blank" rel="noopener noreferrer">HCP Vault on Microsoft Azure Public Beta</a>: AWS 뿐만 아니라 Azure 사용자들도 HCP Vault 사용 가능</li>
<li><a href="https://www.hashicorp.com/blog/consul-1-14-beta-announcing-simplified-service-mesh-deployments" target="_blank" rel="noopener noreferrer">Consul Breaking Changes</a>: K8S 에서의 Component 간소화 및 기능강화, Windows 에 대한 Service Mesh 지원</li>
<li><a href="https://www.hashicorp.com/blog/hashicorp-developer-your-new-experience-for-docs-and-tutorials" target="_blank" rel="noopener noreferrer">Hashicorp Developer Portal</a> 개편: 8가지 전 제품군에 대한 공식 문서 및 Tutorial 총망라</li>
</ul>
</li>
<li>
<p>Day 2: Infrastructure 및 Application 자동화 관련 제품군을 메인 주제로 새로운 기능 소개</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/terraform-gains-visibility-self-service-and-compliance-upgrades" target="_blank" rel="noopener noreferrer">Terraform Cloud</a>: Self Service 및 Compliance 관련 기능 강화</li>
<li><a href="https://www.hashicorp.com/blog/nomad-1-4-adds-nomad-variables-and-updates-service-discovery" target="_blank" rel="noopener noreferrer">Nomad 1.4 GA</a>: 단독 제품으로서의 Service Discovery, Variable 등 기능 강화</li>
<li><a href="https://www.hashicorp.com/blog/announcing-hcp-waypoint-public-beta" target="_blank" rel="noopener noreferrer">HCP Waypoint Public Beta</a> 출시: Opensource 버전만 지원하던 Waypoint 의 HCP Version Public Beta 출시</li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:8.52,words:511},y:"a",t:"2022년 11월"}}],["/04-HashiCorp/08-Updates/99-2022/2022-12.html",{loader:()=>u(()=>import("./2022-12.html-DDCtPFgA.js"),__vite__mapDeps([206,1])),meta:{d:1670381763e3,g:["Hashicorp","Update","Dec"],e:`
<h2>Product 소개</h2>
<ul>
<li>
<p>Terraform Run Tasks in Public Registry</p>
<ul>
<li><a href="https://www.hashicorp.com/blog/run-tasks-are-now-available-in-the-terraform-registry" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li>
<li>활발하게 활용되고 있는 Terraform Run Tasks (3rd party 연동 및 통합) 기능이 강화되었습니다. 이제 <a href="https://registry.terraform.io/" target="_blank" rel="noopener noreferrer">Terraform Public Registry</a> 에서 Run Tasks 를 검색하여 필요한 3rd party service 와 연동하여 자원 관리에 필요한 Cost Management, Policy Compliance 와 같은 다양한 기능들을 적용하여 보다 효율적인 자원 관리가 가능합니다.</li>
</ul>
</li>
</ul>`,r:{minutes:4.12,words:247},y:"a",t:"2022년 12월"}}],["/05-Software/Jenkins/pipeline101/00-introduction.html",{loader:()=>u(()=>import("./00-introduction.html-D2jHDQBE.js"),__vite__mapDeps([207,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<blockquote>
<p>Update at 31 Jul, 2019</p>
</blockquote>
<p>Jenkins Pipeline 을 구성하기 위해 VM 환경에서 Jenkins와 관련 Echo System을 구성합니다. 각 Product의 버전은 문서를 작성하는 시점에서의 최신 버전을 위주로 다운로드 및 설치되었습니다. 구성 기반 환경 및 버전은 필요에 따라 변경 가능합니다.</p>
<table>
<thead>
<tr>
<th>Category</th>
<th>Name</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>VM</td>
<td>VirtualBox</td>
<td>6.0.10</td>
</tr>
<tr>
<td>OS</td>
<td>Red Hat Enterprise Linux</td>
<td>8.0.0</td>
</tr>
<tr>
<td>JDK</td>
<td>Red Hat OpenJDK</td>
<td>1.8.222</td>
</tr>
<tr>
<td>Jenkins</td>
<td>Jenkins rpm</td>
<td>2.176.2</td>
</tr>
</tbody>
</table>`,r:{minutes:4.78,words:287},y:"a",t:"Pipeline on Jenkins 101 : Introduction"}}],["/05-Software/Jenkins/pipeline101/01-cicd.html",{loader:()=>u(()=>import("./01-cicd.html-BL6OmpWM.js"),__vite__mapDeps([208,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>1.1 CI/CD Concept Definitions</h2>
<ul>
<li>Continuous integration</li>
<li>Continuous delivery</li>
<li>Continuous deployment</li>
<li>Source control management (SCM)</li>
</ul>
<h2>1.2 Delivery vs Deployment</h2>
<ul>
<li>Continuous Delivery requires user intervention
<ul>
<li>When? : Stage to Production</li>
</ul>
</li>
</ul>`,r:{minutes:1.17,words:70},y:"a",t:"1. CI/CD"}}],["/05-Software/Jenkins/pipeline101/02-jobs.html",{loader:()=>u(()=>import("./02-jobs.html-BSmwHL_4.js"),__vite__mapDeps([209,210,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>프로젝트는 Job의 일부 입니다. 즉, 모든 프로젝트가 Job이지만 모든 Job이 프로젝트는 아닙니다. Job의 구조는 다음과 같습니다.</p>
<p>FreeStyleProejct, MatrixProject, ExternalJob만 <code>New job</code>에 표시됩니다.</p>
<h2>2.1 New pipeline</h2>
<p>Step 1에서는 <code>stage</code>없이 기본 Pipeline을 실행하여 수행 테스트를 합니다.</p>
<ol>
<li>
<p>Jenkins 로그인</p>
</li>
<li>
<p>좌측 <code>새로운 Item</code> 클릭</p>
</li>
<li>
<p><code>Enter an item name</code>에 Job 이름 설정 (e.g. 2.Jobs)</p>
</li>
<li>
<p><code>Pipeline</code> 선택 후 <code>OK</code> 버튼 클릭</p>
</li>
<li>
<p><code>Pipeline</code> 항목 오른 쪽 <code>Try sample Pipelie...</code>클릭하여 <code>Hello world</code> 클릭 후 저장</p>
<div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>node <span class="token punctuation">{</span>
   echo <span class="token string">'Hello World'</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>좌측 <code>Build now</code>클릭</p>
</li>
<li>
<p>좌측 <code>Build History</code>의 최근 빌드된 항목(e.g. #1) 우측에 마우스를 가져가면 dropdown 버튼이 생깁니다. 해당 버튼을 클릭하여 <code>Console Output</code> 클릭</p>
</li>
<li>
<p>수행된 <code>echo</code> 동작 출력을 확인합니다.</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Started by user GyuSeok.Lee
Running in Durability level: MAX_SURVIVABILITY
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/lib/jenkins/workspace/2.Jobs
[Pipeline] {
[Pipeline] echo
Hello World
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
Finished: SUCCESS
</code></pre></div></li>
</ol>`,r:{minutes:9.13,words:548},y:"a",t:"2. Jobs"}}],["/05-Software/Jenkins/pipeline101/03-builds.html",{loader:()=>u(()=>import("./03-builds.html-BxNTp425.js"),__vite__mapDeps([211,212,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>3.1 Tracking build state</h2>
<p>Pipeline이 수행되는 동작을 추적하는 과정을 확인합니다. 이를 이를 위한 Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 03-01.TrackingBuildState)</p>
<p>Pipeline에 다음과 같이 스크립트를 추가합니다.</p>
<div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">'MINUTES'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sh <span class="token string">'for n in \`seq 1 10\`; do echo $n; sleep 1; done'</span>
                <span class="token punctuation">}</span>
                <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">'MINUTES'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sh <span class="token string">'for n in \`seq 1 50\`; do echo $n; sleep 1; done'</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:8.12,words:487},y:"a",t:"3. Builds"}}],["/05-Software/Jenkins/pipeline101/04-agent.html",{loader:()=>u(()=>import("./04-agent.html--mfX92Is.js"),__vite__mapDeps([213,214,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>빌드를 수행하기 위한 Worker로 다중 Jenkins를 컨트롤 할 수 있습니다. 이때 명령을 수행하는 Jenkins는 <code>Master</code>, 빌드를 수행하는 Jenkins는 <code>Worker</code>로 구분합니다. 여기서는 Worker의 연결을 원격 호스트의 Jenkins를 SSH를 통해 연결하는 방식과 컨테이너로 구성된 Jenkins를 연결하는 과정을 확인 합니다.</p>
<p>Master-Slave 방식, 또는 Master-Agent 방식으로 표현합니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>※ Slave 호스트에 Jenkins를 설치할 필요는 없습니다.</p>
</div>`,r:{minutes:11.55,words:693},y:"a",t:"4. Agents and Distributing Builds"}}],["/05-Software/Jenkins/pipeline101/05-plugins.html",{loader:()=>u(()=>import("./05-plugins.html-D_NP5t3T.js"),__vite__mapDeps([215,216,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>Jenkins가 유용한 툴인 이유중 하나는 방대한 양의 플러그인 입니다. Jenkins의 기능을 확장시키고, 관리, 빌드 정책 등을 확장 시켜주고, 타 서비스와의 연계를 쉽게 가능하도록 합니다.</p>
<p><a href="https://plugins.jenkins.io/" target="_blank" rel="noopener noreferrer">Plugin Index</a></p>
<figure><figcaption>1564450122219</figcaption></figure>
<h2>5.1 Adding plugins via plugin manager</h2>`,r:{minutes:3.27,words:196},y:"a",t:"5. Plugins"}}],["/05-Software/Jenkins/pipeline101/06-notifications.html",{loader:()=>u(()=>import("./06-notifications.html-Bv4haICr.js"),__vite__mapDeps([217,218,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>Jenkins빌드의 결과를 받아볼 수 있는 몇가지 방안에 대해 알아봅니다.</p>
<h2>6.1 Notifications of build state</h2>
<p>Jenkins에서는 플러그인이나 외부 툴에 의해 빌드에 대한 결과를 받아 볼 수 있습니다. 대표적으로는 Jenkins의 슬랙 플러그인을 사용하여 슬랙으로 빌드에 결과를 받아보거나, <a href="http://catlight.io" target="_blank" rel="noopener noreferrer">catlight.io</a> 에서 데스크탑용 어플리케이션에 연동하는 방법도 있습니다.</p>`,r:{minutes:3.12,words:187},y:"a",t:"6. Notifications"}}],["/05-Software/Jenkins/pipeline101/07-testing.html",{loader:()=>u(()=>import("./07-testing.html-DhUtazAZ.js"),__vite__mapDeps([219,220,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>7.1 Code coverage tests and reports</h2>
<p>테스트 Pipeline 구성시 테스트 과정을 지정할 수 있습니다.  Testing을 위한 <code>Pipeline</code> 타입의 Item을 추가로 생성합니다. (e.g. 07-01.CodeCoverageTestsAndReports)</p>
<p>설정은 다음과 같이 수행합니다.</p>
<ol>
<li>
<p><code>Pipeline</code> 스크립트에 다음과 같이 입력 합니다. 테스트와 빌드, 검증 후 결과를 보관하는 단계까지 이루어 집니다.</p>
<div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">'''
                  echo This &gt; app.sh
                  echo That &gt;&gt; app.sh
                '''</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">'''
                  grep This app.sh &gt;&gt; \${BUILD_ID}.cov
                  grep That app.sh &gt;&gt; \${BUILD_ID}.cov
                '''</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Coverage'</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">'''
                  app_lines=\`cat app.sh | wc -l\`
                  cov_lines=\`cat \${BUILD_ID}.cov | wc -l\`
                  echo The app has \`expr $app_lines - $cov_lines\` lines uncovered &gt; \${BUILD_ID}.rpt
                  cat \${BUILD_ID}.rpt
                '''</span>
                archiveArtifacts <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.rpt"</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li>
<li>
<p>빌드가 완료되면 해당 Job화면을 리로드 합니다. Pipeline에 <code>archiveArtifacts</code>가 추가되었으므로 해당 Job에서 이를 관리합니다.<br>
</p>
</li>
<li>
<p>해당 아카이브에는 코드 검증 후의 결과가 저장 됩니다.</p>
</li>
</ol>`,r:{minutes:3.4,words:204},y:"a",t:"7. Testing"}}],["/05-Software/Jenkins/pipeline101/08-restapi.html",{loader:()=>u(()=>import("./08-restapi.html-ocoKDHZr.js"),__vite__mapDeps([221,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>Jenkins는 외부 서비스와의 연동이나 정보 조회를 위한 API를 제공합니다.</p>
<h2>8.1 Triggering builds via the REST API</h2>
<p>Jenkins REST API 테스트를 위해서는 Jenkins에 인증 가능한 Token을 취득하고 curl이나 Postman 같은 도구를 사용하여 확인 가능 합니다. 우선 Token을 얻는 방법은 다음과 같습니다.</p>
<ol>
<li>
<p>Jenkins에 로그인 합니다.</p>
</li>
<li>
<p>우측 상단의 로그인 아이디에 마우스를 호버하면 드롭박스 버튼이 나타납니다. <code>설정</code>을 클릭합니다.</p>
</li>
<li>
<p><code>API Token</code>에서 <code>Current token</code>을 확인합니다. 등록된 Token이 없는 경우 다음과 같이 신규 Token을 발급 받습니다.</p>
<ul>
<li>
<p><code>ADD NEW TOKEN</code>을 클릭합니다.</p>
</li>
<li>
<p>이름을 기입하는 칸에 로그인 한 아이디를 등록합니다. (e.g. admin)</p>
</li>
<li>
<p><code>GENERATE</code>를 클릭하여 Token을 생성합니다.</p>
</li>
</ul>
</li>
<li>
<p>이름과 Token을 사용하여 다음과 같이 curl로 접속하면 <code>Jenkins-Crumb</code> 프롬프트가 나타납니다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">--user</span> <span class="token string">"admin:TOKEN"</span> <span class="token string">'http://myjenkins.com/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)'</span>

Jenkins-Crumb:89e1fd9c402824c89465f6b97f49b605
</code></pre></div></li>
<li>
<p><code>Crumb</code>를 확인했으면 다시 헤더 값에 <code>Jenkins-Crumb:</code>를 추가하여 <code>02-04.MultiStep</code> Job을 빌드하기 위해 다음과 같이 요청합니다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST http://myjenkins.com/job/02-04.MultiStep/build <span class="token parameter variable">--user</span> gyulee:11479bdec9cada082d189938a3946348be --data-urlencode <span class="token assign-left variable">json</span><span class="token operator">=</span><span class="token string">''</span> <span class="token parameter variable">-H</span> <span class="token string">"Jenkins-Crumb:89e1fd9c402824c89465f6b97f49b605"</span>
</code></pre></div></li>
</ol>`,r:{minutes:2.77,words:166},y:"a",t:"8. REST API"}}],["/05-Software/Jenkins/pipeline101/09-security.html",{loader:()=>u(()=>import("./09-security.html-CBhj87S2.js"),__vite__mapDeps([222,223,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>9.1 Securing your deployment with users</h2>
<p>사용자별 배포수행을 위한 사용자 설정을 설명합니다.</p>
<ul>
<li><code>Jenkins 관리</code>로 이동하여 <code>Configure Global Security</code>를 클릭합니다.</li>
</ul>
<p><code>Enable security</code>는 보안 설정 여부를 설정하는 항목으로 기본적으로는 비활성화되어있습니다. 체크하여 활성화하면 다양한 보안 옵션을 설정할 수 있는 항목이 표기 됩니다.</p>`,r:{minutes:7.22,words:433},y:"a",t:"9. Security"}}],["/05-Software/Jenkins/pipeline101/10-artifacts.html",{loader:()=>u(()=>import("./10-artifacts.html-LgTq1lqn.js"),__vite__mapDeps([224,225,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<p>빌드 이후 빌드의 결과를 기록하고 저장하는 방법을 설명합니다.</p>
<h2>10.1 Creating and storing artifacts</h2>
<p>Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 10-01.CreatingAndStoringArtifacts)</p>
<p>Pipeline에 다음과 같이 스크립트를 추가합니다.</p>
<div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages<span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps<span class="token punctuation">{</span>
                sh <span class="token string">'echo "Generating artifacts for \${BUILD_NUMBER}" &gt; output.txt'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Archive'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                archiveArtifacts artifacts<span class="token punctuation">:</span> <span class="token string">'output.txt'</span><span class="token punctuation">,</span> onlyIfSuccessful<span class="token punctuation">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:2.83,words:170},y:"a",t:"10. Artifacts"}}],["/05-Software/Jenkins/pipeline101/11-pipelines.html",{loader:()=>u(()=>import("./11-pipelines.html-CTLmo5F_.js"),__vite__mapDeps([226,227,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>11.1 Automating deployment with pipelines</h2>
<p>Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 11-01.AutomatingDeploymentWithPipelines)</p>
<p>Pipeline에 다음과 같은 스크립트를 입력합니다.</p>
<div class="language-groovy" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code>pipeline <span class="token punctuation">{</span>
    agent any
    stages <span class="token punctuation">{</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">'echo "Hello World"'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            steps <span class="token punctuation">{</span>
                sh <span class="token string">'echo "Test Hello World!"'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:7.13,words:428},y:"a",t:"11. Pipelines"}}],["/05-Software/Jenkins/pipeline101/12-appendix.html",{loader:()=>u(()=>import("./12-appendix.html-CIPxZKCM.js"),__vite__mapDeps([228,1])),meta:{d:164032788e4,g:["cicd","jenkins"],e:`
<h2>GitHub SCM 연동 이슈</h2>
<p>GitHub를 SCM으로 사용하는 경우 다음과 같은 메시지가 출력되면서 진행되지 않는 경우가 있습니다.</p>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>GitHub API Usage: Current quota has 5000 remaining (447380 over budget). Next quota of 5000 in 5 days 0 hr. Sleeping for 4 days 23 hr.
14:07:33 GitHub API Usage: The quota may have been refreshed earlier than expected, rechecking...
</code></pre></div>`,r:{minutes:1.55,words:93},y:"a",t:"Apendix"}}],["/05-Software/Jenkins/pipeline101/13-jenkins_101_single.html",{loader:()=>u(()=>import("./13-jenkins_101_single.html-D54aZ0x9.js"),__vite__mapDeps([229,210,212,214,216,218,220,223,225,227,1])),meta:{d:1640328154e3,g:["cicd","jenkins"],e:`
<blockquote>
<p>Update at 31 Jul, 2019</p>
</blockquote>
<h2>Introduction</h2>
<p>Jenkins Pipeline 을 구성하기 위해 VM 환경에서 Jenkins와 관련 Echo System을 구성합니다. 각 Product의 버전은 문서를 작성하는 시점에서의 최신 버전을 위주로 다운로드 및 설치되었습니다. 구성 기반 환경 및 버전은 필요에 따라 변경 가능합니다.</p>
<table>
<thead>
<tr>
<th>Category</th>
<th>Name</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>VM</td>
<td>VirtualBox</td>
<td>6.0.10</td>
</tr>
<tr>
<td>OS</td>
<td>Red Hat Enterprise Linux</td>
<td>8.0.0</td>
</tr>
<tr>
<td>JDK</td>
<td>Red Hat OpenJDK</td>
<td>1.8.222</td>
</tr>
<tr>
<td>Jenkins</td>
<td>Jenkins rpm</td>
<td>2.176.2</td>
</tr>
</tbody>
</table>`,r:{minutes:65.38,words:3923},y:"a",t:"Pipeline on Jenkins 101 (Single Page)"}}],["/05-Software/Tomcat/tomcat101/01-Introduction.html",{loader:()=>u(()=>import("./01-Introduction.html-DUWhjyvI.js"),__vite__mapDeps([230,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<p>본 내용은 톰캣을 좀더 잘 알고 잘 써보기 위한 제안이랄까요?</p>
<p>톰캣의 특성상 쉽게 접할 수 있는 메뉴얼적인 지식보다는, 톰캣을 더 잘 사용하고 운영 할 수 있을만한 아이디어를 공유하고자 시작한 지식공유 활동입니다. 담고 있는 내용은 <strong>'<a href="http://www.youtube.com/playlist?list=PLQUXE_kb6KOj0mvxoAGrz3FT9EDL3fa1z" target="_blank" rel="noopener noreferrer">톰캣 알고 쓰기</a>'</strong> 유튜브 강의 내용에 대한 정리입니다. 유튜브에 강의를 올리면 출퇴근 시간을 이용해 짬짬히 들을 수 있을 것 같은 생각이 들어 시작하였지만 <s>얼마나 출퇴근 시간에 이용하셨을지는 미지수이고</s> 동영상으로 모든 것을 다 표현할 수 없다는 점을 감안하여 다시 글로 정리합니다.</p>`,r:{minutes:6.6,words:396},y:"a",t:"1. Tomcat 소개"}}],["/05-Software/Tomcat/tomcat101/02-env.html",{loader:()=>u(()=>import("./02-env.html-CrXolLzE.js"),__vite__mapDeps([231,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<iframe width="560" height="315" src="https://www.youtube.com/embed/XvinTBrQ0ig" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<hr>
<h2>2.1 OS</h2>
<p>톰캣을 설치하는 OS 플랫폼 환경은 모든 환경을 지원합니다. 그나마 예전에는 일부 Unix/Linux/OSX 환경에서 Apache HTTP Server 설치하듯 컴파일을 통해 구성하였으나, 최근에는 압축파일을 해제하고 바로 사용할 수 있는 경우가 대부분입니다.<br>
톰캣을 운영하기 위해 OS를 선택해야하는 입장이라면 다음과 같은 설치 타입을 고려할 수 있습니다.</p>`,r:{minutes:6.25,words:375},y:"a",t:"2. Tomcat 설치환경"}}],["/05-Software/Tomcat/tomcat101/03-installation.html",{loader:()=>u(()=>import("./03-installation.html-Cc2c-OUH.js"),__vite__mapDeps([232,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>설치파일 받기</li>
<li>윈도우에 설치하기</li>
<li>유닉스/리눅스에 설치하기</li>
<li>설치 후 작업</li>
<li>디렉토리 구조</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/621YGq7ulS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:6.9,words:414},y:"a",t:"3. Tomcat 설치"}}],["/05-Software/Tomcat/tomcat101/04-configuration.html",{loader:()=>u(()=>import("./04-configuration.html-l6m3iMei.js"),__vite__mapDeps([233,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>리스너</li>
<li>자바옵션</li>
<li>클래스로더</li>
<li>setenv?</li>
<li>web.xml</li>
<li>로그</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DFBJ7r1u0Jo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:9.2,words:552},y:"a",t:"4. Tomcat 환경설정"}}],["/05-Software/Tomcat/tomcat101/05-deployment.html",{loader:()=>u(()=>import("./05-deployment.html-C5c_XGUG.js"),__vite__mapDeps([234,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>Web Application</li>
<li>by Manager</li>
<li>by webapps DIR</li>
<li>by context.xml</li>
<li>ROOT</li>
<li>Auto Deployment &amp; Hot Deployment</li>
<li>Parallel Deployment</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Hg-D7szI2t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:11.77,words:706},y:"a",t:"5. Tomcat 애플리케이션 배포"}}],["/05-Software/Tomcat/tomcat101/06-dbconnection.html",{loader:()=>u(()=>import("./06-dbconnection.html-Dh4qZZK8.js"),__vite__mapDeps([235,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>JDBC Connection Pool</li>
<li>DB 연동 예제</li>
<li>DB 연동 설정값</li>
<li>JNDI Lookup</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/odsWlmZfzag" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:7.8,words:468},y:"a",t:"6. Tomcat Database 연동"}}],["/05-Software/Tomcat/tomcat101/07-host.html",{loader:()=>u(()=>import("./07-host.html-I4uM7zDz.js"),__vite__mapDeps([236,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>호스트 구성</li>
<li>호스트 특징</li>
<li>host manager</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/hnLzh_WE8R8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<hr>
<h2>7.1 호스트 구성</h2>
<p>톰캣에 정의된 바로는 <code>Host</code>로 정의되나 일반적인 기능으로 표현한다면 가상 호스트(Virtual Host)와 같은 기능 입니다. 특정 host 명, 즉 http url로 서비스를 분기하는 역할을 합니다. <code>server.xml</code> 기본으로 설정되어있는 <code>localhost</code>인 호스트의 내용은 다음과 같습니다.</p>`,r:{minutes:3.42,words:205},y:"a",t:"7. Tomcat HOST"}}],["/05-Software/Tomcat/tomcat101/08-webserver.html",{loader:()=>u(()=>import("./08-webserver.html-WymRv1-G.js"),__vite__mapDeps([237,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>웹서버 연동의 이유</li>
<li>mod_jk</li>
<li>클러스터</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/j6qeCBWM4YI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<hr>
<h2>8.1 웹서버 연동의 이유</h2>
<p>톰캣 단일로 서비스하는 경우도 있지만 일반적으로 웹서버와 연동하여 사용하는 경우가 보다 더 많습니다. 그 이유를 다음과 같이 정리합니다.</p>`,r:{minutes:7.53,words:452},y:"a",t:"8. Tomcat 웹서버 연동"}}],["/05-Software/Tomcat/tomcat101/09-thread.html",{loader:()=>u(()=>import("./09-thread.html-pfifhPsU.js"),__vite__mapDeps([238,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>Thread?</li>
<li>설정</li>
<li>Thread Dump</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/sKiEidnV0nI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<hr>
<h2>9.1 Thread?</h2>
<p>Thread는 JVM내에 요청된 작업을 동시에 처리하기 위한 작은 cpu라고 볼 수 있습니다. 톰캣에 서비스 처리를 요청하는 경우 해당 요청은 Queue에 쌓여 FIFO로 Thread에 전달되고 Thread에 여유가 있는 경우 Queue에 들어온 요청은 바로 Thread로 전달되어 <code>Queue Length</code>는 0을 유지하지만 Thread가 모두 사용중이여서 더이상의 요청 처리를 하지 못하는 경우 새로 발생한 요청은 Queue에 쌓이면서 지연이 발생합니다.</p>`,r:{minutes:4.17,words:250},y:"a",t:"9. Tomcat 쓰레드"}}],["/05-Software/Tomcat/tomcat101/10-monitoring.html",{loader:()=>u(()=>import("./10-monitoring.html-CIqvon6z.js"),__vite__mapDeps([239,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>모니터링은 왜 하나?</li>
<li>톰캣 기본 모니터링 툴</li>
<li>psi-Probe</li>
<li>jkstatus</li>
<li>visualVM</li>
<li>JMC</li>
<li>APM</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/1IAghXNby-Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`,r:{minutes:6,words:360},y:"a",t:"10. Tomcat 모니터링"}}],["/05-Software/Tomcat/tomcat101/11-tip.html",{loader:()=>u(()=>import("./11-tip.html-CYGzUuCN.js"),__vite__mapDeps([240,1])),meta:{d:164032788e4,g:["Tomcat","Java"],e:`
<ul>
<li>디렉토리</li>
<li>setenv</li>
<li>실행 유저</li>
<li>Connector</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/zY0pDLOZ_7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
<hr>
<h3>11.1 디렉토리</h3>`,r:{minutes:2.7,words:162},y:"a",t:"11. Tomcat 팁"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/00-overview.html",{loader:()=>u(()=>import("./00-overview.html-rxD6Wh-S.js"),__vite__mapDeps([241,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<!-- ![](./image/intro01.png) -->
<hr>
<h2>과정 안내</h2>
<ul>
<li>
<p>이 과정은 IaC 도구인 Terraform을 사용하여 클라우드 리소스를 생성하는 실습(Hands-on)과정입니다.</p>
</li>
<li>
<p>💻 표시는 실제 실습을 수행하는 단계 입니다.</p>
</li>
<li>
<p>사전 준비 사항</p>
<ul>
<li>인터넷 연결이 가능한 사용자 별 랩탑 또는 데스크탑 환경이 필요합니다.</li>
<li>실습을 위한 샘플 코드활용을 위해 <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a>에 접속 가능해야 합니다.</li>
<li><a href="https://www.ncloud.com/" target="_blank" rel="noopener noreferrer">Naver Cloud Platform(NCP)</a>에 회원 가입이 필요합니다.</li>
<li>과정을 실행하기 위해서는 NCP 리소스 사용을 위한 <u><strong>크래딧</strong></u> 또는 <u><strong>결재수단</strong></u> 이 필요합니다. 과정 진행을 위해 강사가 크래딧을 제공할 수 있습니다.</li>
<li>실습을 수행하기 위한 랩탑 환경에 코드 편집기(IDE)로 Visual Studio Code 를 활용합니다.
<ul>
<li>홈페이지 및 다운로드 : <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p>컨텐츠</p>
<ol>
<li><a href="./01-terraform-intro">Terraform 소개</a></li>
<li><a href="./02-terraform-basic">Terraform 기본</a>
<ul>
<li>💻 Lab - Setup and Basic Usage</li>
</ul>
</li>
<li><a href="/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html" target="_blank">Terraform 실행</a> : <code>plan</code> <code>apply</code> <code>destroy</code>
<ul>
<li>💻 Lab - Terraform in Action</li>
</ul>
</li>
<li><a href="/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html" target="_blank">테라폼 프로비저닝 도구 사용 및 구성</a>
<ul>
<li>💻 Lab - Terraform으로 프로비저닝 하기</li>
</ul>
</li>
<li><a href="/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html" target="_blank">테라폼 상태파일(State)</a></li>
<li><a href="/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html" target="_blank">Terraform Cloud</a>
<ul>
<li>💻 Lab - Terraform Remote State</li>
</ul>
</li>
</ol>
</li>
</ul>`,r:{minutes:2.48,words:149},y:"a",t:"Workshop 안내"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html",{loader:()=>u(()=>import("./01-terraform-intro.html-Bv4gt44K.js"),__vite__mapDeps([242,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>NCP 서버를 어떻게 프로비저닝 하죠?</h2>
<p>새로운 NCP의 인스턴스를 프로비저닝 할 수있는 몇 가지 다른 방법을 살펴 보겠습니다. 시작하기 전에 다음을 포함한 몇 가지 기본 정보를 수집해야합니다 (더 많은 옵션이 있습니다).</p>
<ul>
<li>서버 이름</li>
<li>운영 체제 (Image)</li>
<li>VM 크기</li>
<li>지리적 위치 (Region)</li>
<li>보안 그룹</li>
</ul>
<h2>서버 만들기 Method 1:  nCloud Console (GUI)</h2>

<hr>
<h2>서버 만들기 Method 2:  nCloud CLI</h2>`,r:{minutes:4.75,words:285},y:"a",t:"01. 테라폼 소개"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-terraform-basic.html",{loader:()=>u(()=>import("./02-terraform-basic.html-DCSc9oOi.js"),__vite__mapDeps([243,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>Terraform 이란?</h2>
<figure><figcaption>logo</figcaption></figure>
<ul>
<li>
<p>Terraform은 오픈 소스 프로비저닝 도구입니다.</p>
<ul>
<li>Terraform Github : <a href="https://github.com/hashicorp/terraform" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/terraform</a></li>
</ul>
</li>
<li>
<p>Go로 작성된 단일 바이너리로 제공됩니다. Terraform은 크로스 플랫폼이며 Linux, Windows 또는 MacOS에서 실행할 수 있습니다.</p>
</li>
<li>
<p>terraform 설치는 쉽습니다. zip 파일을 다운로드하고 압축을 풀고 실행하기 만하면됩니다.</p>
<ul>
<li>다운로드 : <a href="https://www.terraform.io/downloads.html" target="_blank" rel="noopener noreferrer">https://www.terraform.io/downloads.html</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.2,words:372},y:"a",t:"02. 테라폼 기본"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-z-lab_terraform_basic.html",{loader:()=>u(()=>import("./02-z-lab_terraform_basic.html-CHJowpFZ.js"),__vite__mapDeps([244,245,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<hr>
<h2>🏡 Moving in - Explore Your Workspace</h2>
<p>@slidestart blood</p>
<h3>Terraform 명령줄 도구는 MacOS, FreeBSD, OpenBSD, Windows, Solaris 및 Linux에서 사용할 수 있습니다.</h3>
<hr>
<h3>Terraform 언어는 사람과 기계가 읽을 수 있도록 설계되었습니다.</h3>
<hr>
<h3>대부분의 최신 코드 편집기는 Terraform 구문 강조 표시를 지원합니다.</h3>
<p>@slideend</p>
<h3>테라폼 설치 및 구성</h3>`,r:{minutes:11.45,words:687},y:"a",t:"💻 Lab - Setup and Basic Usage"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html",{loader:()=>u(()=>import("./03-terraform-in-Action.html-BeA9nHA3.js"),__vite__mapDeps([246,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>리소스 분석</h2>
<p>모든 Terraform으로 구성되는 리소스는 정확히 동일한 방식으로 구성됩니다.</p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>resource type <span class="token string">"name"</span> <span class="token punctuation">{</span>
  <span class="token property">parameter</span> <span class="token punctuation">=</span> <span class="token string">"foo"</span>
  <span class="token property">parameter2</span> <span class="token punctuation">=</span> <span class="token string">"bar"</span>
  <span class="token property">list</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"one"</span>, <span class="token string">"two"</span>, <span class="token string">"three"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>`,r:{minutes:6.77,words:406},y:"a",t:"03. 테라폼 실행"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-z-lab_terraform_action.html",{loader:()=>u(()=>import("./03-z-lab_terraform_action.html-C0NT0IbI.js"),__vite__mapDeps([247,245,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 받은 디렉토리내의 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>📈 Terraform Graph</h2>
<p>@slidestart blood</p>
<h3>Terraform Graph는 모든 인프라에 대한 시각적 표현을 제공할 수 있습니다.</h3>`,r:{minutes:10.88,words:653},y:"a",t:"💻 Lab - Terraform in Action"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html",{loader:()=>u(()=>import("./04-ncp-provisioning-and-configuration.html-Croe_iHQ.js"),__vite__mapDeps([248,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>Terraform 프로비저닝 도구 사용</h2>
<p>Terraform을 사용하여 가상 머신 또는 컨테이너를 세우고 나면 운영 체제와 애플리케이션을 구성 할 수 있습니다.</p>
<p>여기에서 <mark>Provisioner</mark> 가 등장합니다.</p>
<p>Terraform은 Bash, Powershell, Chef, Puppet, Ansible 등을 포함한 여러 유형의 Provisioner를 지원합니다.</p>
<p><a href="https://www.terraform.io/docs/provisioners/index.html" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs/provisioners/index.html</a></p>`,r:{minutes:2.95,words:177},y:"a",t:"04. 테라폼 프로비저닝 도구 사용 및 구성"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-z-lab_provisioners_variables_outputs.html",{loader:()=>u(()=>import("./04-z-lab_provisioners_variables_outputs.html-UJqvH4pP.js"),__vite__mapDeps([249,245,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 실습을 진행한 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>🛠️ Use a Provisioner</h2>
<p>@slidestart blood</p>
<h3>Terraform 프로비저닝 도구는 생성 시 한 번 실행됩니다.</h3>
<hr>`,r:{minutes:4.33,words:260},y:"a",t:"💻 Lab - Provisioners, Variables, Outputs"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html",{loader:()=>u(()=>import("./05-terraform-state.html-BvbSrBMT.js"),__vite__mapDeps([250,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>Terraform State</h2>
<p>Terraform은 <sub>stateful</sub> 애플리케이션입니다. 즉, state file 내부에서 빌드 한 모든 내용을 추적합니다.</p>
<p>앞서의 실습에서 반복된 <code>Apply</code> 작업 간에 Workspace 디렉토리에 나타난 <code>terraform.tfstate</code> 및 <code>terraform.tfstate.backup</code> 파일을 보셨을 것입니다.</p>
<p>상태 파일은 Terraform이 알고있는 모든 것에 대한 기록 소스입니다.</p>`,r:{minutes:2.38,words:143},y:"a",t:"05. 테라폼 상태파일(State)"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html",{loader:()=>u(()=>import("./06-terraform-cloud.html-BsiTdGGb.js"),__vite__mapDeps([251,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h2>Terraform Cloud</h2>
<p>Terraform Cloud는 Terraform을 사용하여 코드로 인프라를 작성하고 구축하기위한 최고의 워크 플로를 제공하는 <mark>무료</mark> 로 시작하는 SaaS 애플리케이션입니다.</p>
<figure><figcaption></figcaption></figure>
<ul>
<li>State 저장 및 관리</li>
<li>Terraform 실행을보고 승인하기위한 웹 UI</li>
<li>개인 모듈 레지스트리</li>
<li>VCS (Version Control System) 통합</li>
<li>CLI, API 또는 GUI 기반 작업</li>
<li>실행 이벤트 알림</li>
<li>자동화를위한 전체 HTTP API</li>
</ul>`,r:{minutes:1.9,words:114},y:"a",t:"06. Terraform Cloud"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-z-lab_terraform_cloud.html",{loader:()=>u(()=>import("./06-z-lab_terraform_cloud.html-Ezbt7Ba2.js"),__vite__mapDeps([252,245,1])),meta:{d:1695042774e3,g:["ncloud","ncp","terraform","workshop"],e:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 실습을 진행한 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>☁️ Terraform Configuration</h2>
<p>@slidestart blood</p>
<h3>Terraform Cloud</h3>
<h3>Remote State 저장소는 모든 사용자에게 무료입니다.</h3>`,r:{minutes:6.62,words:397},y:"a",t:"💻 Lab - Terraform Cloud 연결"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/01-Install.html",{loader:()=>u(()=>import("./01-Install.html-BE1geiA1.js"),__vite__mapDeps([253,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>실습을 위한 조건은 다음과 같습니다.</p>
<ul>
<li>Kubernetes 1.21 이상의 환경</li>
<li>Consul binary <a href="http://releases.hashicorp.com/consul/" target="_blank" rel="noopener noreferrer">http://releases.hashicorp.com/consul/</a></li>
<li>Install helm 3</li>
<li>Install Kubectl</li>
<li>Consul Namespace 테스트는 Enterprise 라이선스가 필요합니다. : <a href="http://consul.io/trial" target="_blank" rel="noopener noreferrer">http://consul.io/trial</a></li>
</ul>
</div>`,r:{minutes:3.3,words:198},y:"a",t:"01. Install"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/02-SideCar.html",{loader:()=>u(()=>import("./02-SideCar.html-CWAEPrPP.js"),__vite__mapDeps([254,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes"],e:`
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>실습을 위한 조건은 다음과 같습니다.</p>
<ul>
<li>Consul 이 구성된 Kubernetes 환경</li>
<li>설치 구성 시 <code>connectInject</code> 이 활성화 되어있어야 합니다.</li>
</ul>
</div>
<blockquote>
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/consul/service-mesh-application-secure-networking?in=consul/kubernetes" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/service-mesh-application-secure-networking?in=consul/kubernetes</a></p>
</blockquote>`,r:{minutes:10.68,words:641},y:"a",t:"02. SideCar"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/03-use-crd.html",{loader:()=>u(()=>import("./03-use-crd.html-DGRgAlzz.js"),__vite__mapDeps([255,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes"],e:`
<blockquote>
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/consul/kubernetes-custom-resource-definitions?in=consul/kubernetes" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/kubernetes-custom-resource-definitions?in=consul/kubernetes</a></p>
<p>참고 : <a href="https://learn.hashicorp.com/tutorials/consul/service-mesh-zero-trust-network?in=consul/gs-consul-service-mesh" target="_blank" rel="noopener noreferrer">https://learn.hashicorp.com/tutorials/consul/service-mesh-zero-trust-network?in=consul/gs-consul-service-mesh</a></p>
</blockquote>`,r:{minutes:9.32,words:559},y:"a",t:"03. CRD로 Consul Serive Mesh 관리"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/04-traffic-management.html",{loader:()=>u(()=>import("./04-traffic-management.html-CixuogLi.js"),__vite__mapDeps([256,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes"],e:`
<p>실습을 진행하기 위한 디렉토리를 생성합니다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ./traffic
</code></pre></div><p>Service Mesh는 HTTP 프로토콜 상에서 L7으로 동작하게 됩니다. 따라서 기본 프로토콜을 http로 변경합니다.</p>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-to-service.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ProxyDefaults
metadata:
  name: global
spec:
  config:
    protocol: http
EOF</span>
</code></pre></div>`,r:{minutes:12.27,words:736},y:"a",t:"04. 트래픽 관리"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/annotation/ingress-and-serviceroute.html",{loader:()=>u(()=>import("./ingress-and-serviceroute.html-BxyFymQS.js"),__vite__mapDeps([257,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes","ingress"],e:`
<p>Ingress gateway가 8080을 Listen하도록 구성되어있으면, 아래와 같이 해당 포트의 요청을 받을 대상 서비스를 지정합니다.</p>
<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> consul.hashicorp.com/v1alpha1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> IngressGateway
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> ingress<span class="token punctuation">-</span>gateway
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">listeners</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> http
      <span class="token key atrule">services</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> hashicups
          <span class="token key atrule">hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"*"</span><span class="token punctuation">]</span>
</code></pre></div>`,r:{minutes:1.13,words:68},y:"a",t:"Ingress & ServiceRoute"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/annotation/multiport.html",{loader:()=>u(()=>import("./multiport.html-Dg76Rcxq.js"),__vite__mapDeps([258,1])),meta:{d:1645936869e3,g:["Consul","ServiceMesh","K8s","Kubernetes","annotation"],e:`
<blockquote>
<p>Consul Doc : <a href="https://www.consul.io/docs/k8s/connect#kubernetes-pods-with-multiple-ports" target="_blank" rel="noopener noreferrer">https://www.consul.io/docs/k8s/connect#kubernetes-pods-with-multiple-ports</a></p>
</blockquote>
<p><code>annotation</code>  에 다음과 같이 서비스 이름과 대상 포트를 리스트로 지정합니다.</p>`,r:{minutes:1,words:60},y:"a",t:"Multiport"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/envoy_timeout.html",{loader:()=>u(()=>import("./envoy_timeout.html-C5yZXueb.js"),__vite__mapDeps([259,1])),meta:{d:1648260872e3,g:["Consul","ServiceMesh","K8s","Kubernetes","timeout"],e:`
<blockquote>
<p>Consul API : <a href="https://www.consul.io/api-docs/config" target="_blank" rel="noopener noreferrer">https://www.consul.io/api-docs/config</a><br>
Proxy Default : <a href="https://www.consul.io/docs/connect/config-entries/proxy-defaults" target="_blank" rel="noopener noreferrer">https://www.consul.io/docs/connect/config-entries/proxy-defaults</a><br>
Envoy Integration : <a href="https://www.consul.io/docs/connect/proxies/envoy" target="_blank" rel="noopener noreferrer">https://www.consul.io/docs/connect/proxies/envoy</a></p>
</blockquote>`,r:{minutes:6.42,words:385},y:"a",t:"Envoy Timeout"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/performance/consul-istio.html",{loader:()=>u(()=>import("./consul-istio.html-DJXNnu34.js"),__vite__mapDeps([260,1])),meta:{d:166385002e4,g:["Consul","Istio","Kubetenetes","k8s","Performance"],e:`
<h2>1. 성능 테스트 수행 결과 요약</h2>
<h3>Case 2-1</h3>
<ul>
<li>Consul Ingress Gateway의 resources.limits 와 resources.requests 의 cpu, memory 를 각각 250m / 500Mi 로 수정</li>
<li>Istio Default 1527 Requests/sec 대비 1860 Requests/sec 로 약 22% 빠름 (Case 2-1)</li>
</ul>
<h3>Case 2-2</h3>
<ul>
<li>Consul Ingress Gateway resource allocation을 Istio와 동률 구성 시,</li>
<li>Istio Default 1527 Requests/sec 대비 3002 Requests/sec로 약 196% 빠름 (Case 2-2)</li>
</ul>`,r:{minutes:26.63,words:1598},y:"a",t:"Consul vs Istio - Performance Test"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/tracing/jaeger_tracing.html",{loader:()=>u(()=>import("./jaeger_tracing.html-BWrKIJd6.js"),__vite__mapDeps([261,1])),meta:{a:"유형욱",d:1668245149e3,g:["Consul","Jaeger","Tracing","OpenTelemetry","Istio","IngressGateway","Kubetenetes","K8s"],e:`
<h2>0. 사전 요구사항</h2>
<h3>1) Consul Install</h3>
<p>Jaeger 연동을 위해 Consul on K8s 환경을 구성합니다. 해당 가이드의 경우에는 <a href="">여기</a>를 참고하세요.</p>
<h4>(1) 시크릿 생성 - 라이센스</h4>
<ul>
<li>라이센스 파일 생성 및 시크릿 생성</li>
</ul>
<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># license파일 생성</span>
<span class="token function">vi</span> consul.lic

<span class="token comment"># 생성한 license파일로 secret 생성</span>
kubectl create secret generic license --from-file<span class="token operator">=</span><span class="token string">'key=./consul.lic'</span>
</code></pre></div>`,r:{minutes:16.78,words:1007},y:"a",t:"Jaeger를 활용한 Consul Service Mesh Tracing"}}],["/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/1-vso-overview.html",{loader:()=>u(()=>import("./1-vso-overview.html-BpgrKbfu.js"),__vite__mapDeps([262,1])),meta:{d:1684599614e3,g:["vault","operator"],e:`
<blockquote>
<p>참고:<br>
현재 Vault 비밀 오퍼레이터는 공개 베타 버전입니다. *<a href="https://github.com/hashicorp/vault-secrets-operator/issues" target="_blank" rel="noopener noreferrer">here</a>*에서 GitHub 이슈를 개설하여 피드백을 제공해 주세요.</p>
</blockquote>
<figure><img src="https://external-preview.redd.it/UWYqK9zEwREq18MnMbIC7T6W5mUJbF_i4C2K3T1cV6Y.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=927dad31a962359c0b61c5ae57ce1d57f6957cf7" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:5.42,words:325},y:"a",t:"Vault Secrets Operator 개요"}}],["/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/2-vso-install.html",{loader:()=>u(()=>import("./2-vso-install.html-BEWsLPfZ.js"),__vite__mapDeps([263,1])),meta:{d:1684599614e3,g:["vault","operator"],e:`
<blockquote>
<p>참고:<br>
현재 Vault 비밀 오퍼레이터는 공개 베타 버전입니다. *<a href="https://github.com/hashicorp/vault-secrets-operator/issues" target="_blank" rel="noopener noreferrer">here</a>*에서 GitHub 이슈를 개설하여 피드백을 제공해 주세요.</p>
</blockquote>
<h2>사전 요구사항</h2>
<ul>
<li>Kubernetes 1.22+</li>
<li>Vault OSS/Enterprise 1.11+</li>
</ul>`,r:{minutes:1.97,words:118},y:"a",t:"Vault Secrets Operator 설치"}}],["/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/3-vso-samples.html",{loader:()=>u(()=>import("./3-vso-samples.html-CxWvdRkL.js"),__vite__mapDeps([264,1])),meta:{d:1684599614e3,g:["vault","operator"],e:`
<blockquote>
<p>📌 참고:<br>
현재 Vault 비밀 오퍼레이터는 공개 베타 버전입니다. *<a href="https://github.com/hashicorp/vault-secrets-operator/issues" target="_blank" rel="noopener noreferrer">here</a>*에서 GitHub 이슈를 개설하여 피드백을 제공해 주세요.</p>
</blockquote>
<p>본 문서는 HashiCorp 공식 GitHub의 <a href="%5Bhere%5D(https://github.com/hashicorp/vault-secrets-operator#samples)">Vault Secret Operator 저장소</a> 에서 제공하는 코드를 활용하여 환경구성 및 샘플 애플리케이션 배포/연동에 대한 상세 분석을 제공한다.</p>`,r:{minutes:34.08,words:2045},y:"a",t:"Vault Secrets Operator 예제실습"}}],["/404.html",{loader:()=>u(()=>import("./404.html-3InTdONk.js"),__vite__mapDeps([265,1])),meta:{e:`<p>404 Not Found</p>
`,r:{minutes:.05,words:3},y:"p",t:""}}],["/99-about/",{loader:()=>u(()=>import("./index.html-C6t7ypkR.js"),__vite__mapDeps([266,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"99 about"}}],["/01-Infrastructure/Container/",{loader:()=>u(()=>import("./index.html-VXZAwr-g.js"),__vite__mapDeps([267,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Container"}}],["/02-PrivatePlatform/OpenShift/",{loader:()=>u(()=>import("./index.html-C20mgIc6.js"),__vite__mapDeps([268,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Open Shift"}}],["/02-PrivatePlatform/Vsphere/",{loader:()=>u(()=>import("./index.html-DnfdcXFt.js"),__vite__mapDeps([269,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Vsphere"}}],["/06-etc/book-memo/",{loader:()=>u(()=>import("./index.html-BbVhEOkv.js"),__vite__mapDeps([270,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Book Memo"}}],["/06-etc/class/",{loader:()=>u(()=>import("./index.html-BDryNweu.js"),__vite__mapDeps([271,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Class"}}],["/06-etc/infomation/",{loader:()=>u(()=>import("./index.html-DZ-9vmf9.js"),__vite__mapDeps([272,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Infomation"}}],["/06-etc/mac/",{loader:()=>u(()=>import("./index.html-DeLyVEPB.js"),__vite__mapDeps([273,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Mac"}}],["/06-etc/nodejs/",{loader:()=>u(()=>import("./index.html-Z4-t7YPN.js"),__vite__mapDeps([274,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Nodejs"}}],["/01-Infrastructure/Linux/TroubleShooting/",{loader:()=>u(()=>import("./index.html-BYNcXK9F.js"),__vite__mapDeps([275,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Trouble Shooting"}}],["/01-Infrastructure/Linux/",{loader:()=>u(()=>import("./index.html-gKTycLZ0.js"),__vite__mapDeps([276,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Linux"}}],["/02-PrivatePlatform/Kubernetes/01-Information/",{loader:()=>u(()=>import("./index.html-BC4Clurc.js"),__vite__mapDeps([277,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/02-PrivatePlatform/Kubernetes/",{loader:()=>u(()=>import("./index.html-v84x5jKP.js"),__vite__mapDeps([278,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Kubernetes"}}],["/02-PrivatePlatform/Kubernetes/02-Config/",{loader:()=>u(()=>import("./index.html-C5PdWttI.js"),__vite__mapDeps([279,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Config"}}],["/02-PrivatePlatform/Kubernetes/05-Kops/",{loader:()=>u(()=>import("./index.html-8BRJBoHE.js"),__vite__mapDeps([280,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Kops"}}],["/02-PrivatePlatform/Kubernetes/06-EKS/",{loader:()=>u(()=>import("./index.html-CE3cqyV7.js"),__vite__mapDeps([281,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"06 EKS"}}],["/04-HashiCorp/01-Packer/01-Information/",{loader:()=>u(()=>import("./index.html-BGUkIX84.js"),__vite__mapDeps([282,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/04-HashiCorp/01-Packer/",{loader:()=>u(()=>import("./index.html-C6pk8Mkr.js"),__vite__mapDeps([283,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Packer"}}],["/04-HashiCorp/01-Packer/05-SamplePkr/",{loader:()=>u(()=>import("./index.html-DoH18K4O.js"),__vite__mapDeps([284,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Sample Pkr"}}],["/04-HashiCorp/02-Vagrant/02-Config/",{loader:()=>u(()=>import("./index.html-DMnCesl3.js"),__vite__mapDeps([285,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Config"}}],["/04-HashiCorp/02-Vagrant/",{loader:()=>u(()=>import("./index.html-C2y673JN.js"),__vite__mapDeps([286,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Vagrant"}}],["/04-HashiCorp/02-Vagrant/04-TroubleShooting/",{loader:()=>u(()=>import("./index.html-CbyUbhjQ.js"),__vite__mapDeps([287,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Trouble Shooting"}}],["/04-HashiCorp/03-Terraform/01-Information/",{loader:()=>u(()=>import("./index.html-Btj_b6IW.js"),__vite__mapDeps([288,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/04-HashiCorp/03-Terraform/",{loader:()=>u(()=>import("./index.html-0LJDvDXc.js"),__vite__mapDeps([289,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"03 Terraform"}}],["/04-HashiCorp/03-Terraform/02-Config/",{loader:()=>u(()=>import("./index.html-B2abmErt.js"),__vite__mapDeps([290,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Config"}}],["/04-HashiCorp/03-Terraform/03-Sample/",{loader:()=>u(()=>import("./index.html-DCdEIcOj.js"),__vite__mapDeps([291,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"03 Sample"}}],["/04-HashiCorp/03-Terraform/04-TroubleShooting/",{loader:()=>u(()=>import("./index.html-DSlKsWQj.js"),__vite__mapDeps([292,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Trouble Shooting"}}],["/04-HashiCorp/03-Terraform/05-Airgap/",{loader:()=>u(()=>import("./index.html-DBJYHQJO.js"),__vite__mapDeps([293,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Airgap"}}],["/04-HashiCorp/04-Consul/01-Information/",{loader:()=>u(()=>import("./index.html-CapHP6QJ.js"),__vite__mapDeps([294,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/04-HashiCorp/04-Consul/",{loader:()=>u(()=>import("./index.html-BMXKGGFQ.js"),__vite__mapDeps([295,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Consul"}}],["/04-HashiCorp/04-Consul/02-Configuration/",{loader:()=>u(()=>import("./index.html-V6ETkeN0.js"),__vite__mapDeps([296,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Configuration"}}],["/04-HashiCorp/04-Consul/03-UseCase/",{loader:()=>u(()=>import("./index.html-Citd8cVa.js"),__vite__mapDeps([297,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"03 Use Case"}}],["/04-HashiCorp/04-Consul/04-TroubleShooting/",{loader:()=>u(()=>import("./index.html-DidAAQN0.js"),__vite__mapDeps([298,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Trouble Shooting"}}],["/04-HashiCorp/04-Consul/05-Template_Sample/",{loader:()=>u(()=>import("./index.html-DnVEJRxf.js"),__vite__mapDeps([299,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Template Sample"}}],["/04-HashiCorp/05-Boundary/01-Install/",{loader:()=>u(()=>import("./index.html-6vKbhke2.js"),__vite__mapDeps([300,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Install"}}],["/04-HashiCorp/05-Boundary/",{loader:()=>u(()=>import("./index.html-C5vHXt_I.js"),__vite__mapDeps([301,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Boundary"}}],["/04-HashiCorp/05-Boundary/02-Config/",{loader:()=>u(()=>import("./index.html-B3bFxz-5.js"),__vite__mapDeps([302,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Config"}}],["/04-HashiCorp/06-Vault/01-Information/",{loader:()=>u(()=>import("./index.html-Dck3wAgY.js"),__vite__mapDeps([303,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/04-HashiCorp/06-Vault/",{loader:()=>u(()=>import("./index.html-B_wA41-I.js"),__vite__mapDeps([304,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"06 Vault"}}],["/04-HashiCorp/06-Vault/02-Secret_Engine/",{loader:()=>u(()=>import("./index.html-BiEHhyUm.js"),__vite__mapDeps([305,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Secret Engine"}}],["/04-HashiCorp/06-Vault/03-Auth_Method/",{loader:()=>u(()=>import("./index.html-Dfwbzbq-.js"),__vite__mapDeps([306,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"03 Auth Method"}}],["/04-HashiCorp/06-Vault/04-UseCase/",{loader:()=>u(()=>import("./index.html-D8dN7mHI.js"),__vite__mapDeps([307,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Use Case"}}],["/04-HashiCorp/06-Vault/05-TroubleShooting/",{loader:()=>u(()=>import("./index.html-lGohR3TU.js"),__vite__mapDeps([308,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Trouble Shooting"}}],["/04-HashiCorp/06-Vault/06-Config/",{loader:()=>u(()=>import("./index.html-CAY1YUeO.js"),__vite__mapDeps([309,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"06 Config"}}],["/04-HashiCorp/06-Vault/07-Sentinel-Sample/",{loader:()=>u(()=>import("./index.html-q8DpuOEU.js"),__vite__mapDeps([310,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"07 Sentinel Sample"}}],["/04-HashiCorp/07-Nomad/01-Information/",{loader:()=>u(()=>import("./index.html-pS-usHDA.js"),__vite__mapDeps([311,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Information"}}],["/04-HashiCorp/07-Nomad/",{loader:()=>u(()=>import("./index.html-BrNI9Xtc.js"),__vite__mapDeps([312,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"07 Nomad"}}],["/04-HashiCorp/07-Nomad/02-Config/",{loader:()=>u(()=>import("./index.html-8D9KQOTe.js"),__vite__mapDeps([313,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"02 Config"}}],["/04-HashiCorp/07-Nomad/04-UseCase/",{loader:()=>u(()=>import("./index.html-D_OQB9UT.js"),__vite__mapDeps([314,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"04 Use Case"}}],["/04-HashiCorp/07-Nomad/05-SampleJob/",{loader:()=>u(()=>import("./index.html-IH7_j9MK.js"),__vite__mapDeps([315,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"05 Sample Job"}}],["/04-HashiCorp/08-Updates/97-2024/",{loader:()=>u(()=>import("./index.html-CXAnO7JD.js"),__vite__mapDeps([316,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"97 2024"}}],["/04-HashiCorp/08-Updates/",{loader:()=>u(()=>import("./index.html-D2ovzGb9.js"),__vite__mapDeps([317,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"08 Updates"}}],["/04-HashiCorp/08-Updates/98-2023/",{loader:()=>u(()=>import("./index.html-BIkpQNWn.js"),__vite__mapDeps([318,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"98 2023"}}],["/04-HashiCorp/08-Updates/99-2022/",{loader:()=>u(()=>import("./index.html-DbnZA5p8.js"),__vite__mapDeps([319,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"99 2022"}}],["/05-Software/Jenkins/pipeline101/",{loader:()=>u(()=>import("./index.html-Bm7FITuf.js"),__vite__mapDeps([320,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Pipeline101"}}],["/05-Software/Jenkins/",{loader:()=>u(()=>import("./index.html-DXD3WXHH.js"),__vite__mapDeps([321,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Jenkins"}}],["/05-Software/Tomcat/tomcat101/",{loader:()=>u(()=>import("./index.html-Dm1uS-N0.js"),__vite__mapDeps([322,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Tomcat101"}}],["/05-Software/Tomcat/",{loader:()=>u(()=>import("./index.html-DOYXUDtG.js"),__vite__mapDeps([323,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Tomcat"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/",{loader:()=>u(()=>import("./index.html-DZS1B9qq.js"),__vite__mapDeps([324,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"01 Intro to Terraform on Ncp"}}],["/03-PublicCloud/NCP/09-Terraform-Workshop/",{loader:()=>u(()=>import("./index.html-DWXZZGTG.js"),__vite__mapDeps([325,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"09 Terraform Workshop"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/",{loader:()=>u(()=>import("./index.html-COfg27RH.js"),__vite__mapDeps([326,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Service Mesh101"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/",{loader:()=>u(()=>import("./index.html-BP3RgDRa.js"),__vite__mapDeps([327,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"06 on Kubernetes"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/annotation/",{loader:()=>u(()=>import("./index.html-ChvEJBpi.js"),__vite__mapDeps([328,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Annotation"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/",{loader:()=>u(()=>import("./index.html-BIwBeCf8.js"),__vite__mapDeps([329,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Configuration"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/performance/",{loader:()=>u(()=>import("./index.html-GFemiIAa.js"),__vite__mapDeps([330,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Performance"}}],["/04-HashiCorp/04-Consul/06-on_Kubernetes/tracing/",{loader:()=>u(()=>import("./index.html-CAfyQnJF.js"),__vite__mapDeps([331,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Tracing"}}],["/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/",{loader:()=>u(()=>import("./index.html-DuDOfMp4.js"),__vite__mapDeps([332,1])),meta:{r:{minutes:.02,words:1},y:"p",t:"Vault Secret Operator"}}],["/category/",{loader:()=>u(()=>import("./index.html-TzawRoU3.js"),__vite__mapDeps([333,1])),meta:{y:"p",t:"카테고리",I:!1}}],["/tag/",{loader:()=>u(()=>import("./index.html-DXifWcd9.js"),__vite__mapDeps([334,1])),meta:{y:"p",t:"태그",I:!1}}],["/tag/infrastructure/",{loader:()=>u(()=>import("./index.html-B3t111-C.js"),__vite__mapDeps([335,1])),meta:{y:"p",t:"태그: Infrastructure",I:!1}}],["/tag/platform/",{loader:()=>u(()=>import("./index.html-BidOl4lL.js"),__vite__mapDeps([336,1])),meta:{y:"p",t:"태그: Platform",I:!1}}],["/tag/cloud/",{loader:()=>u(()=>import("./index.html-BX6TeuiG.js"),__vite__mapDeps([337,1])),meta:{y:"p",t:"태그: Cloud",I:!1}}],["/tag/hashicorp/",{loader:()=>u(()=>import("./index.html-xyIRysKZ.js"),__vite__mapDeps([338,1])),meta:{y:"p",t:"태그: HashiCorp",I:!1}}],["/tag/software/",{loader:()=>u(()=>import("./index.html-k3Y43GAt.js"),__vite__mapDeps([339,1])),meta:{y:"p",t:"태그: Software",I:!1}}],["/tag/etc/",{loader:()=>u(()=>import("./index.html-9IFmzrU4.js"),__vite__mapDeps([340,1])),meta:{y:"p",t:"태그: Etc",I:!1}}],["/tag/container/",{loader:()=>u(()=>import("./index.html-CGS53UTx.js"),__vite__mapDeps([341,1])),meta:{y:"p",t:"태그: container",I:!1}}],["/tag/docker/",{loader:()=>u(()=>import("./index.html-Cf4gg3HL.js"),__vite__mapDeps([342,1])),meta:{y:"p",t:"태그: docker",I:!1}}],["/tag/podman/",{loader:()=>u(()=>import("./index.html-cQS5zgfN.js"),__vite__mapDeps([343,1])),meta:{y:"p",t:"태그: podman",I:!1}}],["/tag/rancher/",{loader:()=>u(()=>import("./index.html--o69edya.js"),__vite__mapDeps([344,1])),meta:{y:"p",t:"태그: rancher",I:!1}}],["/tag/mac/",{loader:()=>u(()=>import("./index.html-aNZ7TptU.js"),__vite__mapDeps([345,1])),meta:{y:"p",t:"태그: mac",I:!1}}],["/tag/openshift/",{loader:()=>u(()=>import("./index.html-BLHiX8if.js"),__vite__mapDeps([346,1])),meta:{y:"p",t:"태그: openshift",I:!1}}],["/tag/ocp/",{loader:()=>u(()=>import("./index.html-vpyigKpl.js"),__vite__mapDeps([347,1])),meta:{y:"p",t:"태그: ocp",I:!1}}],["/tag/jboss/",{loader:()=>u(()=>import("./index.html-Bcml4Nf2.js"),__vite__mapDeps([348,1])),meta:{y:"p",t:"태그: jboss",I:!1}}],["/tag/vsphere/",{loader:()=>u(()=>import("./index.html-CcltBgqf.js"),__vite__mapDeps([349,1])),meta:{y:"p",t:"태그: vsphere",I:!1}}],["/tag/template/",{loader:()=>u(()=>import("./index.html-n4t8B6BJ.js"),__vite__mapDeps([350,1])),meta:{y:"p",t:"태그: template",I:!1}}],["/tag/alibaba/",{loader:()=>u(()=>import("./index.html-gE2w_xie.js"),__vite__mapDeps([351,1])),meta:{y:"p",t:"태그: alibaba",I:!1}}],["/tag/aliyun/",{loader:()=>u(()=>import("./index.html-Be_Fut3b.js"),__vite__mapDeps([352,1])),meta:{y:"p",t:"태그: aliyun",I:!1}}],["/tag/book/",{loader:()=>u(()=>import("./index.html-w144HV-M.js"),__vite__mapDeps([353,1])),meta:{y:"p",t:"태그: book",I:!1}}],["/tag/ai/",{loader:()=>u(()=>import("./index.html-DQDwpkhU.js"),__vite__mapDeps([354,1])),meta:{y:"p",t:"태그: ai",I:!1}}],["/tag/devops/",{loader:()=>u(()=>import("./index.html-CtcUZyVC.js"),__vite__mapDeps([355,1])),meta:{y:"p",t:"태그: devops",I:!1}}],["/tag/keyboard/",{loader:()=>u(()=>import("./index.html-D5i_ky7E.js"),__vite__mapDeps([356,1])),meta:{y:"p",t:"태그: keyboard",I:!1}}],["/tag/tip/",{loader:()=>u(()=>import("./index.html-BibxeOAB.js"),__vite__mapDeps([357,1])),meta:{y:"p",t:"태그: tip",I:!1}}],["/tag/acronyms/",{loader:()=>u(()=>import("./index.html-DHG4ukMt.js"),__vite__mapDeps([358,1])),meta:{y:"p",t:"태그: acronyms",I:!1}}],["/tag/homebrew/",{loader:()=>u(()=>import("./index.html-BvhxjCcz.js"),__vite__mapDeps([359,1])),meta:{y:"p",t:"태그: homebrew",I:!1}}],["/tag/brew/",{loader:()=>u(()=>import("./index.html-1KSFe1x-.js"),__vite__mapDeps([360,1])),meta:{y:"p",t:"태그: brew",I:!1}}],["/tag/wget/",{loader:()=>u(()=>import("./index.html-BiUK7eYV.js"),__vite__mapDeps([361,1])),meta:{y:"p",t:"태그: wget",I:!1}}],["/tag/arm/",{loader:()=>u(()=>import("./index.html-DerxdTg9.js"),__vite__mapDeps([362,1])),meta:{y:"p",t:"태그: arm",I:!1}}],["/tag/nodejs/",{loader:()=>u(()=>import("./index.html-DKIJjPce.js"),__vite__mapDeps([363,1])),meta:{y:"p",t:"태그: nodejs",I:!1}}],["/tag/linux/",{loader:()=>u(()=>import("./index.html-hckY9zGU.js"),__vite__mapDeps([364,1])),meta:{y:"p",t:"태그: linux",I:!1}}],["/tag/oom/",{loader:()=>u(()=>import("./index.html-DPvQSNz0.js"),__vite__mapDeps([365,1])),meta:{y:"p",t:"태그: oom",I:!1}}],["/tag/oom-killer/",{loader:()=>u(()=>import("./index.html-BKY0y4oA.js"),__vite__mapDeps([366,1])),meta:{y:"p",t:"태그: oom_killer",I:!1}}],["/tag/ssh/",{loader:()=>u(()=>import("./index.html-sdDELVOG.js"),__vite__mapDeps([367,1])),meta:{y:"p",t:"태그: ssh",I:!1}}],["/tag/bridge/",{loader:()=>u(()=>import("./index.html-CSZE7o6p.js"),__vite__mapDeps([368,1])),meta:{y:"p",t:"태그: bridge",I:!1}}],["/tag/netstat/",{loader:()=>u(()=>import("./index.html-turQc0qF.js"),__vite__mapDeps([369,1])),meta:{y:"p",t:"태그: netstat",I:!1}}],["/tag/kubernetes/",{loader:()=>u(()=>import("./index.html-CNVqFeAm.js"),__vite__mapDeps([370,1])),meta:{y:"p",t:"태그: kubernetes",I:!1}}],["/tag/scheduler/",{loader:()=>u(()=>import("./index.html-BlG6hveV.js"),__vite__mapDeps([371,1])),meta:{y:"p",t:"태그: scheduler",I:!1}}],["/tag/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/",{loader:()=>u(()=>import("./index.html-DXaPXtVF.js"),__vite__mapDeps([372,1])),meta:{y:"p",t:"태그: 알고리즘",I:!1}}],["/tag/docker%EC%95%84%EB%8B%98/",{loader:()=>u(()=>import("./index.html-D_6G9SuC.js"),__vite__mapDeps([373,1])),meta:{y:"p",t:"태그: docker아님",I:!1}}],["/tag/containerd/",{loader:()=>u(()=>import("./index.html-ODpABWDY.js"),__vite__mapDeps([374,1])),meta:{y:"p",t:"태그: containerd",I:!1}}],["/tag/vagrant/",{loader:()=>u(()=>import("./index.html-DNhsTJrf.js"),__vite__mapDeps([375,1])),meta:{y:"p",t:"태그: vagrant",I:!1}}],["/tag/install/",{loader:()=>u(()=>import("./index.html-BPuJs59X.js"),__vite__mapDeps([376,1])),meta:{y:"p",t:"태그: install",I:!1}}],["/tag/kubernetes/",{loader:()=>u(()=>import("./index.html-CNVqFeAm.js"),__vite__mapDeps([370,1])),meta:{y:"p",t:"태그: Kubernetes",I:!1}}],["/tag/kops/",{loader:()=>u(()=>import("./index.html-DAv2KFl9.js"),__vite__mapDeps([377,1])),meta:{y:"p",t:"태그: Kops",I:!1}}],["/tag/eks/",{loader:()=>u(()=>import("./index.html-D5uIOwzQ.js"),__vite__mapDeps([378,1])),meta:{y:"p",t:"태그: EKS",I:!1}}],["/tag/pkos/",{loader:()=>u(()=>import("./index.html-oeAw2LCF.js"),__vite__mapDeps([379,1])),meta:{y:"p",t:"태그: PKOS",I:!1}}],["/tag/packer/",{loader:()=>u(()=>import("./index.html-Cx-UC3cn.js"),__vite__mapDeps([380,1])),meta:{y:"p",t:"태그: Packer",I:!1}}],["/tag/hcp/",{loader:()=>u(()=>import("./index.html-DtqfessO.js"),__vite__mapDeps([381,1])),meta:{y:"p",t:"태그: HCP",I:!1}}],["/tag/terraform/",{loader:()=>u(()=>import("./index.html-C8oY56iE.js"),__vite__mapDeps([382,1])),meta:{y:"p",t:"태그: Terraform",I:!1}}],["/tag/sample/",{loader:()=>u(()=>import("./index.html-BPYot1qT.js"),__vite__mapDeps([383,1])),meta:{y:"p",t:"태그: Sample",I:!1}}],["/tag/alibaba/",{loader:()=>u(()=>import("./index.html-gE2w_xie.js"),__vite__mapDeps([351,1])),meta:{y:"p",t:"태그: Alibaba",I:!1}}],["/tag/azure/",{loader:()=>u(()=>import("./index.html-CazCgg-p.js"),__vite__mapDeps([384,1])),meta:{y:"p",t:"태그: Azure",I:!1}}],["/tag/gcp/",{loader:()=>u(()=>import("./index.html-oUa1RzWm.js"),__vite__mapDeps([385,1])),meta:{y:"p",t:"태그: GCP",I:!1}}],["/tag/aws/",{loader:()=>u(()=>import("./index.html-D3oBvtbj.js"),__vite__mapDeps([386,1])),meta:{y:"p",t:"태그: aws",I:!1}}],["/tag/ncp/",{loader:()=>u(()=>import("./index.html-BQuTXlu9.js"),__vite__mapDeps([387,1])),meta:{y:"p",t:"태그: NCP",I:!1}}],["/tag/virtualbox/",{loader:()=>u(()=>import("./index.html-DlGecYeE.js"),__vite__mapDeps([388,1])),meta:{y:"p",t:"태그: virtualbox",I:!1}}],["/tag/terraform/",{loader:()=>u(()=>import("./index.html-C8oY56iE.js"),__vite__mapDeps([382,1])),meta:{y:"p",t:"태그: terraform",I:!1}}],["/tag/iac/",{loader:()=>u(()=>import("./index.html-D-ZqsXha.js"),__vite__mapDeps([389,1])),meta:{y:"p",t:"태그: IaC",I:!1}}],["/tag/usecase/",{loader:()=>u(()=>import("./index.html-DqKOtObC.js"),__vite__mapDeps([390,1])),meta:{y:"p",t:"태그: usecase",I:!1}}],["/tag/hcl/",{loader:()=>u(()=>import("./index.html-Byp7uhgh.js"),__vite__mapDeps([391,1])),meta:{y:"p",t:"태그: HCL",I:!1}}],["/tag/admin/",{loader:()=>u(()=>import("./index.html-DOppKK8u.js"),__vite__mapDeps([392,1])),meta:{y:"p",t:"태그: admin",I:!1}}],["/tag/password/",{loader:()=>u(()=>import("./index.html-TPBvJ-pe.js"),__vite__mapDeps([393,1])),meta:{y:"p",t:"태그: password",I:!1}}],["/tag/terraform-on-azure/",{loader:()=>u(()=>import("./index.html-CGLcTrCO.js"),__vite__mapDeps([394,1])),meta:{y:"p",t:"태그: Terraform on Azure",I:!1}}],["/tag/hashicat/",{loader:()=>u(()=>import("./index.html-Bolk7g_Q.js"),__vite__mapDeps([395,1])),meta:{y:"p",t:"태그: HashiCat",I:!1}}],["/tag/terraform-oss/",{loader:()=>u(()=>import("./index.html-CCfGSqUk.js"),__vite__mapDeps([396,1])),meta:{y:"p",t:"태그: Terraform OSS",I:!1}}],["/tag/terraform-cloud/",{loader:()=>u(()=>import("./index.html-xT3o5Brn.js"),__vite__mapDeps([397,1])),meta:{y:"p",t:"태그: Terraform Cloud",I:!1}}],["/tag/terraform-enterprise/",{loader:()=>u(()=>import("./index.html-BkHFJ-oi.js"),__vite__mapDeps([398,1])),meta:{y:"p",t:"태그: Terraform Enterprise",I:!1}}],["/tag/terraform-%EC%83%98%ED%94%8C/",{loader:()=>u(()=>import("./index.html-BEB9-DZM.js"),__vite__mapDeps([399,1])),meta:{y:"p",t:"태그: Terraform 샘플",I:!1}}],["/tag/nomad/",{loader:()=>u(()=>import("./index.html-Jq5AhJEQ.js"),__vite__mapDeps([400,1])),meta:{y:"p",t:"태그: Nomad",I:!1}}],["/tag/terrafom/",{loader:()=>u(()=>import("./index.html-8-rBm6Ey.js"),__vite__mapDeps([401,1])),meta:{y:"p",t:"태그: terrafom",I:!1}}],["/tag/csi/",{loader:()=>u(()=>import("./index.html-Cmm7eDu9.js"),__vite__mapDeps([402,1])),meta:{y:"p",t:"태그: CSI",I:!1}}],["/tag/state/",{loader:()=>u(()=>import("./index.html-B3mnbFw6.js"),__vite__mapDeps([403,1])),meta:{y:"p",t:"태그: State",I:!1}}],["/tag/enterprise/",{loader:()=>u(()=>import("./index.html-D5c5fBt0.js"),__vite__mapDeps([404,1])),meta:{y:"p",t:"태그: Enterprise",I:!1}}],["/tag/tfe/",{loader:()=>u(()=>import("./index.html-CoBFj4im.js"),__vite__mapDeps([405,1])),meta:{y:"p",t:"태그: TFE",I:!1}}],["/tag/provider/",{loader:()=>u(()=>import("./index.html-FAccXpPZ.js"),__vite__mapDeps([406,1])),meta:{y:"p",t:"태그: provider",I:!1}}],["/tag/consul/",{loader:()=>u(()=>import("./index.html-B32N5nMm.js"),__vite__mapDeps([407,1])),meta:{y:"p",t:"태그: Consul",I:!1}}],["/tag/consul/",{loader:()=>u(()=>import("./index.html-B32N5nMm.js"),__vite__mapDeps([407,1])),meta:{y:"p",t:"태그: consul",I:!1}}],["/tag/sizing/",{loader:()=>u(()=>import("./index.html-q8Xwe082.js"),__vite__mapDeps([408,1])),meta:{y:"p",t:"태그: sizing",I:!1}}],["/tag/port/",{loader:()=>u(()=>import("./index.html-C3CtZFm4.js"),__vite__mapDeps([409,1])),meta:{y:"p",t:"태그: port",I:!1}}],["/tag/requirement/",{loader:()=>u(()=>import("./index.html-BQk3A5Sx.js"),__vite__mapDeps([410,1])),meta:{y:"p",t:"태그: requirement",I:!1}}],["/tag/configuration/",{loader:()=>u(()=>import("./index.html-6R6zDau-.js"),__vite__mapDeps([411,1])),meta:{y:"p",t:"태그: Configuration",I:!1}}],["/tag/forwarddns/",{loader:()=>u(()=>import("./index.html-EQ9_lYWj.js"),__vite__mapDeps([412,1])),meta:{y:"p",t:"태그: ForwardDns",I:!1}}],["/tag/acl/",{loader:()=>u(()=>import("./index.html-BUzp8GOo.js"),__vite__mapDeps([413,1])),meta:{y:"p",t:"태그: Acl",I:!1}}],["/tag/policy/",{loader:()=>u(()=>import("./index.html-C3Dl6Dkp.js"),__vite__mapDeps([414,1])),meta:{y:"p",t:"태그: Policy",I:!1}}],["/tag/client/",{loader:()=>u(()=>import("./index.html-DKFQJQXQ.js"),__vite__mapDeps([415,1])),meta:{y:"p",t:"태그: Client",I:!1}}],["/tag/common/",{loader:()=>u(()=>import("./index.html-CDyaWVZD.js"),__vite__mapDeps([416,1])),meta:{y:"p",t:"태그: Common",I:!1}}],["/tag/server/",{loader:()=>u(()=>import("./index.html-DjzoD1dn.js"),__vite__mapDeps([417,1])),meta:{y:"p",t:"태그: Server",I:!1}}],["/tag/hybrid/",{loader:()=>u(()=>import("./index.html-EmS82Wm0.js"),__vite__mapDeps([418,1])),meta:{y:"p",t:"태그: Hybrid",I:!1}}],["/tag/kubetenetes/",{loader:()=>u(()=>import("./index.html-DcZtCKns.js"),__vite__mapDeps([419,1])),meta:{y:"p",t:"태그: Kubetenetes",I:!1}}],["/tag/k8s/",{loader:()=>u(()=>import("./index.html-BHST4i0Y.js"),__vite__mapDeps([420,1])),meta:{y:"p",t:"태그: k8s",I:!1}}],["/tag/vm/",{loader:()=>u(()=>import("./index.html-YUJOGtan.js"),__vite__mapDeps([421,1])),meta:{y:"p",t:"태그: VM",I:!1}}],["/tag/servicemesh/",{loader:()=>u(()=>import("./index.html-DLiav9Jg.js"),__vite__mapDeps([422,1])),meta:{y:"p",t:"태그: ServiceMesh",I:!1}}],["/tag/sidecar/",{loader:()=>u(()=>import("./index.html-CH26_dVm.js"),__vite__mapDeps([423,1])),meta:{y:"p",t:"태그: SideCar",I:!1}}],["/tag/k8s/",{loader:()=>u(()=>import("./index.html-BHST4i0Y.js"),__vite__mapDeps([420,1])),meta:{y:"p",t:"태그: K8S",I:!1}}],["/tag/consul-template/",{loader:()=>u(()=>import("./index.html-CH1l-f2b.js"),__vite__mapDeps([424,1])),meta:{y:"p",t:"태그: Consul Template",I:!1}}],["/tag/nginx/",{loader:()=>u(()=>import("./index.html-D7evhbgH.js"),__vite__mapDeps([425,1])),meta:{y:"p",t:"태그: NGINX",I:!1}}],["/tag/boundary/",{loader:()=>u(()=>import("./index.html-B8FQtMAw.js"),__vite__mapDeps([426,1])),meta:{y:"p",t:"태그: Boundary",I:!1}}],["/tag/install/",{loader:()=>u(()=>import("./index.html-BPuJs59X.js"),__vite__mapDeps([376,1])),meta:{y:"p",t:"태그: Install",I:!1}}],["/tag/config/",{loader:()=>u(()=>import("./index.html-Dmmkdcuw.js"),__vite__mapDeps([427,1])),meta:{y:"p",t:"태그: Config",I:!1}}],["/tag/vault/",{loader:()=>u(()=>import("./index.html-C3WoOJzZ.js"),__vite__mapDeps([428,1])),meta:{y:"p",t:"태그: vault",I:!1}}],["/tag/kmip/",{loader:()=>u(()=>import("./index.html-DvOhmBJ9.js"),__vite__mapDeps([429,1])),meta:{y:"p",t:"태그: kmip",I:!1}}],["/tag/audit/",{loader:()=>u(()=>import("./index.html-BgXLK9Ig.js"),__vite__mapDeps([430,1])),meta:{y:"p",t:"태그: audit",I:!1}}],["/tag/optinos/",{loader:()=>u(()=>import("./index.html-kjCbXnG6.js"),__vite__mapDeps([431,1])),meta:{y:"p",t:"태그: optinos",I:!1}}],["/tag/configuration/",{loader:()=>u(()=>import("./index.html-6R6zDau-.js"),__vite__mapDeps([411,1])),meta:{y:"p",t:"태그: configuration",I:!1}}],["/tag/token/",{loader:()=>u(()=>import("./index.html-DPOSsHej.js"),__vite__mapDeps([432,1])),meta:{y:"p",t:"태그: token",I:!1}}],["/tag/vault-enterprise/",{loader:()=>u(()=>import("./index.html-Dy0UMwnz.js"),__vite__mapDeps([433,1])),meta:{y:"p",t:"태그: Vault Enterprise",I:!1}}],["/tag/keymgmt/",{loader:()=>u(()=>import("./index.html-CR2Tz5CF.js"),__vite__mapDeps([434,1])),meta:{y:"p",t:"태그: keymgmt",I:!1}}],["/tag/kmip/",{loader:()=>u(()=>import("./index.html-DvOhmBJ9.js"),__vite__mapDeps([429,1])),meta:{y:"p",t:"태그: KMIP",I:!1}}],["/tag/mongodb/",{loader:()=>u(()=>import("./index.html-ADVr7Gpa.js"),__vite__mapDeps([435,1])),meta:{y:"p",t:"태그: MongoDB",I:!1}}],["/tag/pki/",{loader:()=>u(()=>import("./index.html-MM5OMB0-.js"),__vite__mapDeps([436,1])),meta:{y:"p",t:"태그: PKI",I:!1}}],["/tag/ssh/",{loader:()=>u(()=>import("./index.html-sdDELVOG.js"),__vite__mapDeps([367,1])),meta:{y:"p",t:"태그: SSH",I:!1}}],["/tag/otp/",{loader:()=>u(()=>import("./index.html-CigN4lnq.js"),__vite__mapDeps([437,1])),meta:{y:"p",t:"태그: OTP",I:!1}}],["/tag/debian/",{loader:()=>u(()=>import("./index.html-Btrc01FG.js"),__vite__mapDeps([438,1])),meta:{y:"p",t:"태그: Debian",I:!1}}],["/tag/ubuntu/",{loader:()=>u(()=>import("./index.html-B8i39jjM.js"),__vite__mapDeps([439,1])),meta:{y:"p",t:"태그: Ubuntu",I:!1}}],["/tag/rocky/",{loader:()=>u(()=>import("./index.html-Bg61xgKx.js"),__vite__mapDeps([440,1])),meta:{y:"p",t:"태그: Rocky",I:!1}}],["/tag/rhel/",{loader:()=>u(()=>import("./index.html-Dl7S-xFt.js"),__vite__mapDeps([441,1])),meta:{y:"p",t:"태그: RHEL",I:!1}}],["/tag/centos/",{loader:()=>u(()=>import("./index.html-DB0eRzm4.js"),__vite__mapDeps([442,1])),meta:{y:"p",t:"태그: CentOS",I:!1}}],["/tag/transform/",{loader:()=>u(()=>import("./index.html-CK7fxddE.js"),__vite__mapDeps([443,1])),meta:{y:"p",t:"태그: transform",I:!1}}],["/tag/fpe/",{loader:()=>u(()=>import("./index.html-CsUlV_G8.js"),__vite__mapDeps([444,1])),meta:{y:"p",t:"태그: fpe",I:!1}}],["/tag/transit/",{loader:()=>u(()=>import("./index.html-CjQw8opU.js"),__vite__mapDeps([445,1])),meta:{y:"p",t:"태그: transit",I:!1}}],["/tag/vault-auth/",{loader:()=>u(()=>import("./index.html-CqKCXRMv.js"),__vite__mapDeps([446,1])),meta:{y:"p",t:"태그: vault auth",I:!1}}],["/tag/aws/",{loader:()=>u(()=>import("./index.html-D3oBvtbj.js"),__vite__mapDeps([386,1])),meta:{y:"p",t:"태그: AWS",I:!1}}],["/tag/mfa/",{loader:()=>u(()=>import("./index.html-BqWSyeb6.js"),__vite__mapDeps([447,1])),meta:{y:"p",t:"태그: MFA",I:!1}}],["/tag/kv/",{loader:()=>u(()=>import("./index.html-58NUFNbf.js"),__vite__mapDeps([448,1])),meta:{y:"p",t:"태그: kv",I:!1}}],["/tag/policy/",{loader:()=>u(()=>import("./index.html-C3Dl6Dkp.js"),__vite__mapDeps([414,1])),meta:{y:"p",t:"태그: policy",I:!1}}],["/tag/pki/",{loader:()=>u(()=>import("./index.html-MM5OMB0-.js"),__vite__mapDeps([436,1])),meta:{y:"p",t:"태그: pki",I:!1}}],["/tag/mtls/",{loader:()=>u(()=>import("./index.html-B8abGZGM.js"),__vite__mapDeps([449,1])),meta:{y:"p",t:"태그: mTLS",I:!1}}],["/tag/argocd/",{loader:()=>u(()=>import("./index.html-B5tv9_bX.js"),__vite__mapDeps([450,1])),meta:{y:"p",t:"태그: argocd",I:!1}}],["/tag/gitops/",{loader:()=>u(()=>import("./index.html-CBk1kC2E.js"),__vite__mapDeps([451,1])),meta:{y:"p",t:"태그: gitops",I:!1}}],["/tag/devsescops/",{loader:()=>u(()=>import("./index.html-C_zy-YnN.js"),__vite__mapDeps([452,1])),meta:{y:"p",t:"태그: devsescops",I:!1}}],["/tag/pipeline/",{loader:()=>u(()=>import("./index.html-76G93XYZ.js"),__vite__mapDeps([453,1])),meta:{y:"p",t:"태그: pipeline",I:!1}}],["/tag/github/",{loader:()=>u(()=>import("./index.html-D3x0JpM5.js"),__vite__mapDeps([454,1])),meta:{y:"p",t:"태그: github",I:!1}}],["/tag/gitlab/",{loader:()=>u(()=>import("./index.html-Ckx0cs7N.js"),__vite__mapDeps([455,1])),meta:{y:"p",t:"태그: gitlab",I:!1}}],["/tag/secret/",{loader:()=>u(()=>import("./index.html-MwttTZfG.js"),__vite__mapDeps([456,1])),meta:{y:"p",t:"태그: secret",I:!1}}],["/tag/eks/",{loader:()=>u(()=>import("./index.html-D5uIOwzQ.js"),__vite__mapDeps([378,1])),meta:{y:"p",t:"태그: eks",I:!1}}],["/tag/jenkins/",{loader:()=>u(()=>import("./index.html-Bco2keHI.js"),__vite__mapDeps([457,1])),meta:{y:"p",t:"태그: jenkins",I:!1}}],["/tag/approle/",{loader:()=>u(()=>import("./index.html-DbJb6m4t.js"),__vite__mapDeps([458,1])),meta:{y:"p",t:"태그: approle",I:!1}}],["/tag/otp/",{loader:()=>u(()=>import("./index.html-CigN4lnq.js"),__vite__mapDeps([437,1])),meta:{y:"p",t:"태그: otp",I:!1}}],["/tag/screct/",{loader:()=>u(()=>import("./index.html-DFNq-diX.js"),__vite__mapDeps([459,1])),meta:{y:"p",t:"태그: screct",I:!1}}],["/tag/nomad/",{loader:()=>u(()=>import("./index.html-Jq5AhJEQ.js"),__vite__mapDeps([400,1])),meta:{y:"p",t:"태그: nomad",I:!1}}],["/tag/db/",{loader:()=>u(()=>import("./index.html-EDH5qTrx.js"),__vite__mapDeps([460,1])),meta:{y:"p",t:"태그: db",I:!1}}],["/tag/sentinel/",{loader:()=>u(()=>import("./index.html-Do0kBpU_.js"),__vite__mapDeps([461,1])),meta:{y:"p",t:"태그: sentinel",I:!1}}],["/tag/cidr/",{loader:()=>u(()=>import("./index.html-BTHgtRyD.js"),__vite__mapDeps([462,1])),meta:{y:"p",t:"태그: cidr",I:!1}}],["/tag/enterprise/",{loader:()=>u(()=>import("./index.html-D5c5fBt0.js"),__vite__mapDeps([404,1])),meta:{y:"p",t:"태그: enterprise",I:!1}}],["/tag/java/",{loader:()=>u(()=>import("./index.html-DZALPzCn.js"),__vite__mapDeps([463,1])),meta:{y:"p",t:"태그: java",I:!1}}],["/tag/spring/",{loader:()=>u(()=>import("./index.html-CG7Chs_a.js"),__vite__mapDeps([464,1])),meta:{y:"p",t:"태그: spring",I:!1}}],["/tag/performance/",{loader:()=>u(()=>import("./index.html-CYHAqTX1.js"),__vite__mapDeps([465,1])),meta:{y:"p",t:"태그: performance",I:!1}}],["/tag/vso/",{loader:()=>u(()=>import("./index.html-BHLOMNVH.js"),__vite__mapDeps([466,1])),meta:{y:"p",t:"태그: VSO",I:!1}}],["/tag/windows/",{loader:()=>u(()=>import("./index.html-DSBrX6f7.js"),__vite__mapDeps([467,1])),meta:{y:"p",t:"태그: windows",I:!1}}],["/tag/error/",{loader:()=>u(()=>import("./index.html-BKvT2sbO.js"),__vite__mapDeps([468,1])),meta:{y:"p",t:"태그: error",I:!1}}],["/tag/400/",{loader:()=>u(()=>import("./index.html-DeMYGgaS.js"),__vite__mapDeps([469,1])),meta:{y:"p",t:"태그: 400",I:!1}}],["/tag/miriadb/",{loader:()=>u(()=>import("./index.html-CmjBMCpT.js"),__vite__mapDeps([470,1])),meta:{y:"p",t:"태그: MiriaDB",I:!1}}],["/tag/vault/",{loader:()=>u(()=>import("./index.html-C3WoOJzZ.js"),__vite__mapDeps([428,1])),meta:{y:"p",t:"태그: Vault",I:!1}}],["/tag/https/",{loader:()=>u(()=>import("./index.html-v5Sha3pN.js"),__vite__mapDeps([471,1])),meta:{y:"p",t:"태그: https",I:!1}}],["/tag/agent/",{loader:()=>u(()=>import("./index.html-C20ZBm2k.js"),__vite__mapDeps([472,1])),meta:{y:"p",t:"태그: Agent",I:!1}}],["/tag/license/",{loader:()=>u(()=>import("./index.html-Bk1ydRS_.js"),__vite__mapDeps([473,1])),meta:{y:"p",t:"태그: License",I:!1}}],["/tag/sentinel/",{loader:()=>u(()=>import("./index.html-Do0kBpU_.js"),__vite__mapDeps([461,1])),meta:{y:"p",t:"태그: Sentinel",I:!1}}],["/tag/cloudwatch/",{loader:()=>u(()=>import("./index.html-BzHvK_La.js"),__vite__mapDeps([474,1])),meta:{y:"p",t:"태그: Cloudwatch",I:!1}}],["/tag/log/",{loader:()=>u(()=>import("./index.html-DQ7kLpne.js"),__vite__mapDeps([475,1])),meta:{y:"p",t:"태그: log",I:!1}}],["/tag/namespace/",{loader:()=>u(()=>import("./index.html-DYxUMqgj.js"),__vite__mapDeps([476,1])),meta:{y:"p",t:"태그: Namespace",I:!1}}],["/tag/acl/",{loader:()=>u(()=>import("./index.html-BUzp8GOo.js"),__vite__mapDeps([413,1])),meta:{y:"p",t:"태그: ACL",I:!1}}],["/tag/ssl/",{loader:()=>u(()=>import("./index.html-Q8on9ylZ.js"),__vite__mapDeps([477,1])),meta:{y:"p",t:"태그: SSL",I:!1}}],["/tag/config/",{loader:()=>u(()=>import("./index.html-Dmmkdcuw.js"),__vite__mapDeps([427,1])),meta:{y:"p",t:"태그: config",I:!1}}],["/tag/csi/",{loader:()=>u(()=>import("./index.html-Cmm7eDu9.js"),__vite__mapDeps([402,1])),meta:{y:"p",t:"태그: csi",I:!1}}],["/tag/nfs/",{loader:()=>u(()=>import("./index.html-CHByfrIM.js"),__vite__mapDeps([478,1])),meta:{y:"p",t:"태그: nfs",I:!1}}],["/tag/ui/",{loader:()=>u(()=>import("./index.html-uMExY_LW.js"),__vite__mapDeps([479,1])),meta:{y:"p",t:"태그: UI",I:!1}}],["/tag/windows/",{loader:()=>u(()=>import("./index.html-DSBrX6f7.js"),__vite__mapDeps([467,1])),meta:{y:"p",t:"태그: Windows",I:!1}}],["/tag/jenkins/",{loader:()=>u(()=>import("./index.html-Bco2keHI.js"),__vite__mapDeps([457,1])),meta:{y:"p",t:"태그: Jenkins",I:!1}}],["/tag/java/",{loader:()=>u(()=>import("./index.html-DZALPzCn.js"),__vite__mapDeps([463,1])),meta:{y:"p",t:"태그: Java",I:!1}}],["/tag/docker/",{loader:()=>u(()=>import("./index.html-Cf4gg3HL.js"),__vite__mapDeps([342,1])),meta:{y:"p",t:"태그: Docker",I:!1}}],["/tag/api/",{loader:()=>u(()=>import("./index.html-BAKgjGH5.js"),__vite__mapDeps([480,1])),meta:{y:"p",t:"태그: API",I:!1}}],["/tag/springboot/",{loader:()=>u(()=>import("./index.html-9ZYKsADG.js"),__vite__mapDeps([481,1])),meta:{y:"p",t:"태그: SpringBoot",I:!1}}],["/tag/sample/",{loader:()=>u(()=>import("./index.html-BPYot1qT.js"),__vite__mapDeps([383,1])),meta:{y:"p",t:"태그: sample",I:!1}}],["/tag/job/",{loader:()=>u(()=>import("./index.html-Bsnc9bF5.js"),__vite__mapDeps([482,1])),meta:{y:"p",t:"태그: job",I:!1}}],["/tag/autoscaler/",{loader:()=>u(()=>import("./index.html-4mKf35qf.js"),__vite__mapDeps([483,1])),meta:{y:"p",t:"태그: autoscaler",I:!1}}],["/tag/das/",{loader:()=>u(()=>import("./index.html-Cmx_P07m.js"),__vite__mapDeps([484,1])),meta:{y:"p",t:"태그: das",I:!1}}],["/tag/job/",{loader:()=>u(()=>import("./index.html-Bsnc9bF5.js"),__vite__mapDeps([482,1])),meta:{y:"p",t:"태그: Job",I:!1}}],["/tag/swlb/",{loader:()=>u(()=>import("./index.html-D7CFuzRD.js"),__vite__mapDeps([485,1])),meta:{y:"p",t:"태그: SWLB",I:!1}}],["/tag/vs-code/",{loader:()=>u(()=>import("./index.html-L5xE5hig.js"),__vite__mapDeps([486,1])),meta:{y:"p",t:"태그: vs-code",I:!1}}],["/tag/elk/",{loader:()=>u(()=>import("./index.html-Du89O0Ee.js"),__vite__mapDeps([487,1])),meta:{y:"p",t:"태그: elk",I:!1}}],["/tag//",{loader:()=>u(()=>import("./index.html-DXifWcd9.js"),__vite__mapDeps([334,1])),meta:{y:"p",t:"태그: ",I:!1}}],["/tag/ansible/",{loader:()=>u(()=>import("./index.html-Dnj3Fs__.js"),__vite__mapDeps([488,1])),meta:{y:"p",t:"태그: Ansible",I:!1}}],["/tag/wildfly/",{loader:()=>u(()=>import("./index.html--egACzYG.js"),__vite__mapDeps([489,1])),meta:{y:"p",t:"태그: wildfly",I:!1}}],["/tag/jboss/",{loader:()=>u(()=>import("./index.html-Bcml4Nf2.js"),__vite__mapDeps([348,1])),meta:{y:"p",t:"태그: JBoss",I:!1}}],["/tag/reverse-proxy/",{loader:()=>u(()=>import("./index.html-DB9jhU54.js"),__vite__mapDeps([490,1])),meta:{y:"p",t:"태그: reverse proxy",I:!1}}],["/tag/consul-service-discovery/",{loader:()=>u(()=>import("./index.html-DWxvLBLD.js"),__vite__mapDeps([491,1])),meta:{y:"p",t:"태그: consul service discovery",I:!1}}],["/tag/nomad-pack/",{loader:()=>u(()=>import("./index.html-DlIxOs9z.js"),__vite__mapDeps([492,1])),meta:{y:"p",t:"태그: nomad-pack",I:!1}}],["/tag/vuepress/",{loader:()=>u(()=>import("./index.html-BMSfhG01.js"),__vite__mapDeps([493,1])),meta:{y:"p",t:"태그: vuepress",I:!1}}],["/tag/param/",{loader:()=>u(()=>import("./index.html-CA06rNaq.js"),__vite__mapDeps([494,1])),meta:{y:"p",t:"태그: param",I:!1}}],["/tag/batch/",{loader:()=>u(()=>import("./index.html-uMBHb8Wm.js"),__vite__mapDeps([495,1])),meta:{y:"p",t:"태그: batch",I:!1}}],["/tag/scouter/",{loader:()=>u(()=>import("./index.html-DCMzrH9f.js"),__vite__mapDeps([496,1])),meta:{y:"p",t:"태그: Scouter",I:!1}}],["/tag/service-mesh/",{loader:()=>u(()=>import("./index.html-2bbDzOPy.js"),__vite__mapDeps([497,1])),meta:{y:"p",t:"태그: Service Mesh",I:!1}}],["/tag/sidecar/",{loader:()=>u(()=>import("./index.html-CH26_dVm.js"),__vite__mapDeps([423,1])),meta:{y:"p",t:"태그: sidecar",I:!1}}],["/tag/tomcat/",{loader:()=>u(()=>import("./index.html-C2golA4k.js"),__vite__mapDeps([498,1])),meta:{y:"p",t:"태그: tomcat",I:!1}}],["/tag/hashicorp/",{loader:()=>u(()=>import("./index.html-xyIRysKZ.js"),__vite__mapDeps([338,1])),meta:{y:"p",t:"태그: Hashicorp",I:!1}}],["/tag/update/",{loader:()=>u(()=>import("./index.html-CWR1BD7z.js"),__vite__mapDeps([499,1])),meta:{y:"p",t:"태그: Update",I:!1}}],["/tag/jan/",{loader:()=>u(()=>import("./index.html-gK-Sevxy.js"),__vite__mapDeps([500,1])),meta:{y:"p",t:"태그: Jan",I:!1}}],["/tag/feb/",{loader:()=>u(()=>import("./index.html-hz1Yjqqk.js"),__vite__mapDeps([501,1])),meta:{y:"p",t:"태그: Feb",I:!1}}],["/tag/mar/",{loader:()=>u(()=>import("./index.html-BMViYi_S.js"),__vite__mapDeps([502,1])),meta:{y:"p",t:"태그: Mar",I:!1}}],["/tag/apr/",{loader:()=>u(()=>import("./index.html-BDxyORfS.js"),__vite__mapDeps([503,1])),meta:{y:"p",t:"태그: Apr",I:!1}}],["/tag/may/",{loader:()=>u(()=>import("./index.html-CUEZ7gmr.js"),__vite__mapDeps([504,1])),meta:{y:"p",t:"태그: May",I:!1}}],["/tag/jun/",{loader:()=>u(()=>import("./index.html-p9MbIfFx.js"),__vite__mapDeps([505,1])),meta:{y:"p",t:"태그: Jun",I:!1}}],["/tag/jul/",{loader:()=>u(()=>import("./index.html-DYdW_x9-.js"),__vite__mapDeps([506,1])),meta:{y:"p",t:"태그: Jul",I:!1}}],["/tag/aug/",{loader:()=>u(()=>import("./index.html-BkjewRZv.js"),__vite__mapDeps([507,1])),meta:{y:"p",t:"태그: Aug",I:!1}}],["/tag/sep/",{loader:()=>u(()=>import("./index.html-CMN7ibAR.js"),__vite__mapDeps([508,1])),meta:{y:"p",t:"태그: Sep",I:!1}}],["/tag/oct/",{loader:()=>u(()=>import("./index.html-dbz_rr0I.js"),__vite__mapDeps([509,1])),meta:{y:"p",t:"태그: Oct",I:!1}}],["/tag/nov/",{loader:()=>u(()=>import("./index.html-CsmSJkUv.js"),__vite__mapDeps([510,1])),meta:{y:"p",t:"태그: Nov",I:!1}}],["/tag/july/",{loader:()=>u(()=>import("./index.html-CdkzEiYn.js"),__vite__mapDeps([511,1])),meta:{y:"p",t:"태그: July",I:!1}}],["/tag/dec/",{loader:()=>u(()=>import("./index.html-qMXYdv30.js"),__vite__mapDeps([512,1])),meta:{y:"p",t:"태그: Dec",I:!1}}],["/tag/cicd/",{loader:()=>u(()=>import("./index.html-BDK5jN_2.js"),__vite__mapDeps([513,1])),meta:{y:"p",t:"태그: cicd",I:!1}}],["/tag/tomcat/",{loader:()=>u(()=>import("./index.html-C2golA4k.js"),__vite__mapDeps([498,1])),meta:{y:"p",t:"태그: Tomcat",I:!1}}],["/tag/ncloud/",{loader:()=>u(()=>import("./index.html-CksOgM62.js"),__vite__mapDeps([514,1])),meta:{y:"p",t:"태그: ncloud",I:!1}}],["/tag/ncp/",{loader:()=>u(()=>import("./index.html-BQuTXlu9.js"),__vite__mapDeps([387,1])),meta:{y:"p",t:"태그: ncp",I:!1}}],["/tag/workshop/",{loader:()=>u(()=>import("./index.html-DUtbNDsH.js"),__vite__mapDeps([515,1])),meta:{y:"p",t:"태그: workshop",I:!1}}],["/tag/k8s/",{loader:()=>u(()=>import("./index.html-BHST4i0Y.js"),__vite__mapDeps([420,1])),meta:{y:"p",t:"태그: K8s",I:!1}}],["/tag/ingress/",{loader:()=>u(()=>import("./index.html-1rsldZtv.js"),__vite__mapDeps([516,1])),meta:{y:"p",t:"태그: ingress",I:!1}}],["/tag/annotation/",{loader:()=>u(()=>import("./index.html-C3HvyYax.js"),__vite__mapDeps([517,1])),meta:{y:"p",t:"태그: annotation",I:!1}}],["/tag/timeout/",{loader:()=>u(()=>import("./index.html-KEPuQbjz.js"),__vite__mapDeps([518,1])),meta:{y:"p",t:"태그: timeout",I:!1}}],["/tag/istio/",{loader:()=>u(()=>import("./index.html-CE_-uoRB.js"),__vite__mapDeps([519,1])),meta:{y:"p",t:"태그: Istio",I:!1}}],["/tag/performance/",{loader:()=>u(()=>import("./index.html-CYHAqTX1.js"),__vite__mapDeps([465,1])),meta:{y:"p",t:"태그: Performance",I:!1}}],["/tag/jaeger/",{loader:()=>u(()=>import("./index.html-JHHabYYQ.js"),__vite__mapDeps([520,1])),meta:{y:"p",t:"태그: Jaeger",I:!1}}],["/tag/tracing/",{loader:()=>u(()=>import("./index.html-npLPwvI0.js"),__vite__mapDeps([521,1])),meta:{y:"p",t:"태그: Tracing",I:!1}}],["/tag/opentelemetry/",{loader:()=>u(()=>import("./index.html-CAgZwg32.js"),__vite__mapDeps([522,1])),meta:{y:"p",t:"태그: OpenTelemetry",I:!1}}],["/tag/ingressgateway/",{loader:()=>u(()=>import("./index.html-4hxh5-xj.js"),__vite__mapDeps([523,1])),meta:{y:"p",t:"태그: IngressGateway",I:!1}}],["/tag/operator/",{loader:()=>u(()=>import("./index.html-DejARvih.js"),__vite__mapDeps([524,1])),meta:{y:"p",t:"태그: operator",I:!1}}],["/article/",{loader:()=>u(()=>import("./index.html-ByYSmXsw.js"),__vite__mapDeps([525,1])),meta:{y:"p",t:"게시글",I:!1}}],["/star/",{loader:()=>u(()=>import("./index.html-yCwIeaXn.js"),__vite__mapDeps([526,1])),meta:{y:"p",t:"스타",I:!1}}],["/timeline/",{loader:()=>u(()=>import("./index.html-BTAXb6x6.js"),__vite__mapDeps([527,1])),meta:{y:"p",t:"타임라인",I:!1}}]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const At=typeof document<"u";function B0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const vn=Object.assign;function so(n,e){const t={};for(const a in e){const s=e[a];t[a]=we(s)?s.map(n):n(s)}return t}const ca=()=>{},we=Array.isArray,$i=/#/g,U0=/&/g,K0=/\//g,F0=/=/g,q0=/\?/g,zi=/\+/g,G0=/%5B/g,W0=/%5D/g,Bi=/%5E/g,J0=/%60/g,Ui=/%7B/g,Y0=/%7C/g,Ki=/%7D/g,X0=/%20/g;function hr(n){return encodeURI(""+n).replace(Y0,"|").replace(G0,"[").replace(W0,"]")}function Z0(n){return hr(n).replace(Ui,"{").replace(Ki,"}").replace(Bi,"^")}function Ao(n){return hr(n).replace(zi,"%2B").replace(X0,"+").replace($i,"%23").replace(U0,"%26").replace(J0,"`").replace(Ui,"{").replace(Ki,"}").replace(Bi,"^")}function Q0(n){return Ao(n).replace(F0,"%3D")}function nh(n){return hr(n).replace($i,"%23").replace(q0,"%3F")}function eh(n){return n==null?"":nh(n).replace(K0,"%2F")}function ya(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const th=/\/$/,ah=n=>n.replace(th,"");function oo(n,e,t="/"){let a,s={},o="",r="";const p=e.indexOf("#");let i=e.indexOf("?");return p<i&&p>=0&&(i=-1),i>-1&&(a=e.slice(0,i),o=e.slice(i+1,p>-1?p:e.length),s=n(o)),p>-1&&(a=a||e.slice(0,p),r=e.slice(p,e.length)),a=lh(a??e,t),{fullPath:a+(o&&"?")+o+r,path:a,query:s,hash:ya(r)}}function sh(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function jl(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function oh(n,e,t){const a=e.matched.length-1,s=t.matched.length-1;return a>-1&&a===s&&Ft(e.matched[a],t.matched[s])&&Fi(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ft(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Fi(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!rh(n[t],e[t]))return!1;return!0}function rh(n,e){return we(n)?$l(n,e):we(e)?$l(e,n):n===e}function $l(n,e){return we(e)?n.length===e.length&&n.every((t,a)=>t===e[a]):n.length===1&&n[0]===e}function lh(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),a=n.split("/"),s=a[a.length-1];(s===".."||s===".")&&a.push("");let o=t.length-1,r,p;for(r=0;r<a.length;r++)if(p=a[r],p!==".")if(p==="..")o>1&&o--;else break;return t.slice(0,o).join("/")+"/"+a.slice(r).join("/")}var ba;(function(n){n.pop="pop",n.push="push"})(ba||(ba={}));var ua;(function(n){n.back="back",n.forward="forward",n.unknown=""})(ua||(ua={}));function ph(n){if(!n)if(At){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ah(n)}const ih=/^[^#]+#/;function ch(n,e){return n.replace(ih,"#")+e}function uh(n,e){const t=document.documentElement.getBoundingClientRect(),a=n.getBoundingClientRect();return{behavior:e.behavior,left:a.left-t.left-(e.left||0),top:a.top-t.top-(e.top||0)}}const Ds=()=>({left:window.scrollX,top:window.scrollY});function dh(n){let e;if("el"in n){const t=n.el,a=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?a?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=uh(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function zl(n,e){return(history.state?history.state.position-e:-1)+n}const Lo=new Map;function mh(n,e){Lo.set(n,e)}function hh(n){const e=Lo.get(n);return Lo.delete(n),e}let kh=()=>location.protocol+"//"+location.host;function qi(n,e){const{pathname:t,search:a,hash:s}=e,o=n.indexOf("#");if(o>-1){let p=s.includes(n.slice(o))?n.slice(o).length:1,i=s.slice(p);return i[0]!=="/"&&(i="/"+i),jl(i,"")}return jl(t,n)+a+s}function fh(n,e,t,a){let s=[],o=[],r=null;const p=({state:h})=>{const k=qi(n,location),g=t.value,w=e.value;let E=0;if(h){if(t.value=k,e.value=h,r&&r===g){r=null;return}E=w?h.position-w.position:0}else a(k);s.forEach(_=>{_(t.value,g,{delta:E,type:ba.pop,direction:E?E>0?ua.forward:ua.back:ua.unknown})})};function i(){r=t.value}function c(h){s.push(h);const k=()=>{const g=s.indexOf(h);g>-1&&s.splice(g,1)};return o.push(k),k}function d(){const{history:h}=window;h.state&&h.replaceState(vn({},h.state,{scroll:Ds()}),"")}function m(){for(const h of o)h();o=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:i,listen:c,destroy:m}}function Bl(n,e,t,a=!1,s=!1){return{back:n,current:e,forward:t,replaced:a,position:window.history.length,scroll:s?Ds():null}}function gh(n){const{history:e,location:t}=window,a={value:qi(n,t)},s={value:e.state};s.value||o(a.value,{back:null,current:a.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(i,c,d){const m=n.indexOf("#"),h=m>-1?(t.host&&document.querySelector("base")?n:n.slice(m))+i:kh()+n+i;try{e[d?"replaceState":"pushState"](c,"",h),s.value=c}catch(k){console.error(k),t[d?"replace":"assign"](h)}}function r(i,c){const d=vn({},e.state,Bl(s.value.back,i,s.value.forward,!0),c,{position:s.value.position});o(i,d,!0),a.value=i}function p(i,c){const d=vn({},s.value,e.state,{forward:i,scroll:Ds()});o(d.current,d,!0);const m=vn({},Bl(a.value,i,null),{position:d.position+1},c);o(i,m,!1),a.value=i}return{location:a,state:s,push:p,replace:r}}function vh(n){n=ph(n);const e=gh(n),t=fh(n,e.state,e.location,e.replace);function a(o,r=!0){r||t.pauseListeners(),history.go(o)}const s=vn({location:"",base:n,go:a,createHref:ch.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function _h(n){return typeof n=="string"||n&&typeof n=="object"}function Gi(n){return typeof n=="string"||typeof n=="symbol"}const He={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wi=Symbol("");var Ul;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Ul||(Ul={}));function qt(n,e){return vn(new Error,{type:n,[Wi]:!0},e)}function Ve(n,e){return n instanceof Error&&Wi in n&&(e==null||!!(n.type&e))}const Kl="[^/]+?",yh={sensitive:!1,strict:!1,start:!0,end:!0},bh=/[.+*?^${}()[\]/\\]/g;function wh(n,e){const t=vn({},yh,e),a=[];let s=t.start?"^":"";const o=[];for(const c of n){const d=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let m=0;m<c.length;m++){const h=c[m];let k=40+(t.sensitive?.25:0);if(h.type===0)m||(s+="/"),s+=h.value.replace(bh,"\\$&"),k+=40;else if(h.type===1){const{value:g,repeatable:w,optional:E,regexp:_}=h;o.push({name:g,repeatable:w,optional:E});const T=_||Kl;if(T!==Kl){k+=10;try{new RegExp(`(${T})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${T}): `+S.message)}}let b=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;m||(b=E&&c.length<2?`(?:/${b})`:"/"+b),E&&(b+="?"),s+=b,k+=20,E&&(k+=-8),w&&(k+=-20),T===".*"&&(k+=-50)}d.push(k)}a.push(d)}if(t.strict&&t.end){const c=a.length-1;a[c][a[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const r=new RegExp(s,t.sensitive?"":"i");function p(c){const d=c.match(r),m={};if(!d)return null;for(let h=1;h<d.length;h++){const k=d[h]||"",g=o[h-1];m[g.name]=k&&g.repeatable?k.split("/"):k}return m}function i(c){let d="",m=!1;for(const h of n){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const k of h)if(k.type===0)d+=k.value;else if(k.type===1){const{value:g,repeatable:w,optional:E}=k,_=g in c?c[g]:"";if(we(_)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const T=we(_)?_.join("/"):_;if(!T)if(E)h.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${g}"`);d+=T}}return d||"/"}return{re:r,score:a,keys:o,parse:p,stringify:i}}function Eh(n,e){let t=0;for(;t<n.length&&t<e.length;){const a=e[t]-n[t];if(a)return a;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ch(n,e){let t=0;const a=n.score,s=e.score;for(;t<a.length&&t<s.length;){const o=Eh(a[t],s[t]);if(o)return o;t++}if(Math.abs(s.length-a.length)===1){if(Fl(a))return 1;if(Fl(s))return-1}return s.length-a.length}function Fl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Th={type:0,value:""},Ih=/[a-zA-Z0-9_]/;function Sh(n){if(!n)return[[]];if(n==="/")return[[Th]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(k){throw new Error(`ERR (${t})/"${c}": ${k}`)}let t=0,a=t;const s=[];let o;function r(){o&&s.push(o),o=[]}let p=0,i,c="",d="";function m(){c&&(t===0?o.push({type:0,value:c}):t===1||t===2||t===3?(o.length>1&&(i==="*"||i==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=i}for(;p<n.length;){if(i=n[p++],i==="\\"&&t!==2){a=t,t=4;continue}switch(t){case 0:i==="/"?(c&&m(),r()):i===":"?(m(),t=1):h();break;case 4:h(),t=a;break;case 1:i==="("?t=2:Ih.test(i)?h():(m(),t=0,i!=="*"&&i!=="?"&&i!=="+"&&p--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:t=3:d+=i;break;case 3:m(),t=0,i!=="*"&&i!=="?"&&i!=="+"&&p--,d="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),m(),r(),s}function Ph(n,e,t){const a=wh(Sh(n.path),t),s=vn(a,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function xh(n,e){const t=[],a=new Map;e=Wl({strict:!1,end:!0,sensitive:!1},e);function s(d){return a.get(d)}function o(d,m,h){const k=!h,g=Ah(d);g.aliasOf=h&&h.record;const w=Wl(e,d),E=[g];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const S of b)E.push(vn({},g,{components:h?h.record.components:g.components,path:S,aliasOf:h?h.record:g}))}let _,T;for(const b of E){const{path:S}=b;if(m&&S[0]!=="/"){const N=m.record.path,I=N[N.length-1]==="/"?"":"/";b.path=m.record.path+(S&&I+S)}if(_=Ph(b,m,w),h?h.alias.push(_):(T=T||_,T!==_&&T.alias.push(_),k&&d.name&&!Gl(_)&&r(d.name)),g.children){const N=g.children;for(let I=0;I<N.length;I++)o(N[I],_,h&&h.children[I])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&i(_)}return T?()=>{r(T)}:ca}function r(d){if(Gi(d)){const m=a.get(d);m&&(a.delete(d),t.splice(t.indexOf(m),1),m.children.forEach(r),m.alias.forEach(r))}else{const m=t.indexOf(d);m>-1&&(t.splice(m,1),d.record.name&&a.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function p(){return t}function i(d){let m=0;for(;m<t.length&&Ch(d,t[m])>=0&&(d.record.path!==t[m].record.path||!Ji(d,t[m]));)m++;t.splice(m,0,d),d.record.name&&!Gl(d)&&a.set(d.record.name,d)}function c(d,m){let h,k={},g,w;if("name"in d&&d.name){if(h=a.get(d.name),!h)throw qt(1,{location:d});w=h.record.name,k=vn(ql(m.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&ql(d.params,h.keys.map(T=>T.name))),g=h.stringify(k)}else if(d.path!=null)g=d.path,h=t.find(T=>T.re.test(g)),h&&(k=h.parse(g),w=h.record.name);else{if(h=m.name?a.get(m.name):t.find(T=>T.re.test(m.path)),!h)throw qt(1,{location:d,currentLocation:m});w=h.record.name,k=vn({},m.params,d.params),g=h.stringify(k)}const E=[];let _=h;for(;_;)E.unshift(_.record),_=_.parent;return{name:w,path:g,params:k,matched:E,meta:Oh(E)}}return n.forEach(d=>o(d)),{addRoute:o,resolve:c,removeRoute:r,getRoutes:p,getRecordMatcher:s}}function ql(n,e){const t={};for(const a of e)a in n&&(t[a]=n[a]);return t}function Ah(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Lh(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Lh(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const a in n.components)e[a]=typeof t=="object"?t[a]:t;return e}function Gl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Oh(n){return n.reduce((e,t)=>vn(e,t.meta),{})}function Wl(n,e){const t={};for(const a in n)t[a]=a in e?e[a]:n[a];return t}function Ji(n,e){return e.children.some(t=>t===n||Ji(n,t))}function Rh(n){const e={};if(n===""||n==="?")return e;const a=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<a.length;++s){const o=a[s].replace(zi," "),r=o.indexOf("="),p=ya(r<0?o:o.slice(0,r)),i=r<0?null:ya(o.slice(r+1));if(p in e){let c=e[p];we(c)||(c=e[p]=[c]),c.push(i)}else e[p]=i}return e}function Jl(n){let e="";for(let t in n){const a=n[t];if(t=Q0(t),a==null){a!==void 0&&(e+=(e.length?"&":"")+t);continue}(we(a)?a.map(o=>o&&Ao(o)):[a&&Ao(a)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+t,o!=null&&(e+="="+o))})}return e}function Vh(n){const e={};for(const t in n){const a=n[t];a!==void 0&&(e[t]=we(a)?a.map(s=>s==null?null:""+s):a==null?a:""+a)}return e}const Dh=Symbol(""),Yl=Symbol(""),Hs=Symbol(""),kr=Symbol(""),Oo=Symbol("");function ea(){let n=[];function e(a){return n.push(a),()=>{const s=n.indexOf(a);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Qe(n,e,t,a,s,o=r=>r()){const r=a&&(a.enterCallbacks[s]=a.enterCallbacks[s]||[]);return()=>new Promise((p,i)=>{const c=h=>{h===!1?i(qt(4,{from:t,to:e})):h instanceof Error?i(h):_h(h)?i(qt(2,{from:e,to:h})):(r&&a.enterCallbacks[s]===r&&typeof h=="function"&&r.push(h),p())},d=o(()=>n.call(a&&a.instances[s],e,t,c));let m=Promise.resolve(d);n.length<3&&(m=m.then(c)),m.catch(h=>i(h))})}function ro(n,e,t,a,s=o=>o()){const o=[];for(const r of n)for(const p in r.components){let i=r.components[p];if(!(e!=="beforeRouteEnter"&&!r.instances[p]))if(Hh(i)){const d=(i.__vccOpts||i)[e];d&&o.push(Qe(d,t,a,r,p,s))}else{let c=i();o.push(()=>c.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${p}" at "${r.path}"`));const m=B0(d)?d.default:d;r.components[p]=m;const k=(m.__vccOpts||m)[e];return k&&Qe(k,t,a,r,p,s)()}))}}return o}function Hh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function Xl(n){const e=gn(Hs),t=gn(kr),a=y(()=>e.resolve(_e(n.to))),s=y(()=>{const{matched:i}=a.value,{length:c}=i,d=i[c-1],m=t.matched;if(!d||!m.length)return-1;const h=m.findIndex(Ft.bind(null,d));if(h>-1)return h;const k=Zl(i[c-2]);return c>1&&Zl(d)===k&&m[m.length-1].path!==k?m.findIndex(Ft.bind(null,i[c-2])):h}),o=y(()=>s.value>-1&&$h(t.params,a.value.params)),r=y(()=>s.value>-1&&s.value===t.matched.length-1&&Fi(t.params,a.value.params));function p(i={}){return jh(i)?e[_e(n.replace)?"replace":"push"](_e(n.to)).catch(ca):Promise.resolve()}return{route:a,href:y(()=>a.value.href),isActive:o,isExactActive:r,navigate:p}}const Nh=R({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xl,setup(n,{slots:e}){const t=Aa(Xl(n)),{options:a}=gn(Hs),s=y(()=>({[Ql(n.activeClass,a.linkActiveClass,"router-link-active")]:t.isActive,[Ql(n.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const o=e.default&&e.default(t);return n.custom?o:l("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},o)}}}),Mh=Nh;function jh(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $h(n,e){for(const t in e){const a=e[t],s=n[t];if(typeof a=="string"){if(a!==s)return!1}else if(!we(s)||s.length!==a.length||a.some((o,r)=>o!==s[r]))return!1}return!0}function Zl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Ql=(n,e,t)=>n??e??t,zh=R({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const a=gn(Oo),s=y(()=>n.route||a.value),o=gn(Yl,0),r=y(()=>{let c=_e(o);const{matched:d}=s.value;let m;for(;(m=d[c])&&!m.components;)c++;return c}),p=y(()=>s.value.matched[r.value]);oe(Yl,y(()=>r.value+1)),oe(Dh,p),oe(Oo,s);const i=K();return on(()=>[i.value,p.value,n.name],([c,d,m],[h,k,g])=>{d&&(d.instances[m]=c,k&&k!==d&&c&&c===h&&(d.leaveGuards.size||(d.leaveGuards=k.leaveGuards),d.updateGuards.size||(d.updateGuards=k.updateGuards))),c&&d&&(!k||!Ft(d,k)||!h)&&(d.enterCallbacks[m]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=s.value,d=n.name,m=p.value,h=m&&m.components[d];if(!h)return np(t.default,{Component:h,route:c});const k=m.props[d],g=k?k===!0?c.params:typeof k=="function"?k(c):k:null,E=l(h,vn({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(m.instances[d]=null)},ref:i}));return np(t.default,{Component:E,route:c})||E}}});function np(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Bh=zh;function Uh(n){const e=xh(n.routes,n),t=n.parseQuery||Rh,a=n.stringifyQuery||Jl,s=n.history,o=ea(),r=ea(),p=ea(),i=hn(He);let c=He;At&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=so.bind(null,P=>""+P),m=so.bind(null,eh),h=so.bind(null,ya);function k(P,B){let $,J;return Gi(P)?($=e.getRecordMatcher(P),J=B):J=P,e.addRoute(J,$)}function g(P){const B=e.getRecordMatcher(P);B&&e.removeRoute(B)}function w(){return e.getRoutes().map(P=>P.record)}function E(P){return!!e.getRecordMatcher(P)}function _(P,B){if(B=vn({},B||i.value),typeof P=="string"){const v=oo(t,P,B.path),C=e.resolve({path:v.path},B),A=s.createHref(v.fullPath);return vn(v,C,{params:h(C.params),hash:ya(v.hash),redirectedFrom:void 0,href:A})}let $;if(P.path!=null)$=vn({},P,{path:oo(t,P.path,B.path).path});else{const v=vn({},P.params);for(const C in v)v[C]==null&&delete v[C];$=vn({},P,{params:m(v)}),B.params=m(B.params)}const J=e.resolve($,B),un=P.hash||"";J.params=d(h(J.params));const Cn=sh(a,vn({},P,{hash:Z0(un),path:J.path})),f=s.createHref(Cn);return vn({fullPath:Cn,hash:un,query:a===Jl?Vh(P.query):P.query||{}},J,{redirectedFrom:void 0,href:f})}function T(P){return typeof P=="string"?oo(t,P,i.value.path):vn({},P)}function b(P,B){if(c!==P)return qt(8,{from:B,to:P})}function S(P){return G(P)}function N(P){return S(vn(T(P),{replace:!0}))}function I(P){const B=P.matched[P.matched.length-1];if(B&&B.redirect){const{redirect:$}=B;let J=typeof $=="function"?$(P):$;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=T(J):{path:J},J.params={}),vn({query:P.query,hash:P.hash,params:J.path!=null?{}:P.params},J)}}function G(P,B){const $=c=_(P),J=i.value,un=P.state,Cn=P.force,f=P.replace===!0,v=I($);if(v)return G(vn(T(v),{state:typeof v=="object"?vn({},un,v.state):un,force:Cn,replace:f}),B||$);const C=$;C.redirectedFrom=B;let A;return!Cn&&oh(a,J,$)&&(A=qt(16,{to:C,from:J}),ie(J,J,!0,!1)),(A?Promise.resolve(A):O(C,J)).catch(x=>Ve(x)?Ve(x,2)?x:Ie(x):W(x,C,J)).then(x=>{if(x){if(Ve(x,2))return G(vn({replace:f},T(x.to),{state:typeof x.to=="object"?vn({},un,x.to.state):un,force:Cn}),B||C)}else x=V(C,J,!0,f,un);return F(C,J,x),x})}function M(P,B){const $=b(P,B);return $?Promise.reject($):Promise.resolve()}function Y(P){const B=Re.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(P):P()}function O(P,B){let $;const[J,un,Cn]=Kh(P,B);$=ro(J.reverse(),"beforeRouteLeave",P,B);for(const v of J)v.leaveGuards.forEach(C=>{$.push(Qe(C,P,B))});const f=M.bind(null,P,B);return $.push(f),Dn($).then(()=>{$=[];for(const v of o.list())$.push(Qe(v,P,B));return $.push(f),Dn($)}).then(()=>{$=ro(un,"beforeRouteUpdate",P,B);for(const v of un)v.updateGuards.forEach(C=>{$.push(Qe(C,P,B))});return $.push(f),Dn($)}).then(()=>{$=[];for(const v of Cn)if(v.beforeEnter)if(we(v.beforeEnter))for(const C of v.beforeEnter)$.push(Qe(C,P,B));else $.push(Qe(v.beforeEnter,P,B));return $.push(f),Dn($)}).then(()=>(P.matched.forEach(v=>v.enterCallbacks={}),$=ro(Cn,"beforeRouteEnter",P,B,Y),$.push(f),Dn($))).then(()=>{$=[];for(const v of r.list())$.push(Qe(v,P,B));return $.push(f),Dn($)}).catch(v=>Ve(v,8)?v:Promise.reject(v))}function F(P,B,$){p.list().forEach(J=>Y(()=>J(P,B,$)))}function V(P,B,$,J,un){const Cn=b(P,B);if(Cn)return Cn;const f=B===He,v=At?history.state:{};$&&(J||f?s.replace(P.fullPath,vn({scroll:f&&v&&v.scroll},un)):s.push(P.fullPath,un)),i.value=P,ie(P,B,$,f),Ie()}let nn;function Ln(){nn||(nn=s.listen((P,B,$)=>{if(!Se.listening)return;const J=_(P),un=I(J);if(un){G(vn(un,{replace:!0}),J).catch(ca);return}c=J;const Cn=i.value;At&&mh(zl(Cn.fullPath,$.delta),Ds()),O(J,Cn).catch(f=>Ve(f,12)?f:Ve(f,2)?(G(f.to,J).then(v=>{Ve(v,20)&&!$.delta&&$.type===ba.pop&&s.go(-1,!1)}).catch(ca),Promise.reject()):($.delta&&s.go(-$.delta,!1),W(f,J,Cn))).then(f=>{f=f||V(J,Cn,!1),f&&($.delta&&!Ve(f,8)?s.go(-$.delta,!1):$.type===ba.pop&&Ve(f,20)&&s.go(-1,!1)),F(J,Cn,f)}).catch(ca)}))}let xn=ea(),q=ea(),en;function W(P,B,$){Ie(P);const J=q.list();return J.length?J.forEach(un=>un(P,B,$)):console.error(P),Promise.reject(P)}function Vn(){return en&&i.value!==He?Promise.resolve():new Promise((P,B)=>{xn.add([P,B])})}function Ie(P){return en||(en=!P,Ln(),xn.list().forEach(([B,$])=>P?$(P):B()),xn.reset()),P}function ie(P,B,$,J){const{scrollBehavior:un}=n;if(!At||!un)return Promise.resolve();const Cn=!$&&hh(zl(P.fullPath,0))||(J||!$)&&history.state&&history.state.scroll||null;return ot().then(()=>un(P,B,Cn)).then(f=>f&&dh(f)).catch(f=>W(f,P,B))}const $n=P=>s.go(P);let ee;const Re=new Set,Se={currentRoute:i,listening:!0,addRoute:k,removeRoute:g,hasRoute:E,getRoutes:w,resolve:_,options:n,push:S,replace:N,go:$n,back:()=>$n(-1),forward:()=>$n(1),beforeEach:o.add,beforeResolve:r.add,afterEach:p.add,onError:q.add,isReady:Vn,install(P){const B=this;P.component("RouterLink",Mh),P.component("RouterView",Bh),P.config.globalProperties.$router=B,Object.defineProperty(P.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(i)}),At&&!ee&&i.value===He&&(ee=!0,S(s.location).catch(un=>{}));const $={};for(const un in He)Object.defineProperty($,un,{get:()=>i.value[un],enumerable:!0});P.provide(Hs,B),P.provide(kr,Up($)),P.provide(Oo,i);const J=P.unmount;Re.add(P),P.unmount=function(){Re.delete(P),Re.size<1&&(c=He,nn&&nn(),nn=null,i.value=He,ee=!1,en=!1),J()}}};function Dn(P){return P.reduce((B,$)=>B.then(()=>Y($)),Promise.resolve())}return Se}function Kh(n,e){const t=[],a=[],s=[],o=Math.max(e.matched.length,n.matched.length);for(let r=0;r<o;r++){const p=e.matched[r];p&&(n.matched.find(c=>Ft(c,p))?a.push(p):t.push(p));const i=n.matched[r];i&&(e.matched.find(c=>Ft(c,i))||s.push(i))}return[t,a,s]}function ze(){return gn(Hs)}function lt(){return gn(kr)}var fr=Symbol(""),Oe=()=>{const n=gn(fr);if(!n)throw new Error("useClientData() is called without provider.");return n},Fh=()=>Oe().pageComponent,fn=()=>Oe().pageData,bn=()=>Oe().pageFrontmatter,qh=()=>Oe().pageHead,Yi=()=>Oe().pageLang,Gh=()=>Oe().pageLayout,Te=()=>Oe().routeLocale,Wh=()=>Oe().routes,Xi=()=>Oe().siteData,Jt=()=>Oe().siteLocaleData,Jh=Symbol(""),Zi=hn($0),wa=hn(z0),Qi=n=>{const e=H0(n);if(wa.value[e])return e;const t=encodeURI(e);return wa.value[t]?t:Zi.value[e]||e},Yt=n=>{const e=Qi(n),t=wa.value[e]??{...wa.value["/404.html"],notFound:!0};return{path:e,notFound:!1,...t}},Ns=R({name:"ClientOnly",setup(n,e){const t=K(!1);return sn(()=>{t.value=!0}),()=>{var a,s;return t.value?(s=(a=e.slots).default)==null?void 0:s.call(a):null}}}),nc=R({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(n){const e=Fh(),t=y(()=>{if(!n.path)return e.value;const a=Yt(n.path);return oi(()=>a.loader().then(({comp:s})=>s))});return()=>l(t.value)}}),Tn=n=>Ce(n)?n:`/${Mi(n)}`,Yh=n=>{if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget){const e=n.currentTarget.getAttribute("target");if(e!=null&&e.match(/\b_blank\b/i))return}return n.preventDefault(),!0}},Rn=({active:n=!1,activeClass:e="route-link-active",to:t,...a},{slots:s})=>{var p;const o=ze(),r=Tn(Qi(t));return l("a",{...a,class:["route-link",{[e]:n}],href:r,onClick:(i={})=>{Yh(i)?o.push(t).catch():Promise.resolve()}},(p=s.default)==null?void 0:p.call(s))};Rn.displayName="RouteLink";Rn.props={active:Boolean,activeClass:String,to:String};var Xh="Layout",Zh="en-US",mt=Aa({resolveLayouts:n=>n.reduce((e,t)=>({...e,...t.layouts}),{}),resolvePageHead:(n,e,t)=>{const a=_n(e.description)?e.description:t.description,s=[...Array.isArray(e.head)?e.head:[],...t.head,["title",{},n],["meta",{name:"description",content:a}]];return R0(s)},resolvePageHeadTitle:(n,e)=>[n.title,e.title].filter(t=>!!t).join(" | "),resolvePageLang:(n,e)=>n.lang||e.lang||Zh,resolvePageLayout:(n,e)=>{const t=_n(n.frontmatter.layout)?n.frontmatter.layout:Xh;if(!e[t])throw new Error(`[vuepress] Cannot resolve layout: ${t}`);return e[t]},resolveRouteLocale:(n,e)=>N0(n,e),resolveSiteLocaleData:(n,e)=>{var t;return{...n,...n.locales[e],head:[...((t=n.locales[e])==null?void 0:t.head)??[],...n.head??[]]}}});const Qh={};var Yn=(n={})=>n;const ke=n=>{const e=Te();return y(()=>n[e.value]??{})};var Wn=Uint8Array,Lt=Uint16Array,nk=Int32Array,ec=new Wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tc=new Wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ek=new Wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ac=function(n,e){for(var t=new Lt(31),a=0;a<31;++a)t[a]=e+=1<<n[a-1];for(var s=new nk(t[30]),a=1;a<30;++a)for(var o=t[a];o<t[a+1];++o)s[o]=o-t[a]<<5|a;return{b:t,r:s}},sc=ac(ec,2),oc=sc.b,tk=sc.r;oc[28]=258,tk[258]=28;var ak=ac(tc,0),sk=ak.b,Ro=new Lt(32768);for(var Pn=0;Pn<32768;++Pn){var qe=(Pn&43690)>>1|(Pn&21845)<<1;qe=(qe&52428)>>2|(qe&13107)<<2,qe=(qe&61680)>>4|(qe&3855)<<4,Ro[Pn]=((qe&65280)>>8|(qe&255)<<8)>>1}var da=function(n,e,t){for(var a=n.length,s=0,o=new Lt(e);s<a;++s)n[s]&&++o[n[s]-1];var r=new Lt(e);for(s=1;s<e;++s)r[s]=r[s-1]+o[s-1]<<1;var p;if(t){p=new Lt(1<<e);var i=15-e;for(s=0;s<a;++s)if(n[s])for(var c=s<<4|n[s],d=e-n[s],m=r[n[s]-1]++<<d,h=m|(1<<d)-1;m<=h;++m)p[Ro[m]>>i]=c}else for(p=new Lt(a),s=0;s<a;++s)n[s]&&(p[s]=Ro[r[n[s]-1]++]>>15-n[s]);return p},Da=new Wn(288);for(var Pn=0;Pn<144;++Pn)Da[Pn]=8;for(var Pn=144;Pn<256;++Pn)Da[Pn]=9;for(var Pn=256;Pn<280;++Pn)Da[Pn]=7;for(var Pn=280;Pn<288;++Pn)Da[Pn]=8;var rc=new Wn(32);for(var Pn=0;Pn<32;++Pn)rc[Pn]=5;var ok=da(Da,9,1),rk=da(rc,5,1),lo=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},ge=function(n,e,t){var a=e/8|0;return(n[a]|n[a+1]<<8)>>(e&7)&t},po=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},lk=function(n){return(n+7)/8|0},gr=function(n,e,t){return(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length),new Wn(n.subarray(e,t))},pk=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],de=function(n,e,t){var a=new Error(e||pk[n]);if(a.code=n,Error.captureStackTrace&&Error.captureStackTrace(a,de),!t)throw a;return a},ik=function(n,e,t,a){var s=n.length,o=a?a.length:0;if(!s||e.f&&!e.l)return t||new Wn(0);var r=!t,p=r||e.i!=2,i=e.i;r&&(t=new Wn(s*3));var c=function(un){var Cn=t.length;if(un>Cn){var f=new Wn(Math.max(Cn*2,un));f.set(t),t=f}},d=e.f||0,m=e.p||0,h=e.b||0,k=e.l,g=e.d,w=e.m,E=e.n,_=s*8;do{if(!k){d=ge(n,m,1);var T=ge(n,m+1,3);if(m+=3,T)if(T==1)k=ok,g=rk,w=9,E=5;else if(T==2){var I=ge(n,m,31)+257,G=ge(n,m+10,15)+4,M=I+ge(n,m+5,31)+1;m+=14;for(var Y=new Wn(M),O=new Wn(19),F=0;F<G;++F)O[ek[F]]=ge(n,m+F*3,7);m+=G*3;for(var V=lo(O),nn=(1<<V)-1,Ln=da(O,V,1),F=0;F<M;){var xn=Ln[ge(n,m,nn)];m+=xn&15;var b=xn>>4;if(b<16)Y[F++]=b;else{var q=0,en=0;for(b==16?(en=3+ge(n,m,3),m+=2,q=Y[F-1]):b==17?(en=3+ge(n,m,7),m+=3):b==18&&(en=11+ge(n,m,127),m+=7);en--;)Y[F++]=q}}var W=Y.subarray(0,I),Vn=Y.subarray(I);w=lo(W),E=lo(Vn),k=da(W,w,1),g=da(Vn,E,1)}else de(1);else{var b=lk(m)+4,S=n[b-4]|n[b-3]<<8,N=b+S;if(N>s){i&&de(0);break}p&&c(h+S),t.set(n.subarray(b,N),h),e.b=h+=S,e.p=m=N*8,e.f=d;continue}if(m>_){i&&de(0);break}}p&&c(h+131072);for(var Ie=(1<<w)-1,ie=(1<<E)-1,$n=m;;$n=m){var q=k[po(n,m)&Ie],ee=q>>4;if(m+=q&15,m>_){i&&de(0);break}if(q||de(2),ee<256)t[h++]=ee;else if(ee==256){$n=m,k=null;break}else{var Re=ee-254;if(ee>264){var F=ee-257,Se=ec[F];Re=ge(n,m,(1<<Se)-1)+oc[F],m+=Se}var Dn=g[po(n,m)&ie],P=Dn>>4;Dn||de(3),m+=Dn&15;var Vn=sk[P];if(P>3){var Se=tc[P];Vn+=po(n,m)&(1<<Se)-1,m+=Se}if(m>_){i&&de(0);break}p&&c(h+131072);var B=h+Re;if(h<Vn){var $=o-Vn,J=Math.min(Vn,B);for($+h<0&&de(3);h<J;++h)t[h]=a[$+h]}for(;h<B;++h)t[h]=t[h-Vn]}}e.l=k,e.p=$n,e.b=h,e.f=d,k&&(d=1,e.m=w,e.d=g,e.n=E)}while(!d);return h!=t.length&&r?gr(t,0,h):t.subarray(0,h)},ck=new Wn(0),uk=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&de(6,"invalid zlib data"),(n[1]>>5&1)==+!e&&de(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function dk(n,e){return ik(n.subarray(uk(n,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var ep=typeof TextEncoder<"u"&&new TextEncoder,Vo=typeof TextDecoder<"u"&&new TextDecoder,mk=0;try{Vo.decode(ck,{stream:!0}),mk=1}catch{}var hk=function(n){for(var e="",t=0;;){var a=n[t++],s=(a>127)+(a>223)+(a>239);if(t+s>n.length)return{s:e,r:gr(n,t-1)};s?s==3?(a=((a&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|a>>10,56320|a&1023)):s&1?e+=String.fromCharCode((a&31)<<6|n[t++]&63):e+=String.fromCharCode((a&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(a)}};function kk(n,e){if(e){for(var t=new Wn(n.length),a=0;a<n.length;++a)t[a]=n.charCodeAt(a);return t}if(ep)return ep.encode(n);for(var s=n.length,o=new Wn(n.length+(n.length>>1)),r=0,p=function(d){o[r++]=d},a=0;a<s;++a){if(r+5>o.length){var i=new Wn(r+8+(s-a<<1));i.set(o),o=i}var c=n.charCodeAt(a);c<128||e?p(c):c<2048?(p(192|c>>6),p(128|c&63)):c>55295&&c<57344?(c=65536+(c&1047552)|n.charCodeAt(++a)&1023,p(240|c>>18),p(128|c>>12&63),p(128|c>>6&63),p(128|c&63)):(p(224|c>>12),p(128|c>>6&63),p(128|c&63))}return gr(o,0,r)}function fk(n,e){if(e){for(var t="",a=0;a<n.length;a+=16384)t+=String.fromCharCode.apply(null,n.subarray(a,a+16384));return t}else{if(Vo)return Vo.decode(n);var s=hk(n),o=s.s,t=s.r;return t.length&&de(8),o}}const yt=n=>{const e=atob(n);return fk(dk(kk(e,!0)))},Un=(n,e)=>{var a;const t=(a=(e==null?void 0:e._instance)||Ct())==null?void 0:a.appContext.components;return t?n in t||le(n)in t||xa(le(n))in t:!1},lc=n=>new Promise(e=>setTimeout(e,n)),vr=n=>typeof n<"u",io=n=>typeof n=="number",Ea=Array.isArray,bt=(n,e)=>_n(n)&&n.startsWith(e),pc=(n,e)=>_n(n)&&n.endsWith(e),Be=Object.entries,gk=Object.fromEntries,pe=Object.keys,vk=Object.values,Do=(n,...e)=>{if(e.length===0)return n;const t=e.shift()||null;return t&&Be(t).forEach(([a,s])=>{a==="__proto__"||a==="constructor"||(be(n[a])&&be(s)?Do(n[a],s):Ea(s)?n[a]=[...s]:be(s)?n[a]={...s}:n[a]=t[a])}),Do(n,...e)},_r=n=>{if(n){if(typeof n=="number")return new Date(n);const e=Date.parse(n.toString());if(!Number.isNaN(e))return new Date(e)}return null},Ha=n=>bt(n,"/");function ic(n,e){let t,a,s;const o=K(!0),r=()=>{o.value=!0,s()};on(n,r,{flush:"sync"});const p=typeof e=="function"?e:e.get,i=typeof e=="function"?void 0:e.set,c=Is((d,m)=>(a=d,s=m,{get(){return o.value&&(t=p(),o.value=!1),a(),t},set(h){i==null||i(h)}}));return Object.isExtensible(c)&&(c.trigger=r),c}function pt(n){return Lp()?(ud(n),!0):!1}function Jn(n){return typeof n=="function"?n():_e(n)}const Na=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const _k=n=>n!=null,yk=Object.prototype.toString,bk=n=>yk.call(n)==="[object Object]",Me=()=>{},Ho=wk();function wk(){var n,e;return Na&&((n=window==null?void 0:window.navigator)==null?void 0:n.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function yr(n,e){function t(...a){return new Promise((s,o)=>{Promise.resolve(n(()=>e.apply(this,a),{fn:e,thisArg:this,args:a})).then(s).catch(o)})}return t}const cc=n=>n();function Ek(n,e={}){let t,a,s=Me;const o=p=>{clearTimeout(p),s(),s=Me};return p=>{const i=Jn(n),c=Jn(e.maxWait);return t&&o(t),i<=0||c!==void 0&&c<=0?(a&&(o(a),a=null),Promise.resolve(p())):new Promise((d,m)=>{s=e.rejectOnCancel?m:d,c&&!a&&(a=setTimeout(()=>{t&&o(t),a=null,d(p())},c)),t=setTimeout(()=>{a&&o(a),a=null,d(p())},i)})}}function Ck(...n){let e=0,t,a=!0,s=Me,o,r,p,i,c;!jn(n[0])&&typeof n[0]=="object"?{delay:r,trailing:p=!0,leading:i=!0,rejectOnCancel:c=!1}=n[0]:[r,p=!0,i=!0,c=!1]=n;const d=()=>{t&&(clearTimeout(t),t=void 0,s(),s=Me)};return h=>{const k=Jn(r),g=Date.now()-e,w=()=>o=h();return d(),k<=0?(e=Date.now(),w()):(g>k&&(i||!a)?(e=Date.now(),w()):p&&(o=new Promise((E,_)=>{s=c?_:E,t=setTimeout(()=>{e=Date.now(),a=!0,E(w()),d()},Math.max(0,k-g))})),!i&&!t&&(t=setTimeout(()=>a=!0,k)),a=!1,o)}}function Tk(n=cc){const e=K(!0);function t(){e.value=!1}function a(){e.value=!0}const s=(...o)=>{e.value&&n(...o)};return{isActive:st(e),pause:t,resume:a,eventFilter:s}}function Ik(n){let e;function t(){return e||(e=n()),e}return t.reset=async()=>{const a=e;e=void 0,a&&await a},t}function Sk(n){return n||Ct()}function Pk(...n){if(n.length!==1)return Wt(...n);const e=n[0];return typeof e=="function"?st(Is(()=>({get:e,set:Me}))):K(e)}function Ms(n,e=200,t={}){return yr(Ek(e,t),n)}function xk(n,e=200,t=!1,a=!0,s=!1){return yr(Ck(e,t,a,s),n)}function Ak(n,e,t={}){const{eventFilter:a=cc,...s}=t;return on(n,yr(a,e),s)}function Lk(n,e,t={}){const{eventFilter:a,...s}=t,{eventFilter:o,pause:r,resume:p,isActive:i}=Tk(a);return{stop:Ak(n,e,{...s,eventFilter:o}),pause:r,resume:p,isActive:i}}function js(n,e=!0,t){Sk()?sn(n,t):e?n():ot(n)}function Ok(n,e,t={}){const{immediate:a=!0}=t,s=K(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function p(){s.value=!1,r()}function i(...c){r(),s.value=!0,o=setTimeout(()=>{s.value=!1,o=null,n(...c)},Jn(e))}return a&&(s.value=!0,Na&&i()),pt(p),{isPending:st(s),start:i,stop:p}}function Ca(n=!1,e={}){const{truthyValue:t=!0,falsyValue:a=!1}=e,s=jn(n),o=K(n);function r(p){if(arguments.length)return o.value=p,o.value;{const i=Jn(t);return o.value=o.value===i?Jn(a):i,o.value}}return s?r:[o,r]}function Zn(n){var e;const t=Jn(n);return(e=t==null?void 0:t.$el)!=null?e:t}const Ee=Na?window:void 0,uc=Na?window.document:void 0,dc=Na?window.navigator:void 0;function yn(...n){let e,t,a,s;if(typeof n[0]=="string"||Array.isArray(n[0])?([t,a,s]=n,e=Ee):[e,t,a,s]=n,!e)return Me;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const o=[],r=()=>{o.forEach(d=>d()),o.length=0},p=(d,m,h,k)=>(d.addEventListener(m,h,k),()=>d.removeEventListener(m,h,k)),i=on(()=>[Zn(e),Jn(s)],([d,m])=>{if(r(),!d)return;const h=bk(m)?{...m}:m;o.push(...t.flatMap(k=>a.map(g=>p(d,k,g,h))))},{immediate:!0,flush:"post"}),c=()=>{i(),r()};return pt(c),c}let tp=!1;function Rk(n,e,t={}){const{window:a=Ee,ignore:s=[],capture:o=!0,detectIframe:r=!1}=t;if(!a)return Me;Ho&&!tp&&(tp=!0,Array.from(a.document.body.children).forEach(h=>h.addEventListener("click",Me)),a.document.documentElement.addEventListener("click",Me));let p=!0;const i=h=>s.some(k=>{if(typeof k=="string")return Array.from(a.document.querySelectorAll(k)).some(g=>g===h.target||h.composedPath().includes(g));{const g=Zn(k);return g&&(h.target===g||h.composedPath().includes(g))}}),d=[yn(a,"click",h=>{const k=Zn(n);if(!(!k||k===h.target||h.composedPath().includes(k))){if(h.detail===0&&(p=!i(h)),!p){p=!0;return}e(h)}},{passive:!0,capture:o}),yn(a,"pointerdown",h=>{const k=Zn(n);p=!i(h)&&!!(k&&!h.composedPath().includes(k))},{passive:!0}),r&&yn(a,"blur",h=>{setTimeout(()=>{var k;const g=Zn(n);((k=a.document.activeElement)==null?void 0:k.tagName)==="IFRAME"&&!(g!=null&&g.contains(a.document.activeElement))&&e(h)},0)})].filter(Boolean);return()=>d.forEach(h=>h())}function Vk(){const n=K(!1),e=Ct();return e&&sn(()=>{n.value=!0},e),n}function Xt(n){const e=Vk();return y(()=>(e.value,!!n()))}function mc(n,e={}){const{window:t=Ee}=e,a=Xt(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let s;const o=K(!1),r=c=>{o.value=c.matches},p=()=>{s&&("removeEventListener"in s?s.removeEventListener("change",r):s.removeListener(r))},i=pr(()=>{a.value&&(p(),s=t.matchMedia(Jn(n)),"addEventListener"in s?s.addEventListener("change",r):s.addListener(r),o.value=s.matches)});return pt(()=>{i(),p(),s=void 0}),o}function ap(n,e={}){const{controls:t=!1,navigator:a=dc}=e,s=Xt(()=>a&&"permissions"in a);let o;const r=typeof n=="string"?{name:n}:n,p=K(),i=()=>{o&&(p.value=o.state)},c=Ik(async()=>{if(s.value){if(!o)try{o=await a.permissions.query(r),yn(o,"change",i),i()}catch{p.value="prompt"}return o}});return c(),t?{state:p,isSupported:s,query:c}:p}function Dk(n={}){const{navigator:e=dc,read:t=!1,source:a,copiedDuring:s=1500,legacy:o=!1}=n,r=Xt(()=>e&&"clipboard"in e),p=ap("clipboard-read"),i=ap("clipboard-write"),c=y(()=>r.value||o),d=K(""),m=K(!1),h=Ok(()=>m.value=!1,s);function k(){r.value&&_(p.value)?e.clipboard.readText().then(T=>{d.value=T}):d.value=E()}c.value&&t&&yn(["copy","cut"],k);async function g(T=Jn(a)){c.value&&T!=null&&(r.value&&_(i.value)?await e.clipboard.writeText(T):w(T),d.value=T,m.value=!0,h.start())}function w(T){const b=document.createElement("textarea");b.value=T??"",b.style.position="absolute",b.style.opacity="0",document.body.appendChild(b),b.select(),document.execCommand("copy"),b.remove()}function E(){var T,b,S;return(S=(b=(T=document==null?void 0:document.getSelection)==null?void 0:T.call(document))==null?void 0:b.toString())!=null?S:""}function _(T){return T==="granted"||T==="prompt"}return{isSupported:c,text:d,copied:m,copy:g}}const ns=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es="__vueuse_ssr_handlers__",Hk=Nk();function Nk(){return es in ns||(ns[es]=ns[es]||{}),ns[es]}function Mk(n,e){return Hk[n]||e}function jk(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}const $k={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},sp="vueuse-storage";function $s(n,e,t,a={}){var s;const{flush:o="pre",deep:r=!0,listenToStorageChanges:p=!0,writeDefaults:i=!0,mergeDefaults:c=!1,shallow:d,window:m=Ee,eventFilter:h,onError:k=O=>{console.error(O)},initOnMounted:g}=a,w=(d?hn:K)(typeof e=="function"?e():e);if(!t)try{t=Mk("getDefaultStorage",()=>{var O;return(O=Ee)==null?void 0:O.localStorage})()}catch(O){k(O)}if(!t)return w;const E=Jn(e),_=jk(E),T=(s=a.serializer)!=null?s:$k[_],{pause:b,resume:S}=Lk(w,()=>I(w.value),{flush:o,deep:r,eventFilter:h});m&&p&&js(()=>{yn(m,"storage",M),yn(m,sp,Y),g&&M()}),g||M();function N(O,F){m&&m.dispatchEvent(new CustomEvent(sp,{detail:{key:n,oldValue:O,newValue:F,storageArea:t}}))}function I(O){try{const F=t.getItem(n);if(O==null)N(F,null),t.removeItem(n);else{const V=T.write(O);F!==V&&(t.setItem(n,V),N(F,V))}}catch(F){k(F)}}function G(O){const F=O?O.newValue:t.getItem(n);if(F==null)return i&&E!=null&&t.setItem(n,T.write(E)),E;if(!O&&c){const V=T.read(F);return typeof c=="function"?c(V,E):_==="object"&&!Array.isArray(V)?{...E,...V}:V}else return typeof F!="string"?F:T.read(F)}function M(O){if(!(O&&O.storageArea!==t)){if(O&&O.key==null){w.value=E;return}if(!(O&&O.key!==n)){b();try{(O==null?void 0:O.newValue)!==T.write(w.value)&&(w.value=G(O))}catch(F){k(F)}finally{O?ot(S):S()}}}}function Y(O){M(O.detail)}return w}function zk(n){return mc("(prefers-color-scheme: dark)",n)}function hc(n,e,t={}){const{window:a=Ee,...s}=t;let o;const r=Xt(()=>a&&"MutationObserver"in a),p=()=>{o&&(o.disconnect(),o=void 0)},i=y(()=>{const h=Jn(n),k=(Array.isArray(h)?h:[h]).map(Zn).filter(_k);return new Set(k)}),c=on(()=>i.value,h=>{p(),r.value&&a&&h.size&&(o=new MutationObserver(e),h.forEach(k=>o.observe(k,s)))},{immediate:!0,flush:"post"}),d=()=>o==null?void 0:o.takeRecords(),m=()=>{p(),c()};return pt(m),{isSupported:r,stop:m,takeRecords:d}}function Bk(n,e,t={}){const{window:a=Ee,...s}=t;let o;const r=Xt(()=>a&&"ResizeObserver"in a),p=()=>{o&&(o.disconnect(),o=void 0)},i=y(()=>Array.isArray(n)?n.map(m=>Zn(m)):[Zn(n)]),c=on(i,m=>{if(p(),r.value&&a){o=new ResizeObserver(e);for(const h of m)h&&o.observe(h,s)}},{immediate:!0,flush:"post"}),d=()=>{p(),c()};return pt(d),{isSupported:r,stop:d}}function Uk(n,e={width:0,height:0},t={}){const{window:a=Ee,box:s="content-box"}=t,o=y(()=>{var m,h;return(h=(m=Zn(n))==null?void 0:m.namespaceURI)==null?void 0:h.includes("svg")}),r=K(e.width),p=K(e.height),{stop:i}=Bk(n,([m])=>{const h=s==="border-box"?m.borderBoxSize:s==="content-box"?m.contentBoxSize:m.devicePixelContentBoxSize;if(a&&o.value){const k=Zn(n);if(k){const g=a.getComputedStyle(k);r.value=Number.parseFloat(g.width),p.value=Number.parseFloat(g.height)}}else if(h){const k=Array.isArray(h)?h:[h];r.value=k.reduce((g,{inlineSize:w})=>g+w,0),p.value=k.reduce((g,{blockSize:w})=>g+w,0)}else r.value=m.contentRect.width,p.value=m.contentRect.height},t);js(()=>{const m=Zn(n);m&&(r.value="offsetWidth"in m?m.offsetWidth:e.width,p.value="offsetHeight"in m?m.offsetHeight:e.height)});const c=on(()=>Zn(n),m=>{r.value=m?e.width:0,p.value=m?e.height:0});function d(){i(),c()}return{width:r,height:p,stop:d}}const op=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function br(n,e={}){const{document:t=uc,autoExit:a=!1}=e,s=y(()=>{var _;return(_=Zn(n))!=null?_:t==null?void 0:t.querySelector("html")}),o=K(!1),r=y(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(_=>t&&_ in t||s.value&&_ in s.value)),p=y(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(_=>t&&_ in t||s.value&&_ in s.value)),i=y(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(_=>t&&_ in t||s.value&&_ in s.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(_=>t&&_ in t),d=Xt(()=>s.value&&t&&r.value!==void 0&&p.value!==void 0&&i.value!==void 0),m=()=>c?(t==null?void 0:t[c])===s.value:!1,h=()=>{if(i.value){if(t&&t[i.value]!=null)return t[i.value];{const _=s.value;if((_==null?void 0:_[i.value])!=null)return!!_[i.value]}}return!1};async function k(){if(!(!d.value||!o.value)){if(p.value)if((t==null?void 0:t[p.value])!=null)await t[p.value]();else{const _=s.value;(_==null?void 0:_[p.value])!=null&&await _[p.value]()}o.value=!1}}async function g(){if(!d.value||o.value)return;h()&&await k();const _=s.value;r.value&&(_==null?void 0:_[r.value])!=null&&(await _[r.value](),o.value=!0)}async function w(){await(o.value?k():g())}const E=()=>{const _=h();(!_||_&&m())&&(o.value=_)};return yn(t,op,E,!1),yn(()=>Zn(s),op,E,!1),a&&pt(k),{isSupported:d,isFullscreen:o,enter:g,exit:k,toggle:w}}function co(n){return typeof Window<"u"&&n instanceof Window?n.document.documentElement:typeof Document<"u"&&n instanceof Document?n.documentElement:n}function x_(n,e,t={}){const{window:a=Ee}=t;return $s(n,e,a==null?void 0:a.localStorage,t)}function kc(n){const e=window.getComputedStyle(n);if(e.overflowX==="scroll"||e.overflowY==="scroll"||e.overflowX==="auto"&&n.clientWidth<n.scrollWidth||e.overflowY==="auto"&&n.clientHeight<n.scrollHeight)return!0;{const t=n.parentNode;return!t||t.tagName==="BODY"?!1:kc(t)}}function Kk(n){const e=n||window.event,t=e.target;return kc(t)?!1:e.touches.length>1?!0:(e.preventDefault&&e.preventDefault(),!1)}const ts=new WeakMap;function wr(n,e=!1){const t=K(e);let a=null;on(Pk(n),r=>{const p=co(Jn(r));if(p){const i=p;ts.get(i)||ts.set(i,i.style.overflow),t.value&&(i.style.overflow="hidden")}},{immediate:!0});const s=()=>{const r=co(Jn(n));!r||t.value||(Ho&&(a=yn(r,"touchmove",p=>{Kk(p)},{passive:!1})),r.style.overflow="hidden",t.value=!0)},o=()=>{var r;const p=co(Jn(n));!p||!t.value||(Ho&&(a==null||a()),p.style.overflow=(r=ts.get(p))!=null?r:"",ts.delete(p),t.value=!1)};return pt(o),y({get(){return t.value},set(r){r?s():o()}})}let Fk=0;function qk(n,e={}){const t=K(!1),{document:a=uc,immediate:s=!0,manual:o=!1,id:r=`vueuse_styletag_${++Fk}`}=e,p=K(n);let i=()=>{};const c=()=>{if(!a)return;const m=a.getElementById(r)||a.createElement("style");m.isConnected||(m.id=r,e.media&&(m.media=e.media),a.head.appendChild(m)),!t.value&&(i=on(p,h=>{m.textContent=h},{immediate:!0}),t.value=!0)},d=()=>{!a||!t.value||(i(),a.head.removeChild(a.getElementById(r)),t.value=!1)};return s&&!o&&js(c),o||pt(d),{id:r,css:p,unload:d,load:c,isLoaded:st(t)}}function Gk(n={}){const{window:e=Ee,behavior:t="auto"}=n;if(!e)return{x:K(0),y:K(0)};const a=K(e.scrollX),s=K(e.scrollY),o=y({get(){return a.value},set(p){scrollTo({left:p,behavior:t})}}),r=y({get(){return s.value},set(p){scrollTo({top:p,behavior:t})}});return yn(e,"scroll",()=>{a.value=e.scrollX,s.value=e.scrollY},{capture:!1,passive:!0}),{x:o,y:r}}function Wk(n={}){const{window:e=Ee,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:s=!0,includeScrollbar:o=!0}=n,r=K(t),p=K(a),i=()=>{e&&(o?(r.value=e.innerWidth,p.value=e.innerHeight):(r.value=e.document.documentElement.clientWidth,p.value=e.document.documentElement.clientHeight))};if(i(),js(i),yn("resize",i,{passive:!0}),s){const c=mc("(orientation: portrait)");on(c,()=>i())}return{width:r,height:p}}var Jk=R({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(n){const e=y(()=>{const a=["font-icon icon"],s=`iconfont icon-${n.icon}`;return a.push(s),a}),t=y(()=>{const a={};return n.color&&(a.color=n.color),n.size&&(a["font-size"]=Number.isNaN(Number(n.size))?n.size:`${n.size}px`),pe(a).length?a:null});return()=>n.icon?l("span",{key:n.icon,class:e.value,style:t.value}):null}});const rp="https://codepen.io",Yk=n=>{let e="";for(const t in n)t!=="prefill"&&t!=="open"&&(e!==""&&(e+="&"),e+=t+"="+encodeURIComponent(n[t]));return e},fc=n=>{const e=n.preview==="true"?"embed/preview":"embed";if("prefill"in n)return[rp,e,"prefill"].join("/");let t=n["slug-hash"];if(!t)throw new Error("slug-hash is required");return n.token&&(t+="/"+n.token),[rp,n.user||"anon",e,t+"?"+Yk(n)].join("/").replace(/\/\//g,"//")},No=(n,e)=>{const t=document.createElement(n);for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.setAttribute(a,e[a].toString());return t},Xk=n=>{const e=No("form",{class:"code-pen-embed-form",style:"display: none;",method:"post",action:fc(n),target:n.name||""});for(const t in n)t!=="prefill"&&e.append(No("input",{type:"hidden",name:t,value:String(n[t])}));return e},Zk=n=>{const{height:e=300,class:t="",name:a="CodePen Embed"}=n,s={class:`cp_embed_iframe ${t}`,src:fc(n),allowfullscreen:"",allowpaymentrequest:"",allowTransparency:"",frameborder:0,width:"100%",height:e,name:a,scrolling:"no",style:"width: 100%; overflow: hidden; display: block;",title:n["pen-title"]||a};return"prefill"in n||(s.loading="lazy"),n["slug-hash"]&&(s.id=`code-pen-embed-${n["slug-hash"].replace("/","_")}`),No("iframe",s)},Qk=(n,e)=>{if(n.parentNode){const t=document.createElement("div");return t.className="code-pen-embed-wrapper",t.append(e),n.parentNode.replaceChild(t,n),t}return n.append(e),n};let nf=1;const lp=(n,e)=>{const t=typeof e=="string"?document.querySelector(e):e instanceof HTMLElement?e:null;n.user||(n.user="anon"),n.name||(n.name=t?`code-pen-api-${nf++}`:"_blank");const a=document.createDocumentFragment();let s=null;"prefill"in n&&(n.data=JSON.stringify(n.prefill||"{}"),s=Xk(n),a.append(s)),t?(a.append(Zk(n)),Qk(t,a)):document.body.appendChild(a),s&&s.submit()};var ef=R({name:"CodePen",props:{link:{type:String,default:""},user:{type:String,default:""},slugHash:{type:String,default:""},title:{type:String,default:""},height:{type:[String,Number],default:380},theme:{type:String,default:"default"},defaultTab:{type:Array,default:()=>["result"]},status:{type:String,default:"preview"}},setup(n){const e=()=>{const o=/(?:^(?:https?:)?\/\/codepen.io\/|^\/|^)(.*?)\/(?:pen|embed)\/(.*?)\/?$/.exec(n.link);return{user:o==null?void 0:o[1],slugHash:o==null?void 0:o[2]}},t=y(()=>e().user||n.user),a=y(()=>e().slugHash||n.slugHash),s=y(()=>({user:t.value,"slug-hash":a.value,"theme-id":n.theme,"default-tab":n.defaultTab.join(","),"pen-title":n.title,height:n.height,preview:n.status==="preview"?"true":""}));return sn(()=>{n.status!=="clicktorun"&&lp(s.value,`.codepen-${a.value}`)}),()=>l("div",{class:["codepen-wrapper",`codepen-${a.value}`]},[n.status==="clicktorun"?l("button",{type:"button",class:"codepen-button",onClick:()=>{lp(s.value,`.codepen-${a.value}`)}},"Run Code"):null,l("span",["See the Pen ",l("a",{href:n.link},[n.title])," by ",l("a",{href:`https://codepen.io/${t.value}`},[t.value])," on ",l("a",{href:"https://codepen.io"},["CodePen"]),"."])])}});const rn=({name:n="",color:e="currentColor"},{slots:t})=>{var a;return l("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(a=t.default)==null?void 0:a.call(t))};rn.displayName="IconBase";const Tt=({size:n=48,stroke:e=4,wrapper:t=!0,height:a=2*n})=>{const s=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[l("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),l("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e,"stroke-linecap":"round"},[l("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),l("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return t?l("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${a}px`},s):s};Tt.displayName="LoadingIcon";const gc=(n,{slots:e})=>{var t;return(t=e.default)==null?void 0:t.call(e)},Er=()=>l(rn,{name:"github"},()=>l("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Er.displayName="GitHubIcon";const Cr=()=>l(rn,{name:"gitlab"},()=>l("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));Cr.displayName="GitLabIcon";const Tr=()=>l(rn,{name:"gitee"},()=>l("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Tr.displayName="GiteeIcon";const Ir=()=>l(rn,{name:"bitbucket"},()=>l("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));Ir.displayName="BitbucketIcon";const Sr=()=>l(rn,{name:"source"},()=>l("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));Sr.displayName="SourceIcon";function tf(){const n=K(!1),e=Ct();return e&&sn(()=>{n.value=!0},e),n}function af(n){return tf(),y(()=>!!n())}const sf=()=>af(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),of=()=>{const n=sf();return y(()=>n.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},rf=n=>/\b(?:Android|iPhone)/i.test(n),lf=n=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(n),vc=n=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(e=>e.test(n)),pf=n=>[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i].some(e=>e.test(n)),cf=n=>[/(mac os x) ?([\w. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i].some(e=>e.test(n)),zs=(n,e)=>{let t=1;for(let a=0;a<n.length;a++)t+=n.charCodeAt(a),t+=t<<10,t^=t>>6;return t+=t<<3,t^=t>>11,t%e};let uf=class{constructor(){this.messageElements={};const e="message-container",t=document.getElementById(e);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}pop(e,t=2e3){const a=document.createElement("div"),s=Date.now();return a.className="message move-in",a.innerHTML=e,this.containerElement.appendChild(a),this.messageElements[s]=a,t>0&&setTimeout(()=>{this.close(s)},t),s}close(e){if(e){const t=this.messageElements[e];t.classList.remove("move-in"),t.classList.add("move-out"),t.addEventListener("animationend",()=>{t.remove(),delete this.messageElements[e]})}else pe(this.messageElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const _c=/#.*$/u,df=n=>{const e=_c.exec(n);return e?e[0]:""},pp=n=>decodeURI(n).replace(_c,"").replace(/\/index\.html$/iu,"/").replace(/\.html$/iu,"").replace(/(README|index)?\.md$/iu,""),yc=(n,e)=>{if(!vr(e))return!1;const t=pp(n.path),a=pp(e),s=df(e);return s?s===n.hash&&(!a||t===a):t===a};let mf=class{constructor(){this.popupElements={};const e="popup-container",t=document.getElementById(e);t?this.containerElement=t:(this.containerElement=document.createElement("div"),this.containerElement.id=e,document.body.appendChild(this.containerElement))}emit(e,t){const a=document.createElement("div"),s=document.createElement("div"),o=Date.now();return this.containerElement.appendChild(a),this.popupElements[o]=a,a.className="popup-wrapper appear",a.appendChild(s),a.addEventListener("click",()=>this.close(o)),s.className="popup-container",s.innerHTML=e,typeof t=="number"&&setTimeout(()=>{this.close(o)},t),o}close(e){if(e){const t=this.popupElements[e];t.classList.replace("appear","disappear"),t.children[0].addEventListener("animationend",()=>{t.remove(),delete this.popupElements[e]})}else pe(this.popupElements).forEach(t=>this.close(Number(t)))}destroy(){document.body.removeChild(this.containerElement)}};const hf=n=>Ce(n)?n:`https://github.com/${n}`,Pr=n=>!Ce(n)||/github\.com/.test(n)?"GitHub":/bitbucket\.org/.test(n)?"Bitbucket":/gitlab\.com/.test(n)?"GitLab":/gitee\.com/.test(n)?"Gitee":null,kf=()=>{const{availWidth:n,availHeight:e}=screen,{screenLeft:t,screenTop:a,innerWidth:s,innerHeight:o}=window,r=Math.max(n/2,600),p=Math.max(e/2,400);return{width:r,height:p,left:t+s/2-r/2,top:a+o/2-p/2}},ff=(n,e="_blank",t=["resizable","status"])=>{var p,i;const{width:a,height:s,left:o,top:r}=kf();(i=(p=window.open(n,e,`width=${a},height=${s},left=${o},top=${r},${t.join(",")}`))==null?void 0:p.focus)==null||i.call(p)};var gf=n=>Object.prototype.toString.call(n)==="[object Object]",Ta=n=>typeof n=="string";const bc=Array.isArray,ip=n=>gf(n)&&Ta(n.name),Ia=(n,e=!1)=>n?bc(n)?n.map(t=>Ta(t)?{name:t}:ip(t)?t:null).filter(t=>t!==null):Ta(n)?[{name:n}]:ip(n)?[n]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,n),[]):[],wc=(n,e)=>{if(n){if(bc(n)&&n.every(Ta))return n;if(Ta(n))return[n];console.error(`Expect ${e||"value"} to be \`string[] | string | undefined\`, but got`,n)}return[]},Ec=n=>wc(n,"category"),Cc=n=>wc(n,"tag"),cp=n=>_n(n)?n:`${n}px`,vf=(n,e=0)=>{const t=hn(),a=y(()=>cp(_e(n.width)||"100%")),s=K("auto"),o=i=>{if(_n(i)){const[c,d]=i.split(":"),m=Number(c)/Number(d);if(!Number.isNaN(m))return m}return typeof i=="number"?i:16/9},r=i=>{const c=_e(n.height),d=o(_e(n.ratio));return c?cp(c):`${Number(i)/d+_e(e)}px`},p=()=>{t.value&&(s.value=r(t.value.clientWidth))};return sn(()=>{p(),jn(e)&&on(e,p),yn("orientationchange",p),yn("resize",p)}),{el:t,width:a,height:s,resize:p}},Mo=n=>Ce(n)?n:Tn(n);var _f={"/":{hint:"<p>이 브라우저는 PDF를 포함할 수 없습니다. PDF를 보려면 다운로드하십시오: <a href='[url]' target='_blank'>PDF 다운로드</a></p>"}};const uo=n=>{console.error(`[PDF]: ${n}`)},yf=n=>{for(;n.firstChild;)n.removeChild(n.firstChild)},bf=n=>n==="string"?document.querySelector(n):n instanceof HTMLElement?n:document.body,wf=n=>{let e="";return n&&(e+=Be(n).map(([t,a])=>t==="noToolbar"?`toolbar=${a?0:1}`:`${encodeURIComponent(t)}=${encodeURIComponent(a)}`).join("&"),e&&(e=`#${e.slice(0,e.length-1)}`)),e},Ef=(n,e,t,a,s)=>{yf(e);const o=`${n==="pdfjs"?`${mr(Tn(null))}web/viewer.html?file=${encodeURIComponent(t)}`:t}${wf(a)}`,r=n==="pdfjs"||n==="iframe"?"iframe":"embed",p=document.createElement(r);return p.className="pdf-viewer",p.type="application/pdf",p.title=s,p.src=o,p instanceof HTMLIFrameElement&&(p.allow="fullscreen"),e.classList.add("pdf-viewer-container"),e.appendChild(p),e.getElementsByTagName(r)[0]},Cf=(n,e,{title:t,hint:a,options:s={}})=>{var g,w;if(typeof window>"u"||!((g=window==null?void 0:window.navigator)!=null&&g.userAgent))return null;const{navigator:o}=window,{userAgent:r}=o,p=vr(window.Promise),i=vc(r)||rf(r),c=!i&&lf(r),d=!i&&/firefox/iu.test(r)&&r.split("rv:").length>1?parseInt(r.split("rv:")[1].split(".")[0],10)>18:!1,m=!i&&(p||d);if(!_n(n))return uo("URL is not valid"),null;const h=bf(e);if(!h)return uo("Target element cannot be determined"),null;const k=t||((w=/\/([^/]+).pdf/.exec(n))==null?void 0:w[1])||"PDF Viewer";return m||!i?Ef(c?"iframe":"embed",h,n,s,k):(h.innerHTML=a.replace(/\[url\]/g,n),uo("This browser does not support embedded PDFs"),null)};var Tf=R({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(n){const{el:e,width:t,height:a,resize:s}=vf(n),o=ke(_f);return sn(()=>{Cf(Mo(n.url),e.value,{title:n.title,hint:o.value.hint,options:{page:n.page,noToolbar:n.noToolbar,zoom:n.zoom}}),s()}),()=>l("div",{class:"pdf-viewer-wrapper",ref:e,style:{width:t.value,height:a.value}})}}),If=[{name:"twitter",link:"https://twitter.com/intent/tweet?text=[title]&url=[url]&hashtags=[tags][title]",color:"#000",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m587 451 291-339h-69L555 407 354 112H120l305 446-305 354h68l268-310 213 310h235zM214 163h107l488 699H702z"/></svg>'},{name:"facebook",link:"https://www.facebook.com/sharer/sharer.php?u=[url]&title=[title]&description=[description]&quote=[summary]&hashtag=[tags]",color:"#3c599b",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M295 360h93v-91c0-40 1-101 30-139 30-41 72-68 144-68 118 0 168 17 168 17l-24 138s-39-12-75-12-69 13-69 50v105h149l-10 134H562v468H388V494h-93z"/></svg>'},{name:"reddit",link:"https://www.reddit.com/submit?title=[title]&url=[url]",color:"#ff4501",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M678 779c9 9 9 18 0 27-34 37-90 55-166 55s-132-18-166-55c-9-9-9-18 0-27a17 17 0 0 1 12-6c5 0 9 2 13 6 26 29 74 43 141 43s114-14 141-43a17 17 0 0 1 13-6c5 0 9 2 12 6M400 562a82 82 0 0 1 0 112 70 70 0 0 1-53 23c-20 0-38-8-53-23a78 78 0 0 1-22-56c0-22 7-41 22-56a71 71 0 0 1 106 0m352 56c0 22-7 41-22 56a71 71 0 0 1-53 23c-21 0-38-8-53-23a78 78 0 0 1-22-56c0-22 8-40 22-56 15-16 32-23 53-23 20 0 38 7 53 23 15 15 22 34 22 56m210-106c0-29-10-54-29-74a94 94 0 0 0-71-31c-28 0-52 10-72 31-73-53-160-81-260-85l52-250 168 40c0 21 7 40 21 55 15 16 32 23 53 23s38-7 53-23 22-34 22-56-7-41-22-57a71 71 0 0 0-53-23c-30 0-52 15-67 44L572 63c-10-3-17 2-21 14l-57 276c-101 5-187 33-259 86a94 94 0 0 0-73-32c-28 0-51 10-71 31a105 105 0 0 0-29 74 108 108 0 0 0 57 96 241 241 0 0 0-5 49c0 84 39 156 117 216 78 59 172 89 282 89s205-30 283-89c78-60 117-132 117-216 0-19-2-35-6-50a108 108 0 0 0 55-95"/></svg>'},{name:"telegram",link:"https://t.me/share/url?url=[url]&text=[title]%0D%0A[description|summary]",color:"#158cc7",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m413 807 13-187 340-307c15-14-3-21-23-8L323 570l-183-58c-39-11-39-38 9-57l709-274c33-14 64 8 51 58L788 807c-8 40-33 50-66 31L538 703l-88 85c-10 10-19 19-37 19"/></svg>'},{name:"whatsapp",link:"https://api.whatsapp.com/send?text=[title]%0D%0A[url]%0D%0A[description|summary]",color:"#31B84C",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="m62 962 64-231a444 444 0 0 1-60-223 448 448 0 0 1 765-315 442 442 0 0 1 131 315c0 246-201 446-448 446a449 449 0 0 1-214-54zm340-640c-9-22-18-19-25-20h-22a41 41 0 0 0-30 14c-10 11-39 38-39 93s40 108 46 115c6 8 79 120 191 168 27 12 48 19 64 24 27 8 51 7 71 4 21-3 66-27 75-53s9-48 7-53c-3-4-11-7-22-13l-76-36c-11-4-18-5-26 6-7 11-28 36-35 43-6 8-13 9-24 3-11-5-47-17-90-55-34-30-56-66-63-77-6-12 0-18 5-23l17-20c6-6 8-11 11-18 4-8 2-14-1-20l-34-83z"/></svg>'},{name:"email",link:"mailto:?subject=[title]&body=[url]%0D%0A%0D%0A[description|summary]",color:"#1384FF",action:"open",shape:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M152 177h720c49 0 89 37 90 83L512 494 63 260c0-46 40-83 89-83M62 349v414c0 46 41 84 90 84h720c49 0 90-38 90-84V349L523 572a24 24 0 0 1-22 0z"/></svg>'}];const as=n=>{var e;return((e=document.querySelector(`meta[name="${n}"]`))==null?void 0:e.getAttribute("content"))??null},up=(n,e="")=>{const t=["vp-share-icon",e];return Ce(n)||Ha(n)?l("img",{class:t,src:n,loading:"lazy","no-view":""}):bt(n,"<")&&pc(n,">")?l("div",{class:t,innerHTML:n}):l("div",{class:[...t,n]})};var Sf=R({name:"ShareService",props:{config:{type:Object,default:()=>({})},plain:Boolean,title:{type:String,required:!1},description:{type:String,required:!1},url:{type:String,required:!1},summary:{type:String,required:!1},cover:{type:String,required:!1},tag:{type:[Array,String],required:!1}},setup(n){let e;const t=fn(),a=bn(),s=K(!1),o=()=>{var g;const p=n.title??t.value.title,i=n.description??a.value.description??as("description")??as("og:description")??as("twitter:description"),c=n.url??typeof window>"u"?null:window.location.href,d=n.cover??as("og:image"),m=(g=document.querySelector(".theme-default-content :not(a) > img"))==null?void 0:g.getAttribute("src"),h=n.tag??a.value.tag??a.value.tags,k=Ea(h)?h.filter(_n).join(","):_n(h)?h:null;return n.config.link.replace(/\[([^\]]+)\]/g,(w,E)=>{const _=E.split("|");for(const T of _){if(T==="url"&&c)return c;if(T==="title"&&p)return p;if(T==="description"&&i)return i;if(T==="summary"&&n.summary)return n.summary;if(T==="cover"&&d)return d;if(T==="image"&&m)return m;if(T==="tags"&&k)return k}return""})},r=()=>{const p=o();switch(n.config.action){case"navigate":window.open(p);break;case"open":window.open(p,"_blank");break;case"qrcode":u(()=>import("./browser-D6eOinvE.js").then(i=>i.b),__vite__mapDeps([])).then(({toDataURL:i})=>i(p,{errorCorrectionLevel:"H",width:250,scale:1,margin:1.5})).then(i=>{e.emit(`<img src="${i}" alt="qrcode" class="share-qrcode" />`)});break;default:ff(p,"share")}};return sn(()=>{e=new mf}),()=>{const{config:{name:p,icon:i,shape:c,color:d},plain:m}=n;return[l("button",{type:"button",class:["vp-share-button",{plain:m}],"aria-label":p,"data-balloon-pos":"up",onClick:()=>r()},m?up(c,"plain"):i?up(i):l("div",{class:"vp-share-icon colorful",style:{background:d},innerHTML:c})),s.value?l("div",{class:"share-popup"}):null]}}});const dp=If;var Pf=R({name:"Share",props:{services:{type:[String,Array],default:()=>dp.map(({name:n})=>n)},titleGetter:{type:Function,default:n=>n.title},descriptionGetter:{type:Function,default:n=>n.frontmatter.description},summaryGetter:{type:Function,default:n=>n.summary},coverGetter:{type:Function,default:n=>n.cover},tagGetter:{type:Function,default:({frontmatter:n})=>n.tag||n.tags},inline:Boolean,colorful:Boolean},setup(n){const e=fn(),t=y(()=>(_n(n.services)?n.services.split(","):n.services).map(s=>be(s)?s.name&&s.link?s:null:dp.find(({name:o})=>o===s)).filter(s=>!!s)),a=y(()=>{const s={};return["titleGetter","descriptionGetter","summaryGetter","coverGetter","tagGetter"].forEach(o=>{if(ji(n[o])){const r=n[o](e.value);r&&(s[o.replace("Getter","")]=r)}}),s});return()=>l("div",{class:"vp-share-buttons",style:n.inline?{display:"inline-block"}:{}},t.value.map(s=>l(Sf,{config:s,...a.value,plain:!n.colorful})))}}),xf={"/":{source:"소스 코드"}},Af=R({name:"SiteInfo",components:{BitbucketIcon:Ir,GiteeIcon:Tr,GitHubIcon:Er,GitLabIcon:Cr,SourceIcon:Sr},props:{name:{type:String,required:!0},desc:{type:String,default:""},logo:{type:String,default:""},url:{type:String,required:!0},preview:{type:String,required:!0},repo:{type:String,default:""}},setup(n){const e=ke(xf),t=y(()=>n.repo?Pr(n.repo):null);return()=>l("div",{class:"vp-site-info","data-name":n.name},[l("a",{class:"vp-site-info-navigator",title:n.name,href:n.url,target:"_blank"}),l("div",{class:"vp-site-info-preview",style:{background:`url(${Tn(n.preview)}) center/cover no-repeat`}}),l("div",{class:"vp-site-info-detail"},[n.logo?l("img",{class:"vp-site-info-logo",src:n.logo,alt:"",loading:"lazy","no-view":""}):null,l("div",{class:"vp-site-info-name"},n.name),l("div",{class:"vp-site-info-desc"},n.desc)]),n.repo?l("div",{class:"vp-site-info-source-wrapper"},l("a",{class:"vp-site-info-source",href:n.repo,"aria-label":e.value.source,"data-balloon-pos":"left",title:e.value.source,target:"_blank"},l(se(`${t.value}Icon`)))):null])}});const Tc=({type:n="info",text:e="",vertical:t,color:a},{slots:s})=>{var o;return l("span",{class:["vp-badge",n,{diy:a}],style:{verticalAlign:t??!1,backgroundColor:a??!1}},((o=s.default)==null?void 0:o.call(s))||e)};Tc.displayName="Badge";var Lf=R({name:"VidStack",props:{sources:{type:Array,default:()=>[]},tracks:{type:Array,default:()=>[]}},setup(n,{attrs:e}){return sn(async()=>{await Promise.all([u(()=>import("./vidstack-player-CFQ60-Li.js"),__vite__mapDeps([528,529])),u(()=>import("./vidstack-player-layouts-C3rRQ6JW.js"),__vite__mapDeps([530,529,531])),u(()=>import("./vidstack-player-ui-CotaCWs7.js"),__vite__mapDeps([532,529,531]))])}),()=>l("media-player",e,[l("media-provider",[e.poster?l("media-poster",{class:"vds-poster",alt:e.alt||e.title}):null,n.sources.map(t=>be(t)?l("source",{...t,src:Mo(t.src)}):l("source",{src:Mo(t)})),n.tracks.map(t=>l("track",t))]),l("media-audio-layout"),l("media-video-layout",e)])}});const Of=Yn({enhance:({app:n})=>{Un("FontIcon")||n.component("FontIcon",Jk),Un("CodePen")||n.component("CodePen",ef),Un("PDF")||n.component("PDF",Tf),Un("Share")||n.component("Share",Pf),Un("SiteInfo")||n.component("SiteInfo",Af),Un("Badge")||n.component("Badge",Tc),Un("VidStack")||n.component("VidStack",Lf)},setup:()=>{qk(`  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `)},rootComponents:[]}),mp=async(n,e)=>{const{path:t,query:a}=n.currentRoute.value,{scrollBehavior:s}=n.options;n.options.scrollBehavior=void 0,await n.replace({path:t,query:a,hash:e}),n.options.scrollBehavior=s},Rf=({headerLinkSelector:n,headerAnchorSelector:e,delay:t,offset:a=5})=>{const s=ze();yn("scroll",Ms(()=>{var g,w;const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r-0)<a){mp(s,"");return}const i=window.innerHeight+r,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(c-i)<a,m=Array.from(document.querySelectorAll(n)),k=Array.from(document.querySelectorAll(e)).filter(E=>m.some(_=>_.hash===E.hash));for(let E=0;E<k.length;E++){const _=k[E],T=k[E+1],b=r>=(((g=_.parentElement)==null?void 0:g.offsetTop)??0)-a,S=!T||r<(((w=T.parentElement)==null?void 0:w.offsetTop)??0)-a;if(!(b&&S))continue;const I=decodeURIComponent(s.currentRoute.value.hash),G=decodeURIComponent(_.hash);if(I===G)return;if(d){for(let M=E+1;M<k.length;M++)if(I===decodeURIComponent(k[M].hash))return}mp(s,G);return}},t))},Vf=".vp-sidebar-link, .vp-toc-link",Df=".header-anchor",Hf=200,Nf=5,Mf=Yn({setup(){Rf({headerLinkSelector:Vf,headerAnchorSelector:Df,delay:Hf,offset:Nf})}});let Ic=n=>_n(n.title)?{title:n.title}:null;const Sc=Symbol(""),jf=n=>{Ic=n},$f=()=>gn(Sc),zf=n=>{n.provide(Sc,Ic)};var Bf={"/":{title:"목차",empty:"목차 없음"}};const Uf=R({name:"Catalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(n){const e=$f(),t=ke(Bf),a=fn(),s=Wh(),o=Xi(),p=hn(Be(s.value).map(([c,{meta:d}])=>{const m=e(d);if(!m)return null;const h=c.split("/").length;return{level:pc(c,"/")?h-2:h-1,base:c.replace(/\/[^/]+\/?$/,"/"),path:c,...m}}).filter(c=>be(c)&&_n(c.title))),i=y(()=>{const c=n.base?V0(mr(n.base)):a.value.path.replace(/\/[^/]+$/,"/"),d=c.split("/").length-2,m=[];return p.value.filter(({level:h,path:k})=>{if(!bt(k,c)||k===c)return!1;if(c==="/"){const g=pe(o.value.locales).filter(w=>w!=="/");if(k==="/404.html"||g.some(w=>bt(k,w)))return!1}return h-d<=n.level}).sort(({title:h,level:k,order:g},{title:w,level:E,order:_})=>{const T=k-E;return T||(io(g)?io(_)?g>0?_>0?g-_:-1:_<0?g-_:1:g:io(_)?_:h.localeCompare(w))}).forEach(h=>{var w;const{base:k,level:g}=h;switch(g-d){case 1:{m.push(h);break}case 2:{const E=m.find(_=>_.path===k);E&&(E.children??(E.children=[])).push(h);break}default:{const E=m.find(_=>_.path===k.replace(/\/[^/]+\/$/,"/"));if(E){const _=(w=E.children)==null?void 0:w.find(T=>T.path===k);_&&(_.children??(_.children=[])).push(h)}}}}),m});return()=>{const c=i.value.some(d=>d.children);return l("div",{class:["vp-catalog-wrapper",{index:n.index}]},[n.hideHeading?null:l("h2",{class:"vp-catalog-main-title"},t.value.title),i.value.length?l(n.index?"ol":"ul",{class:["vp-catalogs",{deep:c}]},i.value.map(({children:d=[],title:m,path:h,content:k})=>{const g=l(Rn,{class:"vp-catalog-title",to:h},()=>k?l(k):m);return l("li",{class:"vp-catalog"},c?[l("h3",{id:m,class:["vp-catalog-child-title",{"has-children":d.length}]},[l("a",{href:`#${m}`,class:"vp-catalog-header-anchor","aria-hidden":!0},"#"),g]),d.length?l(n.index?"ol":"ul",{class:"vp-child-catalogs"},d.map(({children:w=[],content:E,path:_,title:T})=>l("li",{class:"vp-child-catalog"},[l("div",{class:["vp-catalog-sub-title",{"has-children":w.length}]},[l("a",{href:`#${T}`,class:"vp-catalog-header-anchor"},"#"),l(Rn,{class:"vp-catalog-title",to:_},()=>E?l(E):T)]),w.length?l(n.index?"ol":"div",{class:n.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},w.map(({content:b,path:S,title:N})=>n.index?l("li",{class:"vp-sub-catalog"},l(Rn,{to:S},()=>b?l(b):N)):l(Rn,{class:"vp-sub-catalog-link",to:S},()=>b?l(b):N))):null]))):null]:l("div",{class:"vp-catalog-child-title"},g))})):l("p",{class:"vp-empty-catalog"},t.value.empty)])}}}),Kf=Yn({enhance:({app:n})=>{zf(n),Un("Catalog",n)||n.component("Catalog",Uf)}});var Ff={"/":{backToTop:"맨 위로"}};const qf=R({name:"BackToTop",setup(n){const e=bn(),t=ke(Ff),a=hn(),{height:s}=Uk(a),{height:o}=Wk(),{y:r}=Gk(),p=y(()=>e.value.backToTop!==!1&&r.value>100),i=y(()=>r.value/(s.value-o.value)*100);return sn(()=>{a.value=document.body}),()=>l(je,{name:"back-to-top"},()=>p.value?l("button",{type:"button",class:"vp-back-to-top-button","aria-label":t.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[l("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":i.value},l("svg",l("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*i.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),l("div",{class:"back-to-top-icon"})]):null)}}),Gf=Yn({rootComponents:[qf]}),Wf=l("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Pc=R({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(n){const e=Te(),t=y(()=>n.locales[e.value]??{openInNewWindow:"open in new window"});return()=>l("span",[Wf,l("span",{class:"external-link-icon-sr-only"},t.value.openInNewWindow)])}});var Jf={};const Yf=Jf,Xf=Yn({enhance({app:n}){n.component("ExternalLinkIcon",l(Pc,{locales:Yf}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const dn={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:n=>{const e=dn.isStarted();n=mo(n,dn.settings.minimum,1),dn.status=n===1?null:n;const t=dn.render(!e),a=t.querySelector(dn.settings.barSelector),s=dn.settings.speed,o=dn.settings.easing;return t.offsetWidth,Zf(r=>{ss(a,{transform:"translate3d("+hp(n)+"%,0,0)",transition:"all "+s+"ms "+o}),n===1?(ss(t,{transition:"none",opacity:"1"}),t.offsetWidth,setTimeout(function(){ss(t,{transition:"all "+s+"ms linear",opacity:"0"}),setTimeout(function(){dn.remove(),r()},s)},s)):setTimeout(()=>r(),s)}),dn},isStarted:()=>typeof dn.status=="number",start:()=>{dn.status||dn.set(0);const n=()=>{setTimeout(()=>{dn.status&&(dn.trickle(),n())},dn.settings.trickleSpeed)};return dn.settings.trickle&&n(),dn},done:n=>!n&&!dn.status?dn:dn.inc(.3+.5*Math.random()).set(1),inc:n=>{let e=dn.status;return e?(typeof n!="number"&&(n=(1-e)*mo(Math.random()*e,.1,.95)),e=mo(e+n,0,.994),dn.set(e)):dn.start()},trickle:()=>dn.inc(Math.random()*dn.settings.trickleRate),render:n=>{if(dn.isRendered())return document.getElementById("nprogress");kp(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=dn.settings.template;const t=e.querySelector(dn.settings.barSelector),a=n?"-100":hp(dn.status||0),s=document.querySelector(dn.settings.parent);return ss(t,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),s!==document.body&&kp(s,"nprogress-custom-parent"),s==null||s.appendChild(e),e},remove:()=>{fp(document.documentElement,"nprogress-busy"),fp(document.querySelector(dn.settings.parent),"nprogress-custom-parent");const n=document.getElementById("nprogress");n&&Qf(n)},isRendered:()=>!!document.getElementById("nprogress")},mo=(n,e,t)=>n<e?e:n>t?t:n,hp=n=>(-1+n)*100,Zf=function(){const n=[];function e(){const t=n.shift();t&&t(e)}return function(t){n.push(t),n.length===1&&e()}}(),ss=function(){const n=["Webkit","O","Moz","ms"],e={};function t(r){return r.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(p,i){return i.toUpperCase()})}function a(r){const p=document.body.style;if(r in p)return r;let i=n.length;const c=r.charAt(0).toUpperCase()+r.slice(1);let d;for(;i--;)if(d=n[i]+c,d in p)return d;return r}function s(r){return r=t(r),e[r]??(e[r]=a(r))}function o(r,p,i){p=s(p),r.style[p]=i}return function(r,p){for(const i in p){const c=p[i];c!==void 0&&Object.prototype.hasOwnProperty.call(p,i)&&o(r,i,c)}}}(),xc=(n,e)=>(typeof n=="string"?n:xr(n)).indexOf(" "+e+" ")>=0,kp=(n,e)=>{const t=xr(n),a=t+e;xc(t,e)||(n.className=a.substring(1))},fp=(n,e)=>{const t=xr(n);if(!xc(n,e))return;const a=t.replace(" "+e+" "," ");n.className=a.substring(1,a.length-1)},xr=n=>(" "+(n.className||"")+" ").replace(/\s+/gi," "),Qf=n=>{n&&n.parentNode&&n.parentNode.removeChild(n)},ng=()=>{sn(()=>{const n=ze(),e=new Set;e.add(n.currentRoute.value.path),n.beforeEach(t=>{e.has(t.path)||dn.start()}),n.afterEach(t=>{e.add(t.path),dn.done()})})},eg=Yn({setup(){ng()}}),tg=JSON.parse('{"encrypt":{},"logo":"/logo.png","repo":"docmoa/docs","docsDir":"docs","print":true,"fullscreen":true,"contributors":true,"lastUpdated":true,"locales":{"/":{"lang":"ko-KR","navbarLocales":{"langName":"한국어","selectLangAriaLabel":"언어 선택"},"metaLocales":{"author":"작성자","date":"작성일","origin":"원본","views":"조회수","category":"카테고리","tag":"태그","readingTime":"읽는 시간","words":"단어","toc":"이 페이지에서","prev":"이전","next":"다음","lastUpdated":"마지막 수정","contributors":"기여자","editLink":"Edit this page on GitHub","print":"인쇄"},"blogLocales":{"article":"게시글","articleList":"글 목록","category":"카테고리","tag":"태그","timeline":"타임라인","timelineTitle":"어제 한 번 더!","all":"모두","intro":"프로필","star":"스타","empty":"$text가 비어있습니다."},"paginationLocales":{"prev":"이전","next":"다음","navigate":"이동","action":"가기","errorText":"1에서 $page 사이의 숫자를 입력하세요!"},"outlookLocales":{"themeColor":"테마 색상","darkmode":"테마 모드","fullscreen":"전체 화면"},"routeLocales":{"skipToContent":"본문으로 건너뛰기","notFoundTitle":"페이지를 찾을 수 없습니다.","notFoundMsg":["여기에는 아무것도 없습니다.","어떻게 여기까지 오셨나요?","4-0-4 입니다.","깨진 링크가 있는 것 같습니다."],"back":"뒤로가기","home":"메인으로","openInNewWindow":"새 창에서 열기"},"navbar":["/",{"text":"How To","icon":"launch","link":"/00-Howto/"},{"text":"Infra","icon":"computer","children":[{"text":"Infrastructure","link":"/01-Infrastructure/"},{"text":"Private-Platform","link":"/02-PrivatePlatform/"},{"text":"Public-Cloud","link":"/03-PublicCloud/"}]},{"text":"Software","icon":"code","link":"/05-Software/"},{"text":"HashiCorp","icon":"workingDirectory","link":"/04-HashiCorp/"},{"text":"Etc.","icon":"flex","link":"/06-etc/"},{"text":"MORE","icon":"more","children":[{"text":"About","icon":"info","link":"/99-about/01-About.html"},{"text":"Thank you","icon":"like","link":"/99-about/02-Thanks.html"}]},{"text":"Tags","icon":"tag","link":"/tag"}],"sidebar":{"/00-Howto/":"structure","/01-Infrastructure/":"structure","/02-PrivatePlatform/":"structure","/03-PublicCloud/":"structure","/04-HashiCorp/":"structure","/05-Software/":"structure","/06-etc/":"structure","/99-about/":"structure","/":["","tag","99-about/01-About"]},"footer":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.","displayFooter":true}}}'),ag=K(tg),Ac=()=>ag,Lc=Symbol(""),sg=()=>{const n=gn(Lc);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},og=(n,e)=>{const{locales:t,...a}=n;return{...a,...t==null?void 0:t[e]}},rg=Yn({enhance({app:n}){const e=Ac(),t=n._context.provides[fr],a=y(()=>og(e.value,t.routeLocale.value));n.provide(Lc,a),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return a.value}}})}}),lg=/\b(?:Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini)/i,pg=()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator&&lg.test(navigator.userAgent),ig=({delay:n=500,duration:e=2e3,locales:t,selector:a,showInMobile:s})=>{const{copy:o,copied:r}=Dk({legacy:!0,copiedDuring:e}),p=ke(t),i=fn(),c=h=>{if(!h.hasAttribute("copy-code-registered")){const k=document.createElement("button");k.type="button",k.classList.add("vp-copy-code-button"),k.innerHTML='<div class="vp-copy-icon" />',k.setAttribute("aria-label",p.value.copy),k.setAttribute("data-copied",p.value.copied),h.parentElement&&h.parentElement.insertBefore(k,h),h.setAttribute("copy-code-registered","")}},d=()=>{ot().then(()=>lc(n)).then(()=>{a.forEach(h=>{document.querySelectorAll(h).forEach(c)})})},m=(h,k,g)=>{let{innerText:w=""}=k;/language-(shellscript|shell|bash|sh|zsh)/.test(h.classList.toString())&&(w=w.replace(/^ *(\$|>) /gm,"")),o(w).then(()=>{g.classList.add("copied"),on(r,()=>{g.classList.remove("copied"),g.blur()},{once:!0})})};sn(()=>{const h=!pg()||s;h&&d(),yn("click",k=>{const g=k.target;if(g.matches('div[class*="language-"] > button.copy')){const w=g.parentElement,E=g.nextElementSibling;E&&m(w,E,g)}else if(g.matches('div[class*="language-"] div.vp-copy-icon')){const w=g.parentElement,E=w.parentElement,_=w.nextElementSibling;_&&m(E,_,w)}}),on(()=>i.value.path,()=>{h&&d()})})};var cg={"/":{copy:"코드 복사",copied:"복사됨"}},ug=['.theme-hope-content div[class*="language-"] pre'];const dg=500,mg=2e3,hg=cg,kg=ug,fg=!1,gg=Yn({setup:()=>{ig({selector:kg,locales:hg,duration:mg,delay:dg,showInMobile:fg})}});var vg={"/":{author:"저작권자 :author",license:":license 프로토콜에 따라",link:":link"}},_g={canonical:"https://docmoa.github.io",author:"All contributers",license:"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.",global:!1,disableCopy:!1,disableSelection:!1,triggerLength:100,maxLength:0};const We=_g,{canonical:os}=We,yg=()=>{const n=bn(),e=ke(vg),t=fn(),a=y(()=>!!n.value.copy||n.value.copy!==!1&&We.global),s=y(()=>be(n.value.copy)?n.value.copy:null),o=y(()=>{var k;return((k=s.value)==null?void 0:k.disableCopy)??We.disableCopy}),r=y(()=>{var k;return a.value?((k=s.value)==null?void 0:k.disableSelection)??We.disableSelection:!1}),p=y(()=>{var k;return a.value?((k=s.value)==null?void 0:k.maxLength)??We.maxLength:0}),i=y(()=>{var k;return((k=s.value)==null?void 0:k.triggerLength)??We.triggerLength}),c=()=>os?`${Vs(Ce(os)?os:`https://${os}`)}${t.value.path}`:window.location.href,d=(k,g)=>{const{author:w,license:E,link:_}=e.value;return[k?w.replace(":author",k):"",g?E.replace(":license",g):"",_.replace(":link",c())].filter(T=>T).join(`
`)},m=()=>{if(_n(t.value.copyright))return t.value.copyright.replace(":link",c());const{author:k,license:g}=t.value.copyright||{};return d(k??We.author,g??We.license)},h=k=>{const g=getSelection();if(g){const w=g.getRangeAt(0);if(a.value){const E=w.toString().length;if(o.value||p.value&&E>p.value)return k.preventDefault();if(E>=i.value){k.preventDefault();const _=m(),T=document.createElement("div");T.appendChild(g.getRangeAt(0).cloneContents()),k.clipboardData&&(k.clipboardData.setData("text/html",`${T.innerHTML}<hr><div class="copyright">${_.replace(/\\n/g,"<br>")}</div>`),k.clipboardData.setData("text/plain",`${g.getRangeAt(0).cloneContents().textContent||""}
------
${_}`))}}}};sn(()=>{const k=document.querySelector("#app");yn(k,"copy",h),pr(()=>{k.style.userSelect=r.value?"none":"auto"})})},bg=Yn({setup:()=>{yg()}}),ws=()=>{const n=document.documentElement;return n.classList.contains("dark")||n.getAttribute("data-theme")==="dark"},wg=(n,e)=>e==="json"?JSON.parse(n):new Function(`let config,__chart_js_config__;
{
${n}
__chart_js_config__=config;
}
return __chart_js_config__;`)();var Eg=R({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const e=hn(),t=hn(),a=K(!1),s=K(!0),o=y(()=>yt(n.config));let r=!1,p;const i=async c=>{const[{default:d}]=await Promise.all([u(()=>import("./auto-BwZvv_Gp.js"),__vite__mapDeps([])),r?Promise.resolve():(r=!0,new Promise(k=>setTimeout(k,800)))]);d.defaults.borderColor=c?"#ccc":"#36A2EB",d.defaults.color=c?"#fff":"#000",d.defaults.maintainAspectRatio=!1;const m=wg(o.value,n.type),h=t.value.getContext("2d");p==null||p.destroy(),p=new d(h,m),s.value=!1};return sn(()=>{a.value=ws(),hc(document.documentElement,()=>{a.value=ws()},{attributeFilter:["class","data-theme"],attributes:!0}),on(a,c=>i(c),{immediate:!0})}),()=>[n.title?l("div",{class:"chartjs-title"},decodeURIComponent(n.title)):null,s.value?l(Tt,{class:"chartjs-loading",height:192}):null,l("div",{ref:e,class:"chartjs-wrapper",id:n.id,style:{display:s.value?"none":"block"}},l("canvas",{ref:t,height:400}))]}});const rs=$s("VUEPRESS_CODE_TAB_STORE",{});var Cg=R({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=K(n.active),a=hn([]),s=()=>{n.tabId&&(rs.value[n.tabId]=n.data[t.value].id)},o=(c=t.value)=>{t.value=c<a.value.length-1?c+1:0,a.value[t.value].focus()},r=(c=t.value)=>{t.value=c>0?c-1:a.value.length-1,a.value[t.value].focus()},p=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),o()):c.key==="ArrowLeft"&&(c.preventDefault(),r()),n.tabId&&(rs.value[n.tabId]=n.data[t.value].id)},i=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>rs.value[n.tabId]===d);if(c!==-1)return c}return n.active};return sn(()=>{t.value=i(),on(()=>rs.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:h})=>h===c);m!==-1&&(t.value=m)}})}),()=>n.data.length?l("div",{class:"vp-code-tabs"},[l("div",{class:"vp-code-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===t.value;return l("button",{type:"button",ref:h=>{h&&(a.value[d]=h)},class:["vp-code-tab-nav",{active:m}],role:"tab","aria-controls":`codetab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{t.value=d,s()},onKeydown:h=>p(h,d)},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===t.value;return l("div",{class:["vp-code-tab",{active:m}],id:`codetab-${n.id}-${d}`,role:"tabpanel","aria-expanded":m},[l("div",{class:"vp-code-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}});const Oc=({active:n=!1},{slots:e})=>{var t;return l("div",{class:["code-group-item",{active:n}],"aria-selected":n},(t=e.default)==null?void 0:t.call(e))};Oc.displayName="CodeGroupItem";const Tg=R({name:"CodeGroup",slots:Object,setup(n,{slots:e}){const t=K(-1),a=hn([]),s=(p=t.value)=>{t.value=p<a.value.length-1?p+1:0,a.value[t.value].focus()},o=(p=t.value)=>{t.value=p>0?p-1:a.value.length-1,a.value[t.value].focus()},r=(p,i)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),t.value=i):p.key==="ArrowRight"?(p.preventDefault(),s(i)):p.key==="ArrowLeft"&&(p.preventDefault(),o(i))};return()=>{var i;const p=(((i=e.default)==null?void 0:i.call(e))||[]).filter(c=>c.type.name==="CodeGroupItem").map(c=>(c.props===null&&(c.props={}),c));return p.length===0?null:(t.value<0||t.value>p.length-1?(t.value=p.findIndex(c=>"active"in c.props),t.value===-1&&(t.value=0)):p.forEach((c,d)=>{c.props.active=d===t.value}),l("div",{class:"code-group"},[l("div",{class:"code-group-nav"},p.map((c,d)=>{const m=d===t.value;return l("button",{type:"button",ref:h=>{h&&(a.value[d]=h)},class:["code-group-nav-tab",{active:m}],"aria-pressed":m,"aria-expanded":m,onClick:()=>{t.value=d},onKeydown:h=>r(h,d)},c.props.title)})),p]))}}}),Ig='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',Sg='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',Pg='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var xg={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const ho=xg,gp={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Ag=(n,e,t)=>{const a=document.createElement(n);return be(e)&&pe(e).forEach(s=>{if(s.indexOf("data"))a[s]=e[s];else{const o=s.replace("data","");a.dataset[o]=e[s]}}),t&&t.forEach(s=>{a.appendChild(s)}),a},Ar=n=>({...ho,...n,jsLib:Array.from(new Set([...ho.jsLib||[],...n.jsLib||[]])),cssLib:Array.from(new Set([...ho.cssLib||[],...n.cssLib||[]]))}),Mt=(n,e)=>{if(vr(n[e]))return n[e];const t=new Promise(a=>{var o;const s=document.createElement("script");s.src=e,(o=document.querySelector("body"))==null||o.appendChild(s),s.onload=()=>{a()}});return n[e]=t,t},Lg=(n,e)=>{if(e.css&&Array.from(n.childNodes).every(t=>t.nodeName!=="STYLE")){const t=Ag("style",{innerHTML:e.css});n.appendChild(t)}},Og=(n,e,t)=>{const a=t.getScript();if(a&&Array.from(e.childNodes).every(s=>s.nodeName!=="SCRIPT")){const s=document.createElement("script");s.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${n} .vp-code-demo-display').shadowRoot;
${a}}`)),e.appendChild(s)}},Rg=n=>{const e=pe(n),t={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(a=>{const s=e.filter(o=>gp[a].types.includes(o));if(s.length){const o=s[0];t[a]=[n[o].replace(/^\n|\n$/g,""),gp[a].map[o]||o]}}),t.isLegal=(!t.html.length||t.html[1]==="none")&&(!t.js.length||t.js[1]==="none")&&(!t.css.length||t.css[1]==="none"),t},Rc=n=>n.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),Vc=n=>`<div id="app">
${Rc(n)}
</div>`,Vg=n=>`${n.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,Dg=n=>n.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Dc=n=>`(function(exports){var module={};module.exports=exports;${n};return module.exports.__esModule?module.exports.default:module.exports;})({})`,Hg=(n,e)=>{const t=Ar(e),a=n.js[0]||"";return{...t,html:Rc(n.html[0]||""),js:a,css:n.css[0]||"",isLegal:n.isLegal,getScript:()=>{var s;return t.useBabel?((s=window.Babel.transform(a,{presets:["es2015"]}))==null?void 0:s.code)||"":a}}},Ng=/<template>([\s\S]+)<\/template>/u,Mg=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,jg=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,$g=(n,e)=>{const t=Ar(e),a=n.html[0]||"",s=Ng.exec(a),o=Mg.exec(a),r=jg.exec(a),p=s?s[1].replace(/^\n|\n$/g,""):"",[i="",c=""]=o?[o[4].replace(/^\n|\n$/g,""),o[3]]:[],[d="",m=""]=r?[r[4].replace(/^\n|\n$/g,""),r[3]]:[],h=c===""&&(m===""||m==="css");return{...t,html:Vc(p),js:Dg(i),css:d,isLegal:h,jsLib:[t.vue,...t.jsLib],getScript:()=>{var g,w;const k=e.useBabel?((w=(g=window.Babel)==null?void 0:g.transform(i,{presets:["es2015"]}))==null?void 0:w.code)||"":i.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Dc(k)};appOptions.template=\`${p.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},zg=(n,e)=>{const t=Ar(e);return{...t,html:Vc(""),js:Vg(n.js[0]||""),css:n.css[0]||(n.js[0]?n.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:n.isLegal,jsLib:[t.react,t.reactDOM,...t.jsLib],jsx:!0,getScript:()=>{var s,o;const a=((o=(s=window.Babel)==null?void 0:s.transform(n.js[0]||"",{presets:["es2015","react"]}))==null?void 0:o.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Dc(a)}))`}}},jt={},Bg=n=>Promise.all([Mt(jt,n.babel),Mt(jt,n.react),Mt(jt,n.reactDOM)]),Ug=n=>{const e=[Mt(jt,n.vue)];return n.useBabel&&e.push(Mt(jt,n.babel)),Promise.all(e)},Kg=n=>n.useBabel?Mt(jt,n.babel):Promise.resolve();var Fg=R({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const[t,a]=Ca(!1),s=hn(),o=hn(),r=K("0"),p=K(!1),i=y(()=>JSON.parse(n.config?yt(n.config):"{}")),c=y(()=>{const g=JSON.parse(yt(n.code));return Rg(g)}),d=y(()=>n.type==="react"?zg(c.value,i.value):n.type==="vue"?$g(c.value,i.value):Hg(c.value,i.value)),m=y(()=>d.value.isLegal),h=(g=!1)=>{const w=s.value.attachShadow({mode:"open"}),E=document.createElement("div");E.classList.add("code-demo-app"),w.appendChild(E),m.value?(g&&(E.innerHTML=d.value.html),Lg(w,d.value),Og(n.id,w,d.value),r.value="0"):r.value="auto",p.value=!0},k=()=>{switch(n.type){case"react":return Bg(d.value).then(()=>h());case"vue":return Ug(d.value).then(()=>h());default:return Kg(d.value).then(()=>h(!0))}};return yn("beforeprint",()=>{a(!0)}),sn(()=>{setTimeout(()=>{k()},800)}),()=>{var g;return l("div",{class:"vp-code-demo",id:n.id},[l("div",{class:"vp-code-demo-header"},[d.value.isLegal?l("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",t.value?"down":"end"],onClick:()=>{r.value=t.value?"0":`${o.value.clientHeight+13.8}px`,a()}}):null,n.title?l("span",{class:"vp-code-demo-title"},decodeURIComponent(n.title)):null,d.value.isLegal&&d.value.jsfiddle!==!1?l("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[l("input",{type:"hidden",name:"html",value:d.value.html}),l("input",{type:"hidden",name:"js",value:d.value.js}),l("input",{type:"hidden",name:"css",value:d.value.css}),l("input",{type:"hidden",name:"wrap",value:"1"}),l("input",{type:"hidden",name:"panel_js",value:"3"}),l("input",{type:"hidden",name:"resources",value:[...d.value.cssLib,...d.value.jsLib].join(",")}),l("button",{type:"submit",class:"jsfiddle-button",innerHTML:Sg,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!d.value.isLegal||d.value.codepen!==!1?l("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[l("input",{type:"hidden",name:"data",value:JSON.stringify({html:d.value.html,js:d.value.js,css:d.value.css,js_external:d.value.jsLib.join(";"),css_external:d.value.cssLib.join(";"),layout:d.value.codepenLayout,html_pre_processor:c.value?c.value.html[1]:"none",js_pre_processor:c.value?c.value.js[1]:d.value.jsx?"babel":"none",css_pre_processor:c.value?c.value.css[1]:"none",editors:d.value.codepenEditors})}),l("button",{type:"submit",innerHTML:Ig,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),p.value?null:l(Tt,{class:"vp-code-demo-loading"}),l("div",{ref:s,class:"vp-code-demo-display",style:{display:m.value&&p.value?"block":"none"}}),l("div",{class:"vp-code-demo-code-wrapper",style:{height:r.value}},l("div",{ref:o,class:"vp-code-demo-codes"},(g=e.default)==null?void 0:g.call(e)))])}}}),qg=R({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const[t,a]=Ca(!1),s=hn(),o=K("0");return yn("beforeprint",()=>{a(!0)}),()=>{var r,p;return l("div",{class:"vp-md-demo",id:n.id},[l("div",{class:"vp-md-demo-header"},[l("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",t.value?"down":"end"],onClick:()=>{o.value=t.value?"0":`${s.value.clientHeight+13.8}px`,a()}}),n.title?decodeURIComponent(n.title):null]),l("div",{class:"vp-md-demo-display"},(r=e.default)==null?void 0:r.call(e)),l("div",{class:"vp-md-demo-code-wrapper",style:{height:o.value}},l("div",{ref:s,class:"vp-md-demo-codes"},(p=e.code)==null?void 0:p.call(e)))])}}});let Gg={};const Hc=Symbol(""),Wg=()=>gn(Hc),Jg=n=>{n.provide(Hc,Gg)},Yg=(async()=>{}).constructor,Xg=(n,e,t)=>e==="js"?Yg("myChart",`let width,height,option,__echarts_config__;
{
${n}
__echarts_config__={width,height,option};
}
return __echarts_config__;
`)(t):Promise.resolve({option:JSON.parse(n)});var Zg=R({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(n){const e=Wg(),t=K(!0),a=hn();let s;return yn("resize",Ms(()=>s==null?void 0:s.resize(),100)),sn(()=>{Promise.all([u(()=>import("./index-uOBkQLRT.js"),__vite__mapDeps([])),new Promise(o=>setTimeout(o,800))]).then(async([o])=>{var i;await((i=e.setup)==null?void 0:i.call(e)),s=o.init(a.value);const{option:r,...p}=await Xg(yt(n.config),n.type,s);s.resize(p),s.setOption({...e.option,...r}),t.value=!1})}),rt(()=>{s==null||s.dispose()}),()=>[n.title?l("div",{class:"echarts-title"},decodeURIComponent(n.title)):null,l("div",{class:"echarts-wrapper"},[l("div",{ref:a,class:"echarts-container",id:n.id}),t.value?l(Tt,{class:"echarts-loading",height:360}):null])]}}),Lr={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},Qg={...Lr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},n1={...Lr,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-color":"#5c6ac4","font-color":"#000"}}},e1={...Lr,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}};const vp={ant:Qg,vue:e1,pie:n1};let t1={};const Nc=Symbol(""),a1=()=>gn(Nc),s1=n=>{n.provide(Nc,t1)},o1={autoResize:!0,showCompileOutput:!1,clearConsole:!1,layout:"horizontal",ssr:!1};let r1=o1;const Mc=Symbol(""),l1=()=>gn(Mc),p1=n=>{n.provide(Mc,r1)};var i1=R({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(n){let e=null;const t=hn(),a=K(!0),s=K(1),o=y(()=>vp[n.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${n.preset}`),vp.vue)),r=p=>p<419?.8:p>1280?1:.9;return sn(()=>{Promise.all([u(()=>import("./flowchart-966sEcGG.js"),__vite__mapDeps([])),new Promise(p=>setTimeout(p,800))]).then(([{parse:p}])=>{e=p(yt(n.code)),s.value=r(window.innerWidth),a.value=!1,e.draw(n.id,{...o.value,scale:s.value})}),yn("resize",Ms(()=>{if(e){const p=r(window.innerWidth);s.value!==p&&(s.value=p,e.draw(n.id,{...o.value,scale:p}))}},100))}),()=>[a.value?l(Tt,{class:"flowchart-loading",height:192}):null,l("div",{ref:t,class:["flowchart-wrapper",n.preset],id:n.id,style:{display:a.value?"none":"block"}})]}});const c1=()=>{yn("beforeprint",()=>{document.querySelectorAll("details").forEach(n=>{n.open=!0})})},Pt={useMaxWidth:!1},u1=n=>({dark:n,background:n?"#1e1e1e":"#fff",primaryColor:n?"#389d70":"#4abf8a",primaryBorderColor:n?"#389d70":"#4abf8a",primaryTextColor:n?"#fff":"#000",secondaryColor:"#ffb500",secondaryBorderColor:n?"#fff":"#000",secondaryTextColor:n?"#ddd":"#333",tertiaryColor:n?"#282828":"#efeef4",tertiaryBorderColor:n?"#bbb":"#242424",tertiaryTextColor:n?"#ddd":"#333",noteBkgColor:n?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:n?"#f6d365":"#333",lineColor:n?"#d3d3d3":"#333",textColor:n?"#fff":"#242424",mainBkg:n?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:n?"#389d70":"#4abf8a",nodeTextColor:n?"#fff":"#242424",signalTextColor:n?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",attributeBackgroundColorEven:n?"#0d1117":"#fff",attributeBackgroundColorOdd:n?"#161b22":"#f8f8f8",fillType0:n?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var d1=R({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0},title:{type:String,default:""}},setup(n){const{themeVariables:e,...t}=a1(),a=hn(),s=y(()=>yt(n.code)),o=K(""),r=K(!1);let p=!1;const i=async()=>{const[{default:m}]=await Promise.all([u(()=>import("./mermaid.core-jN4kzc37.js").then(h=>h.b9),__vite__mapDeps([])),p?Promise.resolve():(p=!0,new Promise(h=>setTimeout(h,800)))]);m.initialize({theme:"base",themeVariables:{...u1(r.value),...ji(e)?e(r.value):e},flowchart:Pt,sequence:Pt,journey:Pt,gantt:Pt,er:Pt,pie:Pt,...t,startOnLoad:!1}),o.value=(await m.render(n.id,s.value)).svg},c=()=>{const{body:m}=document,h=document.createElement("div");h.classList.add("mermaid-preview"),h.innerHTML=o.value,m.appendChild(h),h.addEventListener("click",()=>{m.removeChild(h)})},d=()=>{const m=`data:image/svg+xml;charset=utf8,${o.value.replace(/<br>/g,"<br />").replace(/%/g,"%25").replace(/"/g,"%22").replace(/'/g,"%27").replace(/&/g,"%26").replace(/#/g,"%23").replace(/{/g,"%7B").replace(/}/g,"%7D").replace(/</g,"%3C").replace(/>/g,"%3E")}`,h=document.createElement("a");h.setAttribute("href",m),h.setAttribute("download",`${n.title?yt(n.title):n.id}.svg`),h.click()};return sn(()=>{r.value=ws(),i(),hc(document.documentElement,()=>{r.value=ws()},{attributeFilter:["class","data-theme"],attributes:!0}),on(r,()=>i())}),()=>[l("div",{class:"mermaid-actions"},[l("button",{class:"preview-button",onClick:()=>c(),title:"preview",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1316 1024" fill="currentColor"><path d="M658.286 0C415.89 0 0 297.106 0 512c0 214.82 415.89 512 658.286 512 242.322 0 658.285-294.839 658.285-512S900.608 0 658.286 0zm0 877.714c-161.573 0-512-221.769-512-365.714 0-144.018 350.427-365.714 512-365.714 161.572 0 512 217.16 512 365.714s-350.428 365.714-512 365.714z"/><path d="M658.286 292.571a219.429 219.429 0 1 0 0 438.858 219.429 219.429 0 0 0 0-438.858zm0 292.572a73.143 73.143 0 1 1 0-146.286 73.143 73.143 0 0 1 0 146.286z"/></svg>'}),l("button",{class:"download-button",onClick:()=>d(),title:"download",innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="currentColor"><path d="M828.976 894.125H190.189c-70.55 0-127.754-57.185-127.754-127.753V606.674c0-17.634 14.31-31.933 31.933-31.933h63.889c17.634 0 31.932 14.299 31.932 31.933v95.822c0 35.282 28.596 63.877 63.877 63.877h511.033c35.281 0 63.877-28.595 63.877-63.877v-95.822c0-17.634 14.298-31.933 31.943-31.933h63.878c17.635 0 31.933 14.299 31.933 31.933v159.7c0 70.566-57.191 127.751-127.754 127.751zM249.939 267.51c12.921-12.92 33.885-12.92 46.807 0l148.97 148.972V94.893c0-17.634 14.302-31.947 31.934-31.947h63.876c17.638 0 31.946 14.313 31.946 31.947v321.589l148.97-148.972c12.922-12.92 33.876-12.92 46.797 0l46.814 46.818c12.922 12.922 12.922 33.874 0 46.807L552.261 624.93c-1.14 1.138-21.664 13.684-42.315 13.693-20.877.01-41.88-12.542-43.021-13.693L203.122 361.135c-12.923-12.934-12.923-33.885 0-46.807l46.817-46.818z"/></svg>'})]),l("div",{ref:a,class:"mermaid-wrapper"},o.value?l("div",{class:"mermaid-content",innerHTML:o.value}):l(Tt,{class:"mermaid-loading",height:96}))]}});const jc=({title:n="",link:e})=>l("div",{class:"vp-playground"},[l("div",{class:"vp-playground-header"},[n?l("div",{class:"vp-playground-title"},decodeURIComponent(n)):null,l("div",{class:"vp-playground-actions"},[l("a",{class:"vp-playground-action",href:decodeURIComponent(e),target:"_blank",innerHTML:Pg})])]),l("div",{class:"vp-playground-container"},l("iframe",{src:decodeURIComponent(e)}))]);jc.displayName="Playground";const ko=$s("VUEPRESS_TAB_STORE",{});var m1=R({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(n,{slots:e}){const t=K(n.active),a=hn([]),s=()=>{n.tabId&&(ko.value[n.tabId]=n.data[t.value].id)},o=(c=t.value)=>{t.value=c<a.value.length-1?c+1:0,a.value[t.value].focus()},r=(c=t.value)=>{t.value=c>0?c-1:a.value.length-1,a.value[t.value].focus()},p=(c,d)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),t.value=d):c.key==="ArrowRight"?(c.preventDefault(),o()):c.key==="ArrowLeft"&&(c.preventDefault(),r()),s()},i=()=>{if(n.tabId){const c=n.data.findIndex(({id:d})=>ko.value[n.tabId]===d);if(c!==-1)return c}return n.active};return sn(()=>{t.value=i(),on(()=>ko.value[n.tabId],(c,d)=>{if(n.tabId&&c!==d){const m=n.data.findIndex(({id:h})=>h===c);m!==-1&&(t.value=m)}})}),()=>n.data.length?l("div",{class:"vp-tabs"},[l("div",{class:"vp-tabs-nav",role:"tablist"},n.data.map(({id:c},d)=>{const m=d===t.value;return l("button",{type:"button",ref:h=>{h&&(a.value[d]=h)},class:["vp-tab-nav",{active:m}],role:"tab","aria-controls":`tab-${n.id}-${d}`,"aria-selected":m,onClick:()=>{t.value=d,s()},onKeydown:h=>p(h,d)},e[`title${d}`]({value:c,isActive:m}))})),n.data.map(({id:c},d)=>{const m=d===t.value;return l("div",{class:["vp-tab",{active:m}],id:`tab-${n.id}-${d}`,role:"tabpanel","aria-expanded":m},[l("div",{class:"vp-tab-title"},e[`title${d}`]({value:c,isActive:m})),e[`tab${d}`]({value:c,isActive:m})])})]):null}});const h1=n=>JSON.parse(decodeURIComponent(n));var k1=R({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(n){const{vueVersion:e=Pi,vueRuntimeDevUrl:t=`https://unpkg.com/@vue/runtime-dom@${e}/dist/runtime-dom.esm-browser.js`,vueRuntimeProdUrl:a=`https://unpkg.com/@vue/runtime-dom@${e}/dist/runtime-dom.esm-browser.prod.js`,vueServerRendererUrl:s=`https://unpkg.com/@vue/server-renderer@${e}/dist/server-renderer.esm-browser.js`,...o}=l1(),r=K(!0),p=hn(),i=hn(),c=hn(),d=y(()=>Do({},o,h1(n.settings))),m=async()=>{const[{useStore:h,useVueImportMap:k,Repl:g},{default:w}]=await Promise.all([u(()=>import("./vue-repl-C7CkvEHG.js"),__vite__mapDeps([533,534])),u(()=>import("./codemirror-editor-HpcVK8IU.js"),__vite__mapDeps([535,534]))]);p.value=g,c.value=w;const{importMap:E,vueVersion:_}=k({runtimeDev:t,runtimeProd:a,serverRenderer:s});i.value=h({builtinImportMap:E,vueVersion:_},decodeURIComponent(n.files))};return sn(async()=>{await m(),r.value=!1}),()=>[l("div",{class:"vue-playground-wrapper"},[n.title?l("div",{class:"header"},decodeURIComponent(n.title)):null,l("div",{class:"repl-container"},[r.value?l(Tt,{class:"preview-loading",height:192}):null,p.value?l(p.value,{...d.value,editor:c.value,store:i.value}):null])])]}});const f1=Yn({enhance:({app:n})=>{n.component("ChartJS",Eg),n.component("CodeTabs",Cg),Un("CodeGroup",n)||n.component("CodeGroup",Tg),Un("CodeGroupItem",n)||n.component("CodeGroupItem",Oc),n.component("CodeDemo",Fg),n.component("MdDemo",qg),n.component("ECharts",Zg),Jg(n),n.component("FlowChart",i1),s1(n),n.component("Mermaid",d1),n.component("Playground",jc),n.component("Tabs",m1),p1(n),n.component("VuePlayground",k1)},setup:()=>{c1()}});let g1={};const $c=Symbol(""),v1=()=>gn($c),_1=n=>{n.provide($c,g1)},y1='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',b1=n=>_n(n)?Array.from(document.querySelectorAll(n)):n.map(e=>Array.from(document.querySelectorAll(e))).flat(),zc=n=>new Promise((e,t)=>{n.complete?e({type:"image",element:n,src:n.src,width:n.naturalWidth,height:n.naturalHeight,alt:n.alt,msrc:n.src}):(n.onload=()=>e(zc(n)),n.onerror=a=>t(a))}),w1=n=>{const{isSupported:e,toggle:t}=br();n.on("uiRegister",()=>{e.value&&n.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{t()}}),n.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(a,s)=>{a.setAttribute("download",""),a.setAttribute("target","_blank"),a.setAttribute("rel","noopener"),s.on("change",()=>{a.setAttribute("href",s.currSlide.data.src)})}}),n.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(a,s)=>{const o=[];let r=-1;for(let p=0;p<s.getNumItems();p++){const i=document.createElement("div");i.className="photo-swipe-bullet",i.onclick=c=>{s.goTo(o.indexOf(c.target))},o.push(i),a.appendChild(i)}s.on("change",()=>{r>=0&&o[r].classList.remove("active"),o[s.currIndex].classList.add("active"),r=s.currIndex})}})})},E1=(n,e,t=!0)=>u(()=>import("./photoswipe.esm-SzV8tJDW.js"),__vite__mapDeps([])).then(({default:a})=>{let s=null;const o=n.map(r=>({html:y1,element:r,msrc:r.src}));return n.forEach((r,p)=>{const i=()=>{s==null||s.destroy(),s=new a({preloaderDelay:0,showHideAnimationType:"zoom",...e,dataSource:o,index:p,...t?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),w1(s),s.addFilter("thumbEl",()=>r),s.addFilter("placeholderSrc",()=>r.src),s.init()};r.getAttribute("photo-swipe")||(r.style.cursor="zoom-in",r.addEventListener("click",()=>{i()}),r.addEventListener("keypress",({key:c})=>{c==="Enter"&&i()}),r.setAttribute("photo-swipe","")),zc(r).then(c=>{o.splice(p,1,c),s==null||s.refreshSlideContent(p)})}),t?yn("wheel",()=>{s==null||s.close()}):()=>{}}),C1=({selector:n,locales:e,delay:t=500,scrollToClose:a=!0})=>{const s=v1(),o=ke(e),r=fn(),p=bn();let i=null;const c=()=>{const{photoSwipe:d}=p.value;d!==!1&&ot().then(()=>lc(t)).then(async()=>{const m=_n(d)?d:n;i=await E1(b1(m),{...s,...o.value},a)})};sn(()=>{c(),on(()=>r.value.path,()=>{i==null||i(),c()})}),rt(()=>{i==null||i()})};var T1={"/":{closeTitle:"닫기",downloadTitle:"이미지 다운로드",fullscreenTitle:"전체 화면 전환",zoomTitle:"확대/축소",arrowPrevTitle:"이전 (왼쪽 화살표)",arrowNextTitle:"다음 (오른쪽 화살표)"}};const I1=".theme-hope-content :not(a) > img:not([no-view])",S1=T1,P1=800,x1=!0,A1=Yn({enhance:({app:n})=>{_1(n)},setup:()=>{C1({selector:I1,delay:P1,locales:S1,scrollToClose:x1})}});function L1(n){return{all:n=n||new Map,on:function(e,t){var a=n.get(e);a?a.push(t):n.set(e,[t])},off:function(e,t){var a=n.get(e);a&&(t?a.splice(a.indexOf(t)>>>0,1):n.set(e,[]))},emit:function(e,t){var a=n.get(e);a&&a.slice().map(function(s){s(t)}),(a=n.get("*"))&&a.slice().map(function(s){s(e,t)})}}}const O1=()=>{navigator.serviceWorker.getRegistration().then(n=>{n&&n.active&&(n==null||n.addEventListener("updatefound",()=>{window.location.reload(!0)}))})},R1=async(n,e={},t=!0)=>{const{register:a}=await u(()=>import("./index-DTEEl-sV.js"),__vite__mapDeps([]));a(n,{ready(s){var o;t&&console.info("[Service Worker]: active"),(o=e.ready)==null||o.call(e,s)},registered(s){var o;t&&console.log("[Service Worker]: registered"),(o=e.registered)==null||o.call(e,s)},cached(s){var o;t&&console.log("[Service Worker]: cached"),(o=e.cached)==null||o.call(e,s)},async updatefound(s){var o;await navigator.serviceWorker.getRegistration()&&(t&&console.log("[Service Worker]: update found"),(o=e.updatefound)==null||o.call(e,s))},updated(s){var o;t&&console.log("[Service Worker]: updated"),(o=e.updated)==null||o.call(e,s)},offline(){var s;t&&console.log("[Service Worker]: offline"),(s=e.offline)==null||s.call(e)},error(s){var o;t&&console.error("[Service Worker]: ",s),(o=e.error)==null||o.call(e,s)}})},V1=n=>{const e=n.waiting;if(!e)return;const t=new MessageChannel;e.postMessage({type:"SKIP_WAITING"},[t.port2])},Bc=Symbol(""),D1=()=>{const n=gn(Bc);if(!n)throw new Error("usePwaEvent() is called without provider.");return n},H1=async(n,e)=>R1(Tn(n),{ready(t){e.emit("ready",t)},registered(t){e.emit("registered",t)},cached(t){e.emit("cached",t)},updatefound(t){e.emit("updatefound",t)},updated(t){const a="service-worker-version",s=Number(localStorage.getItem(a)||0);localStorage.setItem(a,(s+1).toString()),localStorage.removeItem("manifest"),e.emit("updated",t)},offline(){e.emit("offline")},error(t){e.emit("error",t)}}),N1=(n,e=!1)=>{const t=L1();oe(Bc,t),sn(async()=>{var s;let a=!1;(s=navigator.serviceWorker)!=null&&s.controller&&navigator.serviceWorker.addEventListener("controllerchange",()=>{a||(a=!0,window.location.reload())}),e&&O1(),await H1(n,t)})},M1=()=>{sn(()=>{if(window.matchMedia("(display-mode: standalone)").matches){const e=document.head.querySelector('meta[name="viewport"]');if(e){e.setAttribute("content","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover");return}const t=document.createElement("meta");t.name="viewport",t.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",document.head.appendChild(t)}})},Uc=({name:n="",color:e="currentColor"},{slots:t})=>{var a;return l("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${n}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":`${n} icon`},(a=t.default)==null?void 0:a.call(t))};Uc.displayName="SVGWrapper";const Kc=()=>l(Uc,{name:"update"},()=>l("path",{d:"M949.949 146.25v255.826c0 21.981-13.989 35.97-35.97 35.97H658.154c-13.988 0-25.983-7.992-33.973-21.981-5.997-13.989-4-27.977 7.991-39.97l79.942-77.946c-55.954-51.973-121.918-77.955-199.863-77.955-37.975 0-75.95 8.002-113.924 21.99-37.975 15.985-67.948 37.976-91.934 63.957-25.982 23.987-47.973 53.96-63.957 91.934-29.983 73.955-29.983 153.895 0 227.85 15.984 37.976 37.975 67.947 63.957 91.934 23.986 25.982 53.959 47.973 91.934 63.956 37.974 13.989 75.95 21.991 113.924 21.991 45.967 0 87.942-9.998 127.913-29.982 41.976-17.99 75.951-45.967 101.931-83.943 7.993-4 11.994-5.995 13.989-5.995 5.997 0 9.998 1.994 13.988 5.995l77.958 77.946c3.989 4 5.986 7.993 5.986 11.994 0 1.994-1.996 5.995-3.99 11.994-43.973 51.962-93.941 91.934-151.9 117.914-53.958 25.983-115.92 39.972-185.874 39.972-61.961 0-119.921-11.984-169.89-33.973-57.96-25.985-105.923-57.963-139.896-93.943-35.98-33.972-67.958-81.936-93.94-139.897-45.967-101.93-45.967-237.846 0-339.777 25.982-57.96 57.96-105.923 93.94-139.896 33.973-35.98 81.936-67.958 139.896-93.94 49.968-21.99 107.928-33.974 169.89-33.974 55.963 0 109.923 9.988 161.885 29.973 53.97 21.99 101.933 51.963 139.908 89.938l73.954-73.944c9.987-9.998 23.987-13.988 39.971-8.002 13.988 8.002 21.98 19.995 21.98 33.984z"}));Kc.displayName="UpdateIcon";const j1=R({name:"PwaReadyPopup",props:{locales:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=ke(n.locales),a=hn(),s=y(()=>!!a.value),o=()=>{a.value&&(V1(a.value),a.value=void 0)};return sn(()=>{D1().on("updated",p=>{p&&(a.value=p)})}),()=>l(je,{name:"popup"},()=>{var r;return((r=e.default)==null?void 0:r.call(e,{isReady:s.value,reload:o}))||(s.value?l("button",{type:"button",class:"sw-update-popup",tabindex:0,onClick:()=>o()},[t.value.update,l("span",{class:"icon-wrapper"},l(Kc))]):null)})}});var $1={"/":{install:"설치",iOSInstall:"공유 버튼을 누르고 '홈 화면에 추가'를 누르세요",cancel:"취소",close:"닫기",prevImage:"이전 이미지",nextImage:"다음 이미지",desc:"설명",feature:"주요 기능",explain:"이 앱은 PC 또는 모바일 장치에 설치할 수 있습니다. 이렇게 하면 이 웹 앱은 다른 설치된 앱과 마찬가지로 표시되고 작동합니다. 앱 목록에서 찾을 수 있으며 홈 화면, 시작 메뉴, 작업 표시줄에 고정할 수 있습니다. 설치된 웹 앱은 다른 앱과 안전하게 상호 작용할 수 있습니다.",hint:"새로운 콘텐츠를 찾았습니다.",update:"새로운 콘텐츠가 있습니다."}};const z1=$1,B1=()=>l(j1,{locales:z1}),U1=Yn({setup:()=>{N1("service-worker.js",!1),M1()},rootComponents:[B1]}),K1=()=>l(rn,{name:"heading"},()=>l("path",{d:"M250.4 704.6H64V595.4h202.4l26.2-166.6H94V319.6h214.4L352 64h127.8l-43.6 255.4h211.2L691 64h126.2l-43.6 255.4H960v109.2H756.2l-24.6 166.6H930v109.2H717L672 960H545.8l43.6-255.4H376.6L333 960H206.8l43.6-255.4zm168.4-276L394 595.4h211.2l24.6-166.6h-211z"}));K1.displayName="HeadingIcon";const F1=()=>l(rn,{name:"heart"},()=>l("path",{d:"M1024 358.156C1024 195.698 892.3 64 729.844 64c-86.362 0-164.03 37.218-217.844 96.49C458.186 101.218 380.518 64 294.156 64 131.698 64 0 195.698 0 358.156 0 444.518 37.218 522.186 96.49 576H96l320 320c32 32 64 64 96 64s64-32 96-64l320-320h-.49c59.272-53.814 96.49-131.482 96.49-217.844zM841.468 481.232 517.49 805.49a2981.962 2981.962 0 0 1-5.49 5.48c-1.96-1.95-3.814-3.802-5.49-5.48L182.532 481.234C147.366 449.306 128 405.596 128 358.156 128 266.538 202.538 192 294.156 192c47.44 0 91.15 19.366 123.076 54.532L512 350.912l94.768-104.378C638.696 211.366 682.404 192 729.844 192 821.462 192 896 266.538 896 358.156c0 47.44-19.368 91.15-54.532 123.076z"}));F1.displayName="HeartIcon";const q1=()=>l(rn,{name:"history"},()=>l("path",{d:"M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512zm0-896a384 384 0 1 0 384 384 384 384 0 0 0-384-384zm192 448H512a64 64 0 0 1-64-64V320a64 64 0 0 1 128 0v128h128a64 64 0 0 1 0 128z"}));q1.displayName="HistoryIcon";const G1=()=>l(rn,{name:"title"},()=>l("path",{d:"M512 256c70.656 0 134.656 28.672 180.992 75.008A254.933 254.933 0 0 1 768 512c0 83.968-41.024 157.888-103.488 204.48C688.96 748.736 704 788.48 704 832c0 105.984-86.016 192-192 192-106.048 0-192-86.016-192-192h128a64 64 0 1 0 128 0 64 64 0 0 0-64-64 255.19 255.19 0 0 1-181.056-75.008A255.403 255.403 0 0 1 256 512c0-83.968 41.024-157.824 103.488-204.544C335.04 275.264 320 235.584 320 192A192 192 0 0 1 512 0c105.984 0 192 85.952 192 192H576a64.021 64.021 0 0 0-128 0c0 35.328 28.672 64 64 64zM384 512c0 70.656 57.344 128 128 128s128-57.344 128-128-57.344-128-128-128-128 57.344-128 128z"}));G1.displayName="TitleIcon";const Or=()=>l(rn,{name:"search"},()=>l("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));Or.displayName="SearchIcon";const Fc=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[l("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},l("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),l("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},l("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),l("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},l("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);Fc.displayName="LoadingIcon";const qc=({hint:n})=>l("div",{class:"search-pro-result-wrapper loading"},[l(Fc),n]);qc.displayName="SearchLoading";const W1='<svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>';var J1={0:{"/":{0:"카",1:"테",2:"고",3:"리",4:":",5:" ",6:"$",7:"c",8:"o",9:"n",10:"t",11:"e",12:"n",13:"t"}},1:{"/":{0:"태",1:"그",2:":",3:" ",4:"$",5:"c",6:"o",7:"n",8:"t",9:"e",10:"n",11:"t"}}},Y1={"/":{cancel:"취소",placeholder:"Searching",search:"검색",searching:"검색 중",defaultTitle:"문서",select:"선택",navigate:"이동",autocomplete:"자동 완성",exit:"닫기",queryHistory:"검색 기록",resultHistory:"결과 기록",emptyHistory:"검색 기록 지우기",emptyResult:"결과를 찾을 수 없습니다",loading:"검색 인덱스를 로드하는 중..."}},X1={searchDelay:150,suggestDelay:0,queryHistoryCount:5,resultHistoryCount:5,hotKeys:[{key:"k",ctrl:!0},{key:"/",ctrl:!0}],worker:"search-pro.worker.js"};const Rr=X1,O_=J1,Gc=Rr.hotKeys,Vr=Y1;new URL("data:text/javascript;base64,aW1wb3J0e3NlYXJjaCBhcyBPLGdldFN0b3JlZEZpZWxkcyBhcyB6LGF1dG9TdWdnZXN0IGFzIEMsbG9hZEpTT05JbmRleCBhcyBGfWZyb20ic2xpbXNlYXJjaCI7aW1wb3J0IFQgZnJvbSJAdGVtcC9zZWFyY2gtcHJvL2luZGV4LmpzIjtpbXBvcnR7ZW50cmllcyBhcyAkfWZyb20iQHZ1ZXByZXNzL2hlbHBlci9jbGllbnQiO2NvbnN0IFM9KGUsbCk9Pntjb25zdCBpPWUudG9Mb3dlckNhc2UoKSxvPWwudG9Mb3dlckNhc2UoKSx0PVtdO2xldCBzPTAsbj0wO2NvbnN0IHI9KGMsZz0hMSk9PntsZXQgdT0iIjtuPT09MD91PWMubGVuZ3RoPjIwP2DigKYgJHtjLnNsaWNlKC0yMCl9YDpjOmc/dT1jLmxlbmd0aCtuPjEwMD9gJHtjLnNsaWNlKDAsMTAwLW4pfeKApiBgOmM6dT1jLmxlbmd0aD4yMD9gJHtjLnNsaWNlKDAsMjApfSDigKYgJHtjLnNsaWNlKC0yMCl9YDpjLHUmJnQucHVzaCh1KSxuKz11Lmxlbmd0aCxnfHwodC5wdXNoKFsibWFyayIsbF0pLG4rPWwubGVuZ3RoLG4+PTEwMCYmdC5wdXNoKCIg4oCmIikpfTtsZXQgcD1pLmluZGV4T2YobyxzKTtpZihwPT09LTEpcmV0dXJuIG51bGw7Zm9yKDtwPj0wOyl7Y29uc3QgYz1wK28ubGVuZ3RoO2lmKHIoZS5zbGljZShzLHApKSxzPWMsbj4xMDApYnJlYWs7cD1pLmluZGV4T2YobyxzKX1yZXR1cm4gbjwxMDAmJnIoZS5zbGljZShzKSwhMCksdH0sYj0oZSxsKT0+bC5jb250ZW50cy5yZWR1Y2UoKGksWyxvXSk9PmkrbywwKS1lLmNvbnRlbnRzLnJlZHVjZSgoaSxbLG9dKT0+aStvLDApLHc9KGUsbCk9Pk1hdGgubWF4KC4uLmwuY29udGVudHMubWFwKChbLGldKT0+aSkpLU1hdGgubWF4KC4uLmUuY29udGVudHMubWFwKChbLGldKT0+aSkpLE09KGUsbCxpPXt9KT0+e2NvbnN0IG89e307cmV0dXJuIE8obCxlLHtib29zdDp7aDoyLHQ6MSxjOjR9LHByZWZpeDohMCwuLi5pfSkuZm9yRWFjaCh0PT57Y29uc3R7aWQ6cyx0ZXJtczpuLHNjb3JlOnJ9PXQscD1zLmluY2x1ZGVzKCJAIiksYz1zLmluY2x1ZGVzKCIjIiksW2csdV09cy5zcGxpdCgvWyNAXS8pLGY9TnVtYmVyKGcpLG09bi5zb3J0KChoLGEpPT5oLmxlbmd0aC1hLmxlbmd0aCkuZmlsdGVyKChoLGEpPT5uLnNsaWNlKGErMSkuZXZlcnkoZD0+IWQuaW5jbHVkZXMoaCkpKSx7Y29udGVudHM6eX09b1tmXT8/PXt0aXRsZToiIixjb250ZW50czpbXX07aWYocCl5LnB1c2goW3t0eXBlOiJjdXN0b21GaWVsZCIsaWQ6ZixpbmRleDp1LGRpc3BsYXk6bS5tYXAoaD0+dC5jLm1hcChhPT5TKGEsaCkpKS5mbGF0KCkuZmlsdGVyKGg9PmghPT1udWxsKX0scl0pO2Vsc2V7Y29uc3QgaD1tLm1hcChhPT5TKHQuaCxhKSkuZmlsdGVyKGE9PmEhPT1udWxsKTtpZihoLmxlbmd0aCYmeS5wdXNoKFt7dHlwZTpjPyJoZWFkaW5nIjoidGl0bGUiLGlkOmYsLi4uYyYme2FuY2hvcjp1fSxkaXNwbGF5Omh9LHJdKSwidCJpbiB0KWZvcihjb25zdCBhIG9mIHQudCl7Y29uc3QgZD1tLm1hcCh4PT5TKGEseCkpLmZpbHRlcih4PT54IT09bnVsbCk7ZC5sZW5ndGgmJnkucHVzaChbe3R5cGU6InRleHQiLGlkOmYsLi4uYyYme2FuY2hvcjp1fSxkaXNwbGF5OmR9LHJdKX19fSksJChvKS5zb3J0KChbLHRdLFssc10pPT5TRUFSQ0hfUFJPX1NPUlRfU1RSQVRFR1k9PT0idG90YWwiP2IodCxzKTp3KHQscykpLm1hcCgoW3Qse3RpdGxlOnMsY29udGVudHM6bn1dKT0+e2lmKCFzKXtjb25zdCByPXoobCx0KTtyJiYocz1yLmgpfXJldHVybnt0aXRsZTpzLGNvbnRlbnRzOm4ubWFwKChbcl0pPT5yKX19KX0sUj0oZSxsLGk9e30pPT5DKGwsZSx7ZnV6enk6LjIsbWF4RnV6enk6MywuLi5pfSkubWFwKCh7c3VnZ2VzdGlvbjpvfSk9Pm8pO3NlbGYub25tZXNzYWdlPWFzeW5jKHtkYXRhOnt0eXBlOmU9ImFsbCIscXVlcnk6bCxsb2NhbGU6aSxvcHRpb25zOm8saWQ6dH19KT0+e2NvbnN0e2RlZmF1bHQ6c309YXdhaXQgVFtpPz8iLyJdKCksbj1GKHMse2ZpZWxkczpbImgiLCJ0IiwiYyJdLHN0b3JlRmllbGRzOlsiaCIsInQiLCJjIl19KTtlPT09InN1Z2dlc3QiP3NlbGYucG9zdE1lc3NhZ2UoW2UsdCxSKGwsbixvKV0pOmU9PT0ic2VhcmNoIj9zZWxmLnBvc3RNZXNzYWdlKFtlLHQsTShsLG4sbyldKTpzZWxmLnBvc3RNZXNzYWdlKHtzdWdnZXN0aW9uczpbZSx0LFIobCxuLG8pXSxyZXN1bHRzOltlLHQsTShsLG4sbyldfSl9OwovLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAK",import.meta.url);const Z1=()=>{const n=new Worker(`/${Rr.worker}`,{}),e={suggest:[],search:[],all:[]};return n.addEventListener("message",({data:t})=>{const[a,s,o]=t,r=e[a],p=r.findIndex(({id:i})=>i===s);if(p>-1){const{resolve:i}=r[p];r.forEach((c,d)=>{d>p&&c.reject(new Error("Search has been canceled."))}),e[a]=r.slice(p+1),i(o)}}),{suggest:(t,a,s)=>new Promise((o,r)=>{const p=Date.now();n.postMessage({type:"suggest",id:p,query:t,locale:a,options:s}),e.suggest.push({id:p,resolve:o,reject:r})}),search:(t,a,s)=>new Promise((o,r)=>{const p=Date.now();n.postMessage({type:"search",id:p,query:t,locale:a,options:s}),e.search.push({id:p,resolve:o,reject:r})}),all:(t,a,s)=>new Promise((o,r)=>{const p=Date.now();n.postMessage({type:"all",id:p,query:t,locale:a,options:s}),e.all.push({id:p,resolve:o,reject:r})}),terminate:()=>{n.terminate(),vk(e).forEach(t=>{t.forEach(({reject:a})=>a(new Error("Worker has been terminated.")))})}}};let Q1={};const Wc=Symbol(""),n2=()=>{const n=Te(),{locales:e={},...t}=gn(Wc);return y(()=>({...t,...e[n.value]||{}}))},e2=n=>{n.provide(Wc,Q1)},t2=(n,e=!1)=>{const t=K(0),a=y(()=>n.value[t.value]),s=()=>{t.value=t.value>0?t.value-1:n.value.length-1},o=()=>{t.value=t.value<n.value.length-1?t.value+1:0};return on(n,()=>{e||(t.value=0)}),{index:t,item:a,prev:s,next:o}},a2=n=>n instanceof Element?document.activeElement===n&&(["TEXTAREA","SELECT","INPUT"].includes(n.tagName)||n.hasAttribute("contenteditable")):!1,s2=n=>Gc.some(e=>{const{key:t,ctrl:a=!1,shift:s=!1,alt:o=!1,meta:r=!1}=e;return t===n.key&&a===n.ctrlKey&&s===n.shiftKey&&o===n.altKey&&r===n.metaKey}),o2='<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>',r2='<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>',l2='<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>',p2='<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>',Dr=Symbol(""),i2=()=>{const n=K(!1);oe(Dr,n)},c2=n=>{const e=K([]);{const t=n2(),a=fn(),s=Te();sn(()=>{const{suggest:o,terminate:r}=Z1(),p=Ms(i=>{i?o(i,s.value,t.value).then(c=>{var d,m;return((m=(d=t.value).suggestionsFilter)==null?void 0:m.call(d,c,i,s.value,a.value))??c}).then(c=>{e.value=c.length?bt(c[0],i)&&!c[0].slice(i.length).includes(" ")?c:[i,...c]:[]}).catch(c=>{console.error(c)}):e.value=[]},Rr.suggestDelay);on([n,s],()=>p(n.value),{immediate:!0}),rt(()=>{r()})})}return{suggestions:e}},fo=Gc[0];var u2=R({name:"SearchBox",setup(){const n=ke(Vr),e=gn(Dr),t=K(!1),a=y(()=>fo?[(t.value?["⌃","⇧","⌥","⌘"]:["Ctrl","Shift","Alt","Win"]).filter((s,o)=>fo[["ctrl","shift","alt","meta"][o]]),fo.key.toUpperCase()]:null);return yn("keydown",s=>{!e.value&&s2(s)&&!a2(s.target)&&(s.preventDefault(),e.value=!0)}),sn(()=>{const{userAgent:s}=navigator;t.value=cf(s)||pf(s)||vc(s)}),()=>[l("button",{type:"button",class:"search-pro-button","aria-label":n.value.search,onClick:()=>{e.value=!0}},[l(Or),l("div",{class:"search-pro-placeholder"},n.value.search),a.value?l("div",{class:"search-pro-key-hints"},a.value.map(s=>l("kbd",{class:"search-pro-key"},s))):null])]}});const d2=oi({loader:()=>u(()=>import("./SearchResult-DmqtLJmD.js"),__vite__mapDeps([])),loadingComponent:()=>{const n=ke(Vr);return l(qc,{hint:n.value.loading})}});var m2=R({name:"SearchModal",setup(){const n=gn(Dr),e=Jt(),t=of(),a=ke(Vr),s=K(""),{suggestions:o}=c2(s),r=K(!1),{index:p,prev:i,next:c}=t2(o),d=hn(),m=hn(),h=(k=p.value)=>{s.value=o.value[k],r.value=!1};return yn("keydown",k=>{r.value?k.key==="ArrowUp"?i():k.key==="ArrowDown"?c():k.key==="Enter"?h():k.key==="Escape"&&(r.value=!1):k.key==="Escape"&&(n.value=!1)}),sn(()=>{const k=wr(document.body);on(n,async g=>{var w;k.value=g,g&&(await ot(),(w=d.value)==null||w.focus())}),Rk(m,()=>{r.value=!1}),rt(()=>{k.value=!1})}),()=>n.value?l("div",{class:"search-pro-modal-wrapper"},[l("div",{class:"search-pro-mask",onClick:()=>{n.value=!1,s.value=""}}),l("div",{class:"search-pro-modal"},[l("div",{class:"search-pro-box"},[l("form",[l("label",{for:"search-pro","aria-label":a.value.search},l(Or)),l("input",{ref:d,type:"search",class:"search-pro-input",id:"search-pro",placeholder:a.value.placeholder,spellcheck:"false",autocapitalize:"off",autocomplete:"off",autocorrect:"off",name:`${e.value.title}-search`,value:s.value,"aria-controls":"search-pro-results",onKeydown:k=>{const{key:g}=k;o.value.length&&(g==="Tab"?(h(),k.preventDefault()):(g==="ArrowDown"||g==="ArrowUp"||g==="Escape")&&k.preventDefault())},onInput:({target:k})=>{s.value=k.value,r.value=!0,p.value=0}}),s.value?l("button",{type:"reset",class:"search-pro-clear-button",innerHTML:W1,onClick:()=>{s.value=""}}):null,r.value&&o.value.length?l("ul",{class:"search-pro-suggestions",ref:m},o.value.map((k,g)=>l("li",{class:["search-pro-suggestion",{active:g===p.value}],onClick:()=>{h(g)}},[l("kbd",{class:"search-pro-auto-complete",title:`Tab ${a.value.autocomplete}`},"Tab"),k]))):null]),l("button",{type:"button",class:"search-pro-close-button",onClick:()=>{n.value=!1,s.value=""}},a.value.cancel)]),l(d2,{query:s.value,isFocusing:!r.value,onClose:()=>{n.value=!1},onUpdateQuery:k=>{s.value=k}}),t.value?null:l("div",{class:"search-pro-hints"},[l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:o2}),a.value.select]),l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:l2}),l("kbd",{innerHTML:r2}),a.value.navigate]),l("span",{class:"search-pro-hint"},[l("kbd",{innerHTML:p2}),a.value.exit])])])]):null}}),h2=Yn({enhance({app:n}){e2(n),n.component("SearchBox",u2)},setup(){i2()},rootComponents:[m2]});const Jc=()=>{const n=fn();return y(()=>n.value.readingTime??null)},Yc=(n,e)=>{const{minutes:t,words:a}=n,{less1Minute:s,word:o,time:r}=e;return{time:t<1?s:r.replace("$time",Math.round(t).toString()),words:o.replace("$word",a.toString())}};var _p={"/":{word:"약 $word 단어",less1Minute:"1분 미만",time:"약 $time 분"}};const yp={words:"",time:""},jo=typeof _p>"u"?null:_p,Xc=()=>jo?ke(jo):y(()=>null),k2=()=>{if(typeof jo>"u")return y(()=>yp);const n=Jc(),e=Xc();return y(()=>n.value&&e.value?Yc(n.value,e.value):yp)},it=()=>Ac(),pn=()=>sg(),It=()=>{const n=it();return y(()=>!!n.value.pure)},go=()=>null,f2="719px",g2="1440px",v2="true",Hr={mobileBreakPoint:f2,pcBreakPoint:g2,enableThemeColor:v2,"theme-1":"#2196f3","theme-2":"#f26d6d","theme-3":"#3eaf7c","theme-4":"#fb9b5f"},Nr={"/00-Howto/":["","01-Overview",{text:"Guides",prefix:"02-Guide/",collapsible:!0,children:["02-Contribute","04-Template","01-Start"]},{text:"Tips",prefix:"03-Tips/",collapsible:!0,children:["Chart","CodeBlock","Link","Tabs","TipBox","PlantUML"]}],"/01-Infrastructure/":["",{text:"Container",prefix:"Container/",collapsible:!0,children:["container_runtime_sheet","rancher-desktop-disk-resize-mac","rancher-desktop-insecure-setup-mac"]},{text:"Linux",prefix:"Linux/",collapsible:!0,children:[{text:"Trouble Shooting",prefix:"TroubleShooting/",collapsible:!0,children:["docker_bridge_netstat","Oom_killer","SSH Too many authentication failures"]}]}],"/02-PrivatePlatform/":["",{text:"Kubernetes",prefix:"Kubernetes/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["Kubernetes_scheduler"]},{text:"02 Config",prefix:"02-Config/",collapsible:!0,children:["kubernetes_with_out_docker","vagrant_k8s"]},{text:"05 Kops",prefix:"05-Kops/",collapsible:!0,children:["01-kops-on-aws","02-kops-network-storage"]},{text:"06 EKS",prefix:"06-EKS/",collapsible:!0,children:["01-eks-deploy","02-eks-networking","03-eks-storage"]}]},{text:"Open Shift",prefix:"OpenShift/",collapsible:!0,children:["openshift3.11_custom_metric_with_jboss","deploying_specificnode_by_namespace"]},{text:"Vsphere",prefix:"Vsphere/",collapsible:!0,children:["Vsphere_template_issue"]}],"/03-PublicCloud/":["",{text:"Alibaba Cloud",prefix:"AlibabaCloud/",collapsible:!0,children:["CredentialConfig"]},{text:"Azure",prefix:"Azure/",collapsible:!0,children:[]},{text:"NCP(Naver Cloud Platform)",prefix:"NCP/",collapsible:!0,children:["",{text:"09 Terraform Workshop",prefix:"09-Terraform-Workshop/",collapsible:!0,children:[{text:"01 Intro to Terraform on Ncp",prefix:"01-intro_to_terraform_on_ncp/",collapsible:!0,children:["04-z-lab_provisioners_variables_outputs","02-z-lab_terraform_basic","06-z-lab_terraform_cloud","03-z-lab_terraform_action","01-terraform-intro","02-terraform-basic","03-terraform-in-Action","04-ncp-provisioning-and-configuration","05-terraform-state","06-terraform-cloud","00-overview"]}]}]}],"/04-HashiCorp/":["",{text:"01 Packer",prefix:"01-Packer/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["HCP_Packer_Intro"]},{text:"05 Sample Pkr",prefix:"05-SamplePkr/",collapsible:!0,children:["AlibabaCloud","aws-ubuntu","aws-windows","Azure","GCP","nCloud"]}]},{text:"02 Vagrant",prefix:"02-Vagrant/",collapsible:!0,children:[{text:"02 Config",prefix:"02-Config/",collapsible:!0,children:["multi-linux-sample"]},{text:"04 Trouble Shooting",prefix:"04-TroubleShooting/",collapsible:!0,children:["hostonlynetworkissue"]}]},{text:"03 Terraform",prefix:"03-Terraform/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["02-hcl","sentinel","remoteruns","remotestate","00-introduction","variables","workspace","01-infrastructure_maturity"]},{text:"02 Config",prefix:"02-Config/",collapsible:!0,children:["terraform-cloud-agent-guide-custom","TFEAdminPasswordReset"]},{text:"03 Sample",prefix:"03-Sample/",collapsible:!0,children:["hashicat-azure","nomad-csi-sample"]},{text:"04 Trouble Shooting",prefix:"04-TroubleShooting/",collapsible:!0,children:["error-state-snapshot-was-created-by-terraform-version","StateRemove","TFE_v202111-1(582)_Issue","re-install","NotAllowAdminUsername"]},{text:"05 Airgap",prefix:"05-Airgap/",collapsible:!0,children:["ProviderLocalFilesystem","ProviderLocalMirroring","ProviderBundling"]}]},{text:"04 Consul",prefix:"04-Consul/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["Consul Enterprise Feature","port-info","consul-sizing"]},{text:"02 Configuration",prefix:"02-Configuration/",collapsible:!0,children:["acl-sample","common","server","client","ForwardDns"]},{text:"03 Use Case",prefix:"03-UseCase/",collapsible:!0,children:["Consul Health Check","Consul Enterprise Feature"]},{text:"04 Trouble Shooting",prefix:"04-TroubleShooting/",collapsible:!0,children:["connection-termination","Consul Sidecar Inject not working on k8s","Consul Install","Consul Enterprise Feature"]},{text:"05 Template Sample",prefix:"05-Template_Sample/",collapsible:!0,children:["kv-sample","nginx"]},{text:"06 on Kubernetes",prefix:"06-on_Kubernetes/",collapsible:!0,children:[{text:"Annotation",prefix:"annotation/",collapsible:!0,children:["ingress-and-serviceroute","multiport"]},{text:"Configuration",prefix:"configuration/",collapsible:!0,children:["envoy_timeout"]},{text:"Performance",prefix:"performance/",collapsible:!0,children:["consul-istio"]},{text:"Service Mesh101",prefix:"ServiceMesh101/",collapsible:!0,children:["01-Install","02-SideCar","03-use-crd","04-traffic-management"]},{text:"Tracing",prefix:"tracing/",collapsible:!0,children:["jaeger_tracing"]}]}]},{text:"05 Boundary",prefix:"05-Boundary/",collapsible:!0,children:[{text:"01 Install",prefix:"01-Install/",collapsible:!0,children:["OnConsulNomad","OnNomad-devmode"]},{text:"02 Config",prefix:"02-Config/",collapsible:!0,children:["BoundaryTerraformSample01"]}]},{text:"06 Vault",prefix:"06-Vault/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["vault-token","vault-audit","vault-dev-mode-option","kmip-faq","port-info",{text:"Vault Secret Operator",prefix:"vault-secret-operator/",collapsible:!0,children:["1-vso-overview","2-vso-install","3-vso-samples"]},"vault-server-configuration-info","vault-sizing"]},{text:"02 Secret Engine",prefix:"02-Secret_Engine/",collapsible:!0,children:["keymgmt","kmip-mongo","pki-nginx","ssh-signed-certificates","ssh-otp-debian","ssh-otp-redhat","transform-fpe","transit","transit-import"]},{text:"03 Auth Method",prefix:"03-Auth_Method/",collapsible:!0,children:["aws-auth","vault-kv-v2-ui-policy","mfa-login","token_role","super-user-create"]},{text:"04 Use Case",prefix:"04-UseCase/",collapsible:!0,children:["API-security","argocd-vault-plugin","vault-k8s-usecase-csi-injection","jenkins-pipeilne-vault-approle","jenkins-with-vault","jenkins-with-vault-otp","vault-k8s-integration-three-methods","vault-k8s-manually-using-the-sidecar","sentinel-check-identity-cidr","terraform-with-aws-secret-engine","nomad-integration","mtls","transit-stress-test","spring-boot","windows-password-rotation"]},{text:"05 Trouble Shooting",prefix:"05-TroubleShooting/",collapsible:!0,children:["400-error","vault-sizing"]},{text:"06 Config",prefix:"06-Config/",collapsible:!0,children:["vault-entierprise-license","vault-agent","tls-config"]},{text:"07 Sentinel Sample",prefix:"07-Sentinel-Sample/",collapsible:!0,children:["aws-secrets-credential-type-check","transit-secrets-key-exportable-deny"]}]},{text:"07 Nomad",prefix:"07-Nomad/",collapsible:!0,children:[{text:"01 Information",prefix:"01-Information/",collapsible:!0,children:["nomad-sizing","nomad_job_restart"]},{text:"02 Config",prefix:"02-Config/",collapsible:!0,children:["consul-namespace","Cloudwatch-Logging","integrateVault","csi-nfs","nomad-guide-basic","Namespace","nomad-on-windows","Nomad-Ui-Token","custom-ui-link","common","Server","Nomad-sslkey-create","client"]},{text:"04 Use Case",prefix:"04-UseCase/",collapsible:!0,children:["springboot-graceful-shutdown","jenkins-pipeline","job-start-from-hcl"]},{text:"05 Sample Job",prefix:"05-SampleJob/",collapsible:!0,children:["autoscaler","code-server","withConsulKV","DAS","elastic","elk_version7","jenkins_java_driver","keycloak","mongodb","nexus","nginx","ingress-gateway","nomad-pack","install-ansible-docker","oracleXE","param-batch-job","redis","scouter","service-mesh-test","tomcat","sidecar-tomcat","update","VaultSWLB-nginx","withVaultKV","jboss"]}]},{text:"08 Updates",prefix:"08-Updates/",collapsible:!0,children:[{text:"97 2024",prefix:"97-2024/",collapsible:!0,children:["2024-01","2024-02"]},{text:"98 2023",prefix:"98-2023/",collapsible:!0,children:["2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07","2023-08","2023-09","2023-10","2023-11"]},{text:"99 2022",prefix:"99-2022/",collapsible:!0,children:["2022-07","2022-08","2022-09","2022-10","2022-11","2022-12"]}]}],"/05-Software/":["",{text:"Jenkins",prefix:"Jenkins/",collapsible:!0,children:[{text:"Pipeline101",prefix:"pipeline101/",collapsible:!0,children:["01-cicd","02-jobs","03-builds","04-agent","05-plugins","06-notifications","07-testing","08-restapi","09-security","10-artifacts","11-pipelines","12-appendix","00-introduction","13-jenkins_101_single"]}]},{text:"Tomcat",prefix:"Tomcat/",collapsible:!0,children:[{text:"Tomcat101",prefix:"tomcat101/",collapsible:!0,children:["01-Introduction","02-env","03-installation","04-configuration","05-deployment","06-dbconnection","07-host","08-webserver","09-thread","10-monitoring","11-tip"]}]}],"/06-etc/":["",{text:"Book Memo",prefix:"book-memo/",collapsible:!0,children:["theshortcut"]},{text:"Class",prefix:"class/",collapsible:!0,children:["devops-discussion-20240213","devops-discussion-1st","devops-discussion-2nd"]},{text:"Infomation",prefix:"infomation/",collapsible:!0,children:["acronyms","Keyboard-Eng"]},{text:"Mac",prefix:"mac/",collapsible:!0,children:["brew-cert-issue","libunistring-issue"]},{text:"Nodejs",prefix:"nodejs/",collapsible:!0,children:["node-sass"]}],"/99-about/":["01-About","02-Thanks"]},Zc=n=>{const{icon:e="",color:t,size:a}=n,s=t||a?{}:null;return t&&(s.color=t),a&&(s.height=Number.isNaN(Number(a))?a:`${a}px`),Ce(e)?l("img",{class:"icon",src:e,alt:"","no-view":"",style:s}):Ha(e)?l("img",{class:"icon",src:Tn(e),alt:"","aria-hidden":"","no-view":"",style:s}):l(se("FontIcon"),n)};Zc.displayName="HopeIcon";var Fn=Zc;const Ma=()=>{const n=ze(),e=lt();return t=>{if(t)if(Ha(t))e.path!==t&&n.push(t);else if(Ni(t))window&&window.open(t);else{const a=e.path.slice(0,e.path.lastIndexOf("/"));n.push(`${a}/${encodeURI(t)}`)}}},Qc=()=>{const n=pn(),e=bn();return y(()=>{const{author:t}=e.value;return t?Ia(t):t===!1?[]:Ia(n.value.author,!1)})},_2=()=>{const n=bn(),e=gn(Symbol.for("categoryMap"));return y(()=>Ec(n.value.category).map(t=>{var a;return{name:t,path:((a=e==null?void 0:e.value.map[t])==null?void 0:a.path)||""}}))},y2=()=>{const n=bn(),e=gn(Symbol.for("tagMap"));return y(()=>Cc(n.value.tag).map(t=>{var a;return{name:t,path:((a=e==null?void 0:e.value.map[t])==null?void 0:a.path)||""}}))},b2=()=>{const n=bn(),e=fn();return y(()=>{const t=_r(n.value.date);if(t)return t;const{createdTime:a}=e.value.git||{};return a?new Date(a):null})},w2=()=>{const n=pn(),e=fn(),t=bn(),a=Qc(),s=_2(),o=y2(),r=b2(),p=Jc(),i=k2(),c=y(()=>({author:a.value,category:s.value,date:r.value,localizedDate:e.value.localizedDate,tag:o.value,isOriginal:t.value.isOriginal||!1,readingTime:p.value,readingTimeLocale:i.value,pageview:"pageview"in t.value?t.value.pageview:!0})),d=y(()=>"pageInfo"in t.value?t.value.pageInfo:"pageInfo"in n.value?n.value.pageInfo:null);return{info:c,items:d}},{mobileBreakPoint:E2,pcBreakPoint:C2}=Hr,bp=n=>n.endsWith("px")?Number(n.slice(0,-2)):null,ja=()=>{const n=K(!1),e=K(!1),t=()=>{n.value=window.innerWidth<=(bp(E2)??719),e.value=window.innerWidth>=(bp(C2)??1440)};return sn(()=>{t(),yn("resize",t,!1),yn("orientationchange",t,!1)}),{isMobile:n,isPC:e}},nu=Symbol(""),$a=()=>{const n=gn(nu);if(!n)throw new Error("useDarkmode() is called without provider.");return n},T2=n=>{const e=it(),t=zk(),a=y(()=>e.value.darkmode||"switch"),s=$s("vuepress-theme-hope-scheme","auto"),o=y(()=>{const p=a.value;return p==="disable"?!1:p==="enable"?!0:p==="auto"?t.value:p==="toggle"?s.value==="dark":s.value==="dark"||s.value==="auto"&&t.value}),r=y(()=>{const p=a.value;return p==="switch"||p==="toggle"});n.provide(nu,{canToggle:r,config:a,isDarkmode:o,status:s}),Object.defineProperties(n.config.globalProperties,{$isDarkmode:{get:()=>o.value}})},I2=()=>{const{config:n,isDarkmode:e,status:t}=$a();pr(()=>{n.value==="disable"?t.value="light":n.value==="enable"?t.value="dark":n.value==="toggle"&&t.value==="auto"&&(t.value="light")}),sn(()=>{on(e,a=>document.documentElement.setAttribute("data-theme",a?"dark":"light"),{immediate:!0})})};var En=(n=>(n.type="y",n.title="t",n.shortTitle="s",n.icon="i",n.author="a",n.date="d",n.localizedDate="l",n.category="c",n.tag="g",n.isEncrypted="n",n.isOriginal="o",n.readingTime="r",n.excerpt="e",n.sticky="u",n.cover="v",n.index="I",n.order="O",n))(En||{}),eu=(n=>(n.article="a",n.home="h",n.slide="s",n.page="p",n))(eu||{});const gt=(n="",e="")=>Ha(e)?e:`${mr(n)}${e}`,$t=(n,e=!1)=>{const{meta:t,path:a,notFound:s}=Yt(n);return s?{text:a,link:a}:{text:!e&&t[En.shortTitle]?t[En.shortTitle]:t[En.title]||a,link:a,...t[En.icon]?{icon:t[En.icon]}:{}}},$o=({config:n,prefix:e=""})=>{const t=(a,s=e)=>{const o=_n(a)?$t(gt(s,a)):a.link?{...a,..._a(a.link)?{}:{link:$t(gt(s,a.link)).link}}:a;if("children"in o){const r=gt(s,o.prefix),p=o.children==="structure"?Nr[r]:o.children;return{type:"group",...o,prefix:r,children:p.map(i=>t(i,r))}}return{type:"page",...o}};return n.map(a=>t(a))},S2=({config:n,page:e,headerDepth:t})=>{const a=pe(n).sort((s,o)=>o.length-s.length);for(const s of a)if(bt(decodeURI(e.path),s)){const o=n[s];return o?$o({config:o==="structure"?Nr[s]:o,page:e,headerDepth:t,prefix:s}):[]}return console.warn(`${e.path} is missing sidebar config.`),[]},P2=({config:n,routeLocale:e,page:t,headerDepth:a})=>n==="structure"?$o({config:Nr[e],page:t,headerDepth:a,prefix:e}):Ea(n)?$o({config:n,page:t,headerDepth:a}):be(n)?S2({config:n,page:t,headerDepth:a}):[],tu=Symbol(""),x2=()=>{const n=bn(),e=pn(),t=fn(),a=Te(),s=y(()=>n.value.home?!1:n.value.sidebar??e.value.sidebar??"structure"),o=y(()=>n.value.headerDepth??e.value.headerDepth??2),r=ic(()=>[s.value,o.value,t.value.path,null],()=>P2({config:s.value,routeLocale:a.value,page:t.value,headerDepth:o.value}));oe(tu,r)},Mr=()=>{const n=gn(tu);if(!n)throw new Error("useSidebarItems() is called without provider.");return n};var A2=R({name:"PageFooter",setup(){const n=it(),e=pn(),t=bn(),a=Qc(),s=y(()=>{const{copyright:c,footer:d}=t.value;return d!==!1&&!!(c||d||e.value.displayFooter)}),o=y(()=>{const{footer:c}=t.value;return c===!1?!1:_n(c)?c:e.value.footer||""}),r=y(()=>a.value.map(({name:c})=>c).join(", ")),p=c=>`Copyright © ${new Date().getFullYear()} ${r.value} ${c?`${c} Licensed`:""}`,i=y(()=>{const{copyright:c,license:d=""}=t.value,{license:m}=n.value,{copyright:h}=e.value;return c??(d?p(d):_n(h)?h:r.value||m?p(m):!1)});return()=>s.value?l("footer",{class:"vp-footer-wrapper"},[o.value?l("div",{class:"vp-footer",innerHTML:o.value}):null,i.value?l("div",{class:"vp-copyright",innerHTML:i.value}):null]):null}}),Qn=R({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(n,{attrs:e,emit:t,slots:a}){const s=lt(),o=Xi(),r=Wt(n,"config"),p=y(()=>Ce(r.value.link)),i=y(()=>!p.value&&Ni(r.value.link)),c=y(()=>r.value.target||(p.value?"_blank":void 0)),d=y(()=>c.value==="_blank"),m=y(()=>!p.value&&!i.value&&!d.value),h=y(()=>r.value.rel||(d.value?"noopener noreferrer":null)),k=y(()=>r.value.ariaLabel||r.value.text),g=y(()=>{if(n.exact)return!1;const E=pe(o.value.locales);return E.length?E.every(_=>_!==r.value.link):r.value.link!=="/"}),w=y(()=>m.value?r.value.activeMatch?new RegExp(r.value.activeMatch,"u").test(s.path):g.value?bt(s.path,r.value.link):s.path===r.value.link:!1);return()=>{const{before:E,after:_,default:T}=a,{text:b,icon:S,link:N}=r.value;return m.value?l(Rn,{to:N,"aria-label":k.value,...e,class:["nav-link",{active:w.value},e.class],onFocusout:()=>t("focusout")},()=>T?T():[E?E():l(Fn,{icon:S}),b,_==null?void 0:_()]):l("a",{href:N,rel:h.value,target:c.value,"aria-label":k.value,...e,class:["nav-link",e.class],onFocusout:()=>t("focusout")},T?T():[E?E():l(Fn,{icon:S}),b,n.noExternalLinkIcon?null:l(Pc),_==null?void 0:_()])}}}),L2=R({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(n,{slots:e}){const t=fn(),a=Wt(n,"config"),s=y(()=>a.value.ariaLabel||a.value.text),o=K(!1);on(()=>t.value.path,()=>{o.value=!1});const r=p=>{p.detail===0&&(o.value=!o.value)};return()=>{var p;return l("div",{class:["dropdown-wrapper",{open:o.value}]},[l("button",{type:"button",class:"dropdown-title","aria-label":s.value,onClick:r},[((p=e.title)==null?void 0:p.call(e))||l("span",{class:"title"},[l(Fn,{icon:a.value.icon}),n.config.text]),l("span",{class:"arrow"}),l("ul",{class:"nav-dropdown"},a.value.children.map((i,c)=>{const d=c===a.value.children.length-1;return l("li",{class:"dropdown-item"},"children"in i?[l("h4",{class:"dropdown-subtitle"},i.link?l(Qn,{config:i,onFocusout:()=>{i.children.length===0&&d&&(o.value=!1)}}):l("span",i.text)),l("ul",{class:"dropdown-subitem-wrapper"},i.children.map((m,h)=>l("li",{class:"dropdown-subitem"},l(Qn,{config:m,onFocusout:()=>{h===i.children.length-1&&d&&(o.value=!1)}}))))]:l(Qn,{config:i,onFocusout:()=>{d&&(o.value=!1)}}))}))])])}}});const au=(n,e="")=>_n(n)?$t(gt(e,n)):"children"in n?{...n,...n.link&&!_a(n.link)?$t(gt(e,n.link)):{},children:n.children.map(t=>au(t,gt(e,n.prefix)))}:{...n,link:_a(n.link)?n.link:$t(gt(e,n.link)).link},su=()=>{const n=pn(),e=()=>(n.value.navbar||[]).map(t=>au(t));return ic(()=>n.value.navbar,()=>e())},O2=()=>{const n=pn(),e=y(()=>n.value.repo||null),t=y(()=>e.value?hf(e.value):null),a=y(()=>e.value?Pr(e.value):null),s=y(()=>t.value?n.value.repoLabel??(a.value===null?"Source":a.value):null);return y(()=>!t.value||!s.value||n.value.repoDisplay===!1?null:{type:a.value||"Source",label:s.value,link:t.value})};var R2=R({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(n){const e=fn(),t=Wt(n,"config"),a=y(()=>t.value.ariaLabel||t.value.text),s=K(!1);on(()=>e.value.path,()=>{s.value=!1});const o=(r,p)=>p[p.length-1]===r;return()=>[l("button",{type:"button",class:["nav-screen-dropdown-title",{active:s.value}],"aria-label":a.value,onClick:()=>{s.value=!s.value}},[l("span",{class:"title"},[l(Fn,{icon:t.value.icon}),n.config.text]),l("span",{class:["arrow",s.value?"down":"end"]})]),l("ul",{class:["nav-screen-dropdown",{hide:!s.value}]},t.value.children.map(r=>l("li",{class:"dropdown-item"},"children"in r?[l("h4",{class:"dropdown-subtitle"},r.link?l(Qn,{config:r,onFocusout:()=>{o(r,t.value.children)&&r.children.length===0&&(s.value=!1)}}):l("span",r.text)),l("ul",{class:"dropdown-subitem-wrapper"},r.children.map(p=>l("li",{class:"dropdown-subitem"},l(Qn,{config:p,onFocusout:()=>{o(p,r.children)&&o(r,t.value.children)&&(s.value=!1)}}))))]:l(Qn,{config:r,onFocusout:()=>{o(r,t.value.children)&&(s.value=!1)}}))))]}}),V2=R({name:"NavScreenLinks",setup(){const n=su();return()=>n.value.length?l("nav",{class:"nav-screen-links"},n.value.map(e=>l("div",{class:"navbar-links-item"},"children"in e?l(R2,{config:e}):l(Qn,{config:e})))):null}});const ou=()=>l(rn,{name:"dark"},()=>l("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));ou.displayName="DarkIcon";const ru=()=>l(rn,{name:"light"},()=>l("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));ru.displayName="LightIcon";const lu=()=>l(rn,{name:"auto"},()=>l("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));lu.displayName="AutoIcon";const pu=()=>l(rn,{name:"enter-fullscreen"},()=>l("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));pu.displayName="EnterFullScreenIcon";const iu=()=>l(rn,{name:"cancel-fullscreen"},()=>l("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));iu.displayName="CancelFullScreenIcon";const cu=()=>l(rn,{name:"outlook"},()=>[l("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);cu.displayName="OutlookIcon";var uu=R({name:"AppearanceSwitch",setup(){const{config:n,isDarkmode:e,status:t}=$a(),a=It(),s=()=>{n.value==="switch"?t.value={light:"dark",dark:"auto",auto:"light"}[t.value]:t.value=t.value==="light"?"dark":"light"},o=async r=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!a.value)||!r){s();return}const p=r.clientX,i=r.clientY,c=Math.hypot(Math.max(p,innerWidth-p),Math.max(i,innerHeight-i)),d=e.value;await document.startViewTransition(async()=>{s(),await ot()}).ready,e.value!==d&&document.documentElement.animate({clipPath:e.value?[`circle(${c}px at ${p}px ${i}px)`,`circle(0px at ${p}px ${i}px)`]:[`circle(0px at ${p}px ${i}px)`,`circle(${c}px at ${p}px ${i}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>l("button",{type:"button",id:"appearance-switch",onClick:o},[l(lu,{style:{display:t.value==="auto"?"block":"none"}}),l(ou,{style:{display:t.value==="dark"?"block":"none"}}),l(ru,{style:{display:t.value==="light"?"block":"none"}})])}}),D2=R({name:"AppearanceMode",setup(){const n=pn(),{canToggle:e}=$a(),t=y(()=>n.value.outlookLocales.darkmode);return()=>e.value?l("div",{class:"appearance-wrapper"},[l("label",{class:"appearance-title",for:"appearance-switch"},t.value),l(uu)]):null}});const vo="VUEPRESS_THEME_COLOR";var H2=R({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(n){const e=(t="")=>{const a=document.documentElement.classList,s=pe(n.themeColor);if(!t){localStorage.removeItem(vo),a.remove(...s);return}a.remove(...s.filter(o=>o!==t)),a.add(t),localStorage.setItem(vo,t)};return sn(()=>{const t=localStorage.getItem(vo);t&&e(t)}),()=>l("ul",{id:"theme-color-picker"},[l("li",l("span",{class:"theme-color",onClick:()=>e()})),Be(n.themeColor).map(([t,a])=>l("li",l("span",{style:{background:a},onClick:()=>e(t)})))])}});const zt=Hr.enableThemeColor==="true",N2=zt?gk(Be(Hr).filter(([n])=>n.startsWith("theme-"))):{};var M2=R({name:"ThemeColor",setup(){const n=pn(),e=y(()=>n.value.outlookLocales.themeColor);return()=>zt?l("div",{class:"theme-color-wrapper"},[l("label",{class:"theme-color-title",for:"theme-color-picker"},e.value),l(H2,{themeColor:N2})]):null}}),du=R({name:"ToggleFullScreenButton",setup(){const n=pn(),{isSupported:e,isFullscreen:t,toggle:a}=br(),s=y(()=>n.value.outlookLocales.fullscreen);return()=>e?l("div",{class:"full-screen-wrapper"},[l("label",{class:"full-screen-title",for:"full-screen-switch"},s.value),l("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:t.value,onClick:()=>a()},t.value?l(iu):l(pu))]):null}}),mu=R({name:"OutlookSettings",setup(){const n=it(),e=It(),t=y(()=>!e.value&&n.value.fullscreen);return()=>l(Ns,()=>[zt?l(M2):null,l(D2),t.value?l(du):null])}}),j2=R({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(n,{emit:e,slots:t}){const a=fn(),{isMobile:s}=ja(),o=hn(),r=wr(o);return sn(()=>{o.value=document.body,on(s,p=>{!p&&n.show&&(r.value=!1,e("close"))}),on(()=>a.value.path,()=>{r.value=!1,e("close")})}),rt(()=>{r.value=!1}),()=>l(je,{name:"fade",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>{var p,i;return n.show?l("div",{id:"nav-screen"},l("div",{class:"vp-nav-screen-container"},[(p=t.before)==null?void 0:p.call(t),l(V2),l("div",{class:"vp-outlook-wrapper"},l(mu)),(i=t.after)==null?void 0:i.call(t)])):null})}}),$2=R({name:"NavbarBrand",setup(){const n=Te(),e=Jt(),t=pn(),a=y(()=>t.value.home||n.value),s=y(()=>e.value.title),o=y(()=>t.value.navTitle??s.value),r=y(()=>t.value.logo?Tn(t.value.logo):null),p=y(()=>t.value.logoDark?Tn(t.value.logoDark):null);return()=>l(Rn,{to:a.value,class:"vp-brand"},()=>[r.value?l("img",{class:["vp-nav-logo",{light:!!p.value}],src:r.value,alt:""}):null,p.value?l("img",{class:["vp-nav-logo dark"],src:p.value,alt:""}):null,o.value?l("span",{class:["vp-site-name",{"hide-in-pad":r.value&&t.value.hideSiteNameOnMobile!==!1}]},o.value):null])}}),z2=R({name:"NavbarLinks",setup(){const n=su();return()=>n.value.length?l("nav",{class:"vp-nav-links"},n.value.map(e=>l("div",{class:"nav-item hide-in-mobile"},"children"in e?l(L2,{config:e}):l(Qn,{config:e})))):null}}),B2=R({name:"RepoLink",components:{BitbucketIcon:Ir,GiteeIcon:Tr,GitHubIcon:Er,GitLabIcon:Cr,SourceIcon:Sr},setup(){const n=O2();return()=>n.value?l("div",{class:"nav-item vp-repo"},l("a",{class:"vp-repo-link",href:n.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":n.value.label},l(se(`${n.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const hu=({active:n=!1},{emit:e})=>l("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":n}],"aria-label":"Toggle Navbar","aria-expanded":n,"aria-controls":"nav-screen",onClick:()=>e("toggle")},l("span",[l("span",{class:"vp-top"}),l("span",{class:"vp-middle"}),l("span",{class:"vp-bottom"})]));hu.displayName="ToggleNavbarButton";var U2=hu;const zo=(n,{emit:e})=>l("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>e("toggle")},l("span",{class:"icon"}));zo.displayName="ToggleSidebarButton",zo.emits=["toggle"];var K2=zo,F2=R({name:"OutlookButton",setup(){const{isSupported:n}=br(),e=it(),t=It(),a=fn(),{canToggle:s}=$a(),o=K(!1),r=y(()=>!t.value&&e.value.fullscreen&&n);return on(()=>a.value.path,()=>{o.value=!1}),()=>s.value||r.value||zt?l("div",{class:"nav-item hide-in-mobile"},s.value&&!r.value&&!zt?l(uu):r.value&&!s.value&&!zt?l(du):l("button",{type:"button",class:["outlook-button",{open:o.value}],tabindex:"-1","aria-hidden":!0},[l(cu),l("div",{class:"outlook-dropdown"},l(mu))])):null}}),q2=R({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(n,{emit:e,slots:t}){const a=pn(),{isMobile:s}=ja(),o=K(!1),r=y(()=>{const{navbarAutoHide:d="mobile"}=a.value;return d!=="none"&&(d==="always"||s.value)}),p=y(()=>a.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),i={Brand:$2,Language:go,Links:z2,Repo:B2,Outlook:F2,Search:Un("Docsearch")?se("Docsearch"):Un("SearchBox")?se("SearchBox"):go},c=d=>i[d]??(Un(d)?se(d):go);return()=>{var d,m,h,k,g,w;return[l("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":r.value,"hide-icon":a.value.navbarIcon===!1}]},[l("div",{class:"vp-navbar-start"},[l(K2,{onToggle:()=>{o.value&&(o.value=!1),e("toggleSidebar")}}),(d=t.startBefore)==null?void 0:d.call(t),(p.value.start||[]).map(E=>l(c(E))),(m=t.startAfter)==null?void 0:m.call(t)]),l("div",{class:"vp-navbar-center"},[(h=t.centerBefore)==null?void 0:h.call(t),(p.value.center||[]).map(E=>l(c(E))),(k=t.centerAfter)==null?void 0:k.call(t)]),l("div",{class:"vp-navbar-end"},[(g=t.endBefore)==null?void 0:g.call(t),(p.value.end||[]).map(E=>l(c(E))),(w=t.endAfter)==null?void 0:w.call(t),l(U2,{active:o.value,onToggle:()=>{o.value=!o.value}})])]),l(j2,{show:o.value,onClose:()=>{o.value=!1}},{before:()=>{var E;return(E=t.screenTop)==null?void 0:E.call(t)},after:()=>{var E;return(E=t.screenBottom)==null?void 0:E.call(t)}})]}}});const Sa=(n,e,t=!1)=>"activeMatch"in e?new RegExp(e.activeMatch,"u").test(n.path):yc(n,e.link)?!0:"children"in e&&!t?e.children.some(a=>Sa(n,a)):!1,ku=(n,e)=>e.type==="group"?e.children.some(t=>t.type==="group"?ku(n,t):t.type==="page"&&Sa(n,t,!0))||"prefix"in e&&yc(n,e.prefix):!1;var G2=R({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(n){const e=lt();return()=>_n(n.config.link)?l(Qn,{class:["vp-sidebar-link","vp-sidebar-page",{active:Sa(e,n.config,!0)}],exact:!0,config:n.config}):l("p",n,[l(Fn,{icon:n.config.icon}),n.config.text])}}),W2=R({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(n,{emit:e}){const t=lt(),a=y(()=>Sa(t,n.config)),s=y(()=>Sa(t,n.config,!0));return()=>{const{collapsible:o,children:r=[],icon:p,prefix:i,link:c,text:d}=n.config;return l("section",{class:"vp-sidebar-group"},[l(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||c,exact:s.value,active:a.value}],...o?{type:"button",onClick:()=>e("toggle"),onKeydown:m=>{m.key==="Enter"&&e("toggle")}}:{}},[l(Fn,{icon:p}),c?l(Qn,{class:"vp-sidebar-title",config:{text:d,link:c},noExternalLinkIcon:!0}):l("span",{class:"vp-sidebar-title"},d),o?l("span",{class:["vp-arrow",n.open?"down":"end"]}):null]),n.open||!o?l(fu,{key:i,config:r}):null])}}}),fu=R({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(n){const e=lt(),t=K(-1),a=s=>{t.value=s===t.value?-1:s};return on(()=>e.path,()=>{const s=n.config.findIndex(o=>ku(e,o));t.value=s},{immediate:!0,flush:"post"}),()=>l("ul",{class:"vp-sidebar-links"},n.config.map((s,o)=>l("li",s.type==="group"?l(W2,{config:s,open:o===t.value,onToggle:()=>a(o)}):l(G2,{config:s}))))}}),J2=R({name:"SideBar",slots:Object,setup(n,{slots:e}){const t=lt(),a=pn(),s=Mr(),o=hn();return sn(()=>{on(()=>t.hash,r=>{const p=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${t.path}${r}"]`);if(!p)return;const{top:i,height:c}=o.value.getBoundingClientRect(),{top:d,height:m}=p.getBoundingClientRect();d<i?p.scrollIntoView(!0):d+m>i+c&&p.scrollIntoView(!1)},{immediate:!0})}),()=>{var r,p,i;return l("aside",{ref:o,id:"sidebar",class:["vp-sidebar",{"hide-icon":a.value.sidebarIcon===!1}],key:"sidebar"},[(r=e.top)==null?void 0:r.call(e),((p=e.default)==null?void 0:p.call(e))||l(fu,{config:s.value}),(i=e.bottom)==null?void 0:i.call(e)])}}}),jr=R({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(n,{slots:e}){const t=ze(),a=fn(),s=bn(),o=pn(),{isMobile:r,isPC:p}=ja(),[i,c]=Ca(!1),[d,m]=Ca(!1),h=Mr(),k=K(!1),g=y(()=>n.noNavbar||s.value.navbar===!1||o.value.navbar===!1?!1:!!(a.value.title||o.value.logo||o.value.repo||o.value.navbar)),w=y(()=>n.noSidebar?!1:s.value.sidebar!==!1&&h.value.length!==0&&!s.value.home),E=y(()=>n.noToc||s.value.home?!1:s.value.toc||o.value.toc!==!1&&s.value.toc!==!1),_={x:0,y:0},T=I=>{_.x=I.changedTouches[0].clientX,_.y=I.changedTouches[0].clientY},b=I=>{const G=I.changedTouches[0].clientX-_.x,M=I.changedTouches[0].clientY-_.y;Math.abs(G)>Math.abs(M)*1.5&&Math.abs(G)>40&&(G>0&&_.x<=80?c(!0):c(!1))},S=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let N=0;return yn("scroll",xk(()=>{const I=S();I<=58||I<N?k.value=!1:N+200<I&&!i.value&&(k.value=!0),N=I},300,!0)),on(r,I=>{I||c(!1)}),sn(()=>{const I=wr(document.body);on(i,M=>{I.value=M});const G=t.afterEach(()=>{c(!1)});rt(()=>{I.value=!1,G()})}),()=>l(Un("GlobalEncrypt")?se("GlobalEncrypt"):gc,()=>l("div",{class:["theme-container",{"no-navbar":!g.value,"no-sidebar":!w.value&&!(e.sidebar||e.sidebarTop||e.sidebarBottom),"has-toc":E.value,"hide-navbar":k.value,"sidebar-collapsed":!r.value&&!p.value&&d.value,"sidebar-open":r.value&&i.value},n.containerClass,s.value.containerClass||""],onTouchStart:T,onTouchEnd:b},[g.value?l(q2,{onToggleSidebar:()=>c()},{startBefore:()=>{var I;return(I=e.navbarStartBefore)==null?void 0:I.call(e)},startAfter:()=>{var I;return(I=e.navbarStartAfter)==null?void 0:I.call(e)},centerBefore:()=>{var I;return(I=e.navbarCenterBefore)==null?void 0:I.call(e)},centerAfter:()=>{var I;return(I=e.navbarCenterAfter)==null?void 0:I.call(e)},endBefore:()=>{var I;return(I=e.navbarEndBefore)==null?void 0:I.call(e)},endAfter:()=>{var I;return(I=e.navbarEndAfter)==null?void 0:I.call(e)},screenTop:()=>{var I;return(I=e.navScreenTop)==null?void 0:I.call(e)},screenBottom:()=>{var I;return(I=e.navScreenBottom)==null?void 0:I.call(e)}}):null,l(je,{name:"fade"},()=>i.value?l("div",{class:"vp-sidebar-mask",onClick:()=>c(!1)}):null),l(je,{name:"fade"},()=>r.value?null:l("div",{class:"toggle-sidebar-wrapper",onClick:()=>m()},l("span",{class:["arrow",d.value?"end":"start"]}))),l(J2,{},{...e.sidebar?{default:()=>e.sidebar()}:{},top:()=>{var I;return(I=e.sidebarTop)==null?void 0:I.call(e)},bottom:()=>{var I;return(I=e.sidebarBottom)==null?void 0:I.call(e)}}),e.default(),l(A2)]))}}),kn=R({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(n,{slots:e}){const t=s=>{s.style.transition=`transform ${n.duration}s ease-in-out ${n.delay}s, opacity ${n.duration}s ease-in-out ${n.delay}s`,s.style.transform="translateY(-20px)",s.style.opacity="0"},a=s=>{s.style.transform="translateY(0)",s.style.opacity="1"};return()=>l(n.type==="single"?je:f0,{name:"drop",appear:n.appear,onAppear:t,onAfterAppear:a,onEnter:t,onAfterEnter:a,onBeforeLeave:t},()=>e.default())}});const Bo=({custom:n})=>l(nc,{class:["theme-hope-content",{custom:n}]});Bo.displayName="MarkdownContent",Bo.props={custom:Boolean};var $r=Bo;const gu=()=>l(rn,{name:"author"},()=>l("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));gu.displayName="AuthorIcon";const vu=()=>l(rn,{name:"calendar"},()=>l("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));vu.displayName="CalendarIcon";const _u=()=>l(rn,{name:"category"},()=>l("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));_u.displayName="CategoryIcon";const yu=()=>l(rn,{name:"print"},()=>l("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));yu.displayName="PrintIcon";const bu=()=>l(rn,{name:"tag"},()=>l("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));bu.displayName="TagIcon";const wu=()=>l(rn,{name:"timer"},()=>l("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));wu.displayName="TimerIcon";const Eu=()=>l(rn,{name:"word"},()=>[l("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),l("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Eu.displayName="WordIcon";const ct=()=>{const n=pn();return y(()=>n.value.metaLocales)};var Y2=R({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(n){const e=ct();return()=>n.author.length?l("span",{class:"page-author-info","aria-label":`${e.value.author}${n.pure?"":"🖊"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(gu),l("span",n.author.map(t=>t.url?l("a",{class:"page-author-item",href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name):l("span",{class:"page-author-item"},t.name))),l("span",{property:"author",content:n.author.map(t=>t.name).join(", ")})]):null}}),X2=R({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(n){const e=ze(),t=fn(),a=ct(),s=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.category.length?l("span",{class:"page-category-info","aria-label":`${a.value.category}${n.pure?"":"🌈"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(_u),n.category.map(({name:o,path:r})=>l("span",{class:["page-category-item",{[`category${zs(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:p=>s(p,r)},o)),l("meta",{property:"articleSection",content:n.category.map(({name:o})=>o).join(",")})]):null}}),Z2=R({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(n){const e=Yi(),t=ct();return()=>n.date?l("span",{class:"page-date-info","aria-label":`${t.value.date}${n.pure?"":"📅"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(vu),l("span",l(Ns,()=>n.localizedDate||n.date.toLocaleDateString(e.value))),l("meta",{property:"datePublished",content:n.date.toISOString()||""})]):null}}),Q2=R({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(n){const e=ct();return()=>n.isOriginal?l("span",{class:"page-original-info"},e.value.origin):null}}),nv=R({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=ct(),t=y(()=>{if(!n.readingTime)return null;const{minutes:a}=n.readingTime;return a<1?"PT1M":`PT${Math.round(a)}M`});return()=>{var a,s;return(a=n.readingTimeLocale)!=null&&a.time?l("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.pure?"":"⌛"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(wu),l("span",(s=n.readingTimeLocale)==null?void 0:s.time),l("meta",{property:"timeRequired",content:t.value})]):null}}}),ev=R({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(n){const e=ze(),t=fn(),a=ct(),s=(o,r="")=>{r&&t.value.path!==r&&(o.preventDefault(),e.push(r))};return()=>n.tag.length?l("span",{class:"page-tag-info","aria-label":`${a.value.tag}${n.pure?"":"🏷"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(bu),n.tag.map(({name:o,path:r})=>l("span",{class:["page-tag-item",{[`tag${zs(o,9)}`]:!n.pure,clickable:r}],role:r?"navigation":"",onClick:p=>s(p,r)},o)),l("meta",{property:"keywords",content:n.tag.map(({name:o})=>o).join(",")})]):null}}),tv=R({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(n){const e=ct();return()=>{var t,a,s;return(t=n.readingTimeLocale)!=null&&t.words?l("span",{class:"page-word-info","aria-label":`${e.value.words}${n.pure?"":"🔠"}`,...n.pure?{}:{"data-balloon-pos":"up"}},[l(Eu),l("span",(a=n.readingTimeLocale)==null?void 0:a.words),l("meta",{property:"wordCount",content:(s=n.readingTime)==null?void 0:s.words})]):null}}}),Cu=R({name:"PageInfo",components:{AuthorInfo:Y2,CategoryInfo:X2,DateInfo:Z2,OriginalInfo:Q2,PageViewInfo:()=>null,ReadingTimeInfo:nv,TagInfo:ev,WordInfo:tv},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(n){const e=It();return()=>n.items?l("div",{class:"page-info"},n.items.map(t=>l(se(`${t}Info`),{...n.info,pure:e.value}))):null}}),av=R({name:"PrintButton",setup(){const n=it(),e=pn();return()=>n.value.print===!1?null:l("button",{type:"button",class:"print-button",title:e.value.metaLocales.print,onClick:()=>{window.print()}},l(yu))}}),Tu=R({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(n,{slots:e}){const t=lt(),a=fn(),s=ct(),[o,r]=Ca(),p=hn(),i=K("-1.7rem"),c=m=>{var h;(h=p.value)==null||h.scrollTo({top:m,behavior:"smooth"})},d=()=>{if(p.value){const m=document.querySelector(".vp-toc-item.active");m?i.value=`${m.getBoundingClientRect().top-p.value.getBoundingClientRect().top+p.value.scrollTop}px`:i.value="-1.7rem"}else i.value="-1.7rem"};return sn(()=>{on(()=>t.hash,m=>{if(p.value){const h=document.querySelector(`#toc a.toc-link[href$="${m}"]`);if(!h)return;const{top:k,height:g}=p.value.getBoundingClientRect(),{top:w,height:E}=h.getBoundingClientRect();w<k?c(p.value.scrollTop+w-k):w+E>k+g&&c(p.value.scrollTop+w+E-k-g)}}),on(()=>t.fullPath,d,{flush:"post",immediate:!0})}),()=>{var g,w;const m=({title:E,level:_,slug:T})=>l(Rn,{to:`#${T}`,class:["vp-toc-link",`level${_}`],onClick:()=>{r()}},()=>E),h=(E,_)=>E.length&&_>0?l("ul",{class:"vp-toc-list"},E.map(T=>{const b=h(T.children,_-1);return[l("li",{class:["vp-toc-item",{active:t.hash===`#${T.slug}`}]},m(T)),b?l("li",b):null]})):null,k=n.items.length?h(n.items,n.headerDepth):a.value.headers?h(a.value.headers,n.headerDepth):null;return k?l("div",{class:"vp-toc-placeholder"},[l("aside",{id:"toc"},[(g=e.before)==null?void 0:g.call(e),l("div",{class:"vp-toc-header",onClick:()=>{r()}},[s.value.toc,l(av),l("div",{class:["arrow",o.value?"down":"end"]})]),l("div",{class:["vp-toc-wrapper",o.value?"open":""],ref:p},[k,l("div",{class:"vp-toc-marker",style:{top:i.value}})]),(w=e.after)==null?void 0:w.call(e)])]):null}}}),zr=R({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(n){const e=fn(),t=pn(),a=hn(),s=({target:o})=>{const r=document.querySelector(o.hash);if(r){const p=()=>{r.removeAttribute("tabindex"),r.removeEventListener("blur",p)};r.setAttribute("tabindex","-1"),r.addEventListener("blur",p),r.focus(),window.scrollTo(0,0)}};return sn(()=>{on(()=>e.value.path,()=>a.value.focus())}),()=>[l("span",{ref:a,tabindex:"-1"}),l("a",{href:`#${n.content}`,class:"vp-skip-link sr-only",onClick:s},t.value.routeLocales.skipToContent)]}});let _o=null,ta=null;const sv={wait:()=>_o,pending:()=>{_o=new Promise(n=>{ta=n})},resolve:()=>{ta==null||ta(),_o=null,ta=null}},Iu=()=>sv;var ov=R({name:"FadeSlideY",slots:Object,setup(n,{slots:e}){const{resolve:t,pending:a}=Iu();return()=>l(je,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:a},()=>{var s;return(s=e.default)==null?void 0:s.call(e)})}});const rv=(n,e)=>{const t=n.replace(e,"/").split("/"),a=[];let s=Vs(e);return t.forEach((o,r)=>{r!==t.length-1?(s+=`${o}/`,a.push({link:s,name:o||"Home"})):o!==""&&(s+=o,a.push({link:s,name:o}))}),a},Su=(n,{slots:e})=>{var m,h;const{bgImage:t,bgImageDark:a,bgImageStyle:s,color:o,description:r,image:p,imageDark:i,header:c,features:d=[]}=n;return l("div",{class:"vp-feature-wrapper"},[t?l("div",{class:["vp-feature-bg",{light:a}],style:[{"background-image":`url(${t})`},s]}):null,a?l("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${a})`},s]}):null,l("div",{class:"vp-feature",style:o?{color:o}:{}},[((m=e.image)==null?void 0:m.call(e,n))||[p?l("img",{class:["vp-feature-image",{light:i}],src:Tn(p),alt:""}):null,i?l("img",{class:"vp-feature-image dark",src:Tn(i),alt:""}):null],((h=e.info)==null?void 0:h.call(e,n))||[c?l("h2",{class:"vp-feature-header"},c):null,r?l("p",{class:"vp-feature-description",innerHTML:r}):null],d.length?l("div",{class:"vp-features"},d.map(({icon:k,title:g,details:w,link:E})=>{const _=[l("h3",{class:"vp-feature-title"},[l(Fn,{icon:k}),l("span",{innerHTML:g})]),l("p",{class:"vp-feature-details",innerHTML:w})];return E?_a(E)?l("a",{class:"vp-feature-item link",href:E,"aria-label":g,target:"_blank"},_):l(Rn,{class:"vp-feature-item link",to:E,"aria-label":g},()=>_):l("div",{class:"vp-feature-item"},_)})):null])])};Su.displayName="FeaturePanel";var wp=Su,lv=R({name:"HeroInfo",slots:Object,setup(n,{slots:e}){const t=bn(),a=Jt(),s=y(()=>t.value.heroFullScreen??!1),o=y(()=>{const{heroText:c,tagline:d}=t.value;return{text:c??a.value.title??"Hello",tagline:d??a.value.description??"",isFullScreen:s.value}}),r=y(()=>{const{heroText:c,heroImage:d,heroImageDark:m,heroAlt:h,heroImageStyle:k}=t.value;return{image:d?Tn(d):null,imageDark:m?Tn(m):null,style:k,alt:h||c||"",isFullScreen:s.value}}),p=y(()=>{const{bgImage:c,bgImageDark:d,bgImageStyle:m}=t.value;return{image:_n(c)?Tn(c):null,imageDark:_n(d)?Tn(d):null,bgStyle:m,isFullScreen:s.value}}),i=y(()=>t.value.actions??[]);return()=>{var c,d,m;return l("header",{class:["vp-hero-info-wrapper",{fullscreen:s.value}]},[((c=e.heroBg)==null?void 0:c.call(e,p.value))||[p.value.image?l("div",{class:["vp-hero-mask",{light:p.value.imageDark}],style:[{"background-image":`url(${p.value.image})`},p.value.bgStyle]}):null,p.value.imageDark?l("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${p.value.imageDark})`},p.value.bgStyle]}):null],l("div",{class:"vp-hero-info"},[((d=e.heroImage)==null?void 0:d.call(e,r.value))||l(kn,{appear:!0,type:"group"},()=>[r.value.image?l("img",{key:"light",class:["vp-hero-image",{light:r.value.imageDark}],style:r.value.style,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?l("img",{key:"dark",class:"vp-hero-image dark",style:r.value.style,src:r.value.imageDark,alt:r.value.alt}):null]),((m=e.heroInfo)==null?void 0:m.call(e,o.value))??l("div",{class:"vp-hero-infos"},[o.value.text?l(kn,{appear:!0,delay:.04},()=>l("h1",{id:"main-title"},o.value.text)):null,o.value.tagline?l(kn,{appear:!0,delay:.08},()=>l("p",{id:"main-description",innerHTML:o.value.tagline})):null,i.value.length?l(kn,{appear:!0,delay:.12},()=>l("p",{class:"vp-hero-actions"},i.value.map(h=>l(Qn,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>l(Fn,{icon:h.icon})}:{})))):null])])])}}});const Pu=(n,{slots:e})=>{var h,k,g;const{bgImage:t,bgImageDark:a,bgImageStyle:s,color:o,description:r,image:p,imageDark:i,header:c,highlights:d=[],type:m="un-order"}=n;return l("div",{class:"vp-highlight-wrapper",style:o?{color:o}:{}},[t?l("div",{class:["vp-highlight-bg",{light:a}],style:[{"background-image":`url(${t})`},s]}):null,a?l("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${a})`},s]}):null,l("div",{class:"vp-highlight"},[((h=e.image)==null?void 0:h.call(e,n))||[p?l("img",{class:["vp-highlight-image",{light:i}],src:Tn(p),alt:""}):null,i?l("img",{class:"vp-highlight-image dark",src:Tn(i),alt:""}):null],((k=e.info)==null?void 0:k.call(e,n))||[l("div",{class:"vp-highlight-info-wrapper"},l("div",{class:"vp-highlight-info"},[c?l("h2",{class:"vp-highlight-header",innerHTML:c}):null,r?l("p",{class:"vp-highlight-description",innerHTML:r}):null,((g=e.highlights)==null?void 0:g.call(e,d))||l(m==="order"?"ol":m==="no-order"?"dl":"ul",{class:"vp-highlights"},d.map(({icon:w,title:E,details:_,link:T})=>{const b=[l(m==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[w?l(Fn,{class:"vp-highlight-icon",icon:w}):null,l("span",{innerHTML:E})]),_?l(m==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:_}):null];return l(m==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:T}]},T?_a(T)?l("a",{class:"vp-highlight-item link",href:T,"aria-label":E,target:"_blank"},b):l(Rn,{class:"vp-highlight-item link",to:T,"aria-label":E},()=>b):l("div",{class:"vp-highlight-item"},b))}))]))]])])};Pu.displayName="HighlightPanel";var pv=Pu,iv=R({name:"HomePage",slots:Object,setup(n,{slots:e}){const t=It(),a=bn(),s=y(()=>{const{features:r}=a.value;return Ea(r)?r:null}),o=y(()=>{const{highlights:r}=a.value;return Ea(r)?r:null});return()=>{var r,p,i,c;return l("main",{id:"main-content",class:["vp-project-home ",{pure:t.value}],"aria-labelledby":a.value.heroText===null?"":"main-title"},[(r=e.top)==null?void 0:r.call(e),l(lv),((p=o.value)==null?void 0:p.map(d=>"features"in d?l(wp,d):l(pv,d)))||(s.value?l(kn,{appear:!0,delay:.24},()=>l(wp,{features:s.value})):null),(i=e.center)==null?void 0:i.call(e),l(kn,{appear:!0,delay:.32},()=>l($r)),(c=e.bottom)==null?void 0:c.call(e)])}}}),cv=R({name:"BreadCrumb",setup(){const n=fn(),e=Te(),t=bn(),a=pn(),s=hn([]),o=y(()=>(t.value.breadcrumb||t.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&s.value.length>1),r=y(()=>t.value.breadcrumbIcon||t.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),p=()=>{const i=rv(n.value.path,e.value).map(({link:c,name:d})=>{const{path:m,meta:h,notFound:k}=Yt(c);return k?null:{title:h[En.shortTitle]||h[En.title]||d,icon:h[En.icon],path:m}}).filter(c=>c!==null);i.length>1&&(s.value=i)};return sn(()=>{on(()=>n.value.path,p,{immediate:!0})}),()=>l("nav",{class:["vp-breadcrumb",{disable:!o.value}]},o.value?l("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},s.value.map((i,c)=>l("li",{class:{"is-active":s.value.length-1===c},property:"itemListElement",typeof:"ListItem"},[l(Rn,{to:i.path,property:"item",typeof:"WebPage"},()=>[r.value?l(Fn,{icon:i.icon}):null,l("span",{property:"name"},i.title||"Unknown")]),l("meta",{property:"position",content:c+1})]))):[])}});const Ep=n=>n===!1||be(n)?n:_n(n)?$t(n,!0):null,Uo=(n,e,t)=>{const a=n.findIndex(s=>s.link===e);if(a!==-1){const s=n[a+t];return s!=null&&s.link?s:null}for(const s of n)if("children"in s){const o=Uo(s.children,e,t);if(o)return o}return null};var uv=R({name:"PageNav",setup(){const n=pn(),e=bn(),t=Mr(),a=fn(),s=Ma(),o=y(()=>{const p=Ep(e.value.prev);return p===!1?null:p||(n.value.prevLink===!1?null:Uo(t.value,a.value.path,-1))}),r=y(()=>{const p=Ep(e.value.next);return p===!1?null:p||(n.value.nextLink===!1?null:Uo(t.value,a.value.path,1))});return yn("keydown",p=>{p.altKey&&(p.key==="ArrowRight"?r.value&&(s(r.value.link),p.preventDefault()):p.key==="ArrowLeft"&&o.value&&(s(o.value.link),p.preventDefault()))}),()=>o.value||r.value?l("nav",{class:"vp-page-nav"},[o.value?l(Qn,{class:"prev",config:o.value},()=>{var p,i;return[l("div",{class:"hint"},[l("span",{class:"arrow start"}),n.value.metaLocales.prev]),l("div",{class:"link"},[l(Fn,{icon:(p=o.value)==null?void 0:p.icon}),(i=o.value)==null?void 0:i.text])]}):null,r.value?l(Qn,{class:"next",config:r.value},()=>{var p,i;return[l("div",{class:"hint"},[n.value.metaLocales.next,l("span",{class:"arrow end"})]),l("div",{class:"link"},[(p=r.value)==null?void 0:p.text,l(Fn,{icon:(i=r.value)==null?void 0:i.icon})])]}):null]):null}});const dv={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},mv=({docsRepo:n,docsBranch:e,docsDir:t,filePathRelative:a,editLinkPattern:s})=>{if(!a)return null;const o=Pr(n);let r;return s?r=s:o!==null&&(r=dv[o]),r?r.replace(/:repo/u,Ce(n)?n:`https://github.com/${n}`).replace(/:branch/u,e).replace(/:path/u,Mi(`${Vs(t)}/${a}`)):null},hv=()=>{const n=pn(),e=fn(),t=bn();return y(()=>{const{repo:a,docsRepo:s=a,docsBranch:o="main",docsDir:r="",editLink:p,editLinkPattern:i=""}=n.value;if(!(t.value.editLink??p??!0)||!s)return null;const c=mv({docsRepo:s,docsBranch:o,docsDir:r,editLinkPattern:i,filePathRelative:e.value.filePathRelative});return c?{text:n.value.metaLocales.editLink,link:c}:null})},kv=()=>{const n=Jt(),e=pn(),t=fn(),a=bn();return y(()=>{var s,o;return!(a.value.lastUpdated??e.value.lastUpdated??!0)||!((s=t.value.git)!=null&&s.updatedTime)?null:new Date((o=t.value.git)==null?void 0:o.updatedTime).toLocaleString(n.value.lang)})},fv=()=>{const n=pn(),e=fn(),t=bn();return y(()=>{var a;return t.value.contributors??n.value.contributors??!0?((a=e.value.git)==null?void 0:a.contributors)??null:null})};var gv=R({name:"PageTitle",setup(){const n=fn(),e=bn(),t=pn(),{info:a,items:s}=w2();return()=>l("div",{class:"vp-page-title"},[l("h1",[t.value.titleIcon===!1?null:l(Fn,{icon:e.value.icon}),n.value.title]),l(Cu,{info:a.value,...s.value===null?{}:{items:s.value}}),l("hr")])}});const xu=()=>l(rn,{name:"edit"},()=>[l("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),l("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);xu.displayName="EditIcon";var vv=R({name:"PageMeta",setup(){const n=pn(),e=hv(),t=kv(),a=fv();return()=>{const{metaLocales:s}=n.value;return l("footer",{class:"page-meta"},[e.value?l("div",{class:"meta-item edit-link"},l(Qn,{class:"label",config:e.value},{before:()=>l(xu)})):null,l("div",{class:"meta-item git-info"},[t.value?l("div",{class:"update-time"},[l("span",{class:"label"},`${s.lastUpdated}: `),l(Ns,()=>l("span",{class:"info"},t.value))]):null,a.value&&a.value.length?l("div",{class:"contributors"},[l("span",{class:"label"},`${s.contributors}: `),a.value.map(({email:o,name:r},p)=>[l("span",{class:"contributor",title:`email: ${o}`},r),p!==a.value.length-1?",":""])]):null])])}}}),_v=R({name:"NormalPage",slots:Object,setup(n,{slots:e}){const t=bn(),{isDarkmode:a}=$a(),s=pn(),o=y(()=>t.value.toc||t.value.toc!==!1&&s.value.toc!==!1);return()=>l("main",{id:"main-content",class:"vp-page"},l(Un("LocalEncrypt")?se("LocalEncrypt"):gc,()=>{var r,p,i,c;return[(r=e.top)==null?void 0:r.call(e),t.value.cover?l("div",{class:"page-cover"},l("img",{src:Tn(t.value.cover),alt:"","no-view":""})):null,l(cv),l(gv),o.value?l(Tu,{headerDepth:t.value.headerDepth??s.value.headerDepth??2},{before:()=>{var d;return(d=e.tocBefore)==null?void 0:d.call(e)},after:()=>{var d;return(d=e.tocAfter)==null?void 0:d.call(e)}}):null,(p=e.contentBefore)==null?void 0:p.call(e),l($r),(i=e.contentAfter)==null?void 0:i.call(e),l(vv),l(uv),Un("CommentService")?l(se("CommentService"),{darkmode:a.value}):null,(c=e.bottom)==null?void 0:c.call(e)]}))}}),yv=R({name:"Layout",slots:Object,setup(n,{slots:e}){const t=it(),a=pn(),s=fn(),o=bn(),{isMobile:r}=ja(),p=y(()=>{var i,c;return((i=a.value.blog)==null?void 0:i.sidebarDisplay)||((c=t.value.blog)==null?void 0:c.sidebarDisplay)||"mobile"});return()=>[l(zr),l(jr,{},{default:()=>{var i;return((i=e.default)==null?void 0:i.call(e))||(o.value.home?l(iv):l(ov,()=>l(_v,{key:s.value.path},{top:()=>{var c;return(c=e.top)==null?void 0:c.call(e)},bottom:()=>{var c;return(c=e.bottom)==null?void 0:c.call(e)},contentBefore:()=>{var c;return(c=e.contentBefore)==null?void 0:c.call(e)},contentAfter:()=>{var c;return(c=e.contentAfter)==null?void 0:c.call(e)},tocBefore:()=>{var c;return(c=e.tocBefore)==null?void 0:c.call(e)},tocAfter:()=>{var c;return(c=e.tocAfter)==null?void 0:c.call(e)}})))},...p.value==="none"?{}:{navScreenBottom:()=>l(se("BloggerInfo"))},...!r.value&&p.value==="always"?{sidebar:()=>l(se("BloggerInfo"))}:{}})]}}),bv=R({name:"NotFoundHint",setup(){const n=pn(),e=()=>{const t=n.value.routeLocales.notFoundMsg;return t[Math.floor(Math.random()*t.length)]};return()=>l("div",{class:"not-found-hint"},[l("p",{class:"error-code"},"404"),l("h1",{class:"error-title"},n.value.routeLocales.notFoundTitle),l("p",{class:"error-hint"},e())])}}),wv=R({name:"NotFound",slots:Object,setup(n,{slots:e}){const t=ze(),a=Te(),s=pn();return()=>[l(zr),l(jr,{noSidebar:!0},()=>{var o;return l("main",{id:"main-content",class:"vp-page not-found"},((o=e.default)==null?void 0:o.call(e))||[l(bv),l("div",{class:"actions"},[l("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},s.value.routeLocales.back),l("button",{type:"button",class:"action-button",onClick:()=>{t.push(s.value.home??a.value)}},s.value.routeLocales.home)])])})]}});const Ev={},Cv={category:{"/":{path:"/category/",map:{}}},tag:{"/":{path:"/tag/",map:{400:{path:"/tag/400/",indexes:[0]},Infrastructure:{path:"/tag/infrastructure/",indexes:[1]},Platform:{path:"/tag/platform/",indexes:[2]},Cloud:{path:"/tag/cloud/",indexes:[3]},HashiCorp:{path:"/tag/hashicorp/",indexes:[4]},Software:{path:"/tag/software/",indexes:[5]},Etc:{path:"/tag/etc/",indexes:[6]},container:{path:"/tag/container/",indexes:[7,8,9]},docker:{path:"/tag/docker/",indexes:[10,11,12,7,13]},podman:{path:"/tag/podman/",indexes:[7]},rancher:{path:"/tag/rancher/",indexes:[11,12]},mac:{path:"/tag/mac/",indexes:[11,14,12,15]},openshift:{path:"/tag/openshift/",indexes:[16,17]},ocp:{path:"/tag/ocp/",indexes:[16,17]},jboss:{path:"/tag/jboss/",indexes:[17]},vsphere:{path:"/tag/vsphere/",indexes:[18]},template:{path:"/tag/template/",indexes:[18]},alibaba:{path:"/tag/alibaba/",indexes:[19]},aliyun:{path:"/tag/aliyun/",indexes:[19]},book:{path:"/tag/book/",indexes:[20]},ai:{path:"/tag/ai/",indexes:[20,21]},devops:{path:"/tag/devops/",indexes:[21,8,9]},keyboard:{path:"/tag/keyboard/",indexes:[22]},tip:{path:"/tag/tip/",indexes:[22,23]},acronyms:{path:"/tag/acronyms/",indexes:[23]},homebrew:{path:"/tag/homebrew/",indexes:[14,15]},brew:{path:"/tag/brew/",indexes:[14,15]},wget:{path:"/tag/wget/",indexes:[14]},arm:{path:"/tag/arm/",indexes:[24]},nodejs:{path:"/tag/nodejs/",indexes:[24]},linux:{path:"/tag/linux/",indexes:[25,13,26,27]},oom:{path:"/tag/oom/",indexes:[25]},oom_killer:{path:"/tag/oom-killer/",indexes:[25]},ssh:{path:"/tag/ssh/",indexes:[27]},bridge:{path:"/tag/bridge/",indexes:[13]},netstat:{path:"/tag/netstat/",indexes:[13]},kubernetes:{path:"/tag/kubernetes/",indexes:[28,29,30,10,31,32,33]},scheduler:{path:"/tag/scheduler/",indexes:[29]},알고리즘:{path:"/tag/알고리즘/",indexes:[29]},docker아님:{path:"/tag/docker아님/",indexes:[30]},containerd:{path:"/tag/containerd/",indexes:[30]},vagrant:{path:"/tag/vagrant/",indexes:[10,34,26]},install:{path:"/tag/install/",indexes:[10,35]},Kubernetes:{path:"/tag/kubernetes/",indexes:[36,37,38,39,40,41,42,43,44,45,46,47,48]},Kops:{path:"/tag/kops/",indexes:[36,37]},EKS:{path:"/tag/eks/",indexes:[36,37,38,39]},PKOS:{path:"/tag/pkos/",indexes:[36,37,38,39]},Packer:{path:"/tag/packer/",indexes:[49,50,51,52,53,54,55]},HCP:{path:"/tag/hcp/",indexes:[49]},Terraform:{path:"/tag/terraform/",indexes:[56,57,58,59,49,60,61,62,63]},Sample:{path:"/tag/sample/",indexes:[64,65,66,67,68,69,70,71,72,50,51,73,74,75,76,77,78,79,52,53,54,55,80,81,82,83,84,85]},Alibaba:{path:"/tag/alibaba/",indexes:[54]},Azure:{path:"/tag/azure/",indexes:[57,58,55,63]},GCP:{path:"/tag/gcp/",indexes:[52]},aws:{path:"/tag/aws/",indexes:[86,87,88,50,51]},NCP:{path:"/tag/ncp/",indexes:[53]},virtualbox:{path:"/tag/virtualbox/",indexes:[34,26]},terraform:{path:"/tag/terraform/",indexes:[89,90,91,92,93,94,95,96,97,98,99,100,101,102,87,103,104,105,106,107,108,109,110,111]},IaC:{path:"/tag/iac/",indexes:[58,103,104,105,106,107,108,109,110]},usecase:{path:"/tag/usecase/",indexes:[105]},HCL:{path:"/tag/hcl/",indexes:[112,105]},admin:{path:"/tag/admin/",indexes:[111]},password:{path:"/tag/password/",indexes:[113,111]},"Terraform on Azure":{path:"/tag/terraform-on-azure/",indexes:[58]},HashiCat:{path:"/tag/hashicat/",indexes:[58]},"Terraform OSS":{path:"/tag/terraform-oss/",indexes:[58]},"Terraform Cloud":{path:"/tag/terraform-cloud/",indexes:[58]},"Terraform Enterprise":{path:"/tag/terraform-enterprise/",indexes:[58]},"Terraform 샘플":{path:"/tag/terraform-샘플/",indexes:[58]},Nomad:{path:"/tag/nomad/",indexes:[114,112,115,64,65,116,117,118,119,120,66,67,121,68,88,69,122,70,71,72,123,73,74,124,125,75,76,77,78,79,80,81,82,83,84,85,126,127,128,129,130,131]},terrafom:{path:"/tag/terrafom/",indexes:[117]},CSI:{path:"/tag/csi/",indexes:[117]},State:{path:"/tag/state/",indexes:[60]},Enterprise:{path:"/tag/enterprise/",indexes:[132,59,133,61,126,128,129,130,134,135,136,137]},TFE:{path:"/tag/tfe/",indexes:[59]},provider:{path:"/tag/provider/",indexes:[100,101,102]},Consul:{path:"/tag/consul/",indexes:[138,139,40,140,41,42,43,44,45,46,47,35,133,125,141,142,83,84,126,143,134,135,136,137,144,145,48]},consul:{path:"/tag/consul/",indexes:[146,147]},sizing:{path:"/tag/sizing/",indexes:[148,146,149,150]},port:{path:"/tag/port/",indexes:[151,147]},requirement:{path:"/tag/requirement/",indexes:[151,147]},Configuration:{path:"/tag/configuration/",indexes:[152,153,133,128,129,130,134,135,136]},ForwardDns:{path:"/tag/forwarddns/",indexes:[133]},Acl:{path:"/tag/acl/",indexes:[140]},Policy:{path:"/tag/policy/",indexes:[154,155,140]},Client:{path:"/tag/client/",indexes:[129,134]},Common:{path:"/tag/common/",indexes:[130,136]},Server:{path:"/tag/server/",indexes:[153,128,135]},Hybrid:{path:"/tag/hybrid/",indexes:[144]},Kubetenetes:{path:"/tag/kubetenetes/",indexes:[138,139,144]},k8s:{path:"/tag/k8s/",indexes:[31,139,144]},VM:{path:"/tag/vm/",indexes:[144]},ServiceMesh:{path:"/tag/servicemesh/",indexes:[40,41,42,43,44,45,46,47,48]},SideCar:{path:"/tag/sidecar/",indexes:[40,48]},K8S:{path:"/tag/k8s/",indexes:[40,48]},"Consul Template":{path:"/tag/consul-template/",indexes:[141,142]},NGINX:{path:"/tag/nginx/",indexes:[142]},Boundary:{path:"/tag/boundary/",indexes:[156,157,62]},Install:{path:"/tag/install/",indexes:[156,157]},Config:{path:"/tag/config/",indexes:[62]},vault:{path:"/tag/vault/",indexes:[158,159,28,160,161,31,162,163,164,32,165,166,33,167,168,169,170,171,86,87,172,0,173,174,175,176,150,177,178,179,180,181,182,183,113,184,151]},kmip:{path:"/tag/kmip/",indexes:[159]},audit:{path:"/tag/audit/",indexes:[176]},optinos:{path:"/tag/optinos/",indexes:[168]},configuration:{path:"/tag/configuration/",indexes:[169]},token:{path:"/tag/token/",indexes:[158,167,174]},"Vault Enterprise":{path:"/tag/vault-enterprise/",indexes:[161,177]},keymgmt:{path:"/tag/keymgmt/",indexes:[161]},KMIP:{path:"/tag/kmip/",indexes:[177]},MongoDB:{path:"/tag/mongodb/",indexes:[177]},PKI:{path:"/tag/pki/",indexes:[178]},SSH:{path:"/tag/ssh/",indexes:[179,180,181]},OTP:{path:"/tag/otp/",indexes:[179,180]},Debian:{path:"/tag/debian/",indexes:[179]},Ubuntu:{path:"/tag/ubuntu/",indexes:[179]},Rocky:{path:"/tag/rocky/",indexes:[180]},RHEL:{path:"/tag/rhel/",indexes:[180]},CentOS:{path:"/tag/centos/",indexes:[180]},transform:{path:"/tag/transform/",indexes:[173]},fpe:{path:"/tag/fpe/",indexes:[173]},transit:{path:"/tag/transit/",indexes:[160,172,182]},"vault auth":{path:"/tag/vault-auth/",indexes:[185,186,187,188]},AWS:{path:"/tag/aws/",indexes:[185,152,124]},MFA:{path:"/tag/mfa/",indexes:[186]},kv:{path:"/tag/kv/",indexes:[175,183]},policy:{path:"/tag/policy/",indexes:[183]},pki:{path:"/tag/pki/",indexes:[158,166]},mTLS:{path:"/tag/mtls/",indexes:[158,166]},argocd:{path:"/tag/argocd/",indexes:[31]},gitops:{path:"/tag/gitops/",indexes:[31]},devsescops:{path:"/tag/devsescops/",indexes:[31]},pipeline:{path:"/tag/pipeline/",indexes:[31]},github:{path:"/tag/github/",indexes:[31]},gitlab:{path:"/tag/gitlab/",indexes:[31]},secret:{path:"/tag/secret/",indexes:[31,32]},eks:{path:"/tag/eks/",indexes:[31]},jenkins:{path:"/tag/jenkins/",indexes:[171,174,175,189,190,191,192,193,194,195,196,197,198,199,200,201,202]},approle:{path:"/tag/approle/",indexes:[171]},otp:{path:"/tag/otp/",indexes:[174]},screct:{path:"/tag/screct/",indexes:[175]},nomad:{path:"/tag/nomad/",indexes:[86,148,149,113]},db:{path:"/tag/db/",indexes:[86]},sentinel:{path:"/tag/sentinel/",indexes:[170]},cidr:{path:"/tag/cidr/",indexes:[170]},enterprise:{path:"/tag/enterprise/",indexes:[170]},java:{path:"/tag/java/",indexes:[165]},spring:{path:"/tag/spring/",indexes:[165]},performance:{path:"/tag/performance/",indexes:[172]},VSO:{path:"/tag/vso/",indexes:[32]},windows:{path:"/tag/windows/",indexes:[113]},error:{path:"/tag/error/",indexes:[0]},MiriaDB:{path:"/tag/miriadb/",indexes:[184]},Vault:{path:"/tag/vault/",indexes:[154,132,155,152,120,68,153]},https:{path:"/tag/https/",indexes:[153]},Agent:{path:"/tag/agent/",indexes:[152]},License:{path:"/tag/license/",indexes:[132]},Sentinel:{path:"/tag/sentinel/",indexes:[154,155]},Cloudwatch:{path:"/tag/cloudwatch/",indexes:[124]},log:{path:"/tag/log/",indexes:[124]},Namespace:{path:"/tag/namespace/",indexes:[122,131]},ACL:{path:"/tag/acl/",indexes:[121]},SSL:{path:"/tag/ssl/",indexes:[127]},config:{path:"/tag/config/",indexes:[123]},csi:{path:"/tag/csi/",indexes:[123]},nfs:{path:"/tag/nfs/",indexes:[123]},UI:{path:"/tag/ui/",indexes:[118]},Windows:{path:"/tag/windows/",indexes:[119]},Jenkins:{path:"/tag/jenkins/",indexes:[65,120]},Java:{path:"/tag/java/",indexes:[115,120,203,204,205,206,207,208,209,210,211,212,213]},Docker:{path:"/tag/docker/",indexes:[114,120]},API:{path:"/tag/api/",indexes:[112]},SpringBoot:{path:"/tag/springboot/",indexes:[115]},sample:{path:"/tag/sample/",indexes:[116,88]},job:{path:"/tag/job/",indexes:[116,88]},autoscaler:{path:"/tag/autoscaler/",indexes:[116,88]},das:{path:"/tag/das/",indexes:[116]},Job:{path:"/tag/job/",indexes:[114,64,65,66,68,69,70,71,72,73,74,125,75,76,77,78,79,80,81,82,83,84,85]},SWLB:{path:"/tag/swlb/",indexes:[68]},"vs-code":{path:"/tag/vs-code/",indexes:[64]},elk:{path:"/tag/elk/",indexes:[70]},"":{path:"/tag//",indexes:[72]},Ansible:{path:"/tag/ansible/",indexes:[114]},wildfly:{path:"/tag/wildfly/",indexes:[73]},JBoss:{path:"/tag/jboss/",indexes:[73]},"reverse proxy":{path:"/tag/reverse-proxy/",indexes:[77]},"consul service discovery":{path:"/tag/consul-service-discovery/",indexes:[77]},"nomad-pack":{path:"/tag/nomad-pack/",indexes:[74]},vuepress:{path:"/tag/vuepress/",indexes:[74]},param:{path:"/tag/param/",indexes:[71]},batch:{path:"/tag/batch/",indexes:[71]},Scouter:{path:"/tag/scouter/",indexes:[125]},"Service Mesh":{path:"/tag/service-mesh/",indexes:[83]},sidecar:{path:"/tag/sidecar/",indexes:[75]},tomcat:{path:"/tag/tomcat/",indexes:[75]},Hashicorp:{path:"/tag/hashicorp/",indexes:[214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232]},Update:{path:"/tag/update/",indexes:[214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232]},Jan:{path:"/tag/jan/",indexes:[215,226]},Feb:{path:"/tag/feb/",indexes:[214,225]},Mar:{path:"/tag/mar/",indexes:[224]},Apr:{path:"/tag/apr/",indexes:[223]},May:{path:"/tag/may/",indexes:[222]},Jun:{path:"/tag/jun/",indexes:[221]},Jul:{path:"/tag/jul/",indexes:[220]},Aug:{path:"/tag/aug/",indexes:[219,231]},Sep:{path:"/tag/sep/",indexes:[218,230]},Oct:{path:"/tag/oct/",indexes:[217,229]},Nov:{path:"/tag/nov/",indexes:[216,228]},July:{path:"/tag/july/",indexes:[232]},Dec:{path:"/tag/dec/",indexes:[227]},cicd:{path:"/tag/cicd/",indexes:[189,190,191,192,193,194,195,196,197,198,199,200,201,202]},Tomcat:{path:"/tag/tomcat/",indexes:[203,204,205,206,207,208,209,210,211,212,213]},ncloud:{path:"/tag/ncloud/",indexes:[89,90,91,92,93,94,95,96,97,98,99]},ncp:{path:"/tag/ncp/",indexes:[89,90,91,92,93,94,95,96,97,98,99]},workshop:{path:"/tag/workshop/",indexes:[89,90,91,92,93,94,95,96,97,98,99]},K8s:{path:"/tag/k8s/",indexes:[138,41,42,43,44,45,46,47]},ingress:{path:"/tag/ingress/",indexes:[46]},annotation:{path:"/tag/annotation/",indexes:[47]},timeout:{path:"/tag/timeout/",indexes:[41]},Istio:{path:"/tag/istio/",indexes:[138,139]},Performance:{path:"/tag/performance/",indexes:[139]},Jaeger:{path:"/tag/jaeger/",indexes:[138]},Tracing:{path:"/tag/tracing/",indexes:[138]},OpenTelemetry:{path:"/tag/opentelemetry/",indexes:[138]},IngressGateway:{path:"/tag/ingressgateway/",indexes:[138]},operator:{path:"/tag/operator/",indexes:[162,163,164]}}}}},Au=["/04-HashiCorp/06-Vault/05-TroubleShooting/400-error.html","/01-Infrastructure/","/02-PrivatePlatform/","/03-PublicCloud/","/04-HashiCorp/","/05-Software/","/06-etc/","/01-Infrastructure/Container/container_runtime_sheet.html","/06-etc/class/devops-discussion-1st.html","/06-etc/class/devops-discussion-2nd.html","/02-PrivatePlatform/Kubernetes/02-Config/vagrant_k8s.html","/01-Infrastructure/Container/rancher-desktop-disk-resize-mac.html","/01-Infrastructure/Container/rancher-desktop-insecure-setup-mac.html","/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html","/06-etc/mac/libunistring-issue.html","/06-etc/mac/brew-cert-issue.html","/02-PrivatePlatform/OpenShift/deploying_specificnode_by_namespace.html","/02-PrivatePlatform/OpenShift/openshift3.11_custom_metric_with_jboss.html","/02-PrivatePlatform/Vsphere/Vsphere_template_issue.html","/03-PublicCloud/AlibabaCloud/CredentialConfig.html","/06-etc/book-memo/theshortcut.html","/06-etc/class/devops-discussion-20240213.html","/06-etc/infomation/Keyboard-Eng.html","/06-etc/infomation/acronyms.html","/06-etc/nodejs/node-sass.html","/01-Infrastructure/Linux/TroubleShooting/Oom_killer.html","/04-HashiCorp/02-Vagrant/02-Config/multi-linux-sample.html","/01-Infrastructure/Linux/TroubleShooting/SSH%20Too%20many%20authentication%20failures.html","/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-manually-using-the-sidecar.html","/02-PrivatePlatform/Kubernetes/01-Information/Kubernetes_scheduler.html","/02-PrivatePlatform/Kubernetes/02-Config/kubernetes_with_out_docker.html","/04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.html","/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-integration-three-methods.html","/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-usecase-csi-injection.html","/04-HashiCorp/02-Vagrant/04-TroubleShooting/hostonlynetworkissue.html","/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Install.html","/02-PrivatePlatform/Kubernetes/05-Kops/01-kops-on-aws.html","/02-PrivatePlatform/Kubernetes/05-Kops/02-kops-network-storage.html","/02-PrivatePlatform/Kubernetes/06-EKS/01-eks-deploy.html","/02-PrivatePlatform/Kubernetes/06-EKS/02-eks-networking.html","/04-HashiCorp/04-Consul/04-TroubleShooting/connection-termination.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/envoy_timeout.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/01-Install.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/02-SideCar.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/03-use-crd.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/04-traffic-management.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/annotation/ingress-and-serviceroute.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/annotation/multiport.html","/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Sidecar%20Inject%20not%20working%20on%20k8s.html","/04-HashiCorp/01-Packer/01-Information/HCP_Packer_Intro.html","/04-HashiCorp/01-Packer/05-SamplePkr/aws-ubuntu.html","/04-HashiCorp/01-Packer/05-SamplePkr/aws-windows.html","/04-HashiCorp/01-Packer/05-SamplePkr/GCP.html","/04-HashiCorp/01-Packer/05-SamplePkr/nCloud.html","/04-HashiCorp/01-Packer/05-SamplePkr/AlibabaCloud.html","/04-HashiCorp/01-Packer/05-SamplePkr/Azure.html","/04-HashiCorp/03-Terraform/02-Config/terraform-cloud-agent-guide-custom.html","/04-HashiCorp/03-Terraform/04-TroubleShooting/error-state-snapshot-was-created-by-terraform-version.html","/04-HashiCorp/03-Terraform/03-Sample/hashicat-azure.html","/04-HashiCorp/03-Terraform/04-TroubleShooting/re-install.html","/04-HashiCorp/03-Terraform/04-TroubleShooting/StateRemove.html","/04-HashiCorp/03-Terraform/04-TroubleShooting/TFE_v202111-1(582)_Issue.html","/04-HashiCorp/05-Boundary/02-Config/BoundaryTerraformSample01.html","/04-HashiCorp/03-Terraform/04-TroubleShooting/NotAllowAdminUsername.html","/04-HashiCorp/07-Nomad/05-SampleJob/code-server.html","/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html","/04-HashiCorp/07-Nomad/05-SampleJob/nexus.html","/04-HashiCorp/07-Nomad/02-Config/nomad-guide-basic.html","/04-HashiCorp/07-Nomad/05-SampleJob/VaultSWLB-nginx.html","/04-HashiCorp/07-Nomad/05-SampleJob/withVaultKV.html","/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html","/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html","/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html","/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html","/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html","/04-HashiCorp/07-Nomad/05-SampleJob/sidecar-tomcat.html","/04-HashiCorp/07-Nomad/05-SampleJob/update.html","/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html","/04-HashiCorp/07-Nomad/05-SampleJob/redis.html","/04-HashiCorp/07-Nomad/05-SampleJob/withConsulKV.html","/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html","/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html","/04-HashiCorp/07-Nomad/05-SampleJob/oracleXE.html","/04-HashiCorp/07-Nomad/05-SampleJob/service-mesh-test.html","/04-HashiCorp/07-Nomad/05-SampleJob/tomcat.html","/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html","/04-HashiCorp/06-Vault/04-UseCase/nomad-integration.html","/04-HashiCorp/06-Vault/04-UseCase/terraform-with-aws-secret-engine.html","/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/00-overview.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-terraform-basic.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-z-lab_terraform_basic.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-z-lab_terraform_action.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-z-lab_provisioners_variables_outputs.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html","/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-z-lab_terraform_cloud.html","/04-HashiCorp/03-Terraform/05-Airgap/ProviderBundling.html","/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalFilesystem.html","/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalMirroring.html","/04-HashiCorp/03-Terraform/01-Information/00-introduction.html","/04-HashiCorp/03-Terraform/01-Information/01-infrastructure_maturity.html","/04-HashiCorp/03-Terraform/01-Information/02-hcl.html","/04-HashiCorp/03-Terraform/01-Information/remoteruns.html","/04-HashiCorp/03-Terraform/01-Information/remotestate.html","/04-HashiCorp/03-Terraform/01-Information/sentinel.html","/04-HashiCorp/03-Terraform/01-Information/variables.html","/04-HashiCorp/03-Terraform/01-Information/workspace.html","/04-HashiCorp/03-Terraform/02-Config/TFEAdminPasswordReset.html","/04-HashiCorp/07-Nomad/04-UseCase/job-start-from-hcl.html","/04-HashiCorp/06-Vault/04-UseCase/windows-password-rotation.html","/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html","/04-HashiCorp/07-Nomad/04-UseCase/springboot-graceful-shutdown.html","/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html","/04-HashiCorp/03-Terraform/03-Sample/nomad-csi-sample.html","/04-HashiCorp/07-Nomad/02-Config/custom-ui-link.html","/04-HashiCorp/07-Nomad/02-Config/nomad-on-windows.html","/04-HashiCorp/07-Nomad/04-UseCase/jenkins-pipeline.html","/04-HashiCorp/07-Nomad/02-Config/Nomad-Ui-Token.html","/04-HashiCorp/07-Nomad/02-Config/integrateVault.html","/04-HashiCorp/07-Nomad/02-Config/csi-nfs.html","/04-HashiCorp/07-Nomad/02-Config/Cloudwatch-Logging.html","/04-HashiCorp/07-Nomad/05-SampleJob/scouter.html","/04-HashiCorp/07-Nomad/02-Config/consul-namespace.html","/04-HashiCorp/07-Nomad/02-Config/Nomad-sslkey-create.html","/04-HashiCorp/07-Nomad/02-Config/Server.html","/04-HashiCorp/07-Nomad/02-Config/client.html","/04-HashiCorp/07-Nomad/02-Config/common.html","/04-HashiCorp/07-Nomad/02-Config/Namespace.html","/04-HashiCorp/06-Vault/06-Config/vault-entierprise-license.html","/04-HashiCorp/04-Consul/02-Configuration/ForwardDns.html","/04-HashiCorp/04-Consul/02-Configuration/client.html","/04-HashiCorp/04-Consul/02-Configuration/server.html","/04-HashiCorp/04-Consul/02-Configuration/common.html","/04-HashiCorp/04-Consul/01-Information/Consul%20Enterprise%20Feature.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/tracing/jaeger_tracing.html","/04-HashiCorp/04-Consul/06-on_Kubernetes/performance/consul-istio.html","/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html","/04-HashiCorp/04-Consul/05-Template_Sample/kv-sample.html","/04-HashiCorp/04-Consul/05-Template_Sample/nginx.html","/04-HashiCorp/04-Consul/03-UseCase/Consul%20Health%20Check.html","/04-HashiCorp/04-Consul/03-UseCase/Consul%20Enterprise%20Feature.html","/04-HashiCorp/04-Consul/04-TroubleShooting/Consul%20Enterprise%20Feature.html","/04-HashiCorp/04-Consul/01-Information/consul-sizing.html","/04-HashiCorp/04-Consul/01-Information/port-info.html","/04-HashiCorp/07-Nomad/01-Information/nomad_job_restart.html","/04-HashiCorp/07-Nomad/01-Information/nomad-sizing.html","/04-HashiCorp/06-Vault/01-Information/vault-sizing.html","/04-HashiCorp/06-Vault/01-Information/port-info.html","/04-HashiCorp/06-Vault/06-Config/vault-agent.html","/04-HashiCorp/06-Vault/06-Config/tls-config.html","/04-HashiCorp/06-Vault/07-Sentinel-Sample/transit-secrets-key-exportable-deny.html","/04-HashiCorp/06-Vault/07-Sentinel-Sample/aws-secrets-credential-type-check.html","/04-HashiCorp/05-Boundary/01-Install/OnNomad-devmode.html","/04-HashiCorp/05-Boundary/01-Install/OnConsulNomad.html","/04-HashiCorp/06-Vault/04-UseCase/API-security.html","/04-HashiCorp/06-Vault/01-Information/kmip-faq.html","/04-HashiCorp/06-Vault/02-Secret_Engine/transit-import.html","/04-HashiCorp/06-Vault/02-Secret_Engine/keymgmt.html","/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/1-vso-overview.html","/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/2-vso-install.html","/04-HashiCorp/06-Vault/01-Information/vault-secret-operator/3-vso-samples.html","/04-HashiCorp/06-Vault/04-UseCase/spring-boot.html","/04-HashiCorp/06-Vault/04-UseCase/mtls.html","/04-HashiCorp/06-Vault/01-Information/vault-token.html","/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html","/04-HashiCorp/06-Vault/01-Information/vault-server-configuration-info.html","/04-HashiCorp/06-Vault/04-UseCase/sentinel-check-identity-cidr.html","/04-HashiCorp/06-Vault/04-UseCase/jenkins-pipeilne-vault-approle.html","/04-HashiCorp/06-Vault/04-UseCase/transit-stress-test.html","/04-HashiCorp/06-Vault/02-Secret_Engine/transform-fpe.html","/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault-otp.html","/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html","/04-HashiCorp/06-Vault/01-Information/vault-audit.html","/04-HashiCorp/06-Vault/02-Secret_Engine/kmip-mongo.html","/04-HashiCorp/06-Vault/02-Secret_Engine/pki-nginx.html","/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-debian.html","/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.html","/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-signed-certificates.html","/04-HashiCorp/06-Vault/02-Secret_Engine/transit.html","/04-HashiCorp/06-Vault/03-Auth_Method/vault-kv-v2-ui-policy.html","/04-HashiCorp/06-Vault/05-TroubleShooting/vault-sizing.html","/04-HashiCorp/06-Vault/03-Auth_Method/aws-auth.html","/04-HashiCorp/06-Vault/03-Auth_Method/mfa-login.html","/04-HashiCorp/06-Vault/03-Auth_Method/token_role.html","/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html","/05-Software/Jenkins/pipeline101/13-jenkins_101_single.html","/05-Software/Jenkins/pipeline101/00-introduction.html","/05-Software/Jenkins/pipeline101/01-cicd.html","/05-Software/Jenkins/pipeline101/02-jobs.html","/05-Software/Jenkins/pipeline101/03-builds.html","/05-Software/Jenkins/pipeline101/04-agent.html","/05-Software/Jenkins/pipeline101/05-plugins.html","/05-Software/Jenkins/pipeline101/06-notifications.html","/05-Software/Jenkins/pipeline101/07-testing.html","/05-Software/Jenkins/pipeline101/08-restapi.html","/05-Software/Jenkins/pipeline101/09-security.html","/05-Software/Jenkins/pipeline101/10-artifacts.html","/05-Software/Jenkins/pipeline101/11-pipelines.html","/05-Software/Jenkins/pipeline101/12-appendix.html","/05-Software/Tomcat/tomcat101/01-Introduction.html","/05-Software/Tomcat/tomcat101/02-env.html","/05-Software/Tomcat/tomcat101/03-installation.html","/05-Software/Tomcat/tomcat101/04-configuration.html","/05-Software/Tomcat/tomcat101/05-deployment.html","/05-Software/Tomcat/tomcat101/06-dbconnection.html","/05-Software/Tomcat/tomcat101/07-host.html","/05-Software/Tomcat/tomcat101/08-webserver.html","/05-Software/Tomcat/tomcat101/09-thread.html","/05-Software/Tomcat/tomcat101/10-monitoring.html","/05-Software/Tomcat/tomcat101/11-tip.html","/04-HashiCorp/08-Updates/97-2024/2024-02.html","/04-HashiCorp/08-Updates/97-2024/2024-01.html","/04-HashiCorp/08-Updates/98-2023/2023-11.html","/04-HashiCorp/08-Updates/98-2023/2023-10.html","/04-HashiCorp/08-Updates/98-2023/2023-09.html","/04-HashiCorp/08-Updates/98-2023/2023-08.html","/04-HashiCorp/08-Updates/98-2023/2023-07.html","/04-HashiCorp/08-Updates/98-2023/2023-06.html","/04-HashiCorp/08-Updates/98-2023/2023-05.html","/04-HashiCorp/08-Updates/98-2023/2023-04.html","/04-HashiCorp/08-Updates/98-2023/2023-03.html","/04-HashiCorp/08-Updates/98-2023/2023-02.html","/04-HashiCorp/08-Updates/98-2023/2023-01.html","/04-HashiCorp/08-Updates/99-2022/2022-12.html","/04-HashiCorp/08-Updates/99-2022/2022-11.html","/04-HashiCorp/08-Updates/99-2022/2022-10.html","/04-HashiCorp/08-Updates/99-2022/2022-09.html","/04-HashiCorp/08-Updates/99-2022/2022-08.html","/04-HashiCorp/08-Updates/99-2022/2022-07.html","/00-Howto/02-Guide/","/00-Howto/03-Tips/","/03-PublicCloud/AlibabaCloud/","/03-PublicCloud/Azure/","/03-PublicCloud/NCP/","/02-PrivatePlatform/Kubernetes/06-EKS/03-eks-storage.html","/00-Howto/03-Tips/Chart.html","/00-Howto/01-Overview.html","/00-Howto/02-Guide/01-Start.html","/00-Howto/02-Guide/02-Contribute.html","/00-Howto/02-Guide/04-Template.html","/00-Howto/03-Tips/CodeBlock.html","/00-Howto/03-Tips/Link.html","/00-Howto/03-Tips/PlantUML.html","/00-Howto/03-Tips/Tabs.html","/00-Howto/03-Tips/TipBox.html","/00-Howto/","/99-about/01-About.html","/99-about/02-Thanks.html","/"],Ko=hn(Cv);st(Ko);const Lu=n=>{const e=fn(),t=bn(),a=Te();return y(()=>{var p;const s=n??((p=t.value.blog)==null?void 0:p.key)??"";if(!s)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!Ko.value[s])throw new Error(`useBlogCategory: key ${s} is invalid`);const o=Ko.value[s][a.value],r={path:o.path,map:{}};for(const i in o.map){const c=o.map[i];r.map[i]={path:c.path,items:[]};for(const d of c.indexes){const{path:m,meta:h}=Yt(Au[d]);r.map[i].items.push({path:m,info:h})}e.value.path===c.path&&(r.currentItems=r.map[i].items)}return r})},Tv={article:{"/":{path:"/article/",indexes:[158,20,159,21,214,56,215,154,28,216,217,132,160,57,2,3,233,234,16,17,18,19,235,236,237,22,23,29,30,10,36,37,38,39,238,89,90,91,92,93,94,95,96,97,98,99,218,114,161,219,58,155,220,185,31,221,162,163,164,11,222,32,165,223,166,33,224,167,112,168,169,225,14,115,226,227,64,170,138,65,24,228,229,116,117,239,139,230,118,231,119,232,152,171,120,66,59,86,156,67,12,186,187,100,101,102,87,40,140,121,41,49,172,0,42,43,44,45,46,47,35,68,153,173,174,88,148,175,69,122,133,146,149,60,70,176,150,177,178,179,180,181,182,188,183,113,184,25,71,189,5,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,15,7,8,9,103,104,105,106,107,108,109,110,6,151,147,61,72,50,51,123,73,13,74,124,125,34,141,142,75,240,241,242,243,244,245,246,247,248,157,62,76,77,78,79,52,53,54,55,80,81,82,83,84,85,63,111,126,143,127,128,129,130,134,135,136,26,137,144,145,48,131,249,1,4,250,251,27]}},star:{"/":{path:"/star/",indexes:[]}},timeline:{"/":{path:"/timeline/",indexes:[158,20,159,21,214,56,215,154,28,216,217,132,160,57,2,3,233,234,16,17,18,19,235,236,237,22,23,29,30,10,36,37,38,39,238,89,90,91,92,93,94,95,96,97,98,99,218,114,161,219,58,155,220,185,31,221,162,163,164,11,222,32,165,223,166,33,224,167,112,168,169,225,14,115,226,227,64,170,138,65,24,228,229,116,117,239,139,230,118,231,119,232,152,171,120,66,59,86,156,67,12,186,187,100,101,102,87,40,140,121,41,49,172,0,42,43,44,45,46,47,35,68,153,173,174,88,148,175,69,122,133,146,149,60,70,176,150,177,178,179,180,181,182,188,183,113,184,25,71,189,5,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,15,7,8,9,103,104,105,106,107,108,109,110,6,151,147,61,72,50,51,123,73,13,74,124,125,34,141,142,75,240,241,242,243,244,245,246,247,248,157,62,76,77,78,79,52,53,54,55,80,81,82,83,84,85,63,111,126,143,127,128,129,130,134,135,136,26,137,144,145,48,131,249,1,4,250,251,27,252]}}},Fo=hn(Tv);st(Fo);const Bs=n=>{const e=bn(),t=Te();return y(()=>{var r;const a=n??((r=e.value.blog)==null?void 0:r.key)??"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Fo.value[a])throw new Error(`useBlogType: key ${n} is invalid`);const s=Fo.value[a][t.value],o={path:s.path,items:[]};for(const p of s.indexes){const{path:i,meta:c}=Yt(Au[p]);o.items.push({path:i,info:c})}return o})},Ou=()=>l(rn,{name:"lock"},()=>l("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Ou.displayName="LockIcon";var Iv=[];const Ru=Symbol.for("categoryMap"),za=()=>{const n=gn(Ru);if(!n)throw new Error("useCategoryMap() is called without provider.");return n},Sv=()=>{const n=Lu("category");oe(Ru,n)},Ba=()=>{const n=it(),e=pn();return y(()=>({...n.value.blog,...e.value.blog}))},Vu=Symbol.for("tagMap"),Ua=()=>{const n=gn(Vu);if(!n)throw new Error("useTagMap() is called without provider.");return n},Pv=()=>{const n=Lu("tag");oe(Vu,n)},xv=n=>{const e=pn();return y(()=>{const{[En.author]:t}=n.value;return t?Ia(t):t===!1?[]:Ia(e.value.author,!1)})},Av=n=>{const e=za();return y(()=>Ec(n.value[En.category]).map(t=>({name:t,path:e.value.map[t].path})))},Lv=n=>{const e=Ua();return y(()=>Cc(n.value[En.tag]).map(t=>({name:t,path:e.value.map[t].path})))},Ov=n=>y(()=>{const{[En.date]:e}=n.value;return _r(e)}),Rv=n=>{const e=Wt(n,"info"),t=Ba(),a=xv(e),s=Av(e),o=Lv(e),r=Ov(e),p=Xc(),i=y(()=>({author:a.value,category:s.value,date:r.value,localizedDate:e.value[En.localizedDate]||"",tag:o.value,isOriginal:e.value[En.isOriginal]||!1,readingTime:e.value[En.readingTime]||null,readingTimeLocale:e.value[En.readingTime]&&p.value?Yc(e.value[En.readingTime],p.value):null,pageview:n.path})),c=y(()=>t.value.articleInfo);return{info:i,items:c}},Du=Symbol(""),Ka=()=>{const n=gn(Du);if(!n)throw new Error("useArticles() is called without provider.");return n},Vv=()=>{const n=Bs("article");oe(Du,n)},Hu=Symbol(""),Br=()=>{const n=gn(Hu);if(!n)throw new Error("useStars() is called without provider.");return n},Dv=()=>{const n=Bs("star");oe(Hu,n)},Nu=Symbol(""),Ur=()=>{const n=gn(Nu);if(!n)throw new Error("useTimelines() is called without provider.");return n},Hv=()=>{const n=Bs("timeline"),e=y(()=>{const t=[];return n.value.items.forEach(({info:a,path:s})=>{const o=_r(a[En.date]);if(o){const r=o.getFullYear(),p=o.getMonth()+1,i=o.getDate();(!t[0]||t[0].year!==r)&&t.unshift({year:r,items:[]}),t[0].items.push({date:`${p}/${i}`,info:a,path:s})}}),{...n.value,config:t.reverse()}});oe(Nu,e)},Nv=()=>{Vv(),Sv(),Dv(),Pv(),Hv()};var Mv=R({name:"SocialMedia",setup(){const n=Ba(),e=It(),t=y(()=>{const a=n.value.medias;return a?Be(a).map(([s,o])=>({name:s,icon:Ev[s],url:o})):[]});return()=>t.value.length?l("div",{class:"vp-social-medias"},t.value.map(({name:a,icon:s,url:o})=>l("a",{class:"vp-social-media",href:o,rel:"noopener noreferrer",target:"_blank","aria-label":a,...e.value?{}:{"data-balloon-pos":"up"},innerHTML:s}))):null}}),Kr=R({name:"BloggerInfo",setup(){const n=Ba(),e=Jt(),t=pn(),a=Ka(),s=za(),o=Ua(),r=Ur(),p=Ma(),i=y(()=>{var h;return n.value.name||((h=Ia(t.value.author)[0])==null?void 0:h.name)||e.value.title}),c=y(()=>n.value.avatar||t.value.logo),d=y(()=>t.value.blogLocales),m=y(()=>n.value.intro);return()=>{const{article:h,category:k,tag:g,timeline:w}=d.value,E=[[a.value.path,a.value.items.length,h],[s.value.path,pe(s.value.map).length,k],[o.value.path,pe(o.value.map).length,g],[r.value.path,r.value.items.length,w]];return l("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[l("div",{class:"vp-blogger",...m.value?{style:{cursor:"pointer"},"aria-label":d.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>p(m.value)}:{}},[c.value?l("img",{class:["vp-blogger-avatar",{round:n.value.roundAvatar}],src:Tn(c.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,i.value?l("div",{class:"vp-blogger-name",property:"name"},i.value):null,n.value.description?l("div",{class:"vp-blogger-description",innerHTML:n.value.description}):null,m.value?l("meta",{property:"url",content:Tn(m.value)}):null]),l("div",{class:"vp-blog-counts"},E.map(([_,T,b])=>l(Rn,{class:"vp-blog-count",to:_},()=>[l("div",{class:"count"},T),l("div",b)]))),l(Mv)])}}});const Fr=()=>l(rn,{name:"category"},()=>l("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Fr.displayName="CategoryIcon";const qr=()=>l(rn,{name:"tag"},()=>l("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));qr.displayName="TagIcon";const Gr=()=>l(rn,{name:"timeline"},()=>l("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Gr.displayName="TimelineIcon";const Mu=()=>l(rn,{name:"slides"},()=>l("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));Mu.displayName="SlideIcon";const ju=()=>l(rn,{name:"sticky"},()=>[l("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);ju.displayName="StickyIcon";const Us=()=>l(rn,{name:"article"},()=>l("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Us.displayName="ArticleIcon";const $u=()=>l(rn,{name:"book"},()=>l("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));$u.displayName="BookIcon";const zu=()=>l(rn,{name:"link"},()=>l("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));zu.displayName="LinkIcon";const Bu=()=>l(rn,{name:"project"},()=>l("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));Bu.displayName="ProjectIcon";const Uu=()=>l(rn,{name:"friend"},()=>l("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));Uu.displayName="FriendIcon";const qo=()=>l(rn,{name:"slide-down"},()=>l("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));qo.displayName="SlideDownIcon";const Ku=()=>l("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});Ku.displayName="EmptyIcon";var jv=R({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(n,{slots:e}){const t=Wt(n,"info"),{info:a,items:s}=Rv(n);return()=>{var h,k,g;const{[En.title]:o,[En.type]:r,[En.isEncrypted]:p=!1,[En.cover]:i,[En.excerpt]:c,[En.sticky]:d}=t.value,m=a.value;return l("div",{class:"vp-article-wrapper"},l("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=e.cover)==null?void 0:h.call(e,{cover:i}))||(i?[l("img",{class:"vp-article-cover",src:Tn(i),loading:"lazy"}),l("meta",{property:"image",content:Tn(i)})]:[]),d?l(ju):null,l(Rn,{to:n.path},()=>{var w;return((w=e.title)==null?void 0:w.call(e,{title:o,isEncrypted:p,type:r}))||l("header",{class:"vp-article-title"},[p?l(Ou):null,r===eu.slide?l(Mu):null,l("span",{property:"headline"},o)])}),((k=e.excerpt)==null?void 0:k.call(e,{excerpt:c}))||(c?l("div",{class:"vp-article-excerpt",innerHTML:c}):null),l("hr",{class:"vp-article-hr"}),((g=e.info)==null?void 0:g.call(e,{info:m}))||l(Cu,{info:m,...s.value?{items:s.value}:{}})]))}}}),$v=R({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(n,{emit:e}){let t;const a=pn(),s=K(""),o=y(()=>a.value.paginationLocales),r=y(()=>Math.ceil(n.total/n.perPage)),p=y(()=>!!r.value&&r.value!==1),i=y(()=>r.value<7?!1:n.current>4),c=y(()=>r.value<7?!1:n.current<r.value-3),d=y(()=>{const{current:k}=n;let g=1,w=r.value;const E=[];r.value>=7&&(k<=4&&k<r.value-3?(g=1,w=5):k>4&&k>=r.value-3?(w=r.value,g=r.value-4):r.value>7&&(g=k-2,w=k+2));for(let _=g;_<=w;_++)E.push(_);return E}),m=k=>e("updateCurrentPage",k),h=k=>{const g=parseInt(k,10);g<=r.value&&g>0?m(g):t.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${o.value.errorText.replace(/\$page/gu,r.value.toString())}`)};return sn(()=>{t=new uf}),()=>l("div",{class:"vp-pagination"},p.value?l("nav",{class:"vp-pagination-list"},[l("div",{class:"vp-pagination-number "},[n.current>1?l("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>m(n.current-1)},o.value.prev):null,i.value?[l("div",{role:"navigation",onClick:()=>m(1)},1),l("div",{class:"ellipsis"},"...")]:null,d.value.map(k=>l("div",{key:k,class:{active:n.current===k},role:"navigation",onClick:()=>m(k)},k)),c.value?[l("div",{class:"ellipsis"},"..."),l("div",{role:"navigation",onClick:()=>m(r.value)},r.value)]:null,n.current<r.value?l("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>m(n.current+1)},o.value.next):null]),l("div",{class:"vp-pagination-nav"},[l("label",{for:"navigation-text"},`${o.value.navigate}: `),l("input",{id:"navigation-text",value:s.value,onInput:({target:k})=>{s.value=k.value},onKeydown:k=>{k.key==="Enter"&&(k.preventDefault(),h(s.value))}}),l("button",{class:"vp-pagination-button",role:"navigation",title:o.value.action,onClick:()=>h(s.value)},o.value.action)])]):[])}}),Wr=R({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(n){const e=lt(),t=ze(),a=Ba(),s=K(1),o=y(()=>a.value.articlePerPage||10),r=y(()=>n.items.slice((s.value-1)*o.value,s.value*o.value)),p=async i=>{s.value=i;const c={...e.query};!(c.page===i.toString()||i===1&&!c.page)&&(i===1?delete c.page:c.page=i.toString(),await t.push({path:e.path,query:c}))};return sn(()=>{const{page:i}=e.query;p(i?Number(i):1),on(s,()=>{const c=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,c)},100)})}),()=>l("div",{id:"article-list",class:"vp-article-list",role:"feed"},r.value.length?[...r.value.map(({info:i,path:c},d)=>l(kn,{appear:!0,delay:d*.04},()=>l(jv,{key:c,info:i,path:c}))),l($v,{current:s.value,perPage:o.value,total:n.items.length,onUpdateCurrentPage:p})]:l(Ku))}}),Fu=R({name:"CategoryList",setup(){const n=fn(),e=za();return()=>l("ul",{class:"vp-category-list"},Be(e.value.map).sort(([,t],[,a])=>a.items.length-t.items.length).map(([t,{path:a,items:s}])=>l("li",{class:["vp-category",`vp-category${zs(t,9)}`,{active:a===n.value.path}]},l(Rn,{to:a},()=>[t,l("span",{class:"count"},s.length)]))))}}),qu=R({name:"TagList",setup(){const n=bn(),e=Ua(),t=a=>{var s;return a===((s=n.value.blog)==null?void 0:s.name)};return()=>l("ul",{class:"tag-list-wrapper"},Be(e.value.map).sort(([,a],[,s])=>s.items.length-a.items.length).map(([a,{path:s,items:o}])=>l("li",{class:["tag",`tag${zs(a,9)}`,{active:t(a)}]},l(Rn,{to:s},()=>[a,l("span",{class:"tag-num"},o.length)]))))}}),zv=R({name:"TimelineList",setup(){const n=pn(),e=Ur(),t=Ma(),a=y(()=>n.value.blogLocales.timeline);return()=>l("div",{class:"timeline-list-wrapper"},[l("div",{class:"timeline-list-title",onClick:()=>t(e.value.path)},[l(Gr),l("span",{class:"num"},e.value.items.length),a.value]),l("hr"),l("div",{class:"timeline-content"},l("ul",{class:"timeline-list"},e.value.config.map(({year:s,items:o},r)=>l(kn,{appear:!0,delay:.08*(r+1)},()=>l("li",[l("h3",{class:"timeline-year"},s),l("ul",{class:"timeline-year-wrapper"},o.map(({date:p,info:i,path:c})=>l("li",{class:"timeline-item"},[l("span",{class:"timeline-date"},p),l(Rn,{class:"timeline-title",to:c},()=>i[En.title])])))])))))])}});const Bv={article:Us,category:Fr,tag:qr,timeline:Gr};var Gu=R({name:"InfoList",setup(){const n=pn(),e=Ka(),t=za(),a=y(()=>pe(t.value.map).length),s=Br(),o=Ua(),r=y(()=>pe(o.value.map).length),p=Ma(),i=K("article"),c=y(()=>n.value.blogLocales);return()=>l("div",{class:"vp-blog-infos"},[l("div",{class:"vp-blog-type-switcher"},Be(Bv).map(([d,m])=>l("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{i.value=d}},l("div",{class:["icon-wrapper",{active:i.value===d}],"aria-label":c.value[d],"data-balloon-pos":"up"},l(m))))),l(kn,()=>i.value==="article"?l("div",{class:"vp-star-article-wrapper"},[l("div",{class:"title",onClick:()=>p(e.value.path)},[l(Us),l("span",{class:"num"},e.value.items.length),c.value.article]),l("hr"),s.value.items.length?l("ul",{class:"vp-star-articles"},s.value.items.map(({info:d,path:m},h)=>l(kn,{appear:!0,delay:.08*(h+1)},()=>l("li",{class:"vp-star-article"},l(Rn,{to:m},()=>d[En.title]))))):l("div",{class:"vp-star-article-empty"},c.value.empty.replace("$text",c.value.star))]):i.value==="category"?l("div",{class:"vp-category-wrapper"},[a.value?[l("div",{class:"title",onClick:()=>p(t.value.path)},[l(Fr),l("span",{class:"num"},a.value),c.value.category]),l("hr"),l(kn,{delay:.04},()=>l(Fu))]:l("div",{class:"vp-category-empty"},c.value.empty.replace("$text",c.value.category))]):i.value==="tag"?l("div",{class:"vp-tag-wrapper"},[r.value?[l("div",{class:"title",onClick:()=>p(o.value.path)},[l(qr),l("span",{class:"num"},r.value),c.value.tag]),l("hr"),l(kn,{delay:.04},()=>l(qu))]:l("div",{class:"vp-tag-empty"},c.value.empty.replace("$text",c.value.tag))]):l(kn,()=>l(zv)))])}}),Ks=R({name:"BlogWrapper",slots:Object,setup(n,{slots:e}){const{isMobile:t}=ja();return()=>[l(zr),l(jr,{noSidebar:!0,noToc:!0},{default:()=>e.default(),navScreenBottom:()=>l(Kr),...t.value?{sidebar:()=>l(Gu)}:{}})]}});const Wu=()=>l("aside",{class:"vp-blog-info-wrapper"},[l(kn,()=>l(Kr)),l(kn,{delay:.04},()=>l(Gu))]);Wu.displayName="InfoPanel";var Fs=Wu,Uv=R({name:"BlogPage",setup(){const n=fn(),e=bn(),t=za(),a=Ua();return()=>{const{key:s="",name:o=""}=e.value.blog||{},r=o?s==="category"?t.value.map[o].items:s==="tag"?a.value.map[o].items:[]:[];return l(Ks,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(kn,()=>s==="category"?l(Fu):s==="tag"?l(qu):null),o?l(kn,{appear:!0,delay:.24},()=>l(Wr,{key:n.value.path,items:r})):null]),l(kn,{delay:.16},()=>l(Fs,{key:"blog"}))])))}}});const Kv="//theme-hope-assets.vuejs.press/hero/default.jpg";var Fv=R({name:"BlogHero",slots:Object,setup(n,{slots:e}){const t=bn(),a=Jt(),s=hn(),o=y(()=>t.value.heroFullScreen??!1),r=y(()=>{const{heroText:i,heroImage:c,heroImageDark:d,heroAlt:m,heroImageStyle:h,tagline:k}=t.value;return{text:i??a.value.title??"Hello",tagline:k??"",image:c?Tn(c):null,imageDark:d?Tn(d):null,alt:m||i||"",style:h,isFullScreen:o.value}}),p=y(()=>{const{bgImage:i,bgImageDark:c,bgImageStyle:d}=t.value;return{image:_n(i)?Tn(i):i===!1?null:Kv,imageDark:_n(c)?Tn(c):null,bgStyle:d,isFullScreen:o.value}});return()=>{var i,c;return t.value.hero===!1?null:l("div",{ref:s,class:["vp-blog-hero",{fullscreen:o.value,"no-bg":!p.value.image}]},[((i=e.heroBg)==null?void 0:i.call(e,p.value))||[p.value.image?l("div",{class:["vp-blog-mask",{light:p.value.imageDark}],style:[{background:`url(${p.value.image}) center/cover no-repeat`},p.value.bgStyle]}):null,p.value.imageDark?l("div",{class:"vp-blog-mask dark",style:[{background:`url(${p.value.imageDark}) center/cover no-repeat`},p.value.bgStyle]}):null],((c=e.heroInfo)==null?void 0:c.call(e,r.value))||[l(kn,{appear:!0,type:"group",delay:.04},()=>[r.value.image?l("img",{key:"light",class:["vp-blog-hero-image",{light:r.value.imageDark}],style:r.value.style,src:r.value.image,alt:r.value.alt}):null,r.value.imageDark?l("img",{key:"dark",class:"vp-blog-hero-image dark",style:r.value.style,src:r.value.imageDark,alt:r.value.alt}):null]),l(kn,{appear:!0,delay:.08},()=>r.value.text?l("h1",{class:"vp-blog-hero-title"},r.value.text):null),l(kn,{appear:!0,delay:.12},()=>r.value.tagline?l("p",{class:"vp-blog-hero-description",innerHTML:r.value.tagline}):null)],r.value.isFullScreen?l("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:s.value.clientHeight,behavior:"smooth"})}},[l(qo),l(qo)]):null])}}});const qv=["link","article","book","project","friend"];var Gv=R({name:"ProjectPanel",components:{ArticleIcon:Us,BookIcon:$u,FriendIcon:Uu,LinkIcon:zu,ProjectIcon:Bu},props:{items:{type:Array,required:!0}},setup(n){const e=It(),t=Ma(),a=(s="",o="icon")=>qv.includes(s)?l(se(`${s}-icon`)):Ce(s)?l("img",{class:"vp-project-image",src:s,alt:o}):Ha(s)?l("img",{class:"vp-project-image",src:Tn(s),alt:o}):l(Fn,{icon:s});return()=>l("div",{class:"vp-project-panel"},n.items.map(({icon:s,link:o,name:r,desc:p},i)=>l("div",{class:["vp-project-card",{[`project${i%9}`]:!e.value}],onClick:()=>t(o)},[a(s,r),l("div",{class:"vp-project-name"},r),l("div",{class:"vp-project-desc"},p)])))}}),Wv=R({name:"BlogHome",setup(){const n=Ka(),e=bn(),t=y(()=>e.value.projects??[]);return()=>l("div",{class:"vp-page vp-blog"},[l(Fv),l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[t.value.length?l(kn,{appear:!0,delay:.16},()=>l(Gv,{items:t.value})):null,l(kn,{appear:!0,delay:.24},()=>l(Wr,{items:n.value.items}))]),l(kn,{appear:!0,delay:.16},()=>l(Fs,{key:"blog"}))]),l(kn,{appear:!0,delay:.28},()=>l($r))])}});const Ju=()=>l(Ks,()=>l(Wv));Ju.displayName="BlogHomeLayout";var Jv=Ju,Yv=R({name:"ArticleType",setup(){const n=fn(),e=Te(),t=pn(),a=Ka(),s=Br(),o=y(()=>{const r=t.value.blogLocales;return[{text:r.all,path:a.value.path},{text:r.star,path:s.value.path},...Iv.map(({key:p,path:i})=>({text:r[p],path:i.replace(/^\//,e.value)}))]});return()=>l("ul",{class:"vp-article-type-wrapper"},o.value.map(r=>l("li",{class:["vp-article-type",{active:r.path===n.value.path}]},l(Rn,{to:r.path},()=>r.text))))}}),Xv=R({name:"BlogPage",setup(){const n=Bs(),e=bn(),t=fn(),a=Ka(),s=Br(),o=y(()=>{const{key:r="",type:p}=e.value.blog||{};return r==="star"?s.value.items:p==="type"&&r?n.value.items:a.value.items});return()=>l(Ks,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(kn,()=>l(Yv)),l(kn,{appear:!0,delay:.24},()=>l(Wr,{key:t.value.path,items:o.value}))]),l(kn,{delay:.16},()=>l(Fs,{key:"blog"}))])))}}),Zv=R({name:"TimelineItems",setup(){const n=Ba(),e=pn(),t=Ur(),a=y(()=>n.value.timeline||e.value.blogLocales.timelineTitle),s=y(()=>t.value.config.map(({year:o})=>({title:o.toString(),level:2,slug:o.toString(),children:[]})));return()=>l("div",{class:"timeline-wrapper"},l("ul",{class:"timeline-content"},[l(kn,()=>l("li",{class:"motto"},a.value)),l(Tu,{items:s.value}),t.value.config.map(({year:o,items:r},p)=>l(kn,{appear:!0,delay:.08*(p+1),type:"group"},()=>[l("h3",{key:"title",id:o,class:"timeline-year-title"},l("span",o)),l("li",{key:"content",class:"timeline-year-list"},[l("ul",{class:"timeline-year-wrapper"},r.map(({date:i,info:c,path:d})=>l("li",{class:"timeline-item"},[l("span",{class:"timeline-date"},i),l(Rn,{class:"timeline-title",to:d},()=>c[En.title])])))])]))]))}});const Yu=()=>l(Ks,()=>l("div",{class:"vp-page vp-blog"},l("div",{class:"blog-page-wrapper"},[l("main",{id:"main-content",class:"vp-blog-main"},[l(kn,{appear:!0,delay:.24},()=>l(Zv))]),l(kn,{delay:.16},()=>l(Fs,{key:"blog"}))])));Yu.displayName="Timeline";var Qv=Yu;jf(n=>{const e=n.t,t=n.I!==!1,a=n.i;return t?{title:e,content:a?()=>[l(Fn,{icon:a}),e]:null,order:n.O,index:n.I}:null});const n_=Yn({enhance:({app:n,router:e})=>{const{scrollBehavior:t}=e.options;e.options.scrollBehavior=async(...a)=>(await Iu().wait(),t(...a)),T2(n),n.component("HopeIcon",Fn),n.component("BloggerInfo",Kr)},setup:()=>{I2(),x2(),Nv()},layouts:{Layout:yv,NotFound:wv,BlogCategory:Uv,BlogHome:Jv,BlogType:Xv,Timeline:Qv}}),e_=n=>{if(window.dataLayer&&window.gtag)return;const e=document.createElement("script");e.src=`https://www.googletagmanager.com/gtag/js?id=${n.id}`,e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){dataLayer.push(arguments)},gtag("js",new Date),n.debug?gtag("config",n.id,{debug_mode:!0}):gtag("config",n.id)};var t_={id:"UA-204926029-1"};const a_=t_,s_=Yn({enhance(){e_(a_)}}),ls=[Qh,Of,Mf,Kf,Gf,Xf,eg,rg,gg,bg,f1,A1,U1,h2,n_,s_],o_=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"stylesheet","href":"https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap"}],["link",{"rel":"icon","href":"/logo.png"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#46bd87"}],["link",{"rel":"apple-touch-icon","href":"/assets/icon/apple-icon-152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"black"}],["meta",{"name":"msapplication-TileImage","content":"/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://docmoa.github.io/rss.xml","title":"docmoa RSS Feed"}]],"locales":{"/":{"lang":"ko-KR","title":"docmoa","description":"A docs for docmoa"}}}');var sa=hn(o_),r_=vh,l_=()=>{const n=Uh({history:r_(Vs("/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,t,a)=>a||(e.hash?{el:e.hash}:{top:0})});return n.beforeResolve(async(e,t)=>{if(e.path!==t.path||t===He){const a=Yt(e.path);if(a.path!==e.path)return a.path;const s=await a.loader();e.meta={...a.meta,_pageChunk:s}}else e.path===t.path&&(e.meta=t.meta)}),n},p_=n=>{n.component("ClientOnly",Ns),n.component("Content",nc),n.component("RouteLink",Rn)},i_=(n,e,t)=>{const a=y(()=>e.currentRoute.value.path),s=Is((E,_)=>({get(){return E(),e.currentRoute.value.meta._pageChunk},set(T){e.currentRoute.value.meta._pageChunk=T,_()}})),o=y(()=>mt.resolveLayouts(t)),r=y(()=>mt.resolveRouteLocale(sa.value.locales,a.value)),p=y(()=>mt.resolveSiteLocaleData(sa.value,r.value)),i=y(()=>s.value.comp),c=y(()=>s.value.data),d=y(()=>c.value.frontmatter),m=y(()=>mt.resolvePageHeadTitle(c.value,p.value)),h=y(()=>mt.resolvePageHead(m.value,d.value,p.value)),k=y(()=>mt.resolvePageLang(c.value,p.value)),g=y(()=>mt.resolvePageLayout(c.value,o.value)),w={layouts:o,pageData:c,pageComponent:i,pageFrontmatter:d,pageHead:h,pageHeadTitle:m,pageLang:k,pageLayout:g,redirects:Zi,routeLocale:r,routePath:a,routes:wa,siteData:sa,siteLocaleData:p};return n.provide(fr,w),Object.defineProperties(n.config.globalProperties,{$frontmatter:{get:()=>d.value},$head:{get:()=>h.value},$headTitle:{get:()=>m.value},$lang:{get:()=>k.value},$page:{get:()=>c.value},$routeLocale:{get:()=>r.value},$site:{get:()=>sa.value},$siteLocale:{get:()=>p.value},$withBase:{get:()=>Tn}}),w},c_=()=>{const n=qh(),e=Yi();let t=[];const a=()=>{n.value.forEach(r=>{const p=u_(r);p&&t.push(p)})},s=()=>{const r=[];return n.value.forEach(p=>{const i=d_(p);i&&r.push(i)}),r},o=()=>{document.documentElement.lang=e.value;const r=s();t.forEach((p,i)=>{const c=r.findIndex(d=>p.isEqualNode(d));c===-1?(p.remove(),delete t[i]):r.splice(c,1)}),r.forEach(p=>document.head.appendChild(p)),t=[...t.filter(p=>!!p),...r]};oe(Jh,o),sn(()=>{a(),on(n,o,{immediate:!1})})},u_=([n,e,t=""])=>{const a=Object.entries(e).map(([p,i])=>_n(i)?`[${p}=${JSON.stringify(i)}]`:i===!0?`[${p}]`:"").join(""),s=`head > ${n}${a}`;return Array.from(document.querySelectorAll(s)).find(p=>p.innerText===t)||null},d_=([n,e,t])=>{if(!_n(n))return null;const a=document.createElement(n);return be(e)&&Object.entries(e).forEach(([s,o])=>{_n(o)?a.setAttribute(s,o):o===!0&&a.setAttribute(s,"")}),_n(t)&&a.appendChild(document.createTextNode(t)),a},m_=S0,h_=async()=>{var t;const n=m_({name:"Vuepress",setup(){var o;c_();for(const r of ls)(o=r.setup)==null||o.call(r);const a=ls.flatMap(({rootComponents:r=[]})=>r.map(p=>l(p))),s=Gh();return()=>[l(s.value),a]}}),e=l_();p_(n),i_(n,e,ls);for(const a of ls)await((t=a.enhance)==null?void 0:t.call(a,{app:n,router:e,siteData:sa}));return n.use(e),{app:n,router:e}};h_().then(({app:n,router:e})=>{e.isReady().then(()=>{n.mount("#app")})});export{T_ as $,W1 as A,qc as B,G1 as C,K1 as D,F1 as E,Gn as F,n2 as G,fn as H,hn as I,rt as J,_n as K,be as L,Ms as M,Rr as N,Z1 as O,O_ as P,Pi as Q,Rn as R,oe as S,pr as T,gn as U,y_ as V,S_ as W,Xo as X,Zo as Y,v_ as Z,u as _,On as a,_e as a0,wi as a1,je as a2,I_ as a3,P_ as a4,C_ as a5,f_ as a6,g_ as a7,Ci as b,b_ as c,h_ as createVueApp,Ti as d,w_ as e,R as f,__ as g,E_ as h,K as i,sn as j,ze as k,Te as l,ke as m,Vr as n,yi as o,Wt as p,Aa as q,se as r,y as s,k_ as t,x_ as u,yn as v,Fd as w,on as x,l as y,q1 as z};
