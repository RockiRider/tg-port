import Editor from "@/components/form/editor/Editor";
import { FormRow } from "@/components/form/FormLayout";
import { FileInput, SelectInput, TextInput } from "@/components/form/Inputs";
// import MdxEditor from "@/components/form/MDXEditor";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

const ProjectForm = () => {
  const {
    formState: { isValid, isDirty },
    control,
  } = useFormContext();

  return (
    <Stack gap={8}>
      <FormRow>
        <TextInput name="title" label="Title" />
      </FormRow>
      <FormRow>
        <TextInput name="slug" label="URL Slug" />
      </FormRow>
      <FormRow>
        <SelectInput
          name="type"
          label="Project Type"
          options={[
            {
              label: "Showcase",
              value: "SHOWCASE",
            },
            {
              label: "Link",
              value: "LINK",
            },
          ]}
        />
      </FormRow>
      <Editor name="mdxContent" rules={{ required: true }} />
      <FormRow>
        <Button type="submit" disabled={!isValid || !isDirty}>
          Submit
        </Button>
      </FormRow>
    </Stack>
  );
};

export default ProjectForm;