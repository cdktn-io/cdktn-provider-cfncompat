# `dataCfncompatPseudoParameters` Submodule <a name="`dataCfncompatPseudoParameters` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatPseudoParameters <a name="DataCfncompatPseudoParameters" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

new dataCfncompatPseudoParameters.DataCfncompatPseudoParameters(scope: Construct, id: string, config?: DataCfncompatPseudoParametersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns">resetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName">resetStackName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns"></a>

```typescript
public resetNotificationArns(): void
```

##### `resetStackName` <a name="resetStackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName"></a>

```typescript
public resetStackName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCfncompatPseudoParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCfncompatPseudoParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition">partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix">urlSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput">notificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput">stackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName">stackName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition"></a>

```typescript
public readonly partition: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix"></a>

```typescript
public readonly urlSuffix: string;
```

- *Type:* string

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput"></a>

```typescript
public readonly notificationArnsInput: string[];
```

- *Type:* string[]

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput"></a>

```typescript
public readonly stackNameInput: string;
```

- *Type:* string

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatPseudoParametersConfig <a name="DataCfncompatPseudoParametersConfig" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.Initializer"></a>

```typescript
import { dataCfncompatPseudoParameters } from '@cdktn/provider-cfncompat'

const dataCfncompatPseudoParametersConfig: dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns">notificationArns</a></code> | <code>string[]</code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName">stackName</a></code> | <code>string</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns"></a>

```typescript
public readonly notificationArns: string[];
```

- *Type:* string[]

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---



