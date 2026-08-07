# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-cfncompat.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfncompatProvider <a name="CfncompatProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs cfncompat}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

new provider.CfncompatProvider(scope: Construct, id: string, config?: CfncompatProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig">CfncompatProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig">CfncompatProviderConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAssumeRole` <a name="resetAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRole"></a>

```typescript
public resetAssumeRole(): void
```

##### `resetAssumeRoleWithWebIdentity` <a name="resetAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetAssumeRoleWithWebIdentity"></a>

```typescript
public resetAssumeRoleWithWebIdentity(): void
```

##### `resetCustomResourceBucket` <a name="resetCustomResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetCustomResourceBucket"></a>

```typescript
public resetCustomResourceBucket(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetHttpProxy` <a name="resetHttpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpProxy"></a>

```typescript
public resetHttpProxy(): void
```

##### `resetHttpsProxy` <a name="resetHttpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetHttpsProxy"></a>

```typescript
public resetHttpsProxy(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetSharedConfigFiles` <a name="resetSharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedConfigFiles"></a>

```typescript
public resetSharedConfigFiles(): void
```

##### `resetSharedCredentialsFiles` <a name="resetSharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSharedCredentialsFiles"></a>

```typescript
public resetSharedCredentialsFiles(): void
```

##### `resetSkipMetadataApiCheck` <a name="resetSkipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetSkipMetadataApiCheck"></a>

```typescript
public resetSkipMetadataApiCheck(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.resetToken"></a>

```typescript
public resetToken(): void
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

```typescript
import { provider } from '@cdktn/provider-cfncompat'

provider.CfncompatProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

provider.CfncompatProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

provider.CfncompatProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

provider.CfncompatProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CfncompatProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfncompatProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfncompatProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CfncompatProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions">functions</a></code> | <code>@cdktn/provider-cfncompat.providerFunctions.CfncompatProviderFunctions</code> | Provider-defined functions of the cfncompat provider. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput">assumeRoleInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput">assumeRoleWithWebIdentityInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput">customResourceBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput">endpointsInput</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput">httpProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput">httpsProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput">noProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput">sharedConfigFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput">sharedCredentialsFilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput">skipMetadataApiCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket">customResourceBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy">httpProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy">noProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `functions`<sup>Required</sup> <a name="functions" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.functions"></a>

```typescript
public readonly functions: CfncompatProviderFunctions;
```

- *Type:* @cdktn/provider-cfncompat.providerFunctions.CfncompatProviderFunctions

Provider-defined functions of the cfncompat provider.

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `assumeRoleInput`<sup>Optional</sup> <a name="assumeRoleInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleInput"></a>

```typescript
public readonly assumeRoleInput: CfncompatProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentityInput`<sup>Optional</sup> <a name="assumeRoleWithWebIdentityInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentityInput"></a>

```typescript
public readonly assumeRoleWithWebIdentityInput: CfncompatProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `customResourceBucketInput`<sup>Optional</sup> <a name="customResourceBucketInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucketInput"></a>

```typescript
public readonly customResourceBucketInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: CfncompatProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `httpProxyInput`<sup>Optional</sup> <a name="httpProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxyInput"></a>

```typescript
public readonly httpProxyInput: string;
```

- *Type:* string

---

##### `httpsProxyInput`<sup>Optional</sup> <a name="httpsProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxyInput"></a>

```typescript
public readonly httpsProxyInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `sharedConfigFilesInput`<sup>Optional</sup> <a name="sharedConfigFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFilesInput"></a>

```typescript
public readonly sharedConfigFilesInput: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFilesInput`<sup>Optional</sup> <a name="sharedCredentialsFilesInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFilesInput"></a>

```typescript
public readonly sharedCredentialsFilesInput: string[];
```

- *Type:* string[]

---

##### `skipMetadataApiCheckInput`<sup>Optional</sup> <a name="skipMetadataApiCheckInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheckInput"></a>

```typescript
public readonly skipMetadataApiCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRole"></a>

```typescript
public readonly assumeRole: CfncompatProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: CfncompatProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

---

##### `customResourceBucket`<sup>Optional</sup> <a name="customResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.customResourceBucket"></a>

```typescript
public readonly customResourceBucket: string;
```

- *Type:* string

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.endpoints"></a>

```typescript
public readonly endpoints: CfncompatProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.provider.CfncompatProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfncompatProviderAssumeRole <a name="CfncompatProviderAssumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

const cfncompatProviderAssumeRole: provider.CfncompatProviderAssumeRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration">duration</a></code> | <code>string</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId">externalId</a></code> | <code>string</code> | External identifier to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy">policy</a></code> | <code>string</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns">policyArns</a></code> | <code>string[]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName">sessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity">sourceIdentity</a></code> | <code>string</code> | Source identity to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Map of assume role session tags. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys">transitiveTagKeys</a></code> | <code>string[]</code> | Set of assume role session tag keys to pass to any subsequent sessions. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

External identifier to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#external_id CfncompatProvider#external_id}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}

---

##### `sourceIdentity`<sup>Optional</sup> <a name="sourceIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.sourceIdentity"></a>

```typescript
public readonly sourceIdentity: string;
```

- *Type:* string

Source identity to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#source_identity CfncompatProvider#source_identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of assume role session tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#tags CfncompatProvider#tags}

---

##### `transitiveTagKeys`<sup>Optional</sup> <a name="transitiveTagKeys" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole.property.transitiveTagKeys"></a>

```typescript
public readonly transitiveTagKeys: string[];
```

- *Type:* string[]

Set of assume role session tag keys to pass to any subsequent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#transitive_tag_keys CfncompatProvider#transitive_tag_keys}

---

### CfncompatProviderAssumeRoleWithWebIdentity <a name="CfncompatProviderAssumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

const cfncompatProviderAssumeRoleWithWebIdentity: provider.CfncompatProviderAssumeRoleWithWebIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn">roleArn</a></code> | <code>string</code> | ARN of the IAM role to assume. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration">duration</a></code> | <code>string</code> | The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h). |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy">policy</a></code> | <code>string</code> | IAM policy in JSON format used as a session policy. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns">policyArns</a></code> | <code>string[]</code> | ARNs of IAM policies used as managed session policies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName">sessionName</a></code> | <code>string</code> | Session name to use when assuming the role. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken">webIdentityToken</a></code> | <code>string</code> | Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile">webIdentityTokenFile</a></code> | <code>string</code> | File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

ARN of the IAM role to assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#role_arn CfncompatProvider#role_arn}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

The duration of the role session, e.g. "1h". Parsed with Go's time.ParseDuration (valid units: ns, us, ms, s, m, h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#duration CfncompatProvider#duration}

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

IAM policy in JSON format used as a session policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy CfncompatProvider#policy}

---

##### `policyArns`<sup>Optional</sup> <a name="policyArns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.policyArns"></a>

```typescript
public readonly policyArns: string[];
```

- *Type:* string[]

ARNs of IAM policies used as managed session policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#policy_arns CfncompatProvider#policy_arns}

---

##### `sessionName`<sup>Optional</sup> <a name="sessionName" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.sessionName"></a>

```typescript
public readonly sessionName: string;
```

- *Type:* string

Session name to use when assuming the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#session_name CfncompatProvider#session_name}

---

##### `webIdentityToken`<sup>Optional</sup> <a name="webIdentityToken" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityToken"></a>

```typescript
public readonly webIdentityToken: string;
```

- *Type:* string

Value of a web identity token from an OIDC/OAuth provider. One of `web_identity_token` or `web_identity_token_file` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token CfncompatProvider#web_identity_token}

---

##### `webIdentityTokenFile`<sup>Optional</sup> <a name="webIdentityTokenFile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity.property.webIdentityTokenFile"></a>

```typescript
public readonly webIdentityTokenFile: string;
```

- *Type:* string

File containing a web identity token from an OIDC/OAuth provider. One of `web_identity_token_file` or `web_identity_token` is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#web_identity_token_file CfncompatProvider#web_identity_token_file}

---

### CfncompatProviderConfig <a name="CfncompatProviderConfig" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

const cfncompatProviderConfig: provider.CfncompatProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey">accessKey</a></code> | <code>string</code> | The AWS access key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole">assumeRole</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a></code> | Configuration for assuming an IAM role prior to making AWS API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity">assumeRoleWithWebIdentity</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a></code> | Configuration for assuming an IAM role using a web identity token. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket">customResourceBucket</a></code> | <code>string</code> | Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a></code> | Service endpoint URL overrides, primarily for testing against LocalStack. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy">httpProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTP requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | URL of a proxy to use for HTTPS requests when accessing the AWS API. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktn.IResolvable</code> | Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy">noProxy</a></code> | <code>string</code> | Comma-separated list of hosts that should not use HTTP or HTTPS proxies. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile">profile</a></code> | <code>string</code> | The AWS profile name as set in the shared credentials/config files. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region">region</a></code> | <code>string</code> | The AWS region used by cfncompat_custom_resource API calls. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey">secretKey</a></code> | <code>string</code> | The AWS secret key. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles">sharedConfigFiles</a></code> | <code>string[]</code> | Paths to shared config files. If not set, defaults to `~/.aws/config`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles">sharedCredentialsFiles</a></code> | <code>string[]</code> | Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck">skipMetadataApiCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Skip the AWS EC2 Instance Metadata API check. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token">token</a></code> | <code>string</code> | Session token for temporary credentials, typically provided after identity federation or MFA login. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

The AWS access key.

Can also be sourced from the `AWS_ACCESS_KEY_ID` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#access_key CfncompatProvider#access_key}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#alias CfncompatProvider#alias}

---

##### `assumeRole`<sup>Optional</sup> <a name="assumeRole" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRole"></a>

```typescript
public readonly assumeRole: CfncompatProviderAssumeRole;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRole">CfncompatProviderAssumeRole</a>

Configuration for assuming an IAM role prior to making AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role CfncompatProvider#assume_role}

---

##### `assumeRoleWithWebIdentity`<sup>Optional</sup> <a name="assumeRoleWithWebIdentity" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.assumeRoleWithWebIdentity"></a>

```typescript
public readonly assumeRoleWithWebIdentity: CfncompatProviderAssumeRoleWithWebIdentity;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderAssumeRoleWithWebIdentity">CfncompatProviderAssumeRoleWithWebIdentity</a>

Configuration for assuming an IAM role using a web identity token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#assume_role_with_web_identity CfncompatProvider#assume_role_with_web_identity}

---

##### `customResourceBucket`<sup>Optional</sup> <a name="customResourceBucket" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.customResourceBucket"></a>

```typescript
public readonly customResourceBucket: string;
```

- *Type:* string

Default S3 bucket used for cfncompat_custom_resource response transport (the pre-signed PUT URL the custom resource handler writes its response to) when a cfncompat_custom_resource does not set its own `response_bucket`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#custom_resource_bucket CfncompatProvider#custom_resource_bucket}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.endpoints"></a>

```typescript
public readonly endpoints: CfncompatProviderEndpoints;
```

- *Type:* <a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints">CfncompatProviderEndpoints</a>

Service endpoint URL overrides, primarily for testing against LocalStack.

Only used by cfncompat_custom_resource; the provider-defined functions make no AWS API calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#endpoints CfncompatProvider#endpoints}

---

##### `httpProxy`<sup>Optional</sup> <a name="httpProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpProxy"></a>

```typescript
public readonly httpProxy: string;
```

- *Type:* string

URL of a proxy to use for HTTP requests when accessing the AWS API.

Can also be set using the `HTTP_PROXY`/`http_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#http_proxy CfncompatProvider#http_proxy}

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

URL of a proxy to use for HTTPS requests when accessing the AWS API.

Can also be set using the `HTTPS_PROXY`/`https_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#https_proxy CfncompatProvider#https_proxy}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Explicitly allow the provider to perform "insecure" SSL requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#insecure CfncompatProvider#insecure}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

The maximum number of times an AWS API request is retried on failure. If not set, defaults to 25.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#max_retries CfncompatProvider#max_retries}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

Comma-separated list of hosts that should not use HTTP or HTTPS proxies.

Can also be set using the `NO_PROXY`/`no_proxy` environment variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#no_proxy CfncompatProvider#no_proxy}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

The AWS profile name as set in the shared credentials/config files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#profile CfncompatProvider#profile}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS region used by cfncompat_custom_resource API calls.

Can also be sourced from the `AWS_REGION`/`AWS_DEFAULT_REGION` environment variables, a shared config file, or the EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#region CfncompatProvider#region}

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

The AWS secret key.

Can also be sourced from the `AWS_SECRET_ACCESS_KEY` environment variable, or via a shared credentials file if `profile` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#secret_key CfncompatProvider#secret_key}

---

##### `sharedConfigFiles`<sup>Optional</sup> <a name="sharedConfigFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedConfigFiles"></a>

```typescript
public readonly sharedConfigFiles: string[];
```

- *Type:* string[]

Paths to shared config files. If not set, defaults to `~/.aws/config`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_config_files CfncompatProvider#shared_config_files}

---

##### `sharedCredentialsFiles`<sup>Optional</sup> <a name="sharedCredentialsFiles" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.sharedCredentialsFiles"></a>

```typescript
public readonly sharedCredentialsFiles: string[];
```

- *Type:* string[]

Paths to shared credentials files. If not set, defaults to `~/.aws/credentials`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#shared_credentials_files CfncompatProvider#shared_credentials_files}

---

##### `skipMetadataApiCheck`<sup>Optional</sup> <a name="skipMetadataApiCheck" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.skipMetadataApiCheck"></a>

```typescript
public readonly skipMetadataApiCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Skip the AWS EC2 Instance Metadata API check.

Useful when running somewhere without a metadata API endpoint (setting to `true` prevents authenticating via IMDS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#skip_metadata_api_check CfncompatProvider#skip_metadata_api_check}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cfncompat.provider.CfncompatProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Session token for temporary credentials, typically provided after identity federation or MFA login.

Can also be sourced from the `AWS_SESSION_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#token CfncompatProvider#token}

---

### CfncompatProviderEndpoints <a name="CfncompatProviderEndpoints" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-cfncompat'

const cfncompatProviderEndpoints: provider.CfncompatProviderEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda">lambda</a></code> | <code>string</code> | Override the default Lambda service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3">s3</a></code> | <code>string</code> | Override the default S3 service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns">sns</a></code> | <code>string</code> | Override the default SNS service endpoint URL. |
| <code><a href="#@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts">sts</a></code> | <code>string</code> | Override the default STS service endpoint URL. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.lambda"></a>

```typescript
public readonly lambda: string;
```

- *Type:* string

Override the default Lambda service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#lambda CfncompatProvider#lambda}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.s3"></a>

```typescript
public readonly s3: string;
```

- *Type:* string

Override the default S3 service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#s3 CfncompatProvider#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sns"></a>

```typescript
public readonly sns: string;
```

- *Type:* string

Override the default SNS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sns CfncompatProvider#sns}

---

##### `sts`<sup>Optional</sup> <a name="sts" id="@cdktn/provider-cfncompat.provider.CfncompatProviderEndpoints.property.sts"></a>

```typescript
public readonly sts: string;
```

- *Type:* string

Override the default STS service endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs#sts CfncompatProvider#sts}

---



