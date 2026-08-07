# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-cfncompat.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfncompatProvider <a name="CfncompatProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs cfncompat}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProvider;

CfncompatProvider.Builder.create(Construct scope, java.lang.String id)
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .assumeRole(CfncompatProviderAssumeRole)
//  .assumeRoleWithWebIdentity(CfncompatProviderAssumeRoleWithWebIdentity)
//  .customResourceBucket(java.lang.String)
//  .endpoints(CfncompatProviderEndpoints)
//  .httpProxy(java.lang.String)
//  .httpsProxy(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .maxRetries(java.lang.Number)
//  .noProxy(java.lang.String)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipMetadataApiCheck(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.customResourceBucket">customResourceBucket</a></code> | <code>java.lang.String</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.noProxy">noProxy</a></code> | <code>java.lang.String</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The AWS region used by cfncompat_custom_resource API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.token">token</a></code> | <code>java.lang.String</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.accessKey"></a>

- *Type:* java.lang.String

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#access_key CfncompatProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#alias CfncompatProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `customResourceBucket`<sup>Optional</sup> <a name="customResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.customResourceBucket"></a>

- *Type:* java.lang.String

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpProxy"></a>

- *Type:* java.lang.String

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpsProxy"></a>

- *Type:* java.lang.String

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#insecure CfncompatProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.noProxy"></a>

- *Type:* java.lang.String

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#profile CfncompatProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The AWS region used by cfncompat_custom_resource API calls.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#region CfncompatProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.secretKey"></a>

- *Type:* java.lang.String

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* java.util.List<java.lang.String>

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* java.util.List<java.lang.String>

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.token"></a>

- *Type:* java.lang.String

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#token CfncompatProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole">resetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity">resetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket">resetCustomResourceBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy">resetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy">resetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy">resetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles">resetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles">resetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck">resetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey"></a>

```java
public void resetAccessKey()
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole"></a>

```java
public void resetAssumeRole()
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity"></a>

```java
public void resetAssumeRoleWithWebIdentity()
```

##### `resetCustomResourceBucket` <a name="resetCustomResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket"></a>

```java
public void resetCustomResourceBucket()
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy"></a>

```java
public void resetHttpProxy()
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy"></a>

```java
public void resetHttpsProxy()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy"></a>

```java
public void resetNoProxy()
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey"></a>

```java
public void resetSecretKey()
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles"></a>

```java
public void resetSharedConfigFiles()
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles"></a>

```java
public void resetSharedCredentialsFiles()
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck"></a>

```java
public void resetSkipMetadataApiCheck()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken"></a>

```java
public void resetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProvider;

CfncompatProvider.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProvider;

CfncompatProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProvider;

CfncompatProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProvider;

CfncompatProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CfncompatProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CfncompatProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CfncompatProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CfncompatProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions">functions</a></code> | <code>io.cdktn.providers.cfncompat.provider_functions.CfncompatProviderFunctions</code> | Provider-defined functions of the cfncompat provider. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput">customResourceBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput">endpointsInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput">httpsProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput">noProxyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket">customResourceBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy">noProxy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions"></a>

```java
public CfncompatProviderFunctions getFunctions();
```

- *Type:* io.cdktn.providers.cfncompat.provider_functions.CfncompatProviderFunctions

Provider-defined functions of the cfncompat provider.

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput"></a>

```java
public java.lang.String getAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput"></a>

```java
public CfncompatProviderAssumeRole getAssumeRoleInput();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput"></a>

```java
public CfncompatProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentityInput();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `customResourceBucketInput`<sup>Optional</sup> <a name="customResourceBucketInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput"></a>

```java
public java.lang.String getCustomResourceBucketInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput"></a>

```java
public CfncompatProviderEndpoints getEndpointsInput();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput"></a>

```java
public java.lang.String getHttpProxyInput();
```

- *Type:* java.lang.String

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput"></a>

```java
public java.lang.String getHttpsProxyInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput"></a>

```java
public java.lang.Boolean|IResolvable getInsecureInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput"></a>

```java
public java.lang.String getNoProxyInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput"></a>

```java
public java.lang.String getSecretKeyInput();
```

- *Type:* java.lang.String

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheckInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole"></a>

```java
public CfncompatProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity"></a>

```java
public CfncompatProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentity();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `customResourceBucket`<sup>Optional</sup> <a name="customResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket"></a>

```java
public java.lang.String getCustomResourceBucket();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints"></a>

```java
public CfncompatProviderEndpoints getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy"></a>

```java
public java.lang.String getHttpsProxy();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy"></a>

