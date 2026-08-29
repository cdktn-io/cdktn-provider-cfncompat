# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-cfncompat.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfncompatProvider <a name="CfncompatProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs cfncompat}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProvider(
  scope: Construct,
  id: str,
  access_key: str = None,
  alias: str = None,
  assume_role: CfncompatProviderAssumeRole = None,
  assume_role_with_web_identity: CfncompatProviderAssumeRoleWithWebIdentity = None,
  custom_resource_bucket: str = None,
  endpoints: CfncompatProviderEndpoints = None,
  http_proxy: str = None,
  https_proxy: str = None,
  insecure: bool | IResolvable = None,
  max_retries: typing.Union[int, float] = None,
  no_proxy: str = None,
  profile: str = None,
  region: str = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_files: typing.List[str] = None,
  skip_metadata_api_check: bool | IResolvable = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.accessKey">access_key</a></code> | <code>str</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.customResourceBucket">custom_resource_bucket</a></code> | <code>str</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpProxy">http_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpsProxy">https_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.noProxy">no_proxy</a></code> | <code>str</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.region">region</a></code> | <code>str</code> | The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.secretKey">secret_key</a></code> | <code>str</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.accessKey"></a>

- *Type:* str

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#access_key CfncompatProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#alias CfncompatProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRole"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.assumeRoleWithWebIdentity"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `custom_resource_bucket`<sup>Optional</sup> <a name="custom_resource_bucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.customResourceBucket"></a>

- *Type:* str

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.endpoints"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource and the cfncompat data sources; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpProxy"></a>

- *Type:* str

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.httpsProxy"></a>

- *Type:* str

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.insecure"></a>

- *Type:* bool | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#insecure CfncompatProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.noProxy"></a>

- *Type:* str

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.profile"></a>

- *Type:* str

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#profile CfncompatProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.region"></a>

- *Type:* str

The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#region CfncompatProvider#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.secretKey"></a>

- *Type:* str

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedConfigFiles"></a>

- *Type:* typing.List[str]

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.sharedCredentialsFiles"></a>

- *Type:* typing.List[str]

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.skipMetadataApiCheck"></a>

- *Type:* bool | cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.token"></a>

- *Type:* str

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#token CfncompatProvider#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey">reset_access_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole">reset_assume_role</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity">reset_assume_role_with_web_identity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket">reset_custom_resource_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints">reset_endpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy">reset_http_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy">reset_https_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy">reset_no_proxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey">reset_secret_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles">reset_shared_config_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles">reset_shared_credentials_files</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck">reset_skip_metadata_api_check</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_access_key` <a name="reset_access_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey"></a>

```python
def reset_access_key() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_assume_role` <a name="reset_assume_role" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole"></a>

```python
def reset_assume_role() -> None
```

##### `reset_assume_role_with_web_identity` <a name="reset_assume_role_with_web_identity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity"></a>

```python
def reset_assume_role_with_web_identity() -> None
```

##### `reset_custom_resource_bucket` <a name="reset_custom_resource_bucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket"></a>

```python
def reset_custom_resource_bucket() -> None
```

##### `reset_endpoints` <a name="reset_endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints"></a>

```python
def reset_endpoints() -> None
```

##### `reset_http_proxy` <a name="reset_http_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy"></a>

```python
def reset_http_proxy() -> None
```

##### `reset_https_proxy` <a name="reset_https_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy"></a>

```python
def reset_https_proxy() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_no_proxy` <a name="reset_no_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy"></a>

```python
def reset_no_proxy() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_secret_key` <a name="reset_secret_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey"></a>

```python
def reset_secret_key() -> None
```

##### `reset_shared_config_files` <a name="reset_shared_config_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles"></a>

```python
def reset_shared_config_files() -> None
```

##### `reset_shared_credentials_files` <a name="reset_shared_credentials_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles"></a>

```python
def reset_shared_credentials_files() -> None
```

##### `reset_skip_metadata_api_check` <a name="reset_skip_metadata_api_check" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck"></a>

```python
def reset_skip_metadata_api_check() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProvider.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CfncompatProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CfncompatProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CfncompatProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions">functions</a></code> | <code>cdktn_provider_cfncompat.providerFunctions.CfncompatProviderFunctions</code> | Provider-defined functions of the cfncompat provider. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput">assume_role_input</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput">assume_role_with_web_identity_input</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput">custom_resource_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput">endpoints_input</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput">http_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput">https_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput">insecure_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput">no_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput">secret_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput">shared_config_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput">shared_credentials_files_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput">skip_metadata_api_check_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket">custom_resource_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy">http_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy">https_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy">no_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey">secret_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions"></a>

```python
functions: CfncompatProviderFunctions
```

- *Type:* cdktn_provider_cfncompat.providerFunctions.CfncompatProviderFunctions

Provider-defined functions of the cfncompat provider.

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `assume_role_input`<sup>Optional</sup> <a name="assume_role_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput"></a>

```python
assume_role_input: CfncompatProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assume_role_with_web_identity_input`<sup>Optional</sup> <a name="assume_role_with_web_identity_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput"></a>

```python
assume_role_with_web_identity_input: CfncompatProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `custom_resource_bucket_input`<sup>Optional</sup> <a name="custom_resource_bucket_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput"></a>

