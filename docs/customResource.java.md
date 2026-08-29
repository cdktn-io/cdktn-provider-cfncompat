# `customResource` Submodule <a name="`customResource` Submodule" id="@cdktn/provider-cfncompat.customResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomResource <a name="CustomResource" id="@cdktn/provider-cfncompat.customResource.CustomResource"></a>

Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource cfncompat_custom_resource}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResource;

CustomResource.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceToken(java.lang.String)
//  .logicalResourceId(java.lang.String)
//  .resourceProperties(java.util.Map<java.lang.String, java.lang.Object>)
//  .resourceType(java.lang.String)
//  .responseBucket(java.lang.String)
//  .responseKeyPrefix(java.lang.String)
//  .serviceTimeout(java.lang.Number)
//  .stackId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceToken">serviceToken</a></code> | <code>java.lang.String</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.logicalResourceId">logicalResourceId</a></code> | <code>java.lang.String</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceProperties">resourceProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceType">resourceType</a></code> | <code>java.lang.String</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseBucket">responseBucket</a></code> | <code>java.lang.String</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseKeyPrefix">responseKeyPrefix</a></code> | <code>java.lang.String</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceTimeout">serviceTimeout</a></code> | <code>java.lang.Number</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.stackId">stackId</a></code> | <code>java.lang.String</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceToken"></a>

- *Type:* java.lang.String

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `logicalResourceId`<sup>Optional</sup> <a name="logicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.logicalResourceId"></a>

- *Type:* java.lang.String

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceProperties"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.resourceType"></a>

- *Type:* java.lang.String

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `responseBucket`<sup>Optional</sup> <a name="responseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseBucket"></a>

- *Type:* java.lang.String

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `responseKeyPrefix`<sup>Optional</sup> <a name="responseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.responseKeyPrefix"></a>

- *Type:* java.lang.String

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `serviceTimeout`<sup>Optional</sup> <a name="serviceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.serviceTimeout"></a>

- *Type:* java.lang.Number

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `stackId`<sup>Optional</sup> <a name="stackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.Initializer.parameter.stackId"></a>

- *Type:* java.lang.String

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

~> That default is a **shared sentinel**: every `cfncompat_custom_resource` in the workspace that leaves `stack_id` unset sends the same value. Handlers that treat `StackId` as an ownership key then cannot tell one stack's objects from another's -- CDK's S3 notifications handler, for instance, prefixes every notification `Id` with `{StackId}-` and, on delete, removes exactly the notifications carrying that prefix, so two stacks sharing the sentinel would delete each other's notifications. Wire this to `data.cfncompat_pseudo_parameters.<name>.stack_id` with `stack_name` set (that value is deterministic and stable across applies); leaving it unset emits a warning today and is planned to become an error in v1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cfncompat.customResource.CustomResource.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cfncompat.customResource.CustomResource.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cfncompat.customResource.CustomResource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cfncompat.customResource.CustomResource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cfncompat.customResource.CustomResource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cfncompat.customResource.CustomResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetLogicalResourceId` <a name="resetLogicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetLogicalResourceId"></a>

```java
public void resetLogicalResourceId()
```

##### `resetResourceProperties` <a name="resetResourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceProperties"></a>

```java
public void resetResourceProperties()
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResourceType"></a>

```java
public void resetResourceType()
```

##### `resetResponseBucket` <a name="resetResponseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseBucket"></a>

```java
public void resetResponseBucket()
```

##### `resetResponseKeyPrefix` <a name="resetResponseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetResponseKeyPrefix"></a>

```java
public void resetResponseKeyPrefix()
```

##### `resetServiceTimeout` <a name="resetServiceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetServiceTimeout"></a>

```java
public void resetServiceTimeout()
```

##### `resetStackId` <a name="resetStackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.resetStackId"></a>

