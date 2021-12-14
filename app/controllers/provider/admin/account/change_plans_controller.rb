class Provider::Admin::Account::ChangePlansController < Provider::Admin::Account::BaseController

  def show
    @current_plan = application.plan
  end

  def update
    plan = plans.find(permitted_params[:plan_id])

    current_account.upgrade_to_provider_plan!(plan)

    flash[:success] = 'The plan change has been requested.'
  end

  def widget
    @plans = plans
  end

  private
  def application
    current_account.bought_cinstances.first
  end

  def plans
    application.service.application_plans.published
  end

  def permitted_params
    params.require(:change_plan).permit(:plan_id)
  end
end
