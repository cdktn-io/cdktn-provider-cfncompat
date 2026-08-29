# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-cfncompat.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfncompatProvider <a name="CfncompatProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs cfncompat}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CfncompatProvider(Construct Scope, string Id, CfncompatProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig">CfncompatProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig">CfncompatProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole">ResetAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity">ResetAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket">ResetCustomResourceBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy">ResetHttpProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy">ResetHttpsProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy">ResetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles">ResetSharedConfigFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles">ResetSharedCredentialsFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck">ResetSkipMetadataApiCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAssumeRole` <a name="ResetAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole"></a>

```csharp
private void ResetAssumeRole()
```

##### `ResetAssumeRoleWithWebIdentity` <a name="ResetAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity"></a>

```csharp
private void ResetAssumeRoleWithWebIdentity()
```

##### `ResetCustomResourceBucket` <a name="ResetCustomResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket"></a>

```csharp
private void ResetCustomResourceBucket()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetHttpProxy` <a name="ResetHttpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy"></a>

```csharp
private void ResetHttpProxy()
```

##### `ResetHttpsProxy` <a name="ResetHttpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy"></a>

```csharp
private void ResetHttpsProxy()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetNoProxy` <a name="ResetNoProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy"></a>

```csharp
private void ResetNoProxy()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetSharedConfigFiles` <a name="ResetSharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles"></a>

```csharp
private void ResetSharedConfigFiles()
```

##### `ResetSharedCredentialsFiles` <a name="ResetSharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles"></a>

```csharp
private void ResetSharedCredentialsFiles()
```

##### `ResetSkipMetadataApiCheck` <a name="ResetSkipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck"></a>

```csharp
private void ResetSkipMetadataApiCheck()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CfncompatProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CfncompatProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CfncompatProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CfncompatProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfncompatProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfncompatProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CfncompatProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions">Functions</a></code> | <code>Io.Cdktn.Providers.Cfncompat.providerFunctions.CfncompatProviderFunctions</code> | Provider-defined functions of the cfncompat provider. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput">AssumeRoleInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput">AssumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput">CustomResourceBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput">HttpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput">HttpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput">InsecureInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput">NoProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput">SharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput">SharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput">SkipMetadataApiCheckInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket">CustomResourceBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy">HttpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy">NoProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Functions`<sup>Required</sup> <a name="Functions" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions"></a>

```csharp
public CfncompatProviderFunctions Functions { get; }
```

- *Type:* Io.Cdktn.Providers.Cfncompat.providerFunctions.CfncompatProviderFunctions

Provider-defined functions of the cfncompat provider.

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AssumeRoleInput`<sup>Optional</sup> <a name="AssumeRoleInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput"></a>

```csharp
public CfncompatProviderAssumeRole AssumeRoleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `AssumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentityInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput"></a>

```csharp
public CfncompatProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `CustomResourceBucketInput`<sup>Optional</sup> <a name="CustomResourceBucketInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput"></a>

```csharp
public string CustomResourceBucketInput { get; }
```

- *Type:* string

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput"></a>

```csharp
public CfncompatProviderEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `HttpProxyInput`<sup>Optional</sup> <a name="HttpProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput"></a>

```csharp
public string HttpProxyInput { get; }
```

- *Type:* string

---

##### `HttpsProxyInput`<sup>Optional</sup> <a name="HttpsProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput"></a>

```csharp
public string HttpsProxyInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput"></a>

```csharp
public bool|IResolvable InsecureInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `NoProxyInput`<sup>Optional</sup> <a name="NoProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput"></a>

```csharp
public string NoProxyInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `SharedConfigFilesInput`<sup>Optional</sup> <a name="SharedConfigFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput"></a>

```csharp
public string[] SharedConfigFilesInput { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFilesInput`<sup>Optional</sup> <a name="SharedCredentialsFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput"></a>

```csharp
public string[] SharedCredentialsFilesInput { get; }
```

- *Type:* string[]

---

##### `SkipMetadataApiCheckInput`<sup>Optional</sup> <a name="SkipMetadataApiCheckInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheckInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole"></a>

```csharp
public CfncompatProviderAssumeRole AssumeRole { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity"></a>

```csharp
public CfncompatProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `CustomResourceBucket`<sup>Optional</sup> <a name="CustomResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket"></a>