```java
public void resetStackId()
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

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResource;

CustomResource.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement"></a>

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResource;

CustomResource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource"></a>

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResource;

CustomResource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cfncompat.customResource.CustomResource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport"></a>

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResource;

CustomResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomResource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CustomResource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CustomResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.data">data</a></code> | <code>io.cdktn.cdktn.AnyMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId">physicalResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput">logicalResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput">resourcePropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput">responseBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput">responseKeyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput">serviceTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput">serviceTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput">stackIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId">logicalResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties">resourceProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket">responseBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix">responseKeyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout">serviceTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken">serviceToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId">stackId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.data"></a>

```java
public AnyMap getData();
```

- *Type:* io.cdktn.cdktn.AnyMap

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `physicalResourceId`<sup>Required</sup> <a name="physicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.physicalResourceId"></a>

```java
public java.lang.String getPhysicalResourceId();
```

- *Type:* java.lang.String

---

##### `logicalResourceIdInput`<sup>Optional</sup> <a name="logicalResourceIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceIdInput"></a>

```java
public java.lang.String getLogicalResourceIdInput();
```

- *Type:* java.lang.String

---

##### `resourcePropertiesInput`<sup>Optional</sup> <a name="resourcePropertiesInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourcePropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResourcePropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `responseBucketInput`<sup>Optional</sup> <a name="responseBucketInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucketInput"></a>

```java
public java.lang.String getResponseBucketInput();
```

- *Type:* java.lang.String

---

##### `responseKeyPrefixInput`<sup>Optional</sup> <a name="responseKeyPrefixInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefixInput"></a>

```java
public java.lang.String getResponseKeyPrefixInput();
```

- *Type:* java.lang.String

---

##### `serviceTimeoutInput`<sup>Optional</sup> <a name="serviceTimeoutInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeoutInput"></a>

```java
public java.lang.Number getServiceTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `serviceTokenInput`<sup>Optional</sup> <a name="serviceTokenInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTokenInput"></a>

```java
public java.lang.String getServiceTokenInput();
```

- *Type:* java.lang.String

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackIdInput"></a>

```java
public java.lang.String getStackIdInput();
```

- *Type:* java.lang.String

---

##### `logicalResourceId`<sup>Required</sup> <a name="logicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.logicalResourceId"></a>

```java
public java.lang.String getLogicalResourceId();
```

- *Type:* java.lang.String

---

##### `resourceProperties`<sup>Required</sup> <a name="resourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResourceProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `responseBucket`<sup>Required</sup> <a name="responseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseBucket"></a>

```java
public java.lang.String getResponseBucket();
```

- *Type:* java.lang.String

---

##### `responseKeyPrefix`<sup>Required</sup> <a name="responseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.responseKeyPrefix"></a>

```java
public java.lang.String getResponseKeyPrefix();
```

- *Type:* java.lang.String

---

##### `serviceTimeout`<sup>Required</sup> <a name="serviceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceTimeout"></a>

```java
public java.lang.Number getServiceTimeout();
```

- *Type:* java.lang.Number

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.serviceToken"></a>

```java
public java.lang.String getServiceToken();
```

- *Type:* java.lang.String

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cfncompat.customResource.CustomResource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomResourceConfig <a name="CustomResourceConfig" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.Initializer"></a>

```java
import io.cdktn.providers.cfncompat.custom_resource.CustomResourceConfig;

CustomResourceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .serviceToken(java.lang.String)
//  .logicalResourceId(java.lang.String)
//  .resourceProperties(java.util.Map<java.lang.String, java.lang.Object>)
//  .resourceType(java.lang.String)
//  .responseBucket(java.lang.String)
//  .responseKeyPrefix(java.lang.String)
//  .serviceTimeout(java.lang.Number)
//  .stackId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken">serviceToken</a></code> | <code>java.lang.String</code> | ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId">logicalResourceId</a></code> | <code>java.lang.String</code> | CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties">resourceProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | CloudFormation resource type name reported in the request event's `ResourceType` field. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket">responseBucket</a></code> | <code>java.lang.String</code> | S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to). |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix">responseKeyPrefix</a></code> | <code>java.lang.String</code> | Optional S3 key prefix for the response object. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout">serviceTimeout</a></code> | <code>java.lang.Number</code> | Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`. |
| <code><a href="#@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId">stackId</a></code> | <code>java.lang.String</code> | CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceToken"></a>

```java
public java.lang.String getServiceToken();
```