```python
custom_resource_bucket_input: str
```

- *Type:* str

---

##### `endpoints_input`<sup>Optional</sup> <a name="endpoints_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput"></a>

```python
endpoints_input: CfncompatProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `http_proxy_input`<sup>Optional</sup> <a name="http_proxy_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput"></a>

```python
http_proxy_input: str
```

- *Type:* str

---

##### `https_proxy_input`<sup>Optional</sup> <a name="https_proxy_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput"></a>

```python
https_proxy_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput"></a>

```python
insecure_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_proxy_input`<sup>Optional</sup> <a name="no_proxy_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput"></a>

```python
no_proxy_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `secret_key_input`<sup>Optional</sup> <a name="secret_key_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput"></a>

```python
secret_key_input: str
```

- *Type:* str

---

##### `shared_config_files_input`<sup>Optional</sup> <a name="shared_config_files_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput"></a>

```python
shared_config_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_files_input`<sup>Optional</sup> <a name="shared_credentials_files_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput"></a>

```python
shared_credentials_files_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_metadata_api_check_input`<sup>Optional</sup> <a name="skip_metadata_api_check_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput"></a>

```python
skip_metadata_api_check_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole"></a>

```python
assume_role: CfncompatProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: CfncompatProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `custom_resource_bucket`<sup>Optional</sup> <a name="custom_resource_bucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket"></a>

```python
custom_resource_bucket: str
```

- *Type:* str

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints"></a>

```python
endpoints: CfncompatProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CfncompatProviderAssumeRole <a name="CfncompatProviderAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.Initializer"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProviderAssumeRole(
  role_arn: str,
  duration: str = None,
  external_id: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  session_name: str = None,
  source_identity: str = None,
  tags: typing.Mapping[str] = None,
  transitive_tag_keys: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration">duration</a></code> | <code>str</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId">external_id</a></code> | <code>str</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy">policy</a></code> | <code>str</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName">session_name</a></code> | <code>str</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity">source_identity</a></code> | <code>str</code> | Source identity to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys">transitive_tag_keys</a></code> | <code>typing.List[str]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#duration CfncompatProvider#duration}

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#external_id CfncompatProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy CfncompatProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#session_name CfncompatProvider#session_name}

---

##### `source_identity`<sup>Optional</sup> <a name="source_identity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity"></a>

```python
source_identity: str
```

- *Type:* str

Source identity to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#source_identity CfncompatProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#tags CfncompatProvider#tags}

---

##### `transitive_tag_keys`<sup>Optional</sup> <a name="transitive_tag_keys" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys"></a>

```python
transitive_tag_keys: typing.List[str]
```

- *Type:* typing.List[str]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#transitive_tag_keys CfncompatProvider#transitive_tag_keys}

---

### CfncompatProviderAssumeRoleWithWebIdentity <a name="CfncompatProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.Initializer"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProviderAssumeRoleWithWebIdentity(
  role_arn: str,
  duration: str = None,
  policy: str = None,
  policy_arns: typing.List[str] = None,
  session_name: str = None,
  web_identity_token: str = None,
  web_identity_token_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn">role_arn</a></code> | <code>str</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>str</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>str</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns">policy_arns</a></code> | <code>typing.List[str]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName">session_name</a></code> | <code>str</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken">web_identity_token</a></code> | <code>str</code> | Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">web_identity_token_file</a></code> | <code>str</code> | File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required. |

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration"></a>

```python
duration: str
```

- *Type:* str

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#duration CfncompatProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy"></a>

```python
policy: str
```

- *Type:* str

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy CfncompatProvider#policy}

---

##### `policy_arns`<sup>Optional</sup> <a name="policy_arns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```python
policy_arns: typing.List[str]
```

- *Type:* typing.List[str]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `session_name`<sup>Optional</sup> <a name="session_name" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```python
session_name: str
```

- *Type:* str

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#session_name CfncompatProvider#session_name}

---

##### `web_identity_token`<sup>Optional</sup> <a name="web_identity_token" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```python
web_identity_token: str
```

- *Type:* str

Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#web_identity_token CfncompatProvider#web_identity_token}

---

##### `web_identity_token_file`<sup>Optional</sup> <a name="web_identity_token_file" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```python
web_identity_token_file: str
```

- *Type:* str

File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#web_identity_token_file CfncompatProvider#web_identity_token_file}

---

### CfncompatProviderConfig <a name="CfncompatProviderConfig" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.Initializer"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProviderConfig(
  access_key: str = None,
  alias: str = None,
  assume_role: CfncompatProviderAssumeRole = None,
  assume_role_with_web_identity: CfncompatProviderAssumeRoleWithWebIdentity = None,
  custom_resource_bucket: str = None,
  endpoints: CfncompatProviderEndpoints = None,
  http_proxy: str = None,
  https_proxy: str = None,
  insecure: bool | IResolvable = None,
  max_retries: typing.Union[int, float] = None,
  no_proxy: str = None,
  profile: str = None,
  region: str = None,
  secret_key: str = None,
  shared_config_files: typing.List[str] = None,
  shared_credentials_files: typing.List[str] = None,
  skip_metadata_api_check: bool | IResolvable = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey">access_key</a></code> | <code>str</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole">assume_role</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity">assume_role_with_web_identity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket">custom_resource_bucket</a></code> | <code>str</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy">http_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy">https_proxy</a></code> | <code>str</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure">insecure</a></code> | <code>bool \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy">no_proxy</a></code> | <code>str</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile">profile</a></code> | <code>str</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region">region</a></code> | <code>str</code> | The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey">secret_key</a></code> | <code>str</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles">shared_config_files</a></code> | <code>typing.List[str]</code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles">shared_credentials_files</a></code> | <code>typing.List[str]</code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck">skip_metadata_api_check</a></code> | <code>bool \| cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token">token</a></code> | <code>str</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `access_key`<sup>Optional</sup> <a name="access_key" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#access_key CfncompatProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#alias CfncompatProvider#alias}

---

##### `assume_role`<sup>Optional</sup> <a name="assume_role" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole"></a>

```python
assume_role: CfncompatProviderAssumeRole
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `assume_role_with_web_identity`<sup>Optional</sup> <a name="assume_role_with_web_identity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity"></a>

```python
assume_role_with_web_identity: CfncompatProviderAssumeRoleWithWebIdentity
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `custom_resource_bucket`<sup>Optional</sup> <a name="custom_resource_bucket" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket"></a>

```python
custom_resource_bucket: str
```

- *Type:* str

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints"></a>

```python
endpoints: CfncompatProviderEndpoints
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource and the cfncompat data sources; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `http_proxy`<sup>Optional</sup> <a name="http_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy"></a>

```python
http_proxy: str
```

- *Type:* str

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `https_proxy`<sup>Optional</sup> <a name="https_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy"></a>

```python
https_proxy: str
```

- *Type:* str

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure"></a>

```python
insecure: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#insecure CfncompatProvider#insecure}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `no_proxy`<sup>Optional</sup> <a name="no_proxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy"></a>

```python
no_proxy: str
```

- *Type:* str

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#profile CfncompatProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#region CfncompatProvider#region}

---

##### `secret_key`<sup>Optional</sup> <a name="secret_key" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey"></a>

```python
secret_key: str
```

- *Type:* str

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `shared_config_files`<sup>Optional</sup> <a name="shared_config_files" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles"></a>

```python
shared_config_files: typing.List[str]
```

- *Type:* typing.List[str]

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `shared_credentials_files`<sup>Optional</sup> <a name="shared_credentials_files" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles"></a>

```python
shared_credentials_files: typing.List[str]
```

- *Type:* typing.List[str]

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `skip_metadata_api_check`<sup>Optional</sup> <a name="skip_metadata_api_check" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck"></a>

```python
skip_metadata_api_check: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#token CfncompatProvider#token}

---

### CfncompatProviderEndpoints <a name="CfncompatProviderEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.Initializer"></a>

```python
from cdktn_provider_cfncompat import provider

provider.CfncompatProviderEndpoints(
  ec2: str = None,
  lambda: str = None,
  s3: str = None,
  sns: str = None,
  sts: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.ec2">ec2</a></code> | <code>str</code> | Override the default EC2 service endpoint URL, used by the cfncompat_availability_zones data source. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda">lambda</a></code> | <code>str</code> | Override the default Lambda service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3">s3</a></code> | <code>str</code> | Override the default S3 service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns">sns</a></code> | <code>str</code> | Override the default SNS service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts">sts</a></code> | <code>str</code> | Override the default STS service endpoint URL. |

---

##### `ec2`<sup>Optional</sup> <a name="ec2" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.ec2"></a>

```python
ec2: str
```

- *Type:* str

Override the default EC2 service endpoint URL, used by the cfncompat_availability_zones data source.

The override applies to every region, including one named by an explicit `region` argument on cfncompat_availability_zones -- the request is still signed for that region, but always sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#ec2 CfncompatProvider#ec2}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda"></a>

```python
lambda: str
```

- *Type:* str

Override the default Lambda service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#lambda CfncompatProvider#lambda}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3"></a>

```python
s3: str
```

- *Type:* str

Override the default S3 service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#s3 CfncompatProvider#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns"></a>

```python
sns: str
```

- *Type:* str

Override the default SNS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#sns CfncompatProvider#sns}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts"></a>

```python
sts: str
```

- *Type:* str

Override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#sts CfncompatProvider#sts}

---