```csharp
public string CustomResourceBucket { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints"></a>

```csharp
public CfncompatProviderEndpoints Endpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy"></a>

```csharp
public string HttpProxy { get; }
```

- *Type:* string

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy"></a>

```csharp
public string NoProxy { get; }
```

- *Type:* string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; }
```

- *Type:* string[]

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; }
```

- *Type:* string[]

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheck { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfncompatProviderAssumeRole <a name="CfncompatProviderAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CfncompatProviderAssumeRole {
    string RoleArn,
    string Duration = null,
    string ExternalId = null,
    string Policy = null,
    string[] PolicyArns = null,
    string SessionName = null,
    string SourceIdentity = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string[] TransitiveTagKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration">Duration</a></code> | <code>string</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId">ExternalId</a></code> | <code>string</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy">Policy</a></code> | <code>string</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName">SessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity">SourceIdentity</a></code> | <code>string</code> | Source identity to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys">TransitiveTagKeys</a></code> | <code>string[]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#duration CfncompatProvider#duration}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#external_id CfncompatProvider#external_id}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy CfncompatProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#session_name CfncompatProvider#session_name}

---

##### `SourceIdentity`<sup>Optional</sup> <a name="SourceIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity"></a>

```csharp
public string SourceIdentity { get; set; }
```

- *Type:* string

Source identity to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#source_identity CfncompatProvider#source_identity}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#tags CfncompatProvider#tags}

---

##### `TransitiveTagKeys`<sup>Optional</sup> <a name="TransitiveTagKeys" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys"></a>

```csharp
public string[] TransitiveTagKeys { get; set; }
```

- *Type:* string[]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#transitive_tag_keys CfncompatProvider#transitive_tag_keys}

---

### CfncompatProviderAssumeRoleWithWebIdentity <a name="CfncompatProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CfncompatProviderAssumeRoleWithWebIdentity {
    string RoleArn,
    string Duration = null,
    string Policy = null,
    string[] PolicyArns = null,
    string SessionName = null,
    string WebIdentityToken = null,
    string WebIdentityTokenFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn">RoleArn</a></code> | <code>string</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration">Duration</a></code> | <code>string</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy">Policy</a></code> | <code>string</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns">PolicyArns</a></code> | <code>string[]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName">SessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken">WebIdentityToken</a></code> | <code>string</code> | Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">WebIdentityTokenFile</a></code> | <code>string</code> | File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required. |

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#duration CfncompatProvider#duration}

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy CfncompatProvider#policy}

---

##### `PolicyArns`<sup>Optional</sup> <a name="PolicyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```csharp
public string[] PolicyArns { get; set; }
```

- *Type:* string[]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `SessionName`<sup>Optional</sup> <a name="SessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```csharp
public string SessionName { get; set; }
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#session_name CfncompatProvider#session_name}

---

##### `WebIdentityToken`<sup>Optional</sup> <a name="WebIdentityToken" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```csharp
public string WebIdentityToken { get; set; }
```

- *Type:* string

Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#web_identity_token CfncompatProvider#web_identity_token}

---

##### `WebIdentityTokenFile`<sup>Optional</sup> <a name="WebIdentityTokenFile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```csharp
public string WebIdentityTokenFile { get; set; }
```

- *Type:* string

File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#web_identity_token_file CfncompatProvider#web_identity_token_file}

---

### CfncompatProviderConfig <a name="CfncompatProviderConfig" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CfncompatProviderConfig {
    string AccessKey = null,
    string Alias = null,
    CfncompatProviderAssumeRole AssumeRole = null,
    CfncompatProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity = null,
    string CustomResourceBucket = null,
    CfncompatProviderEndpoints Endpoints = null,
    string HttpProxy = null,
    string HttpsProxy = null,
    bool|IResolvable Insecure = null,
    double MaxRetries = null,
    string NoProxy = null,
    string Profile = null,
    string Region = null,
    string SecretKey = null,
    string[] SharedConfigFiles = null,
    string[] SharedCredentialsFiles = null,
    bool|IResolvable SkipMetadataApiCheck = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey">AccessKey</a></code> | <code>string</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole">AssumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity">AssumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket">CustomResourceBucket</a></code> | <code>string</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy">HttpProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy">HttpsProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure">Insecure</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy">NoProxy</a></code> | <code>string</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile">Profile</a></code> | <code>string</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region">Region</a></code> | <code>string</code> | The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey">SecretKey</a></code> | <code>string</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles">SharedConfigFiles</a></code> | <code>string[]</code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles">SharedCredentialsFiles</a></code> | <code>string[]</code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck">SkipMetadataApiCheck</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token">Token</a></code> | <code>string</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#access_key CfncompatProvider#access_key}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#alias CfncompatProvider#alias}

---

##### `AssumeRole`<sup>Optional</sup> <a name="AssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole"></a>

```csharp
public CfncompatProviderAssumeRole AssumeRole { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `AssumeRoleWithWebIdentity`<sup>Optional</sup> <a name="AssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity"></a>

```csharp
public CfncompatProviderAssumeRoleWithWebIdentity AssumeRoleWithWebIdentity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `CustomResourceBucket`<sup>Optional</sup> <a name="CustomResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket"></a>

```csharp
public string CustomResourceBucket { get; set; }
```

- *Type:* string

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints"></a>

```csharp
public CfncompatProviderEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource and the cfncompat data sources; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `HttpProxy`<sup>Optional</sup> <a name="HttpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy"></a>

```csharp
public string HttpProxy { get; set; }
```

- *Type:* string

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `HttpsProxy`<sup>Optional</sup> <a name="HttpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy"></a>

```csharp
public string HttpsProxy { get; set; }
```

- *Type:* string

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure"></a>

```csharp
public bool|IResolvable Insecure { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#insecure CfncompatProvider#insecure}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy"></a>

```csharp
public string NoProxy { get; set; }
```

- *Type:* string

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#profile CfncompatProvider#profile}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS region used by cfncompat_custom_resource API calls, and reported as CloudFormation's AWS::Region by the cfncompat_pseudo_parameters data source.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#region CfncompatProvider#region}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `SharedConfigFiles`<sup>Optional</sup> <a name="SharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles"></a>

```csharp
public string[] SharedConfigFiles { get; set; }
```

- *Type:* string[]

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `SharedCredentialsFiles`<sup>Optional</sup> <a name="SharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles"></a>

```csharp
public string[] SharedCredentialsFiles { get; set; }
```

- *Type:* string[]

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `SkipMetadataApiCheck`<sup>Optional</sup> <a name="SkipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck"></a>

```csharp
public bool|IResolvable SkipMetadataApiCheck { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#token CfncompatProvider#token}

---

### CfncompatProviderEndpoints <a name="CfncompatProviderEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CfncompatProviderEndpoints {
    string Ec2 = null,
    string Lambda = null,
    string S3 = null,
    string Sns = null,
    string Sts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.ec2">Ec2</a></code> | <code>string</code> | Override the default EC2 service endpoint URL, used by the cfncompat_availability_zones data source. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda">Lambda</a></code> | <code>string</code> | Override the default Lambda service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3">S3</a></code> | <code>string</code> | Override the default S3 service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns">Sns</a></code> | <code>string</code> | Override the default SNS service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts">Sts</a></code> | <code>string</code> | Override the default STS service endpoint URL. |

---

##### `Ec2`<sup>Optional</sup> <a name="Ec2" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.ec2"></a>

```csharp
public string Ec2 { get; set; }
```

- *Type:* string

Override the default EC2 service endpoint URL, used by the cfncompat_availability_zones data source.

The override applies to every region, including one named by an explicit `region` argument on cfncompat_availability_zones -- the request is still signed for that region, but always sent to this endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#ec2 CfncompatProvider#ec2}

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda"></a>

```csharp
public string Lambda { get; set; }
```

- *Type:* string

Override the default Lambda service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#lambda CfncompatProvider#lambda}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3"></a>

```csharp
public string S3 { get; set; }
```

- *Type:* string

Override the default S3 service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#s3 CfncompatProvider#s3}

---

##### `Sns`<sup>Optional</sup> <a name="Sns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns"></a>

```csharp
public string Sns { get; set; }
```

- *Type:* string

Override the default SNS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#sns CfncompatProvider#sns}

---

##### `Sts`<sup>Optional</sup> <a name="Sts" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts"></a>

```csharp
public string Sts { get; set; }
```

- *Type:* string

Override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs#sts CfncompatProvider#sts}

---