- *Type:* java.lang.String

ARN of the Lambda function or SNS topic that implements the custom resource handler (CloudFormation's `ServiceToken`).

Must be a Lambda function ARN (`arn:*:lambda:...`, invoked asynchronously) or an SNS topic ARN (`arn:*:sns:...`, published to).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_token CustomResource#service_token}

---

##### `logicalResourceId`<sup>Optional</sup> <a name="logicalResourceId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.logicalResourceId"></a>

```java
public java.lang.String getLogicalResourceId();
```

- *Type:* java.lang.String

CloudFormation-style logical resource id reported in the request event's `LogicalResourceId` field.

Typically set by a CDK Terrain synthesis backend to the synthesized CloudFormation logical id; defaults to `"CfncompatCustomResource"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#logical_resource_id CustomResource#logical_resource_id}

---

##### `resourceProperties`<sup>Optional</sup> <a name="resourceProperties" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getResourceProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

Arbitrary user-defined properties passed to the handler as the request event's `ResourceProperties`.

May be an object/map (arbitrarily nested) or omitted entirely. CloudFormation merges `ServiceToken` into this map when delivering it to the handler; this resource replicates that behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_properties CustomResource#resource_properties}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

CloudFormation resource type name reported in the request event's `ResourceType` field.

Defaults to `"AWS::CloudFormation::CustomResource"`. May also be set to `Custom::<name>` (matching CloudFormation's convention for named custom resource types), where `<name>` matches `^[A-Za-z0-9_@-]{1,52}$` and the full value is at most 60 characters. Changing this forces replacement: CloudFormation forbids changing a custom resource's type in an update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#resource_type CustomResource#resource_type}

---

##### `responseBucket`<sup>Optional</sup> <a name="responseBucket" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseBucket"></a>

```java
public java.lang.String getResponseBucket();
```

- *Type:* java.lang.String

S3 bucket used for this resource's response transport (the pre-signed PUT URL the handler writes its response to).

Falls back to the provider's `custom_resource_bucket` if unset; it is an error at apply time if neither is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_bucket CustomResource#response_bucket}

---

##### `responseKeyPrefix`<sup>Optional</sup> <a name="responseKeyPrefix" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.responseKeyPrefix"></a>

```java
public java.lang.String getResponseKeyPrefix();
```

- *Type:* java.lang.String

Optional S3 key prefix for the response object.

The full key is `"<response_key_prefix>cfncompat/<RequestId>.json"` -- include a trailing `/` if you want the prefix to behave like a folder.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#response_key_prefix CustomResource#response_key_prefix}

---

##### `serviceTimeout`<sup>Optional</sup> <a name="serviceTimeout" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.serviceTimeout"></a>

```java
public java.lang.Number getServiceTimeout();
```

- *Type:* java.lang.Number

Seconds to wait for the handler's response before failing, mirroring CloudFormation's `ServiceTimeout`.

Must be between 1 and 3600 (CloudFormation's own range). Defaults to `3600`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#service_timeout CustomResource#service_timeout}

---

##### `stackId`<sup>Optional</sup> <a name="stackId" id="@cdktn/provider-cfncompat.customResource.CustomResourceConfig.property.stackId"></a>

```java
public java.lang.String getStackId();
```

- *Type:* java.lang.String

CloudFormation-style stack identifier reported in the request event's `StackId` field, passed through verbatim.

Typically set by a CDK Terrain synthesis backend to a stack identifier; defaults to `"cfncompat/no-stack-id"`.

~> That default is a **shared sentinel**: every `cfncompat_custom_resource` in the workspace that leaves `stack_id` unset sends the same value. Handlers that treat `StackId` as an ownership key then cannot tell one stack's objects from another's -- CDK's S3 notifications handler, for instance, prefixes every notification `Id` with `{StackId}-` and, on delete, removes exactly the notifications carrying that prefix, so two stacks sharing the sentinel would delete each other's notifications. Wire this to `data.cfncompat_pseudo_parameters.<name>.stack_id` with `stack_name` set (that value is deterministic and stable across applies); leaving it unset emits a warning today and is planned to become an error in v1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/resources/custom_resource#stack_id CustomResource#stack_id}

---



