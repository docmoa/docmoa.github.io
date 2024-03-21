import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as l,c as i,b as n,d as s,a as o,e as c}from"./app-DwRVeH7t.js";const r="/assets/nomad_csi-Dc3RBitI.png",p={},u=n("h1",{id:"nomad-csi-sample",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nomad-csi-sample"},[n("span",null,"Nomad CSI Sample")])],-1),m=n("li",null,"AWS에 EFS를 Nomad CSI로 활용",-1),d={href:"https://github.com/Great-Stone/nomad-demo-with-ecs",target:"_blank",rel:"noopener noreferrer"},k=n("ul",null,[n("li",null,"branches: ung")],-1),v=n("figure",null,[n("img",{src:r,alt:"nomad Architecture with CSI",tabindex:"0",loading:"lazy"}),n("figcaption",null,"nomad Architecture with CSI")],-1),b=n("h2",{id:"ec2-nomad-client-node-에-efs의-volume관련-권한이-필요합니다",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ec2-nomad-client-node-에-efs의-volume관련-권한이-필요합니다"},[n("span",null,"ec2(nomad client node)에 efs의 volume관련 권한이 필요합니다.")])],-1),g=n("ul",null,[n("li",null,"ec2와 efs는 같은 subnet이여야 합니다."),n("li",null,"vpc에는 dns관련 권한설정이 필요합니다.")],-1),_=n("details",null,[n("summary",null,"ec2 iam policy"),n("div",{markdown:"1"},[n("div",{class:"language-ruby line-numbers-mode","data-ext":"rb","data-title":"rb"},[n("pre",{class:"language-ruby"},[n("code",null,[s(`
resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_vpc"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_demo"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  cidr_block `),n("span",{class:"token operator"},"="),s(" var"),n("span",{class:"token punctuation"},"."),s(`vpc_cidr_block
  `),n("span",{class:"token comment"},"#dns 권한설정이 필요함"),s(`
  enable_dns_support   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
  enable_dns_hostnames `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
  tags `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    env `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad"')]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_subnet"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_demo"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  cidr_block `),n("span",{class:"token operator"},"="),s(" var"),n("span",{class:"token punctuation"},"."),s(`vpc_cidr_block
  vpc_id     `),n("span",{class:"token operator"},"="),s(" aws_vpc"),n("span",{class:"token punctuation"},"."),s("nomad_demo"),n("span",{class:"token punctuation"},"."),s(`id
  `),n("span",{class:"token comment"},"#efs와 az가 같아야함"),s(`
  availability_zone `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ap-northeast-2a"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"############"),s(`
`),n("span",{class:"token comment"},"# Policy"),s(`

data `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_policy_document"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"instance_role"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  statement `),n("span",{class:"token punctuation"},"{"),s(`
    effect `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"Allow"')]),s(`
    actions `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"sts:AssumeRole"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`

    principals `),n("span",{class:"token punctuation"},"{"),s(`
      type        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"Service"')]),s(`
      identifiers `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2.amazonaws.com"')]),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_role"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"instance_role"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name_prefix        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"${var.prefix}-nomad"')]),s(`
  assume_role_policy `),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("aws_iam_policy_document"),n("span",{class:"token punctuation"},"."),s("instance_role"),n("span",{class:"token punctuation"},"."),s(`json
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_role"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"instance_role"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name_prefix        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"${var.prefix}-nomad"')]),s(`
  assume_role_policy `),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("aws_iam_policy_document"),n("span",{class:"token punctuation"},"."),s("instance_role"),n("span",{class:"token punctuation"},"."),s(`json
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_instance_profile"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"test_profile"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"test_profile"')]),s(`
  role `),n("span",{class:"token operator"},"="),s(" aws_iam_role"),n("span",{class:"token punctuation"},"."),s("instance_role"),n("span",{class:"token punctuation"},"."),s(`name
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_role_policy"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"cluster_discovery"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"${var.prefix}-nomad-cluster_discovery"')]),s(`
  role   `),n("span",{class:"token operator"},"="),s(" aws_iam_role"),n("span",{class:"token punctuation"},"."),s("instance_role"),n("span",{class:"token punctuation"},"."),s(`id
  policy `),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("aws_iam_policy_document"),n("span",{class:"token punctuation"},"."),s("cluster_discovery"),n("span",{class:"token punctuation"},"."),s(`json
`),n("span",{class:"token punctuation"},"}"),s(`

data `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_policy_document"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"cluster_discovery"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"# allow role with this policy to do the following: list instances, list tags, autoscale"),s(`
  statement `),n("span",{class:"token punctuation"},"{"),s(`
    effect `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"Allow"')]),s(`
    actions `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DescribeInstances"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"autoscaling:CompleteLifecycleAction"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DescribeTags"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:ListClusters"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:DescribeClusters"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:DeregisterContainerInstance"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:ListContainerInstances"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:RegisterContainerInstance"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:SubmitContainerStateChange"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:SubmitTaskStateChange"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:DescribeContainerInstances"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:DescribeTasks"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:ListTasks"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:UpdateContainerAgent"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:StartTask"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:StopTask"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ecs:RunTask"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"elasticfilesystem:ClientMount"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"elasticfilesystem:ClientWrite"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"elasticfilesystem:ClientRootAccess"')]),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
    resources `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"*"')]),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),f=n("details",null,[n("summary",null,"efs volume and iam policy"),n("div",{markdown:"1"},[n("div",{class:"language-ruby line-numbers-mode","data-ext":"rb","data-title":"rb"},[n("pre",{class:"language-ruby"},[n("code",null,[s(`
`),n("span",{class:"token comment"},"############"),s(`
`),n("span",{class:"token comment"},"#EFS"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_role_policy"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"mount_efs_volumes"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"mount-efs-volumes"')]),s(`
  role   `),n("span",{class:"token operator"},"="),s(" aws_iam_role"),n("span",{class:"token punctuation"},"."),s("instance_role"),n("span",{class:"token punctuation"},"."),s(`id
  policy `),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("aws_iam_policy_document"),n("span",{class:"token punctuation"},"."),s("mount_efs_volumes"),n("span",{class:"token punctuation"},"."),s(`json
`),n("span",{class:"token punctuation"},"}"),s(`

data `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_iam_policy_document"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"mount_efs_volumes"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  statement `),n("span",{class:"token punctuation"},"{"),s(`
    effect `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"Allow"')]),s(`

    actions `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DescribeInstances"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DescribeTags"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DescribeVolumes"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:AttachVolume"')]),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ec2:DetachVolume"')]),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
    resources `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"*"')]),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"# csi efs volume"),s(`
resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_efs_file_system"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_csi"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  creation_token `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad-csi"')]),s(`
  performance_mode `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"generalPurpose"')]),s(`
  throughput_mode  `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"bursting"')]),s(`

  tags `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    Name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad-csi"')]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"#az가 ec2와 동일해야함"),s(`
  availability_zone_name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ap-northeast-2a"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"#ec2와 subnet이 같아야함"),s(`
resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_efs_mount_target"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_efs"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  file_system_id `),n("span",{class:"token operator"},"="),s(" aws_efs_file_system"),n("span",{class:"token punctuation"},"."),s("nomad_csi"),n("span",{class:"token punctuation"},"."),s(`id
  subnet_id      `),n("span",{class:"token operator"},"="),s(" aws_subnet"),n("span",{class:"token punctuation"},"."),s("nomad_demo"),n("span",{class:"token punctuation"},"."),s(`id
  security_groups `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(" aws_security_group"),n("span",{class:"token punctuation"},"."),s("efs"),n("span",{class:"token punctuation"},"."),s("id "),n("span",{class:"token punctuation"},"]"),s(` 
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws_security_group"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"efs"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  name        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"allow_efs"')]),s(`
  description `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"Allow EFS inbound traffic"')]),s(`
  vpc_id      `),n("span",{class:"token operator"},"="),s(" aws_vpc"),n("span",{class:"token punctuation"},"."),s("nomad_demo"),n("span",{class:"token punctuation"},"."),s(`id

  ingress `),n("span",{class:"token punctuation"},"{"),s(`
    description `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"TLS from VPC"')]),s(`
    from_port   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"443"),s(`
    to_port     `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"443"),s(`
    protocol    `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"tcp"')]),s(`
    cidr_blocks `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"0.0.0.0/0"')]),s(),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  egress `),n("span",{class:"token punctuation"},"{"),s(`
    from_port   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    to_port     `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
    protocol    `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"-1"')]),s(`
    cidr_blocks `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"0.0.0.0/0"')]),n("span",{class:"token punctuation"},"]"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  tags `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    Name `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"allow_tls"')]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),h=n("h2",{id:"nomad-csi-create",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nomad-csi-create"},[n("span",null,"nomad csi create")])],-1),y=n("ul",null,[n("li",null,"nomad csi job을 배포합니다."),n("li",null,"plugins을 생성합니다.")],-1),w=n("details",null,[n("summary",null,"nomad csi create"),n("div",{markdown:"1"},[n("div",{class:"language-ruby line-numbers-mode","data-ext":"rb","data-title":"rb"},[n("pre",{class:"language-ruby"},[n("code",null,[n("span",{class:"token comment"},"#efs csi job을 생성"),s(`
resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_job"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_csi_node_job"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  jobspec `),n("span",{class:"token operator"},"="),s(" file"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"./job_file/csi-node.tpl"')]),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"time_sleep"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"wait_30_seconds"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  depends_on `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("nomad_job"),n("span",{class:"token punctuation"},"."),s("nomad_csi_node_job"),n("span",{class:"token punctuation"},"]"),s(`
  create_duration `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"30s"')]),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"#생성된 plugin을 기다림"),s(`
data `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_plugin"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"efs"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  depends_on `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("time_sleep"),n("span",{class:"token punctuation"},"."),s("wait_30_seconds"),n("span",{class:"token punctuation"},"]"),s(`
  plugin_id        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws-efs0"')]),s(`
  wait_for_registration `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token comment"},"#efs volume을 nomad에서 사용할 수 있게 plugins을 생성"),s(`
resource `),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"nomad_volume"')]),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"efs_csi_volume"')]),s(),n("span",{class:"token punctuation"},"{"),s(`
  depends_on  `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s("data"),n("span",{class:"token punctuation"},"."),s("nomad_plugin"),n("span",{class:"token punctuation"},"."),s("efs"),n("span",{class:"token punctuation"},"]"),s(`
  type        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"csi"')]),s(`
  plugin_id   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"aws-efs0"')]),s(`
  volume_id   `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"efs_csi_volume"')]),s(`
  name        `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"efs_csi_volume"')]),s(`
  external_id `),n("span",{class:"token operator"},"="),s(" data"),n("span",{class:"token punctuation"},"."),s("terraform_remote_state"),n("span",{class:"token punctuation"},"."),s("net"),n("span",{class:"token punctuation"},"."),s("outputs"),n("span",{class:"token punctuation"},"."),s("nomad_efs_name"),n("span",{class:"token punctuation"},"."),s(`id

  capability `),n("span",{class:"token punctuation"},"{"),s(`
    access_mode     `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"single-node-writer"')]),s(`
    attachment_mode `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"file-system"')]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`

  mount_options `),n("span",{class:"token punctuation"},"{"),s(`
    fs_type `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string-literal"},[n("span",{class:"token string"},'"ext4"')]),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])])])],-1),S=c(`<h2 id="efs-test-job-배포" tabindex="-1"><a class="header-anchor" href="#efs-test-job-배포"><span>efs test job 배포</span></a></h2><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>job <span class="token string-literal"><span class="token string">&quot;efs_csi_job&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;dc1&quot;</span></span><span class="token punctuation">]</span>

  type        <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;system&quot;</span></span>

  group <span class="token string-literal"><span class="token string">&quot;cache&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span>

    network <span class="token punctuation">{</span>
      port <span class="token string-literal"><span class="token string">&quot;db&quot;</span></span> <span class="token punctuation">{</span>
        to <span class="token operator">=</span> <span class="token number">6379</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment"># 생성한 volume id 값을 명시한 volume을 선언</span>
    volume <span class="token string-literal"><span class="token string">&quot;cache&quot;</span></span> <span class="token punctuation">{</span>
      type            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;csi&quot;</span></span>
      source          <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;efs_csi_volume&quot;</span></span>
      attachment_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;file-system&quot;</span></span>
      access_mode     <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;single-node-writer&quot;</span></span>
      read_only    <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    task <span class="token string-literal"><span class="token string">&quot;redis&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span>

      config <span class="token punctuation">{</span>
        image <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis:6.2.6-alpine3.15&quot;</span></span>
        ports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;db&quot;</span></span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      resources <span class="token punctuation">{</span>
        cpu    <span class="token operator">=</span> <span class="token number">500</span>
        memory <span class="token operator">=</span> <span class="token number">511</span>
      <span class="token punctuation">}</span>
      <span class="token comment">#선언한 volume을 사용할 위치에 mount</span>
      volume_mount <span class="token punctuation">{</span>
        volume      <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;cache&quot;</span></span>
        destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;/data&quot;</span></span>
        read_only    <span class="token operator">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(C,x){const a=t("ExternalLinkIcon");return l(),i("div",null,[u,n("ul",null,[m,n("li",null,[s("full code는 아래 github를 참고 "),n("ul",null,[n("li",null,[s("참고 github: "),n("a",d,[s("https://github.com/Great-Stone/nomad-demo-with-ecs"),o(a)]),k])])])]),v,b,g,_,f,h,y,w,S])}const T=e(p,[["render",q],["__file","nomad-csi-sample.html.vue"]]),N=JSON.parse('{"path":"/04-HashiCorp/03-Terraform/03-Sample/nomad-csi-sample.html","title":"Nomad CSI Sample","lang":"ko-KR","frontmatter":{"description":"Nomad CSI Sample","tag":["Nomad","terrafom","CSI"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/03-Terraform/03-Sample/nomad-csi-sample.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Nomad CSI Sample"}],["meta",{"property":"og:description","content":"Nomad CSI Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"terrafom"}],["meta",{"property":"article:tag","content":"CSI"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nomad CSI Sample\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"ec2(nomad client node)에 efs의 volume관련 권한이 필요합니다.","slug":"ec2-nomad-client-node-에-efs의-volume관련-권한이-필요합니다","link":"#ec2-nomad-client-node-에-efs의-volume관련-권한이-필요합니다","children":[]},{"level":2,"title":"nomad csi create","slug":"nomad-csi-create","link":"#nomad-csi-create","children":[]},{"level":2,"title":"efs test job 배포","slug":"efs-test-job-배포","link":"#efs-test-job-배포","children":[]}],"git":{"createdTime":1664548770000,"updatedTime":1695042774000,"contributors":[{"name":"swbs90","email":"swbs90@naver.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"unghee","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":7.53,"words":452},"filePathRelative":"04-HashiCorp/03-Terraform/03-Sample/nomad-csi-sample.md","localizedDate":"2022년 9월 30일","excerpt":"\\n<ul>\\n<li>AWS에 EFS를 Nomad CSI로 활용</li>\\n<li>full code는 아래 github를 참고\\n<ul>\\n<li>참고 github: <a href=\\"https://github.com/Great-Stone/nomad-demo-with-ecs\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://github.com/Great-Stone/nomad-demo-with-ecs</a>\\n<ul>\\n<li>branches: ung</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>"}');export{T as comp,N as data};
