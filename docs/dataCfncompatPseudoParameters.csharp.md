# `dataCfncompatPseudoParameters` Submodule <a name="`dataCfncompatPseudoParameters` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatPseudoParameters <a name="DataCfncompatPseudoParameters" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new DataCfncompatPseudoParameters(Construct Scope, string Id, DataCfncompatPseudoParametersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig">DataCfncompatPseudoParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName">ResetStackName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns"></a>

```csharp
private void ResetNotificationArns()
```

##### `ResetStackName` <a name="ResetStackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName"></a>

```csharp
private void ResetStackName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatPseudoParameters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatPseudoParameters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatPseudoParameters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

DataCfncompatPseudoParameters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCfncompatPseudoParameters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCfncompatPseudoParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition">Partition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix">UrlSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput">StackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName">StackName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Partition`<sup>Required</sup> <a name="Partition" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition"></a>

```csharp
public string Partition { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

##### `UrlSuffix`<sup>Required</sup> <a name="UrlSuffix" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix"></a>

```csharp
public string UrlSuffix { get; }
```

- *Type:* string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput"></a>

```csharp
public string[] NotificationArnsInput { get; }
```

- *Type:* string[]

---

##### `StackNameInput`<sup>Optional</sup> <a name="StackNameInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput"></a>

```csharp
public string StackNameInput { get; }
```

- *Type:* string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; }
```

- *Type:* string[]

---

##### `StackName`<sup>Required</sup> <a name="StackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName"></a>

```csharp
public string StackName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatPseudoParametersConfig <a name="DataCfncompatPseudoParametersConfig" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new DataCfncompatPseudoParametersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] NotificationArns = null,
    string StackName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns">NotificationArns</a></code> | <code>string[]</code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName">StackName</a></code> | <code>string</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns"></a>

```csharp
public string[] NotificationArns { get; set; }
```

- *Type:* string[]

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `StackName`<sup>Optional</sup> <a name="StackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName"></a>

```csharp
public string StackName { get; set; }
```

- *Type:* string

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---



