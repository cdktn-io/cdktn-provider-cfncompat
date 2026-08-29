/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCfncompatPseudoParametersConfig extends cdktn.TerraformMetaArguments {
  /**
  * CloudFormation's [`AWS::NotificationARNs`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged; defaults to `[]` when not set. There is no CloudFormation stack to send notifications for, so the synthesis backend (e.g. CDK Terrain, passing `StackProps.notificationArns`) supplies the list it would have passed to `CreateStack`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#notification_arns DataCfncompatPseudoParameters#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * CloudFormation's [`AWS::StackName`](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/pseudo-parameter-reference.html), echoed back unchanged. There is no real CloudFormation stack behind a Terraform apply, so the synthesis backend (e.g. CDK Terrain, passing `Stack.stackName`) supplies the name it uses for the stack. Must be a non-empty string when set (an empty name would derive a `stack_id` for a stack that cannot exist).
  * 
  * It is also the only input `stack_id` is derived from: leaving it null makes `stack_id` null, and a `cfncompat_custom_resource.stack_id` fed from a null value falls back to that resource's shared `"cfncompat/no-stack-id"` default -- which every stack in the workspace shares. Set `stack_name` whenever a custom-resource handler keys on `StackId`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#stack_name DataCfncompatPseudoParameters#stack_name}
  */
  readonly stackName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters}
*/
export class DataCfncompatPseudoParameters extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cfncompat_pseudo_parameters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCfncompatPseudoParameters resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCfncompatPseudoParameters to import
  * @param importFromId The id of the existing DataCfncompatPseudoParameters that should be imported. Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCfncompatPseudoParameters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cfncompat_pseudo_parameters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/pseudo_parameters cfncompat_pseudo_parameters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCfncompatPseudoParametersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCfncompatPseudoParametersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cfncompat_pseudo_parameters',
      terraformGeneratorMetadata: {
        providerName: 'cfncompat',
        providerVersion: '0.3.0',
        providerVersionConstraint: '~> 0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._notificationArns = config.notificationArns;
    this._stackName = config.stackName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification_arns - computed: true, optional: true, required: false
  private _notificationArns?: string[]; 
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[]) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns;
  }

  // partition - computed: true, optional: false, required: false
  public get partition() {
    return this.getStringAttribute('partition');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // stack_name - computed: true, optional: true, required: false
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  public resetStackName() {
    this._stackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // url_suffix - computed: true, optional: false, required: false
  public get urlSuffix() {
    return this.getStringAttribute('url_suffix');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      notification_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArns),
      stack_name: cdktn.stringToTerraform(this._stackName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      notification_arns: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      stack_name: {
        value: cdktn.stringToHclTerraform(this._stackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
