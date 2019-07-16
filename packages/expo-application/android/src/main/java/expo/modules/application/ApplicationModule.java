package expo.modules.application;

import java.util.Map;

import android.content.Context;

import org.unimodules.core.ExportedModule;
import org.unimodules.core.ModuleRegistry;
import org.unimodules.core.Promise;
import org.unimodules.core.interfaces.ExpoMethod;
import org.unimodules.core.interfaces.ModuleRegistryConsumer;

public class ApplicationModule extends ExportedModule implements ModuleRegistryConsumer {
  private static final String NAME = "ExpoApplication";
  private static final String TAG = ApplicationModule.class.getSimpleName();

  private ModuleRegistry mModuleRegistry;

  public ApplicationModule(Context context) {
    super(context);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public void setModuleRegistry(ModuleRegistry moduleRegistry) {
    mModuleRegistry = moduleRegistry;
  }

  @ExpoMethod
  public void someGreatMethodAsync(Map<String, Object> options, final Promise promise) {
  }
}
