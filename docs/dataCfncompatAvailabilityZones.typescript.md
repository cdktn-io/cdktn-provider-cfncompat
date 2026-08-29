# `dataCfncompatAvailabilityZones` Submodule <a name="`dataCfncompatAvailabilityZones` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatAvailabilityZones <a name="DataCfncompatAvailabilityZones" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones cfncompat_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

new dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones(scope: Construct, id: string, config?: DataCfncompatAvailabilityZonesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCfncompatAvailabilityZones to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCfncompatAvailabilityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatAvailabilityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames">allNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names">names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds">zoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allNames`<sup>Required</sup> <a name="allNames" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames"></a>

```typescript
public readonly allNames: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names"></a>

```typescript
public readonly names: string[];
```

- *Type:* string[]

---

##### `zoneIds`<sup>Required</sup> <a name="zoneIds" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds"></a>

```typescript
public readonly zoneIds: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatAvailabilityZonesConfig <a name="DataCfncompatAvailabilityZonesConfig" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.Initializer"></a>

```typescript
import { dataCfncompatAvailabilityZones } from '@cdktn/provider-cfncompat'

const dataCfncompatAvailabilityZonesConfig: dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region">region</a></code> | <code>string</code> | The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#region DataCfncompatAvailabilityZones#region}

---



