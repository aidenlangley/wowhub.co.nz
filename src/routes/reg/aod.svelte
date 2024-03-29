<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import InputCheckbox from '$comp/forms/InputCheckbox.svelte';
  import InputEmail from '$comp/forms/InputEmail.svelte';
  import InputPhone from '$comp/forms/InputPhone.svelte';
  import InputText from '$comp/forms/InputText.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import Heading2 from '$comp/heading/Heading2.svelte';
  import Heading3 from '$comp/heading/Heading3.svelte';
  import Paragraph from '$comp/paragraph/Paragraph.svelte';
  import SvelteSeo from 'svelte-seo';

  const name = 'AOD Registration';
  const description =
    "Register for He Waka Aotearoa's AOD Education & Counselling course.";
</script>

<SvelteSeo title={name} {description} />

<form
  {name}
  method="POST"
  data-netlify="true"
  netlify-honeypot="aod-bot-field"
  action="/reg/thank-you"
  class="column pad-y gaps-y"
>
  <Heading>{name}</Heading>
  <Paragraph>{description}</Paragraph>

  <!--
    This is supposed to happen automatically, but I can see no evidence of it
    working, so I'm manually adding it.
  -->
  <input type="hidden" name="form-name" value={name} />

  <Heading2>Personal Details</Heading2>
  <section id="personal-details" class="gaps-y">
    <section id="name" class="name">
      <InputText
        id="aod-forename"
        label="Forename"
        placeholder="First name"
        required
      />
      <InputText
        id="aod-surname"
        label="Surname"
        placeholder="Last name"
        required
      />
    </section>

    <Heading3>Contact Details</Heading3>
    <section id="contact-details">
      <InputPhone
        id="aod-phone"
        label="Phone"
        placeholder="012345679"
        required
      />
      <InputEmail
        id="aod-email"
        label="Email"
        placeholder="you@email.com (optional)"
      />
      <InputText
        id="aod-fbmsg"
        label="Facebook Messenger"
        placeholder="Name on Facebook (optional)"
      />
    </section>
  </section>

  <Heading2>Engagement Agreement</Heading2>
  <Paragraph>
    This agreement sets the terms of our work together in regards to the support
    services with Whakaoranga Whānau Recovery Hub.
  </Paragraph>
  <Paragraph>
    During your time with the Whakaoranga Whānau Recovery Hub...
  </Paragraph>

  <Heading3>Group Safety</Heading3>
  <Paragraph>
    No violence or threats of violence towards staff or other group members will
    be tolerated. It is very important that you view the group as a safe place
    to share your experiences and feelings without fear of harm.
  </Paragraph>

  <Heading3>Confidentiality</Heading3>
  <Paragraph>
    Anything you share with us will remain confidential to the Whakaoranga
    Whānau Recovery Hub and organisations involved in your care, for example
    your GP, Corrections or Ministry of Social Development.
  </Paragraph>

  <Heading3>Absence</Heading3>
  <Paragraph>
    If you are unable to attend your weekly session for any reason, you need to
    call or notify the group leaders, or somebody from Whakaoranga Whanau
    Recovery Hub. If you are more than 30 minutes late to a session without
    notifying us, then don't turn up at all.
  </Paragraph>

  <Heading3>Classes</Heading3>
  <Paragraph>
    Classes will be held weekly on Wednesday from 11.30am to 5pm.
  </Paragraph>

  <Heading3>Information</Heading3>
  <Paragraph>
    There will be 10 weekly sessions on Tuesday, from 10am to 5pm. You must be
    19 years of older to attend this program. No children are to be present
    during class, unless prior arrangements have been made.
  </Paragraph>

  <Heading3>Declaration of Agreement & Understanding</Heading3>
  <InputCheckbox
    id="aod-agreement"
    label={`I have read & understand the engagement agreement.`}
    required
  />

  <section id="honeypot" class="honeypot">
    <label>
      Don’t fill this out if you’re human: <input name="aod-bot-field" />
    </label>
  </section>

  <button type="submit" class="button blue">Submit</button>
</form>

<style lang="postcss">
  .honeypot {
    visibility: hidden;
  }

  @media screen(ty) {
    section.name {
      display: flex;
    }
  }
</style>