```java
public java.lang.String getNoProxy();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CfncompatProviderAssumeRole <a name="CfncompatProviderAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProviderAssumeRole;

CfncompatProviderAssumeRole.builder()
    .roleArn(java.lang.String)
//  .duration(java.lang.String)
//  .externalId(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .sessionName(java.lang.String)
//  .sourceIdentity(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .transitiveTagKeys(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId">externalId</a></code> | <code>java.lang.String</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>java.lang.String</code> | Source identity to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>java.util.List<java.lang.String></code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#external_id CfncompatProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity"></a>

```java
public java.lang.String getSourceIdentity();
```

- *Type:* java.lang.String

Source identity to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#source_identity CfncompatProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#tags CfncompatProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys"></a>

```java
public java.util.List<java.lang.String> getTransitiveTagKeys();
```

- *Type:* java.util.List<java.lang.String>

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#transitive_tag_keys CfncompatProvider#transitive_tag_keys}

---

### CfncompatProviderAssumeRoleWithWebIdentity <a name="CfncompatProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity;

CfncompatProviderAssumeRoleWithWebIdentity.builder()
    .roleArn(java.lang.String)
//  .duration(java.lang.String)
//  .policy(java.lang.String)
//  .policyArns(java.util.List<java.lang.String>)
//  .sessionName(java.lang.String)
//  .webIdentityToken(java.lang.String)
//  .webIdentityTokenFile(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>java.lang.String</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>java.lang.String</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>java.lang.String</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>java.lang.String</code> | Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>java.lang.String</code> | File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration"></a>

```java
public java.lang.String getDuration();
```

- *Type:* java.lang.String

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```java
public java.util.List<java.lang.String> getPolicyArns();
```

- *Type:* java.util.List<java.lang.String>

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```java
public java.lang.String getSessionName();
```

- *Type:* java.lang.String

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```java
public java.lang.String getWebIdentityToken();
```

- *Type:* java.lang.String

Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token CfncompatProvider#web_identity_token}

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```java
public java.lang.String getWebIdentityTokenFile();
```

- *Type:* java.lang.String

File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token_file CfncompatProvider#web_identity_token_file}

---

### CfncompatProviderConfig <a name="CfncompatProviderConfig" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProviderConfig;

CfncompatProviderConfig.builder()
//  .accessKey(java.lang.String)
//  .alias(java.lang.String)
//  .assumeRole(CfncompatProviderAssumeRole)
//  .assumeRoleWithWebIdentity(CfncompatProviderAssumeRoleWithWebIdentity)
//  .customResourceBucket(java.lang.String)
//  .endpoints(CfncompatProviderEndpoints)
//  .httpProxy(java.lang.String)
//  .httpsProxy(java.lang.String)
//  .insecure(java.lang.Boolean|IResolvable)
//  .maxRetries(java.lang.Number)
//  .noProxy(java.lang.String)
//  .profile(java.lang.String)
//  .region(java.lang.String)
//  .secretKey(java.lang.String)
//  .sharedConfigFiles(java.util.List<java.lang.String>)
//  .sharedCredentialsFiles(java.util.List<java.lang.String>)
//  .skipMetadataApiCheck(java.lang.Boolean|IResolvable)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey">accessKey</a></code> | <code>java.lang.String</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket">customResourceBucket</a></code> | <code>java.lang.String</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy">httpProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy">httpsProxy</a></code> | <code>java.lang.String</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy">noProxy</a></code> | <code>java.lang.String</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | The AWS region used by cfncompat_custom_resource API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey">secretKey</a></code> | <code>java.lang.String</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>java.util.List<java.lang.String></code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>java.util.List<java.lang.String></code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token">token</a></code> | <code>java.lang.String</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey"></a>

```java
public java.lang.String getAccessKey();
```

- *Type:* java.lang.String

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#access_key CfncompatProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#alias CfncompatProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole"></a>

```java
public CfncompatProviderAssumeRole getAssumeRole();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity"></a>

```java
public CfncompatProviderAssumeRoleWithWebIdentity getAssumeRoleWithWebIdentity();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `customResourceBucket`<sup>Optional</sup> <a name="customResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket"></a>

```java
public java.lang.String getCustomResourceBucket();
```

- *Type:* java.lang.String

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints"></a>

```java
public CfncompatProviderEndpoints getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy"></a>

```java
public java.lang.String getHttpProxy();
```

- *Type:* java.lang.String

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy"></a>

```java
public java.lang.String getHttpsProxy();
```

- *Type:* java.lang.String

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure"></a>

```java
public java.lang.Boolean|IResolvable getInsecure();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#insecure CfncompatProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy"></a>

```java
public java.lang.String getNoProxy();
```

- *Type:* java.lang.String

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#profile CfncompatProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The AWS region used by cfncompat_custom_resource API calls.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#region CfncompatProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey"></a>

```java
public java.lang.String getSecretKey();
```

- *Type:* java.lang.String

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles"></a>

```java
public java.util.List<java.lang.String> getSharedConfigFiles();
```

- *Type:* java.util.List<java.lang.String>

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles"></a>

```java
public java.util.List<java.lang.String> getSharedCredentialsFiles();
```

- *Type:* java.util.List<java.lang.String>

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck"></a>

```java
public java.lang.Boolean|IResolvable getSkipMetadataApiCheck();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#token CfncompatProvider#token}

---

### CfncompatProviderEndpoints <a name="CfncompatProviderEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.provider.CfncompatProviderEndpoints;

CfncompatProviderEndpoints.builder()
//  .lambda(java.lang.String)
//  .s3(java.lang.String)
//  .sns(java.lang.String)
//  .sts(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda">lambda</a></code> | <code>java.lang.String</code> | Override the default Lambda service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3">s3</a></code> | <code>java.lang.String</code> | Override the default S3 service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns">sns</a></code> | <code>java.lang.String</code> | Override the default SNS service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts">sts</a></code> | <code>java.lang.String</code> | Override the default STS service endpoint URL. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda"></a>

```java
public java.lang.String getLambda();
```

- *Type:* java.lang.String

Override the default Lambda service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#lambda CfncompatProvider#lambda}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

Override the default S3 service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#s3 CfncompatProvider#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns"></a>

```java
public java.lang.String getSns();
```

- *Type:* java.lang.String

Override the default SNS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sns CfncompatProvider#sns}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts"></a>

```java
public java.lang.String getSts();
```

- *Type:* java.lang.String

Override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sts CfncompatProvider#sts}

---



