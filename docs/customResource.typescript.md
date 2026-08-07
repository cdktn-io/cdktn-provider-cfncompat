# `customResource` Submodule <a name="`customResource` Submodule" id="@cdktn/provider-cfncompat.customResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResource <a name="CustomResource" id="@cdktn/provider-cfncompat.customResource.CustomResource"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource cfncompat_custom_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

new customResource.CustomResource(scope: Construct, id: string, config: CustomResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId">resetLogicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties">resetResourceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket">resetResponseBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix">resetResponseKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout">resetServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId">resetStackId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cfncompat.customResource.CustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.customResource.CustomResource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.customResource.CustomResource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetLogicalResourceId` <a name="resetLogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId"></a>

```typescript
public resetLogicalResourceId(): void
```

##### `resetResourceProperties` <a name="resetResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties"></a>

```typescript
public resetResourceProperties(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetResponseBucket` <a name="resetResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket"></a>

```typescript
public resetResponseBucket(): void
```

##### `resetResponseKeyPrefix` <a name="resetResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix"></a>

```typescript
public resetResponseKeyPrefix(): void
```

##### `resetServiceTimeout` <a name="resetServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout"></a>

```typescript
public resetServiceTimeout(): void
```

##### `resetStackId` <a name="resetStackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId"></a>

```typescript
public resetStackId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

customResource.CustomResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

customResource.CustomResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

customResource.CustomResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

customResource.CustomResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CustomResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.data">data</a></code> | <code>cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId">physicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput">logicalResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput">resourcePropertiesInput</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput">responseBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput">responseKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput">serviceTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput">serviceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId">logicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties">resourceProperties</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket">responseBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix">responseKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout">serviceTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken">serviceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.data"></a>

```typescript
public readonly data: AnyMap;
```

- *Type:* cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId"></a>

```typescript
public readonly physicalResourceId: string;
```

- *Type:* string

---

##### `logicalResourceIdInput`<sup>Optional</sup> <a name="logicalResourceIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput"></a>

```typescript
public readonly logicalResourceIdInput: string;
```

- *Type:* string

---

##### `resourcePropertiesInput`<sup>Optional</sup> <a name="resourcePropertiesInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput"></a>

```typescript
public readonly resourcePropertiesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `responseBucketInput`<sup>Optional</sup> <a name="responseBucketInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput"></a>

```typescript
public readonly responseBucketInput: string;
```

- *Type:* string

---

##### `responseKeyPrefixInput`<sup>Optional</sup> <a name="responseKeyPrefixInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput"></a>

```typescript
public readonly responseKeyPrefixInput: string;
```

- *Type:* string

---

##### `serviceTimeoutInput`<sup>Optional</sup> <a name="serviceTimeoutInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput"></a>

```typescript
public readonly serviceTimeoutInput: number;
```

- *Type:* number

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput"></a>

```typescript
public readonly serviceTokenInput: string;
```

- *Type:* string

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `logicalResourceId`<sup>Required</sup> <a name="logicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId"></a>

```typescript
public readonly logicalResourceId: string;
```

- *Type:* string

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties"></a>

```typescript
public readonly resourceProperties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `responseBucket`<sup>Required</sup> <a name="responseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket"></a>

```typescript
public readonly responseBucket: string;
```

- *Type:* string

---

##### `responseKeyPrefix`<sup>Required</sup> <a name="responseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix"></a>

```typescript
public readonly responseKeyPrefix: string;
```

- *Type:* string

---

##### `serviceTimeout`<sup>Required</sup> <a name="serviceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout"></a>

```typescript
public readonly serviceTimeout: number;
```

- *Type:* number

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomResourceConfig <a name="CustomResourceConfig" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.Initializer"></a>

```typescript
import { customResource } from '@cdktn/provider-cfncompat'

const customResourceConfig: customResource.CustomResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken">serviceToken</a></code> | <code>string</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId">logicalResourceId</a></code> | <code>string</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties">resourceProperties</a></code> | <code>{[ key: string ]: any}</code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType">resourceType</a></code> | <code>string</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket">responseBucket</a></code> | <code>string</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix">responseKeyPrefix</a></code> | <code>string</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout">serviceTimeout</a></code> | <code>number</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId">stackId</a></code> | <code>string</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `logicalResourceId`<sup>Optional</sup> <a name="logicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId"></a>

```typescript
public readonly logicalResourceId: string;
```

- *Type:* string

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties"></a>

```typescript
public readonly resourceProperties: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `responseBucket`<sup>Optional</sup> <a name="responseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket"></a>

```typescript
public readonly responseBucket: string;
```

- *Type:* string

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `responseKeyPrefix`<sup>Optional</sup> <a name="responseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix"></a>

```typescript
public readonly responseKeyPrefix: string;
```

- *Type:* string

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `serviceTimeout`<sup>Optional</sup> <a name="serviceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout"></a>

```typescript
public readonly serviceTimeout: number;
```

- *Type:* number

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `stackId`<sup>Optional</sup> <a name="stackId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.2.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---



