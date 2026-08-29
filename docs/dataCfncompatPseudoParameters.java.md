# `dataCfncompatPseudoParameters` Submodule <a name="`dataCfncompatPseudoParameters` Submodule" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCfncompatPseudoParameters <a name="DataCfncompatPseudoParameters" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParameters;

DataCfncompatPseudoParameters.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .notificationArns(java.util.List<java.lang.String>)
//  .stackName(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.stackName">stackName</a></code> | <code>java.lang.String</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.notificationArns"></a>

- *Type:* java.util.List<java.lang.String>

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.Initializer.parameter.stackName"></a>

- *Type:* java.lang.String

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetNotificationArns` <a name="resetNotificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetNotificationArns"></a>

```java
public void resetNotificationArns()
```

##### `resetStackName` <a name="resetStackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.resetStackName"></a>

```java
public void resetStackName()
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

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParameters;

DataCfncompatPseudoParameters.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement"></a>

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParameters;

DataCfncompatPseudoParameters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParameters;

DataCfncompatPseudoParameters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport"></a>

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParameters;

DataCfncompatPseudoParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCfncompatPseudoParameters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCfncompatPseudoParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCfncompatPseudoParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition">partition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix">urlSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput">notificationArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput">stackNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName">stackName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.partition"></a>

```java
public java.lang.String getPartition();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

##### `urlSuffix`<sup>Required</sup> <a name="urlSuffix" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.urlSuffix"></a>

```java
public java.lang.String getUrlSuffix();
```

- *Type:* java.lang.String

---

##### `notificationArnsInput`<sup>Optional</sup> <a name="notificationArnsInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArnsInput"></a>

```java
public java.util.List<java.lang.String> getNotificationArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackNameInput`<sup>Optional</sup> <a name="stackNameInput" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackNameInput"></a>

```java
public java.lang.String getStackNameInput();
```

- *Type:* java.lang.String

---

##### `notificationArns`<sup>Required</sup> <a name="notificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackName`<sup>Required</sup> <a name="stackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.stackName"></a>

```java
public java.lang.String getStackName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParameters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCfncompatPseudoParametersConfig <a name="DataCfncompatPseudoParametersConfig" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.data_cfncompat_pseudo_parameters.DataCfncompatPseudoParametersConfig;

DataCfncompatPseudoParametersConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .notificationArns(java.util.List<java.lang.String>)
//  .stackName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns">notificationArns</a></code> | <code>java.util.List<java.lang.String></code> | CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`. |
| <code><a href="#@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName">stackName</a></code> | <code>java.lang.String</code> | CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `notificationArns`<sup>Optional</sup> <a name="notificationArns" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.notificationArns"></a>

```java
public java.util.List<java.lang.String> getNotificationArns();
```

- *Type:* java.util.List<java.lang.String>

CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@cdktn/provider-cfncompat.dataCfncompatPseudoParameters.DataCfncompatPseudoParametersConfig.property.stackName"></a>

```java
public java.lang.String getStackName();
```

- *Type:* java.lang.String

CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).

It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}

---



