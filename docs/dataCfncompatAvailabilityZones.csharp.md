# `dataCfncompatAvailabilityZones` Submodule <a name="`dataCfncompatAvailabilityZones` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatAvailabilityZones <a name="DataCfncompatAvailabilityZones" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones cfncompat_availability_zones}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new DataCfncompatAvailabilityZones(Construct Scope, string Id, DataCfncompatAvailabilityZonesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig">DataCfncompatAvailabilityZonesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatAvailabilityZones.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatAvailabilityZones.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatAvailabilityZones.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatAvailabilityZones.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCfncompatAvailabilityZones to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCfncompatAvailabilityZones that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatAvailabilityZones to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames">AllNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds">ZoneIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllNames`<sup>Required</sup> <a name="AllNames" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.allNames"></a>

```csharp
public string[] AllNames { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `ZoneIds`<sup>Required</sup> <a name="ZoneIds" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.zoneIds"></a>

```csharp
public string[] ZoneIds { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZones.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatAvailabilityZonesConfig <a name="DataCfncompatAvailabilityZonesConfig" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new DataCfncompatAvailabilityZonesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region">Region</a></code> | <code>string</code> | The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatAvailabilityZones.DataCfncompatAvailabilityZonesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#region DataCfncompatAvailabilityZones#region}

---



