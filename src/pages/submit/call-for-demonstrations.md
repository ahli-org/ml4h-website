---
layout: ../../layouts/MarkdownLayout.astro
title: Call for Demonstrations
eyebrow: Submit · Call for Demonstrations
lead: Showcase a working ML4H system, tool, or prototype to the ML4H community.
---

## ML4H 2026 Call for Demonstrations

Machine learning systems are increasingly being evaluated and used in clinical care, biomedical research, public health, patient-facing applications, and healthcare operations. Indeed, increasing numbers of machine learning-based software as medical devices have been approved by regulatory organizations. However, much of the ML4H literature evaluates models in isolation from the users, workflows, infrastructure, and institutional constraints that determine whether an ML system is useful in practice. Assumptions during research and development must be validated against the challenges, solutions, and maturity of real-world deployment, bridging the gap from proof-of-concept to practical utility.

The ML4H Demo Track invites submissions describing real-world healthcare applications of machine learning technologies that can be demonstrated in operation. The track is intended to showcase systems that have progressed beyond a model or proof-of-concept analysis toward an end-to-end application with a clearly defined user, use case, and path to practical utility. Submissions may describe tools at different stages of maturity, including:

- Systems undergoing usability, clinical, or operational evaluation;
- Tools being evaluated in prospective pilots;
- Tools deployed in research, clinical, public-health, or operational environments; and
- Regulated, authorized, cleared, approved, or CE-marked products.

Note, regulatory authorization is not required. However, submissions must describe functional, deployed systems. Accepted submissions will be non-archival and have the opportunity to present their live demo on the day of the event alongside the main poster sessions. Select outstanding demos will be given spotlight talks. Reviewing for the Demo Track will be single blind. Submissions are welcome from academic, clinical, nonprofit, government, and industry teams.

## Scope and Eligibility

An eligible demonstration must:

- **Use machine learning as a substantive component of the system.** ML should materially influence the system's outputs, interactions, recommendations, or operation.
- **Address a clearly defined health-related problem.** The submission must identify the intended users, setting, task, and population or data context.
- **Include a functional end-to-end system.** The submitted video must show the system accepting an input, performing or invoking its ML-enabled functionality, and producing an output that can be interpreted or acted upon.
- **Provide evidence appropriate to the tool's maturity.** This may include technical validation, usability testing, workflow evaluation, prospective pilot results, operational metrics, or evidence from deployment.
- **Be suitable for demonstration at an in-person event.** A sandboxed or locally hosted version using synthetic or de-identified data is acceptable when the production system cannot be accessed outside a secure environment.

Examples of potentially suitable demonstrations include:

- Clinical decision-support, diagnostic, prognostic, or treatment-selection systems;
- Medical imaging, pathology, physiological monitoring, or wearable-device applications;
- Patient-facing tools for education, navigation, monitoring, or self-management;
- Tools for clinical documentation, triage, scheduling, or healthcare operations;
- Public-health surveillance, resource-allocation, or outbreak-response systems;
- ML-enabled systems for clinical research, biomedical discovery, or evidence synthesis;
- Infrastructure for monitoring, evaluating, auditing, or safely operating health ML systems; and
- Interactive foundation-model or agent-based systems designed for health-related tasks.

The following are generally not sufficient for the Demo Track:

- A model benchmark or retrospective performance analysis without a functional tool;
- A static user-interface mock-up that is not connected to an operational ML system;
- A presentation consisting primarily of slides, figures, or a conventional research talk;
- A conceptual product proposal without an implemented prototype; or
- A commercial product pitch that does not provide sufficient technical, evaluation, and implementation detail.

## Important Dates

<div class="callout">
  <p>
    <strong>August 1, 2026:</strong> Submission site opens<br />
    <strong>September 14th, 2026, 11:59PM AoE:</strong> Demo submission deadline<br />
    <strong>October 19, 2026:</strong> Decisions released<br />
    <strong>December 6–7, 2026:</strong> In-person event
  </p>
</div>

## Submission Instructions

