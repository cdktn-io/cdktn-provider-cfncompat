/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCfncompatAvailabilityZonesConfig extends cdktn.TerraformMetaArguments {
  /**
  * The region to list Availability Zones for, i.e. the `Fn::GetAZs` argument. An empty string or an unset value means the provider's own region -- exactly as [the `Fn::GetAZs` reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/TemplateReference/intrinsic-function-reference-getavailabilityzones.html) specifies that "specifying an empty string is equivalent to specifying `AWS::Region`". Echoed back as the region that was actually queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#region DataCfncompatAvailabilityZones#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones cfncompat_availability_zones}
*/
export class DataCfncompatAvailabilityZones extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cfncompat_availability_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCfncompatAvailabilityZones resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCfncompatAvailabilityZones to import
  * @param importFromId The id of the existing DataCfncompatAvailabilityZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCfncompatAvailabilityZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "cfncompat_availability_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cdktn-io/cfncompat/0.3.0/docs/data-sources/availability_zones cfncompat_availability_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCfncompatAvailabilityZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCfncompatAvailabilityZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cfncompat_availability_zones',
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
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_names - computed: true, optional: false, required: false
  public get allNames() {
    return this.getListAttribute('all_names');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // zone_ids - computed: true, optional: false, required: false
  public get zoneIds() {
    return this.getListAttribute('zone_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region: cdktn.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
