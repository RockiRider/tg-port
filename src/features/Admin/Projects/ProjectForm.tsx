"use client";

import MDXEditor from "@/components/form/editor/MDXEditor";
import { FormRow } from "@/components/form/FormLayout";
import { CheckBoxInput, TextInput } from "@/components/form/Inputs";
import Stack from "@/components/layouts/Stack";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";
import { PillInput } from "@/components/form/PillInput";

interface ProjectFormProps {
  isEditing?: boolean;
  handleDelete?: () => void;
}

const ProjectForm = ({ isEditing = false, handleDelete }: ProjectFormProps) => {
  const {
    formState: { isValid, isDirty },
  } = useFormContext();

  return (
    <Stack gap={8}>
      <TextInput name="title" label="Title" rules={{ required: true }} />
      <TextInput
        name="description"
        label="Description"
        rules={{ required: true }}
      />
      <TextInput name="slug" label="URL Slug" rules={{ required: true }} />
      <TextInput
        name="coverImage"
        label="Cover Image URL"
        rules={{ required: true }}
      />
      <CheckBoxInput name="featured" label="Featured" />
      <TextInput name="link" label="Link URL" />
      <TextInput name="github" label="GitHub URL" />
      <PillInput
        name="techStack"
        label="Tech Stack Tags"
        rules={{ required: true }}
      />
      <MDXEditor name="mdxContent" rules={{ required: true }} />
      <FormRow>
        {isEditing ? (
          <Button type="submit" disabled={!isValid || !isDirty}>
            Save
          </Button>
        ) : (
          <Button type="submit" disabled={!isValid}>
            Create
          </Button>
        )}
      </FormRow>
      {isEditing && (
        <FormRow>
          <Button type="button" variant="destructive" onClick={handleDelete}>
            Delete
          </Button>
        </FormRow>
      )}
    </Stack>
  );
};

export default ProjectForm;
