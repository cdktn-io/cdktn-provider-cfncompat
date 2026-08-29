# `customResource` Submodule <a name="`customResource` Submodule" id="@cdktn/provider-cfncompat.customResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResource <a name="CustomResource" id="@cdktn/provider-cfncompat.customResource.CustomResource"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource cfncompat_custom_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CustomResource(Construct Scope, string Id, CustomResourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig">CustomResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId">ResetLogicalResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties">ResetResourceProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket">ResetResponseBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix">ResetResponseKeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout">ResetServiceTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId">ResetStackId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cfncompat.customResource.CustomResource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cfncompat.customResource.CustomResource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cfncompat.customResource.CustomResource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetLogicalResourceId` <a name="ResetLogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId"></a>

```csharp
private void ResetLogicalResourceId()
```

##### `ResetResourceProperties` <a name="ResetResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties"></a>

```csharp
private void ResetResourceProperties()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType"></a>

```csharp
private void ResetResourceType()
```

##### `ResetResponseBucket` <a name="ResetResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket"></a>

```csharp
private void ResetResponseBucket()
```

##### `ResetResponseKeyPrefix` <a name="ResetResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix"></a>

```csharp
private void ResetResponseKeyPrefix()
```

##### `ResetServiceTimeout` <a name="ResetServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout"></a>

```csharp
private void ResetServiceTimeout()
```

##### `ResetStackId` <a name="ResetStackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId"></a>

```csharp
private void ResetStackId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CustomResource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.customResource.CustomResource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CustomResource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CustomResource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

CustomResource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomResource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.data">Data</a></code> | <code>Io.Cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId">PhysicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput">LogicalResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput">ResourcePropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput">ResponseBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput">ResponseKeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput">ServiceTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput">StackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId">LogicalResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties">ResourceProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket">ResponseBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix">ResponseKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout">ServiceTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken">ServiceToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId">StackId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.data"></a>

```csharp
public AnyMap Data { get; }
```

- *Type:* Io.Cdktn.AnyMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PhysicalResourceId`<sup>Required</sup> <a name="PhysicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId"></a>

```csharp
public string PhysicalResourceId { get; }
```

- *Type:* string

---

##### `LogicalResourceIdInput`<sup>Optional</sup> <a name="LogicalResourceIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput"></a>

```csharp
public string LogicalResourceIdInput { get; }
```

- *Type:* string

---

##### `ResourcePropertiesInput`<sup>Optional</sup> <a name="ResourcePropertiesInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResourcePropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `ResponseBucketInput`<sup>Optional</sup> <a name="ResponseBucketInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput"></a>

```csharp
public string ResponseBucketInput { get; }
```

- *Type:* string

---

##### `ResponseKeyPrefixInput`<sup>Optional</sup> <a name="ResponseKeyPrefixInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput"></a>

```csharp
public string ResponseKeyPrefixInput { get; }
```

- *Type:* string

---

##### `ServiceTimeoutInput`<sup>Optional</sup> <a name="ServiceTimeoutInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput"></a>

```csharp
public double ServiceTimeoutInput { get; }
```

- *Type:* double

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput"></a>

```csharp
public string ServiceTokenInput { get; }
```

- *Type:* string

---

##### `StackIdInput`<sup>Optional</sup> <a name="StackIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput"></a>

```csharp
public string StackIdInput { get; }
```

- *Type:* string

---

##### `LogicalResourceId`<sup>Required</sup> <a name="LogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId"></a>

```csharp
public string LogicalResourceId { get; }
```

- *Type:* string

---

##### `ResourceProperties`<sup>Required</sup> <a name="ResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResourceProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `ResponseBucket`<sup>Required</sup> <a name="ResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket"></a>

```csharp
public string ResponseBucket { get; }
```

- *Type:* string

---

##### `ResponseKeyPrefix`<sup>Required</sup> <a name="ResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix"></a>

```csharp
public string ResponseKeyPrefix { get; }
```

- *Type:* string

---

##### `ServiceTimeout`<sup>Required</sup> <a name="ServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout"></a>

```csharp
public double ServiceTimeout { get; }
```

- *Type:* double

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken"></a>

```csharp
public string ServiceToken { get; }
```

- *Type:* string

---

##### `StackId`<sup>Required</sup> <a name="StackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId"></a>

```csharp
public string StackId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomResourceConfig <a name="CustomResourceConfig" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cfncompat;

new CustomResourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServiceToken,
    string LogicalResourceId = null,
    System.Collections.Generic.IDictionary<string, object> ResourceProperties = null,
    string ResourceType = null,
    string ResponseBucket = null,
    string ResponseKeyPrefix = null,
    double ServiceTimeout = null,
    string StackId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken">ServiceToken</a></code> | <code>string</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId">LogicalResourceId</a></code> | <code>string</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties">ResourceProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket">ResponseBucket</a></code> | <code>string</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix">ResponseKeyPrefix</a></code> | <code>string</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout">ServiceTimeout</a></code> | <code>double</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId">StackId</a></code> | <code>string</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken"></a>

```csharp
public string ServiceToken { get; set; }
```

- *Type:* string

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `LogicalResourceId`<sup>Optional</sup> <a name="LogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId"></a>

```csharp
public string LogicalResourceId { get; set; }
```

- *Type:* string

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `ResourceProperties`<sup>Optional</sup> <a name="ResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> ResourceProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `ResponseBucket`<sup>Optional</sup> <a name="ResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket"></a>

```csharp
public string ResponseBucket { get; set; }
```

- *Type:* string

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `ResponseKeyPrefix`<sup>Optional</sup> <a name="ResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix"></a>

```csharp
public string ResponseKeyPrefix { get; set; }
```

- *Type:* string

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `ServiceTimeout`<sup>Optional</sup> <a name="ServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout"></a>

```csharp
public double ServiceTimeout { get; set; }
```

- *Type:* double

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `StackId`<sup>Optional</sup> <a name="StackId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId"></a>

```csharp
public string StackId { get; set; }
```

- *Type:* string

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

~> That default is a **shared sentinel**: every `cfncompat_custom_resource` in the workspace that leaves `stack_id` unset sends the same value. Handlers that treat `StackId` as an ownership key then cannot tell one stack's objects from another's -- CDK's S3 notifications handler, for instance, prefixes every notification `Id` with `{StackId}-` and, on delete, removes exactly the notifications carrying that prefix, so two stacks sharing the sentinel would delete each other's notifications. Wire this to `data.cfncompat_pseudo_parameters.<name>.stack_id` with `stack_name` set (that value is deterministic and stable across applies); leaving it unset emits a warning today and is planned to become an error in v1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---