Submission Site: [https://openreview.net/group?id=ML4H/2026/Demo_Track](https://openreview.net/group?id=ML4H/2026/Demo_Track)

Each Demo submission must contain the following two components:

### Spec Sheet

A short writeup (max 2 pages, excluding references) describing the ML4H tool, technology, and application. LaTeX template: Machine Learning for Health (ML4H) 2026 Template, set the track via `\mlhtrack{demo}`.

The Spec Sheet should contain the following information:

- **Introduction:** What is the problem that the tool is trying to solve? Why is it important? How would an ML-based solution solve the problem? This should cover aspects of the tool including intended use, intended patient population, principles of operation and conditions of use.
- **Method:** How does the tool work technically? What is the ML technology behind it, and how was it developed? Here, you should describe the ML algorithm, the model architecture, the training data and procedure, and the deployment pipeline.
- **Results:** Explain the state of the tool, and any measurable outcomes that it has had during its deployment. How has the tool performed during deployment, versus during development? How many users or patients does the tool impact, and how widely used is it?
- **Discussion:** What were some challenges of developing, deploying, or operating the tool? What were some lessons learned? How could the tool and its deployment have been improved in hindsight, and how do you plan on improving it in future?

As reviewing is single blind, the spec sheet should not be anonymized. The spec sheet will only be viewed by the ML4H Demo Review Committee and will not be made public.

### Demo Video

A link to a video (at most 2 minutes long) demonstrating the tool in use with a voice-over description. You may assume that the viewer has read the spec sheet prior to watching the video. The video will only be viewed by the ML4H Demo Review Committee and will not be made public. Any PHI or confidential information should be blurred or omitted.

As OpenReview is unable to host large video files, you should first upload the video to a platform such as Dropbox, Google Drive, OneDrive, Vimeo, or YouTube (unlisted is okay), and provide a link to the video in the submission form. Any common video format is acceptable (e.g. MP4, MOV, WMV, AVI). Any submission which does not have a working link to a demo video will be desk-rejected. The demo video will only be used to assess the tool itself. Any fancy editing and VFX (or lack thereof) will not impact the assessment.

Please let us know, however, if there are any extenuating circumstances which prevent you from making and submitting a video.

## Selection Criteria

All submitted demos will be evaluated based on the following selection criteria:

- **Relevance and Importance.** Is the problem clearly related to health, medicine, biomedical research, public health, or healthcare delivery? Is the intended user, population, setting, and task clearly defined? Is the problem important enough to justify the proposed tool?
- **Functionality and Maturity.** Does the submission demonstrate a functional end-to-end system? Has the system been tested at a level appropriate to its claimed maturity? Is the system sufficiently reliable and complete to support an effective in-person demonstration? Maturity will be evaluated relative to the claims made by the authors. Regulatory status, commercial availability, or deployment scale is neither required nor sufficient for acceptance.
- **Technical Credibility.** Is the ML component described clearly enough to understand its role? Are the development data, evaluation data, system architecture, and deployment pipeline described appropriately? Does the evidence support the stated technical claims?
- **Evidence of Utility and Potential Impact.** Is there credible evidence that the system could improve a clinical, research, public-health, patient, or operational task? Are reported results appropriately quantified and contextualized? Does the submission distinguish demonstrated impact from anticipated impact? Is the potential scale or significance of the tool clearly explained?
- **Quality and Clarity of the Submission.** Does the video clearly show the submitted tool in use? Is the relationship between the user's task, the ML functionality, and the resulting output understandable? Is the proposed in-person demonstration feasible and engaging?

All submissions will undergo a review process by the ML4H Demo Review Committee to uphold the selection criteria and assess the maturity and fit of the submitted demos.

## Registration Information

To promote community interaction, at least one presenting author of each accepted demonstration must register for and attend the in-person event. Registration details will be announced separately.

## Contact Us

Please direct questions to: [ml4h@ahli.cc](mailto:ml4h@ahli.cc) and follow us on Twitter at [@symposiumml4h](https://twitter.com/symposiumml4h).


